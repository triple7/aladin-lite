// Copyright 2013 - UDS/CNRS
// The Aladin Lite program is distributed under the terms
// of the GNU General Public License version 3.
//
// This file is part of Aladin Lite.
//
//    Aladin Lite is free software: you can redistribute it and/or modify
////    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, version 3 of the License.
//
//    Aladin Lite is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    The GNU General Public License is available in COPYING file
//    along with Aladin Lite.
//


/******************************************************************************
 * Aladin Lite project
 * 
 * File Aladin.js (main class)
 * Facade to expose Aladin Lite methods
 * 
 * Author: Thomas Boch[CDS]
 * 
 *****************************************************************************/

 Aladin = (function() {
    
    // Constructor
    var Aladin = function(aladinDiv, requestedOptions) {
        // check that aladinDiv exists, stop immediately otherwise
        if ($(aladinDiv).length==0) {
            console.log('Could not find div ' + aladinDiv + '. Aborting creation of Aladin Lite instance');
            return;
        }

    var self = this;
    
    // if not options was set, try to retrieve them from the query string
    if (requestedOptions===undefined) {
        requestedOptions = this.getOptionsFromQueryString();
    }
    requestedOptions = requestedOptions || {};
    
    
    // 'fov' option was previsouly called 'zoom'
    if ('zoom' in requestedOptions) {
        var fovValue = requestedOptions.zoom;
        delete requestedOptions.zoom;
        requestedOptions.fov = fovValue;
    }
    // merge with default options
    var options = {};
    for (var key in Aladin.DEFAULT_OPTIONS) {
        if (requestedOptions[key] !== undefined) {
            options[key] = requestedOptions[key];
        }
        else {
            options[key] = Aladin.DEFAULT_OPTIONS[key];
        }
    }
    for (var key in requestedOptions) {
        if (Aladin.DEFAULT_OPTIONS[key]===undefined) {
            options[key] = requestedOptions[key];
        }
    }
    
        this.options = options;

        $("<style type='text/css'> .aladin-reticleColor { color: " + this.options.reticleColor + "; font-weight:bold;} </style>").appendTo(aladinDiv);

    

this.aladinDiv = aladinDiv;

        this.reduceDeformations = true;

// parent div
$(aladinDiv).addClass("aladin-container");

      
var cooFrame = CooFrameEnum.fromString(options.cooFrame, CooFrameEnum.J2000);
// locationDiv is the div where we write the position
var locationDiv = $('<div class="aladin-location">'
                    + (options.showFrame ? '<select class="aladin-frameChoice"><option value="' + CooFrameEnum.J2000.label + '" '
                    + (cooFrame==CooFrameEnum.J2000 ? 'selected="selected"' : '') + '>J2000</option><option value="' + CooFrameEnum.J2000d.label + '" '
                    + (cooFrame==CooFrameEnum.J2000d ? 'selected="selected"' : '') + '>J2000d</option><option value="' + CooFrameEnum.GAL.label + '" '
                    + (cooFrame==CooFrameEnum.GAL ? 'selected="selected"' : '') + '>GAL</option></select>' : '')
                    + '<span class="aladin-location-text"></span></div>')
                    .appendTo(aladinDiv);
// div where FoV value is written
var fovDiv = $('<div class="aladin-fov"></div>').appendTo(aladinDiv);


// zoom control
        if (options.showZoomControl) {
          $('<div class="aladin-zoomControl"><a href="#" class="zoomPlus" title="Zoom in">+</a><a href="#" class="zoomMinus" title="Zoom out">&ndash;</a></div>').appendTo(aladinDiv);
    }
        
        // maximize control
        if (options.showFullscreenControl) {
            $('<div class="aladin-fullscreenControl aladin-maximize" title="Full screen"></div>')
                .appendTo(aladinDiv);
        }
        this.fullScreenBtn = $(aladinDiv).find('.aladin-fullscreenControl');
        this.fullScreenBtn.click(function() {
            self.toggleFullscreen(self.options.realFullscreen);
        });
        // react to fullscreenchange event to restore initial width/height (if user pressed ESC to go back from full screen)
        $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function(e) {
            var fullscreenElt = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (fullscreenElt===null || fullscreenElt===undefined) {
                self.fullScreenBtn.removeClass('aladin-restore');
                self.fullScreenBtn.addClass('aladin-maximize');
                self.fullScreenBtn.attr('title', 'Full screen');
                $(self.aladinDiv).removeClass('aladin-fullscreen');
        
                var fullScreenToggledFn = self.callbacksByEventName['fullScreenToggled'];
                var isInFullscreen = self.fullScreenBtn.hasClass('aladin-restore');
                (typeof fullScreenToggledFn === 'function') && fullScreenToggledFn(isInFullscreen);
            }
        });

// Aladin logo
        // $("<div class='aladin-logo-container'><a href='http://aladin.unistra.fr/' title='Powered by Aladin Lite' target='_blank'><div class='aladin-logo'></div></a></div>").appendTo(aladinDiv);

// we store the boxes
this.boxes = [];

        // measurement table
        this.measurementTable = new MeasurementTable(aladinDiv);



var location = new Location(locationDiv.find('.aladin-location-text'));
        
// set different options
this.view = new View(this, location, fovDiv, cooFrame, options.fov);
this.view.setShowGrid(options.showCooGrid);

// Create a state for the download progress
this.states = { refreshed: 0};
const stateHandler = {
    set(target, property, value) {
        if (value == this.view.imageSurveys.length) {
            console.log('all tiles refreshed');
        }
    }
};
this.stateMachine = new Proxy(this.states, stateHandler);

    // retrieve available surveys
        // TODO: replace call with MocServer
    $.ajax({
        url: "//aladin.unistra.fr/java/nph-aladin.pl",
        data: {"frame": "aladinLiteDic"},
        method: 'GET',
        dataType: 'jsonp', // could this be repaced by json ??
        success: function(data) {
                var map = {};
                for (var k=0; k<data.length; k++) {
                    map[data[k].id] = true;
                }
                // retrieve existing surveys
                for (var k=0; k<HpxImageSurvey.SURVEYS.length; k++) {
                    if (! map[HpxImageSurvey.SURVEYS[k].id]) {
                        data.push(HpxImageSurvey.SURVEYS[k]);
                    }
                }
            HpxImageSurvey.SURVEYS = data;
                self.view.setUnknownSurveyIfNeeded();
        },
        error: function() {
        }
    });

      // layers control panel
        // TODO : valeur des checkbox en fonction des options
// TODO : classe LayerBox
        if (options.showLayersControl) {
            var d = $('<div class="aladin-layersControl-container" title="Manage layers"><div class="aladin-layersControl"></div></div>');
            d.appendTo(aladinDiv);
            
            var layerBox = $('<div class="aladin-box aladin-layerBox aladin-cb-list"></div>');
            layerBox.appendTo(aladinDiv);
            
            this.boxes.push(layerBox);
            
            // we return false so that the default event is not submitted, and to prevent event bubbling
            d.click(function() {self.hideBoxes();self.showLayerBox();return false;});

        }

        
        // goto control panel
        if (options.showGotoControl) {
            var d = $('<div class="aladin-gotoControl-container" title="Go to position"><div class="aladin-gotoControl"></div></div>');
            d.appendTo(aladinDiv);
            
            var gotoBox = 
                $('<div class="aladin-box aladin-gotoBox">' +
                  '<a class="aladin-closeBtn">&times;</a>' +
                  '<div style="clear: both;"></div>' +
                  '<form class="aladin-target-form">Go to: <input type="text" placeholder="Object name/position" /></form></div>');
            gotoBox.appendTo(aladinDiv);
            this.boxes.push(gotoBox);
            
            var input = gotoBox.find('.aladin-target-form input');
            input.on("paste keydown", function() {
                $(this).removeClass('aladin-unknownObject'); // remove red border
            });
            
            // TODO : classe GotoBox
            d.click(function() {
                self.hideBoxes();
                input.val('');
                input.removeClass('aladin-unknownObject');
                gotoBox.show();
                input.focus();
                
                
                return false;
            });
            gotoBox.find('.aladin-closeBtn').click(function() {self.hideBoxes();return false;});
        }
        
        // simbad pointer tool
        if (options.showSimbadPointerControl) {
            var d = $('<div class="aladin-simbadPointerControl-container" title="SIMBAD pointer"><div class="aladin-simbadPointerControl"></div></div>');
            d.appendTo(aladinDiv);

            d.click(function() {
                self.view.setMode(View.TOOL_SIMBAD_POINTER);
            });
        }

        // share control panel
        if (options.showShareControl) {
            var d = $('<div class="aladin-shareControl-container" title="Get link for current view"><div class="aladin-shareControl"></div></div>');
            d.appendTo(aladinDiv);
            
            var shareBox = 
                $('<div class="aladin-box aladin-shareBox">' +
                  '<a class="aladin-closeBtn">&times;</a>' +
                  '<div style="clear: both;"></div>' +
                  'Link to previewer: <span class="info"></span>' +
                  '<input type="text" class="aladin-shareInput" />' +
                  '</div>');
            shareBox.appendTo(aladinDiv);
            this.boxes.push(shareBox);
            
            
            // TODO : classe GotoBox, GenericBox
            d.click(function() {
                self.hideBoxes();
                shareBox.show();
                var url = self.getShareURL();
                shareBox.find('.aladin-shareInput').val(url).select();
                document.execCommand('copy');
                
                return false;
            });
            shareBox.find('.aladin-closeBtn').click(function() {self.hideBoxes();return false;});
        }


        this.gotoObject(options.target);

        if (options.log) {
            var params = requestedOptions;
            params['version'] = Aladin.VERSION;
            Logger.log("startup", params);
        }
        
this.showReticle(options.showReticle);

if (options.catalogUrls) {
    for (var k=0, len=options.catalogUrls.length; k<len; k++) {
        this.createCatalogFromVOTable(options.catalogUrls[k]);
    }
}

this.setImageSurvey(options.survey, 0, BlendingModeEnum.sourceover, "#000", 1.0);

this.view.showCatalog(options.showCatalog);

    
    var aladin = this;
    $(aladinDiv).find('.aladin-frameChoice').change(function() {
    aladin.setFrame($(this).val());
    });
    $('#projectionChoice').change(function() {
    aladin.setProjection($(this).val());
    });
        

        $(aladinDiv).find('.aladin-target-form').submit(function() {
            aladin.gotoObject($(this).find('input').val(), function() {
                $(aladinDiv).find('.aladin-target-form input').addClass('aladin-unknownObject');
            });
            return false;
        });
        
        var zoomPlus = $(aladinDiv).find('.zoomPlus');
        zoomPlus.click(function() {
        aladin.increaseZoom();
        return false;
        });
        zoomPlus.bind('mousedown', function(e) {
            e.preventDefault(); // to prevent text selection
        });
        
        var zoomMinus = $(aladinDiv).find('.zoomMinus');
        zoomMinus.click(function() {
            aladin.decreaseZoom();
            return false;
        });
        zoomMinus.bind('mousedown', function(e) {
            e.preventDefault(); // to prevent text selection
        });
        
        // go to full screen ?
        if (options.fullScreen) {
            window.setTimeout(function() {self.toggleFullscreen(self.options.realFullscreen);}, 1000);
        }


        this.callbacksByEventName = {}; // we store the callback functions (on 'zoomChanged', 'positionChanged', ...) here
};

    /**** CONSTANTS ****/
    Aladin.VERSION = "2022-01-03-10:47:21"; // will be filled by the build.sh script
    
    Aladin.JSONP_PROXY = "https://alasky.unistra.fr/cgi/JSONProxy";
    //Aladin.JSONP_PROXY = "https://alaskybis.unistra.fr/cgi/JSONProxy";


    
    Aladin.DEFAULT_OPTIONS = {
        target:                   "0 +0",
        cooFrame:                 "J2000",
        survey:                   "P/DSS2/color",
        fov:                      60,
        showReticle:              true,
        showZoomControl:          true,
        showFullscreenControl:    true,
        showLayersControl:        true,
        showGotoControl:          true,
        showSimbadPointerControl: false,
        showShareControl:         false,
        showCatalog:              true, // TODO: still used ??
        showFrame:                true,
        showCooGrid:              false,
        fullScreen:               false,
        reticleColor:             "rgb(178, 50, 178)",
        reticleSize:              22,
        log:                      true,
        allowFullZoomout:         false,
        realFullscreen:           false,
        showAllskyRing:           false,
        allskyRingColor:          '#c8c8ff',
        allskyRingWidth:          8,
        pixelateCanvas:           true
    };

   
    // realFullscreen: AL div expands not only to the size of its parent, but takes the whole available screen estate 
    Aladin.prototype.toggleFullscreen = function(realFullscreen) {
        realFullscreen = Boolean(realFullscreen);

        this.fullScreenBtn.toggleClass('aladin-maximize aladin-restore');
        var isInFullscreen = this.fullScreenBtn.hasClass('aladin-restore');
        this.fullScreenBtn.attr('title', isInFullscreen ? 'Restore original size' : 'Full screen');
        $(this.aladinDiv).toggleClass('aladin-fullscreen');

        if (realFullscreen) {
            // go to "real" full screen mode
            if (isInFullscreen) {
                var d = this.aladinDiv;

                if (d.requestFullscreen) {
                    d.requestFullscreen();
                }
                else if (d.webkitRequestFullscreen) {
                    d.webkitRequestFullscreen();
                }
                else if (d.mozRequestFullScreen) { // notice the difference in capitalization for Mozilla functions ...
                    d.mozRequestFullScreen();
                }
                else if (d.msRequestFullscreen) {
                    d.msRequestFullscreen();
                }
            }
            // exit from "real" full screen mode
            else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
        
        this.view.fixLayoutDimensions();

        // force call to zoomChanged callback
        var fovChangedFn = this.callbacksByEventName['zoomChanged'];
        (typeof fovChangedFn === 'function') && fovChangedFn(this.view.fov);

        var fullScreenToggledFn = this.callbacksByEventName['fullScreenToggled'];
        (typeof fullScreenToggledFn === 'function') && fullScreenToggledFn(isInFullscreen);
    };
    
    Aladin.prototype.updateSurveysDropdownList = function(surveys) {
        surveys = surveys.sort(function(a, b) {
            if (! a.order) {
                return a.id > b.id;
            }
            return a.order && a.order > b.order ? 1 : -1;
        });
        
        var select = $(this.aladinDiv).find('.aladin-surveySelection');
        select.empty();
        if (this.view.imageSurveys.length > 0) {
        for (var i=0; i<surveys.length; i++) {
            var isCurSurvey = this.view.imageSurveys[this.view.imageSurveys.length - 1].id==surveys[i].id;
            select.append($("<option />").attr("selected", isCurSurvey).val(surveys[i].id).text(surveys[i].name));
        }
    }
    };
    
    Aladin.prototype.getOptionsFromQueryString = function() {
        var options = {};
        var requestedTarget = $.urlParam('target');
        if (requestedTarget) {
            options.target = requestedTarget;
        }
        var requestedFrame = $.urlParam('frame');
        if (requestedFrame && CooFrameEnum[requestedFrame] ) {
            options.frame = requestedFrame;
        }
        var requestedSurveyId = $.urlParam('survey');
        if (requestedSurveyId && HpxImageSurvey.getSurveyInfoFromId(requestedSurveyId)) {
            options.survey = requestedSurveyId;
        }
        var requestedZoom = $.urlParam('zoom');
        if (requestedZoom && requestedZoom>0 && requestedZoom<180) {
            options.zoom = requestedZoom;
        }
        
        var requestedShowreticle = $.urlParam('showReticle');
        if (requestedShowreticle) {
            options.showReticle = requestedShowreticle.toLowerCase()=='true';
        }
        
        var requestedCooFrame =  $.urlParam('cooFrame');
        if (requestedCooFrame) {
            options.cooFrame = requestedCooFrame;
        }
        
        var requestedFullscreen =  $.urlParam('fullScreen');
        if (requestedFullscreen !== undefined) {
            options.fullScreen = requestedFullscreen;
        }
        
        return options;
    };

    // TODO: rename to setFoV
    //@oldAPI
Aladin.prototype.setZoom = function(fovDegrees) {
this.view.setZoom(fovDegrees);
};

// @API
Aladin.prototype.setFoV = Aladin.prototype.setFov = function(fovDegrees) {
this.view.setZoom(fovDegrees);
};

    // @API
    // (experimental) try to adjust the FoV to the given object name. Does nothing if object is not known from Simbad
Aladin.prototype.adjustFovForObject = function(objectName) {
        var self = this;
this.getFovForObject(objectName, function(fovDegrees) {
            self.setFoV(fovDegrees);
        });
};

    
Aladin.prototype.getFovForObject = function(objectName, callback) {
        var query = "SELECT galdim_majaxis, V FROM basic JOIN ident ON oid=ident.oidref JOIN allfluxes ON oid=allfluxes.oidref WHERE id='" + objectName + "'";
        var url = '//simbad.u-strasbg.fr/simbad/sim-tap/sync?query=' + encodeURIComponent(query) + '&request=doQuery&lang=adql&format=json&phase=run';

        var ajax = Utils.getAjaxObject(url, 'GET', 'json', false);
        ajax.done(function(result) {
            var defaultFov = 4 / 60; // 4 arcmin
            var fov = defaultFov;

            if ( 'data' in result && result.data.length>0) {
                var galdimMajAxis = Utils.isNumber(result.data[0][0]) ? result.data[0][0] / 60.0 : null; // result gives galdim in arcmin
                var magV = Utils.isNumber(result.data[0][1]) ? result.data[0][1] : null;

                if (galdimMajAxis !== null) {
                    fov = 2 * galdimMajAxis;
                }
                else if (magV !== null) {
                    if (magV<10) {
                        fov = 2 * Math.pow(2.0, (6-magV/2.0)) / 60;
                    }
                }
            }

            (typeof callback === 'function') && callback(fov);
        });
    };

    Aladin.prototype.setFrame = function(frameName) {
        if (! frameName) {
            return;
        }
        var newFrame = CooFrameEnum.fromString(frameName, CooFrameEnum.J2000);
        if (newFrame==this.view.cooFrame)  {
            return;
        }

        this.view.changeFrame(newFrame);
        // màj select box
        $(this.aladinDiv).find('.aladin-frameChoice').val(newFrame.label);
    };

Aladin.prototype.setProjection = function(projectionName) {
if (! projectionName) {
return;
}
projectionName = projectionName.toLowerCase();
switch(projectionName) {
case "aitoff":
this.view.changeProjection(ProjectionEnum.AITOFF);
break;
case "sinus":
default:
this.view.changeProjection(ProjectionEnum.SIN);
}
};
    
    /** point view to a given object (resolved by Sesame) or position
     * @api
     *
     * @param: target; object name or position
     * @callbackOptions: (optional) the object with key 'success' and/or 'error' containing the success and error callback functions.
     *
     */
    Aladin.prototype.gotoObject = function(targetName, callbackOptions) {
        var successCallback = errorCallback = undefined;
        if (typeof callbackOptions === 'object') {
            if (callbackOptions.hasOwnProperty('success')) {
                successCallback = callbackOptions.success;
            }
            if (callbackOptions.hasOwnProperty('error')) {
                errorCallback = callbackOptions.error;
            }
        }
        // this is for compatibility reason with the previous method signature which was function(targetName, errorCallback)
        else if (typeof callbackOptions === 'function') {
            errorCallback = callbackOptions;
        }


    var isObjectName = /[a-zA-Z]/.test(targetName);
    
    // try to parse as a position
    if ( ! isObjectName) {
    var coo = new Coo();

coo.parse(targetName);
var lonlat = [coo.lon, coo.lat];
if (this.view.cooFrame == CooFrameEnum.GAL) {
lonlat = CooConversion.GalacticToJ2000(lonlat);
}
    this.view.pointTo(lonlat[0], lonlat[1]);
            
            (typeof successCallback === 'function') && successCallback(this.getRaDec());
    }
    // ask resolution by Sesame
    else {
        var self = this;
        Sesame.resolve(targetName,
                       function(data) { // success callback
           var ra = data.Target.Resolver.jradeg;
           var dec = data.Target.Resolver.jdedeg;
           self.view.pointTo(ra, dec);

                                   (typeof successCallback === 'function') && successCallback(self.getRaDec());
                       },
                       function(data) { // errror callback
                            if (console) {
                                console.log("Could not resolve object name " + targetName);
                                console.log(data);
                            }
                                (typeof errorCallback === 'function') && errorCallback();
                       });
    }
    };
    
    
    
    /**
     * go to a given position, expressed in the current coordinate frame
     * 
     * @API
     */
    Aladin.prototype.gotoPosition = function(lon, lat) {
        var radec;
        // first, convert to J2000 if needed
        if (this.view.cooFrame==CooFrameEnum.GAL) {
            radec = CooConversion.GalacticToJ2000([lon, lat]);
        }
        else {
            radec = [lon, lat];
        }
    this.view.pointTo(radec[0], radec[1]);
    };
    
    
    var doAnimation = function(aladin) {
        var params = aladin.animationParams;
        if (params==null || ! params['running']) {
            return;
        }
        var now = new Date().getTime();
        // this is the animation end: set the view to the end position, and call complete callback 
        if (now>params['end']) {
            aladin.gotoRaDec(params['raEnd'], params['decEnd']);
            
            if (params['complete']) {
                params['complete']();
            }
            
            return;
        }
        
        // compute current position
        var fraction =  (now-params['start']) / (params['end'] - params['start']);
        var curPos = intermediatePoint(params['raStart'], params['decStart'], params['raEnd'], params['decEnd'], fraction);
        curRa =  curPos[0];
        curDec = curPos[1];
        //var curRa =  params['raStart'] + (params['raEnd'] - params['raStart']) * (now-params['start']) / (params['end'] - params['start']);
        //var curDec = params['decStart'] + (params['decEnd'] - params['decStart']) * (now-params['start']) / (params['end'] - params['start']);
        
        aladin.gotoRaDec(curRa, curDec);
        
        setTimeout(function() {doAnimation(aladin);}, 50);
        
    };

    /*
     * Stop all animations that have been initiated  by animateToRaDec or by zoomToFoV
     * @API
     *
     */
    Aladin.prototype.stopAnimation =  function() {
        if (this.zoomAnimationParams) {
            this.zoomAnimationParams['running'] = false;
        }
        if (this.animationParams) {
            this.animationParams['running']     = false;
        }
    };

    /*
     * animate smoothly from the current position to the given ra, dec
     * 
     * the total duration (in seconds) of the animation can be given (otherwise set to 5 seconds by default)
     * 
     * complete: a function to call once the animation has completed
     * 
     * @API
     * 
     */
    Aladin.prototype.animateToRaDec = function(ra, dec, duration, complete) {
        duration = duration || 5;
        
        this.animationParams = null;
        
        var animationParams = {};
        animationParams['start'] = new Date().getTime();
        animationParams['end'] = new Date().getTime() + 1000*duration;
        var raDec = this.getRaDec();
        animationParams['raStart'] = raDec[0];
        animationParams['decStart'] = raDec[1];
        animationParams['raEnd'] = ra;
        animationParams['decEnd'] = dec;
        animationParams['complete'] = complete;
        animationParams['running'] = true;
        
        this.animationParams = animationParams;
        
        doAnimation(this);
    };
    
    var doZoomAnimation = function(aladin) {
        var params = aladin.zoomAnimationParams;
        if (params==null || ! params['running']) {
            return;
        }
        var now = new Date().getTime();
        // this is the zoom animation end: set the view to the end fov, and call complete callback 
        if (now>params['end']) {
            aladin.setFoV(params['fovEnd']);
            
            if (params['complete']) {
                params['complete']();
            }
            
            return;
        }
        
        // compute current position
        var fraction = (now-params['start']) / (params['end'] - params['start']);
        var curFov =  params['fovStart'] + (params['fovEnd'] - params['fovStart']) * Math.sqrt(fraction);
        
        aladin.setFoV(curFov);
        
        setTimeout(function() {doZoomAnimation(aladin);}, 50);
        
    };
    /*
     * zoom smoothly from the current FoV to the given new fov to the given ra, dec
     * 
     * the total duration (in seconds) of the animation can be given (otherwise set to 5 seconds by default)
     * 
     * complete: a function to call once the animation has completed
     * 
     * @API
     * 
     */
    Aladin.prototype.zoomToFoV = function(fov, duration, complete) {
        duration = duration || 5;
        
        this.zoomAnimationParams = null;
        
        var zoomAnimationParams = {};
        zoomAnimationParams['start'] = new Date().getTime();
        zoomAnimationParams['end'] = new Date().getTime() + 1000*duration;
        var fovArray = this.getFov();
        zoomAnimationParams['fovStart'] = Math.max(fovArray[0], fovArray[1]);
        zoomAnimationParams['fovEnd'] = fov;
        zoomAnimationParams['complete'] = complete;
        zoomAnimationParams['running'] = true;

        this.zoomAnimationParams = zoomAnimationParams;
        doZoomAnimation(this);
    };



    /**
     *  Compute intermediate point between points (lng1, lat1) and (lng2, lat2)
     *  at distance fraction times the total distance (fraction between 0 and 1)
     *
     *  Return intermediate points in degrees
     *
     */
    function intermediatePoint(lng1, lat1, lng2, lat2, fraction) {
        function degToRad(d) {
            return d * Math.PI / 180;
        }
        function radToDeg(r) {
            return r * 180 / Math.PI;
        }
        var lat1=degToRad(lat1);
        var lng1=degToRad(lng1);
        var lat2=degToRad(lat2);
        var lng2=degToRad(lng2);
        var d = 2 * Math.asin(
                    Math.sqrt(Math.pow((Math.sin((lat1 - lat2) / 2)),
                    2) +
                    Math.cos(lat1) * Math.cos(lat2) *
                    Math.pow(Math.sin((lng1-lng2) / 2), 2)));
        var A = Math.sin((1 - fraction) * d) / Math.sin(d);
        var B = Math.sin(fraction * d) / Math.sin(d);
        var x = A * Math.cos(lat1) * Math.cos(lng1) + B *
            Math.cos(lat2) * Math.cos(lng2);
        var y = A * Math.cos(lat1) * Math.sin(lng1) + B *
            Math.cos(lat2) * Math.sin(lng2);
        var z = A * Math.sin(lat1) + B * Math.sin(lat2);
        var lon = Math.atan2(y, x);
        var lat = Math.atan2(z, Math.sqrt(Math.pow(x, 2) +
             Math.pow(y, 2)));

        return [radToDeg(lon), radToDeg(lat)];
    };

    /**
     * get current [ra, dec] position of the center of the view
     * 
     * @API
     */
    Aladin.prototype.getRaDec = function() {
        if (this.view.cooFrame.system==CooFrameEnum.SYSTEMS.J2000) {
            return [this.view.viewCenter.lon, this.view.viewCenter.lat];
        }
        else {
            var radec = CooConversion.GalacticToJ2000([this.view.viewCenter.lon, this.view.viewCenter.lat]);
            return radec;
            
        }
    };
    
    
    /**
     * point to a given position, expressed as a ra,dec coordinate
     * 
     * @API
     */
    Aladin.prototype.gotoRaDec = function(ra, dec) {
        this.view.pointTo(ra, dec);
    };

    Aladin.prototype.showHealpixGrid = function(show) {
        this.view.showHealpixGrid(show);
    };
    
    Aladin.prototype.showSurvey = function(show, index) {
        const idx = (index) ? index : 0;
        this.view.showSurveyAtIndex(show, index);
    };
    
    Aladin.prototype.toggleShowSurveyAtIndex = function(index) {
        this.view.toggleShowSurveyAtIndex(index);
    };
    
    Aladin.prototype.showCatalog = function(show) {
        this.view.showCatalog(show);
    };
    
    Aladin.prototype.showReticle = function(show) {
        this.view.showReticle(show);
        $('#displayReticle').attr('checked', show);
    };
    
    Aladin.prototype.removeLayers = function() {
        this.view.removeLayers();
    };

    Aladin.prototype.removeImageSurveyAtIndex = function(index) {
        this.view.removeImageSurveyAtIndex(index);
    };
    
    /* @API
    @param index: layer to modify the blend mode
    @param blendMode: the blending mode
    @param alpha: the opacity of the layer
    */
    Aladin.prototype.setSurveyParametersAtIndex = function(index, blendMode, hue, alpha) {
        this.view.setSurveyParametersAtIndex(index, blendMode, hue, alpha);
    };
    
    // these 3 methods should be merged into a unique "add" method
    Aladin.prototype.addCatalog = function(catalog) {
        this.view.addCatalog(catalog);
    };
    Aladin.prototype.addOverlay = function(overlay) {
        this.view.addOverlay(overlay);
    };
    Aladin.prototype.addMOC = function(moc) {
        this.view.addMOC(moc);
    };
    

    // @oldAPI
    Aladin.prototype.createImageSurvey = function(id, name, rootUrl, cooFrame, maxOrder, options) {
        return new HpxImageSurvey(id, name, rootUrl, cooFrame, maxOrder, options);        
    };

    // @api
    Aladin.prototype.getBaseImageLayer = function() {
        return this.view.imageSurveys[0];
    };
    
    // @api
    Aladin.prototype.getImageLayerAtIndex = function(index) {
        if (index <= this.view.imageSurveys.length - 1) {
        return this.view.imageSurveys[index];
    }
    };
    
    // @param imageSurvey : HpxImageSurvey object or image survey identifier
    // @param index: index of survey in the stack
    //@param: blendingMode: blending mode for this layer
    // @api
    // @old
    Aladin.prototype.setImageSurvey = function(imageSurvey, index, blendingMode, hue, alpha, callback) {
        
        console.log('setting survey at '+index+' blend mode '+blendingMode+' hue '+hue+' alpha '+alpha);
        this.view.setImageSurveyAtIndex(imageSurvey, index, blendingMode, hue, alpha, callback);
        this.updateSurveysDropdownList(HpxImageSurvey.getAvailableSurveys());
        if (this.options.log) {
            var id = imageSurvey;
            if (typeof imageSurvey !== "string") {
                id = imageSurvey.rootUrl;
            }

            Logger.log("changeImageSurvey", id);
        }
    };
    
    // @api
    Aladin.prototype.setBaseImageLayer = Aladin.prototype.setImageSurvey;
    
    // @api
    Aladin.prototype.addImageLayer = Aladin.prototype.setImageSurvey;
    
    // @api
    Aladin.prototype.getOverlayImageLayer = function() {
        return this.view.overlayImageSurvey;
    };
    // @api
    Aladin.prototype.setOverlayImageLayer = function(imageSurvey, callback) {
        this.view.setOverlayImageSurvey(imageSurvey, callback);
    };
    

    Aladin.prototype.increaseZoom = function(step) {
        if (!step) {
            step = 5;
        }
    this.view.setZoomLevel(this.view.zoomLevel+step);
    };
    
    Aladin.prototype.decreaseZoom = function(step) {
        if (!step) {
            step = 5;
        }
    this.view.setZoomLevel(this.view.zoomLevel-step);
    };
    
    // @oldAPI
    Aladin.prototype.createCatalog = function(options) {
        return A.catalog(options);
    };


    Aladin.prototype.createProgressiveCatalog = function(url, frame, maxOrder, options) {
        return new ProgressiveCat(url, frame, maxOrder, options);
    };
    
    // @oldAPI
    Aladin.prototype.createSource = function(ra, dec, data) {
        return new cds.Source(ra, dec, data);
    };
    // @oldAPI
    Aladin.prototype.createMarker = function(ra, dec, options, data) {
        options = options || {};
        options['marker'] = true;
        return new cds.Source(ra, dec, data, options);
    };

    Aladin.prototype.createOverlay = function(options) {
        return new Overlay(options);
    };

    // @oldAPI
    Aladin.prototype.createFootprintsFromSTCS = function(stcs) {
        return A.footprintsFromSTCS(stcs);
    };

    // API
    A.footprintsFromSTCS = function(stcs) {
        var footprints = Overlay.parseSTCS(stcs);

        return footprints;
    }

    // API
    A.MOCFromURL = function(url, options, successCallback) {
        var moc = new MOC(options);
        moc.dataFromFITSURL(url, successCallback);

        return moc;
    };

    // API
    A.MOCFromJSON = function(jsonMOC, options) {
        var moc = new MOC(options);
        moc.dataFromJSON(jsonMOC);

        return moc;
    };

    
    // @oldAPI
    Aladin.prototype.createCatalogFromVOTable = function(url, options) {
        return A.catalogFromURL(url, options);
    };

    // TODO: try first without proxy, and then with, if param useProxy not set
    // API
    A.catalogFromURL = function(url, options, successCallback, useProxy) {
        var catalog = A.catalog(options);
        // TODO: should be self-contained in Catalog class
        cds.Catalog.parseVOTable(url, function(sources) {
                catalog.addSources(sources);
                if (successCallback) {
                    successCallback(sources);
                }
            },
            catalog.maxNbSources, useProxy,
            catalog.raField, catalog.decField
        );

        return catalog;
    };

    // API
    // @param target: can be either a string representing a position or an object name, or can be an object with keys 'ra' and 'dec' (values being in decimal degrees)
    A.catalogFromSimbad = function(target, radius, options, successCallback) {
        options = options || {};
        if (! ('name' in options)) {
            options['name'] = 'Simbad';
        }
        var url = URLBuilder.buildSimbadCSURL(target, radius);
        return A.catalogFromURL(url, options, successCallback, false);
    };
     
    // API
    A.catalogFromNED = function(target, radius, options, successCallback) {
        options = options || {};
        if (! ('name' in options)) {
            options['name'] = 'NED';
        }
        var url;
        if (target && (typeof target  === "object")) {
            if ('ra' in target && 'dec' in target) {
                url = URLBuilder.buildNEDPositionCSURL(target.ra, target.dec, radius);
            }
        }
        else {
        var isObjectName = /[a-zA-Z]/.test(target);
            if (isObjectName)  {
                url = URLBuilder.buildNEDObjectCSURL(target, radius);
            }
            else {
                var coo = new Coo();
                coo.parse(target);
                url = URLBuilder.buildNEDPositionCSURL(coo.lon, coo.lat, radius);
            }
        }

        return A.catalogFromURL(url, options, successCallback);
    };

    // API
    A.catalogFromVizieR = function(vizCatId, target, radius, options, successCallback) {
        options = options || {};
        if (! ('name' in options)) {
            options['name'] = 'VizieR:' + vizCatId;
        }
        var url = URLBuilder.buildVizieRCSURL(vizCatId, target, radius, options);

        return A.catalogFromURL(url, options, successCallback, false);
    };

    // API
    A.catalogFromSkyBot = function(ra, dec, radius, epoch, queryOptions, options, successCallback) {
        queryOptions = queryOptions || {};
        options = options || {};
        if (! ('name' in options)) {
            options['name'] = 'SkyBot';
        }
        var url = URLBuilder.buildSkyBotCSURL(ra, dec, radius, epoch, queryOptions);
        return A.catalogFromURL(url, options, successCallback, false);
    };

     Aladin.AVAILABLE_CALLBACKS = ['select', 'objectClicked', 'objectHovered', 'footprintClicked', 'footprintHovered', 'positionChanged', 'zoomChanged', 'click', 'mouseMove', 'fullScreenToggled']; 
     // API
     //
     // setting callbacks
     Aladin.prototype.on = function(what, myFunction) {
         if (Aladin.AVAILABLE_CALLBACKS.indexOf(what)<0) {
            return; 
         }

         this.callbacksByEventName[what] = myFunction;
     };
     
     Aladin.prototype.select = function() {
         this.fire('selectstart');
     };
     
     Aladin.prototype.fire = function(what, params) {
         if (what==='selectstart') {
             this.view.setMode(View.SELECT);
         }
         else if (what==='selectend') {
             this.view.setMode(View.PAN);
             var callbackFn = this.callbacksByEventName['select'];
             (typeof callbackFn === 'function') && callbackFn(params);
         }
     };
     
     Aladin.prototype.hideBoxes = function() {
         if (this.boxes) {
             for (var k=0; k<this.boxes.length; k++) {
                 this.boxes[k].hide();
             }
         }
     };
     
     // ?
     Aladin.prototype.updateCM = function() {
         
     };
     
     // TODO : LayerBox (or Stack?) must be extracted as a separate object
     Aladin.prototype.showLayerBox = function() {
         var self = this;
         
         // first, update
         var layerBox = $(this.aladinDiv).find('.aladin-layerBox');
         layerBox.empty();
         layerBox.append('<a class="aladin-closeBtn">&times;</a>' +
                 '<div style="clear: both;"></div>' +
                 '<div class="aladin-label">Base image layer</div>' +
                 '<select class="aladin-surveySelection"></select>' +
                 '<div class="aladin-cmap">Color map:' +
                 '<div><select class="aladin-cmSelection"></select><button class="aladin-btn aladin-btn-small aladin-reverseCm" type="button">Reverse</button></div></div>' +
                 '<div class="aladin-box-separator"></div>' +
                 '<div class="aladin-label">Overlay layers</div>');
         
         var cmDiv = layerBox.find('.aladin-cmap');
         
         // fill color maps options
         var cmSelect = layerBox.find('.aladin-cmSelection');
         for (var k=0; k<ColorMap.MAPS_NAMES.length; k++) {
             cmSelect.append($("<option />").text(ColorMap.MAPS_NAMES[k]));
         }
         cmSelect.val(self.getBaseImageLayer().getColorMap().mapName);

         
         // loop over all overlay layers
         var layers = this.view.allOverlayLayers;
         var str = '<ul>';
         for (var k=layers.length-1; k>=0; k--) {
             var layer = layers[k];
             var name = layer.name;
             var checked = '';
             if (layer.isShowing) {
                 checked = 'checked="checked"';
             }

             var tooltipText = '';
             var iconSvg = '';
             if (layer.type=='catalog' || layer.type=='progressivecat') {
                var nbSources = layer.getSources().length;
                tooltipText = nbSources + ' source' + ( nbSources>1 ? 's' : '');

                iconSvg = AladinUtils.SVG_ICONS.CATALOG;
            }
            else if (layer.type=='moc') {
                tooltipText = 'Coverage: ' + (100*layer.skyFraction()).toFixed(3) + ' % of sky';

                iconSvg = AladinUtils.SVG_ICONS.MOC;
            }
            else if (layer.type=='overlay') {
                iconSvg = AladinUtils.SVG_ICONS.OVERLAY;
            }

             var rgbColor = $('<div></div>').css('color', layer.color).css('color'); // trick to retrieve the color as 'rgb(,,)' - does not work for named colors :(
             var labelColor = Color.getLabelColorForBackground(rgbColor);

             // retrieve SVG icon, and apply the layer color
             var svgBase64 = window.btoa(iconSvg.replace(/FILLCOLOR/g, layer.color));
             str += '<li><div class="aladin-stack-icon" style=\'background-image: url("data:image/svg+xml;base64,' + svgBase64 + '");\'></div>';
            str += '<input type="checkbox" ' + checked + ' id="aladin_lite_' + name + '"></input><label for="aladin_lite_' + name + '" class="aladin-layer-label" style="background: ' + layer.color + '; color:' + labelColor + ';" title="' + tooltipText + '">' + name + '</label></li>';
         }
         str += '</ul>';
         layerBox.append(str);
         
         layerBox.append('<div class="aladin-blank-separator"></div>');
         
         // gestion du réticule
         var checked = '';
         if (this.view.displayReticle) {
             checked = 'checked="checked"';
         }
         var reticleCb = $('<input type="checkbox" ' + checked + ' id="displayReticle" />');
         layerBox.append(reticleCb).append('<label for="displayReticle">Reticle</label><br/>');
         reticleCb.change(function() {
             self.showReticle($(this).is(':checked'));
         });
         
         // Gestion grille Healpix
         checked = '';
         if (this.view.displayHpxGrid) {
             checked = 'checked="checked"';
         }
         var hpxGridCb = $('<input type="checkbox" ' + checked + ' id="displayHpxGrid"/>');
         layerBox.append(hpxGridCb).append('<label for="displayHpxGrid">HEALPix grid</label><br/>');
         hpxGridCb.change(function() {
             self.showHealpixGrid($(this).is(':checked'));
         });
         
         
         layerBox.append('<div class="aladin-box-separator"></div>' +
              '<div class="aladin-label">Tools</div>');
         var exportBtn = $('<button class="aladin-btn" type="button">Export view as PNG</button>');
         layerBox.append(exportBtn);
         exportBtn.click(function() {
             self.exportAsPNG();
         });
                 
                 /*
                 '<div class="aladin-box-separator"></div>' +
                 '<div class="aladin-label">Projection</div>' +
                 '<select id="projectionChoice"><option>SINUS</option><option>AITOFF</option></select><br/>'
                 */

         layerBox.find('.aladin-closeBtn').click(function() {self.hideBoxes();return false;});
         
         // update list of surveys
         this.updateSurveysDropdownList(HpxImageSurvey.getAvailableSurveys());
         var surveySelection = $(this.aladinDiv).find('.aladin-surveySelection');
         surveySelection.change(function() {
             var survey = HpxImageSurvey.getAvailableSurveys()[$(this)[0].selectedIndex];
             self.setImageSurvey(survey.id, function() {
                 var baseImgLayer = self.getBaseImageLayer();
                 
                 if (baseImgLayer.useCors) {
                     // update color map list with current value color map
                     cmSelect.val(baseImgLayer.getColorMap().mapName);
                     cmDiv.show();
                     
                     exportBtn.show();
                 }
                 else {
                     cmDiv.hide();
                     
                     exportBtn.hide();
                 }
             });

             
             
         });
         
         //// COLOR MAP management ////////////////////////////////////////////
         // update color map
         cmDiv.find('.aladin-cmSelection').change(function() {
             var cmName = $(this).find(':selected').val();
             self.getBaseImageLayer().getColorMap().update(cmName);
         });
         
         // reverse color map
         cmDiv.find('.aladin-reverseCm').click(function() {
             self.getBaseImageLayer().getColorMap().reverse(); 
         });
         if (this.getBaseImageLayer().useCors) {
             cmDiv.show();
             exportBtn.show();
         }
         else {
             cmDiv.hide();
             exportBtn.hide();
         }
         layerBox.find('.aladin-reverseCm').parent().attr('disabled', true);
         //////////////////////////////////////////////////////////////////////
         
         
         // handler to hide/show overlays
         $(this.aladinDiv).find('.aladin-layerBox ul input').change(function() {
             var layerName = ($(this).attr('id').substr(12));
             var layer = self.layerByName(layerName);
             if ($(this).is(':checked')) {
                 layer.show();
             }
             else {
                 layer.hide();
             }
         });
         
         // finally show
         layerBox.show();
         
     };
     
     Aladin.prototype.layerByName = function(name) {
         var c = this.view.allOverlayLayers;
         for (var k=0; k<c.length; k++) {
             if (name==c[k].name) {
                 return c[k];
             }
         }
         return null;
     };
     
     // TODO : integrate somehow into API ?
     Aladin.prototype.exportAsPNG = function(imgFormat) {
         var w = window.open();
         w.document.write('<img src="' + this.getViewDataURL() + '">');
         w.document.title = 'Aladin Lite snapshot';
     };

    /**
     * Return the current view as a data URL (base64-formatted string)
     * Parameters:
     * - options (optional): object with attributs
     *     * format (optional): 'image/png' or 'image/jpeg'
     *     * width: width in pixels of the image to output
     *     * height: height in pixels of the image to output
     *
     * @API
    */
    Aladin.prototype.getViewDataURL = function(options) {
        var options = options || {};
        // support for old API signature
        if (typeof options !== 'object') {
            var imgFormat = options;
            options = {format: imgFormat};
        }

        return this.view.getCanvasDataURL(options.format, options.width, options.height);
    }

   /**
    * Return the skymap view as a data URL (base64-formatted string)
    * Parameters:
    * - options (optional): object with attributs
    *     * format (optional): 'image/png' or 'image/jpeg'
    *     * width: width in pixels of the image to output
    *     * height: height in pixels of the image to output
    *
    * @API
   */
   Aladin.prototype.getSkymapDataURL = function(options) {
       var options = options || {};
       // support for old API signature
       if (typeof options !== 'object') {
           var imgFormat = options;
           options = {format: imgFormat};
       }

       return this.view.getCanvasSkymapDataURL(options.format, options.width, options.height);
   }
   
    /**
     * Return the current view WCS as a key-value dictionary
     * Can be useful in coordination with getViewDataURL
     *
     * @API
    */
    Aladin.prototype.getViewWCS = function(options) {
        var raDec = this.getRaDec();
        var fov   = this.getFov();
        // TODO: support for other projection methods than SIN
        return {
            NAXIS:     2,
            NAXIS1:    this.view.width,
            NAXIS2:    this.view.height,
            RADECSYS: 'ICRS',
            CRPIX1:    this.view.width  / 2,
            CRPIX2:    this.view.height / 2,
            CRVAL1:    raDec[0],
            CRVAL2:    raDec[1],
            CTYPE1:    'RA---SIN',
            CTYPE2:    'DEC--SIN',
            CD1_1:     fov[0] / this.view.width,
            CD1_2:     0.0,
            CD2_1:     0.0,
            CD2_2:     fov[1] / this.view.height
        }
    }
     
     /** restrict FOV range
      * @API
      * @param minFOV in degrees when zoom in at max
      * @param maxFOV in degreen when zoom out at max
     */
     Aladin.prototype.setFovRange = Aladin.prototype.setFOVRange = function(minFOV, maxFOV) {
         if (minFOV>maxFOV) {
             var tmp = minFOV;
             minFOV = maxFOV;
             maxFOV = tmp;
         }
         
         this.view.minFOV = minFOV;
         this.view.maxFOV = maxFOV;
         
     };
     
     /**
      * Transform pixel coordinates to world coordinates
      * 
      * Origin (0,0) of pixel coordinates is at top left corner of Aladin Lite view
      * 
      * @API
      * 
      * @param x
      * @param y
      * 
      * @return a [ra, dec] array with world coordinates in degrees. Returns undefined is something went wrong
      * 
      */
     Aladin.prototype.pix2world = function(x, y) {
         // this might happen at early stage of initialization
         if (!this.view) {
            return undefined;
         }

         var xy = AladinUtils.viewToXy(x, y, this.view.width, this.view.height, this.view.largestDim, this.view.zoomFactor);
         
         var radec;
         try {
            radec = this.view.projection.unproject(xy.x, xy.y);
         }
         catch(e) {
            return undefined;
         }
         
         var res;
         if (this.view.cooFrame==CooFrameEnum.GAL) {
             res = CooConversion.GalacticToJ2000([radec.ra, radec.dec]);
         }
         else {
             res =  [radec.ra, radec.dec];
         }
             
         return res;
     };
     
     /**
      * Transform world coordinates to pixel coordinates in the view
      * 
      * @API
      * 
      * @param ra  
      * @param dec
      * 
      * @return a [x, y] array with pixel coordinates in the view. Returns null if the projection failed somehow
      *   
      */
     Aladin.prototype.world2pix = function(ra, dec) {
         // this might happen at early stage of initialization
         if (!this.view) {
            return;
         }

         var xy;
         if (this.view.cooFrame==CooFrameEnum.GAL) {
             var lonlat = CooConversion.J2000ToGalactic([ra, dec]);
             xy = this.view.projection.project(lonlat[0], lonlat[1]);
         }
         else {
             xy = this.view.projection.project(ra, dec);
         }
         if (xy) {
             var xyview = AladinUtils.xyToView(xy.X, xy.Y, this.view.width, this.view.height, this.view.largestDim, this.view.zoomFactor);
             return [xyview.vx, xyview.vy];
         }
         else {
             return null;
         }
     };
     
     /**
      * 
      * @API
      * 
      * @param ra  
      * @param nbSteps the number of points to return along each side (the total number of points returned is 4*nbSteps)
      * 
      * @return set of points along the current FoV with the following format: [[ra1, dec1], [ra2, dec2], ..., [ra_n, dec_n]]
      *   
      */
     Aladin.prototype.getFovCorners = function(nbSteps) {
         // default value: 1
         if (!nbSteps || nbSteps<1) {
             nbSteps = 1;
         }
         
         var points = [];
         var x1, y1, x2, y2;
         for (var k=0; k<4; k++) {
             x1 = (k==0 || k==3) ? 0 : this.view.width-1;
             y1 = (k<2) ? 0 : this.view.height-1;
             x2 = (k<2) ? this.view.width-1 : 0;
             y2 = (k==1 || k==2) ? this.view.height-1 :0;
             
             for (var step=0; step<nbSteps; step++) {
                 points.push(this.pix2world(x1 + step/nbSteps * (x2-x1), y1 + step/nbSteps * (y2-y1)));
             }
         }
         
         return points;
         
     };
     
     /**
      * @API
      * 
      * @return the current FoV size in degrees as a 2-elements array
      */
     Aladin.prototype.getFov = function() {
         var fovX = this.view.fov;
         var s = this.getSize();
         var fovY = s[1] / s[0] * fovX;
         // TODO : take into account AITOFF projection where fov can be larger than 180
         fovX = Math.min(fovX, 180);
         fovY = Math.min(fovY, 180);
         
         return [fovX, fovY];
     };
     
     /**
      * @API
      * 
      * @return the size in pixels of the Aladin Lite view
      */
     Aladin.prototype.getSize = function() {
         return [this.view.width, this.view.height];
     };
     
     /**
      * @API
      * 
      * @return the jQuery object representing the DIV element where the Aladin Lite instance lies
      */
     Aladin.prototype.getParentDiv = function() {
         return $(this.aladinDiv);
     };
    
return Aladin;
})();

//// New API ////
// For developers using Aladin lite: all objects should be created through the API, 
// rather than creating directly the corresponding JS objects
// This facade allows for more flexibility as objects can be updated/renamed harmlessly

//@API
A.aladin = function(divSelector, options) {
  return new Aladin($(divSelector)[0], options);
};

//@API
// TODO : lecture de properties
A.imageLayer = function(id, name, rootUrl, options) {
    return new HpxImageSurvey(id, name, rootUrl, null, null, options);
};

// @API
A.source = function(ra, dec, data, options) {
    return new cds.Source(ra, dec, data, options);
};

// @API
A.marker = function(ra, dec, options, data) {
    options = options || {};
    options['marker'] = true;
    return A.source(ra, dec, data, options);
};

// @API
A.polygon = function(raDecArray) {
    var l = raDecArray.length;
    if (l>0) {
        // close the polygon if needed
        if (raDecArray[0][0]!=raDecArray[l-1][0] || raDecArray[0][1]!=raDecArray[l-1][1]) {
            raDecArray.push([raDecArray[0][0], raDecArray[0][1]]);
        }
    }
    return new Footprint(raDecArray);
};

//@API
A.polyline = function(raDecArray, options) {
    return new Polyline(raDecArray, options);
};


// @API
A.circle = function(ra, dec, radiusDeg, options) {
    return new Circle([ra, dec], radiusDeg, options);
};

// @API
A.graphicOverlay = function(options) {
    return new Overlay(options);
};

// @API
A.catalog = function(options) {
    return new cds.Catalog(options);
};

// @API
A.catalogHiPS = function(rootURL, options) {
    return new ProgressiveCat(rootURL, null, null, options);
};

// @API
/*
 * return a Box GUI element to insert content
 */
Aladin.prototype.box = function(options) {
    var box = new Box(options);
    box.$parentDiv.appendTo(this.aladinDiv);

    return box;
};

// @API
/*
 * show popup at ra, dec position with given title and content
 */
Aladin.prototype.showPopup = function(ra, dec, title, content) {
    this.view.catalogForPopup.removeAll();
    var marker = A.marker(ra, dec, {popupTitle: title, popupDesc: content, useMarkerDefaultIcon: false});
    this.view.catalogForPopup.addSources(marker);
    this.view.catalogForPopup.show();

    this.view.popup.setTitle(title);
    this.view.popup.setText(content);
    this.view.popup.setSource(marker);
    this.view.popup.show();
};

// @API
/*
 * hide popup
 */
Aladin.prototype.hidePopup = function() {
    this.view.popup.hide();
};

// @API
/*
 * return a URL allowing to share the current view
 */
Aladin.prototype.getShareURL = function() {
    var radec = this.getRaDec();
    var coo = new Coo();
    coo.prec = 7;
    coo.lon = radec[0];
    coo.lat = radec[1];

    return 'http://aladin.unistra.fr/AladinLite/?target=' + encodeURIComponent(coo.format('s')) +
           '&fov=' + this.getFov()[0].toFixed(2) + '&survey=' + encodeURIComponent(this.getBaseImageLayer().id || this.getBaseImageLayer().rootUrl);
};

// @API
/*
 * return, as a string, the HTML embed code
 */
Aladin.prototype.getEmbedCode = function() {
    var radec = this.getRaDec();
    var coo = new Coo();
    coo.prec = 7;
    coo.lon = radec[0];
    coo.lat = radec[1];

    var survey = this.getBaseImageLayer().id;
    var fov = this.getFov()[0];
    var s = '';
    s += '<link rel="stylesheet" href="http://aladin.unistra.fr/AladinLite/api/v2/latest/aladin.min.css" />\n';
    s += '<script type="text/javascript" src="//code.jquery.com/jquery-1.9.1.min.js" charset="utf-8"></script>\n';
    s += '<div id="aladin-lite-div" style="width:400px;height:400px;"></div>\n';
    s += '<script type="text/javascript" src="http://aladin.unistra.fr/AladinLite/api/v2/latest/aladin.min.js" charset="utf-8"></script>\n';
    s += '<script type="text/javascript">\n';
    s += 'var aladin = A.aladin("#aladin-lite-div", {survey: "' + survey + 'P/DSS2/color", fov: ' + fov.toFixed(2) + ', target: "' + coo.format('s') + '"});\n';
    s += '</script>';
    return s;
};

// @API
/*
 * Creates remotely a HiPS from a FITS image URL and displays it
 */
Aladin.prototype.displayFITS = function(url, options, successCallback, errorCallback) {
    options = options || {};
    var data = {url: url};
    if (options.color) {
        data.color = true;
    }
    if (options.outputFormat) {
        data.format = options.outputFormat;
    }
    if (options.order) {
        data.order = options.order;
    }
    if (options.nocache) {
        data.nocache = options.nocache;
    }
    var self = this;
    $.ajax({
        url: 'https://alasky.unistra.fr/cgi/fits2HiPS',
        data: data,
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status!='success') {
                console.error('An error occured: ' + response.message);
                if (errorCallback) {
                    errorCallback(response.message);
                }
                return;
            }
            var label = options.label || "FITS image"; 
            var meta = response.data.meta;
            self.setOverlayImageLayer(self.createImageSurvey(label, label, response.data.url, "equatorial", meta.max_norder, {imgFormat: 'png'}));
            var transparency = (options && options.transparency) || 1.0;
            self.getOverlayImageLayer().setAlpha(transparency);

            var executeDefaultSuccessAction = true;
            if (successCallback) {
                executeDefaultSuccessAction = successCallback(meta.ra, meta.dec, meta.fov);
            }
            if (executeDefaultSuccessAction===true) {
                self.gotoRaDec(meta.ra, meta.dec);
                self.setFoV(meta.fov);
            }

        }
    });

};

// @API
/*
 * Creates remotely a HiPS from a JPEG or PNG image with astrometry info
 * and display it
 */
Aladin.prototype.displayJPG = Aladin.prototype.displayPNG = function(url, options, successCallback, errorCallback) {
    options = options || {};
    options.color = true;
    options.label = "JPG/PNG image";
    options.outputFormat = 'png';
    this.displayFITS(url, options, successCallback, errorCallback);
};

Aladin.prototype.setReduceDeformations = function(reduce) {
    this.reduceDeformations = reduce;
    this.view.requestRedraw();
}



// conservé pour compatibilité avec existant
// @oldAPI
if ($) {
    $.aladin = A.aladin;
}

Constants={},Constants.PI=Math.PI,Constants.C_PR=Math.PI/180,Constants.VLEV=2,Constants.EPS=1e-7,Constants.c=.105,Constants.LN10=Math.log(10),Constants.PIOVER2=Math.PI/2,Constants.TWOPI=2*Math.PI,Constants.TWOTHIRD=2/3,Constants.ARCSECOND_RADIAN=484813681109536e-20,SpatialVector=function(){function t(t,s,i){"use strict";this.x=t,this.y=s,this.z=i,this.ra_=0,this.dec_=0,this.okRaDec_=!1}return t.prototype.setXYZ=function(t,s,i){this.x=t,this.y=s,this.z=i,this.okRaDec_=!1},t.prototype.length=function(){"use strict";return Math.sqrt(this.lengthSquared())},t.prototype.lengthSquared=function(){"use strict";return this.x*this.x+this.y*this.y+this.z*this.z},t.prototype.normalized=function(){"use strict";var t=this.length();this.x/=t,this.y/=t,this.z/=t},t.prototype.set=function(t,s){"use strict";this.ra_=t,this.dec_=s,this.okRaDec_=!0,this.updateXYZ()},t.prototype.angle=function(t){"use strict";var s=this.y*t.z-this.z*t.y,i=this.z*t.x-this.x*t.z,n=this.x*t.y-this.y*t.x,a=Math.sqrt(s*s+i*i+n*n);return Math.abs(Math.atan2(a,dot(t)))},t.prototype.get=function(){"use strict";return[x,y,z]},t.prototype.toString=function(){"use strict";return"SpatialVector["+this.x+", "+this.y+", "+this.z+"]"},t.prototype.cross=function(s){"use strict";return new t(this.y*s.z-s.y*this.z,this.z*s.x-s.z*this.x,this.x*s.y-s.x()*this.y)},t.prototype.equal=function(t){"use strict";return this.x==t.x&&this.y==t.y&&this.z==t.z()?!0:!1},t.prototype.mult=function(s){"use strict";return new t(s*this.x,s*this.y,s*this.z)},t.prototype.dot=function(t){"use strict";return this.x*t.x+this.y*t.y+this.z*t.z},t.prototype.add=function(s){"use strict";return new t(this.x+s.x,this.y+s.y,this.z+s.z)},t.prototype.sub=function(s){"use strict";return new t(this.x-s.x,this.y-s.y,this.z-s.z)},t.prototype.dec=function(){"use strict";return this.okRaDec_||(this.normalized(),this.updateRaDec()),this.dec_},t.prototype.ra=function(){"use strict";return this.okRaDec_||(this.normalized(),this.updateRaDec()),this.ra_},t.prototype.updateXYZ=function(){"use strict";var t=Math.cos(this.dec_*Constants.C_PR);this.x=Math.cos(this.ra_*Constants.C_PR)*t,this.y=Math.sin(this.ra_*Constants.C_PR)*t,this.z=Math.sin(this.dec_*Constants.C_PR)},t.prototype.updateRaDec=function(){"use strict";this.dec_=Math.asin(this.z)/Constants.C_PR;var t=Math.cos(this.dec_*Constants.C_PR);this.ra_=t>Constants.EPS||-Constants.EPS>t?this.y>Constants.EPS||this.y<-Constants.EPS?0>this.y?360-Math.acos(this.x/t)/Constants.C_PR:Math.acos(this.x/t)/Constants.C_PR:0>this.x?180:0:0,this.okRaDec_=!0},t.prototype.toRaRadians=function(){"use strict";var t=0;return(0!=this.x||0!=this.y)&&(t=Math.atan2(this.y,this.x)),0>t&&(t+=2*Math.PI),t},t.prototype.toDeRadians=function(){var t=z/this.length(),s=Math.acos(t);return Math.PI/2-s},t}(),AngularPosition=function(){return AngularPosition=function(t,s){"use strict";this.theta=t,this.phi=s},AngularPosition.prototype.toString=function(){"use strict";return"theta: "+this.theta+", phi: "+this.phi},AngularPosition}(),LongRangeSetBuilder=function(){function t(){this.items=[]}return t.prototype.appendRange=function(t,s){for(var i=t;s>=i;i++)i in this.items||this.items.push(i)},t}(),HealpixIndex=function(){function t(t){"use strict";this.nside=t}return t.NS_MAX=8192,t.ORDER_MAX=13,t.NSIDELIST=[1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192],t.JRLL=[2,2,2,2,3,3,3,3,4,4,4,4],t.JPLL=[1,3,5,7,0,2,4,6,1,3,5,7],t.XOFFSET=[-1,-1,0,1,1,1,0,-1],t.YOFFSET=[0,1,1,1,0,-1,-1,-1],t.FACEARRAY=[[8,9,10,11,-1,-1,-1,-1,10,11,8,9],[5,6,7,4,8,9,10,11,9,10,11,8],[-1,-1,-1,-1,5,6,7,4,-1,-1,-1,-1],[4,5,6,7,11,8,9,10,11,8,9,10],[0,1,2,3,4,5,6,7,8,9,10,11],[1,2,3,0,0,1,2,3,5,6,7,4],[-1,-1,-1,-1,7,4,5,6,-1,-1,-1,-1],[3,0,1,2,3,0,1,2,4,5,6,7],[2,3,0,1,-1,-1,-1,-1,0,1,2,3]],t.SWAPARRAY=[[0,0,0,0,0,0,0,0,3,3,3,3],[0,0,0,0,0,0,0,0,6,6,6,6],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,5,5,5,5],[0,0,0,0,0,0,0,0,0,0,0,0],[5,5,5,5,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[6,6,6,6,0,0,0,0,0,0,0,0],[3,3,3,3,0,0,0,0,0,0,0,0]],t.Z0=Constants.TWOTHIRD,t.prototype.init=function(){"use strict";var s=256;this.ctab=Array(s),this.utab=Array(s);for(var i=0;256>i;++i)this.ctab[i]=1&i|(2&i)<<7|(4&i)>>1|(8&i)<<6|(16&i)>>2|(32&i)<<5|(64&i)>>3|(128&i)<<4,this.utab[i]=1&i|(2&i)<<1|(4&i)<<2|(8&i)<<3|(16&i)<<4|(32&i)<<5|(64&i)<<6|(128&i)<<7;this.nl2=2*this.nside,this.nl3=3*this.nside,this.nl4=4*this.nside,this.npface=this.nside*this.nside,this.ncap=2*this.nside*(this.nside-1),this.npix=12*this.npface,this.fact2=4/this.npix,this.fact1=(this.nside<<1)*this.fact2,this.order=t.nside2order(this.nside)},t.calculateNSide=function(s){for(var i=0,n=s*s,a=180/Constants.PI,e=3600*3600*4*Constants.PI*a*a,h=Utils.castToInt(e/n),r=h/12,o=Math.sqrt(r),c=t.NS_MAX,u=0,p=0;t.NSIDELIST.length>p;p++)if(c>=Math.abs(o-t.NSIDELIST[p])&&(c=Math.abs(o-t.NSIDELIST[p]),i=t.NSIDELIST[p],u=p),o>i&&t.NS_MAX>o&&(i=t.NSIDELIST[u+1]),o>t.NS_MAX)return console.log("nside cannot be bigger than "+t.NS_MAX),t.NS_MAX;return i},t.nside2order=function(s){"use strict";return(s&s-1)>0?-1:Utils.castToInt(t.log2(s))},t.log2=function(t){"use strict";return Math.log(t)/Math.log(2)},t.prototype.ang2pix_nest=function(s,i){"use strict";var n,a,e,h,r,o,c,u,p,l,d,f,I;if(i>=Constants.TWOPI&&(i-=Constants.TWOPI),0>i&&(i+=Constants.TWOPI),s>Constants.PI||0>s)throw{name:"Illegal argument",message:"theta must be between 0 and "+Constants.PI};if(i>Constants.TWOPI||0>i)throw{name:"Illegal argument",message:"phi must be between 0 and "+Constants.TWOPI};if(a=Math.cos(s),e=Math.abs(a),h=i/Constants.PIOVER2,t.Z0>=e){var M=this.nside*(.5+h),y=this.nside*.75*a,u=M-y,p=M+y;o=u>>this.order,c=p>>this.order,d=o==c?4==o?4:o+4:c>o?o:c+8,f=Utils.castToInt(p&this.nside-1),I=Utils.castToInt(this.nside-(u&this.nside-1)-1)}else{l=Utils.castToInt(h),l>=4&&(l=3),r=h-l;var g=this.nside*Math.sqrt(3*(1-e));u=Utils.castToInt(r*g),p=Utils.castToInt((1-r)*g),u=Math.min(t.NS_MAX-1,u),p=Math.min(t.NS_MAX-1,p),a>=0?(d=l,f=Utils.castToInt(this.nside-p-1),I=Utils.castToInt(this.nside-u-1)):(d=l+8,f=u,I=p)}return n=this.xyf2nest(f,I,d)},t.prototype.xyf2nest=function(t,s,i){"use strict";return(i<<2*this.order)+(this.utab[255&t]|this.utab[255&t>>8]<<16|this.utab[255&t>>16]<<32|this.utab[255&t>>24]<<48|this.utab[255&s]<<1|this.utab[255&s>>8]<<17|this.utab[255&s>>16]<<33|this.utab[255&s>>24]<<49)},t.prototype.nest2xyf=function(t){"use strict";var s={};s.face_num=t>>2*this.order;var i=t&this.npface-1,n=(93823560581120&i)>>16|(614882086624428e4&i)>>31|21845&i|(1431633920&i)>>15;return s.ix=this.ctab[255&n]|this.ctab[255&n>>8]<<4|this.ctab[255&n>>16]<<16|this.ctab[255&n>>24]<<20,i>>=1,n=(93823560581120&i)>>16|(614882086624428e4&i)>>31|21845&i|(1431633920&i)>>15,s.iy=this.ctab[255&n]|this.ctab[255&n>>8]<<4|this.ctab[255&n>>16]<<16|this.ctab[255&n>>24]<<20,s},t.prototype.pix2ang_nest=function(s){"use strict";if(0>s||s>this.npix-1)throw{name:"Illegal argument",message:"ipix out of range"};var i,n,a,e=this.nest2xyf(s),h=e.ix,r=e.iy,o=e.face_num,c=(t.JRLL[o]<<this.order)-h-r-1;this.nside>c?(i=c,n=1-i*i*this.fact2,a=0):c>this.nl3?(i=this.nl4-c,n=i*i*this.fact2-1,a=0):(i=this.nside,n=(this.nl2-c)*this.fact1,a=1&c-this.nside);var u=Math.acos(n),p=(t.JPLL[o]*i+h-r+1+a)/2;p>this.nl4&&(p-=this.nl4),1>p&&(p+=this.nl4);var l=(p-.5*(a+1))*(Constants.PIOVER2/i);return{theta:u,phi:l}},t.nside2Npix=function(s){"use strict";if(0>s||(s&-s)!=s||s>t.NS_MAX)throw{name:"Illegal argument",message:"nside should be >0, power of 2, <"+t.NS_MAX};var i=12*s*s;return i},t.prototype.xyf2ring=function(s,i,n){"use strict";var a,e,h,r=t.JRLL[n]*this.nside-s-i-1;this.nside>r?(a=r,h=2*a*(a-1),e=0):r>3*this.nside?(a=this.nl4-r,h=this.npix-2*(a+1)*a,e=0):(a=this.nside,h=this.ncap+(r-this.nside)*this.nl4,e=1&r-this.nside);var o=(t.JPLL[n]*a+s-i+1+e)/2;return o>this.nl4?o-=this.nl4:1>o&&(o+=this.nl4),h+o-1},t.prototype.nest2ring=function(t){"use strict";var s=this.nest2xyf(t),i=this.xyf2ring(s.ix,s.iy,s.face_num);return i},t.prototype.corners_nest=function(t,s){"use strict";var i=this.nest2ring(t);return this.corners_ring(i,s)},t.prototype.pix2ang_ring=function(t){"use strict";var s,i,n,a,e,h,r,o,c;if(0>t||t>this.npix-1)throw{name:"Illegal argument",message:"ipix out of range"};return h=t+1,this.ncap>=h?(o=h/2,c=Utils.castToInt(o),n=Utils.castToInt(Math.sqrt(o-Math.sqrt(c)))+1,a=h-2*n*(n-1),s=Math.acos(1-n*n*this.fact2),i=(a-.5)*Constants.PI/(2*n)):this.npix-this.ncap>t?(e=t-this.ncap,n=e/this.nl4+this.nside,a=e%this.nl4+1,r=(1&n+this.nside)>0?1:.5,s=Math.acos((this.nl2-n)*this.fact1),i=(a-r)*Constants.PI/this.nl2):(e=this.npix-t,n=Utils.castToInt(.5*(1+Math.sqrt(2*e-1))),a=4*n+1-(e-2*n*(n-1)),s=Math.acos(-1+Math.pow(n,2)*this.fact2),i=(a-.5)*Constants.PI/(2*n)),[s,i]},t.prototype.ring=function(t){"use strict";var s,i,n=0,a=t+1,e=0;return this.ncap>=a?(i=a/2,e=Utils.castToInt(i),n=Utils.castToInt(Math.sqrt(i-Math.sqrt(e)))+1):this.nl2*(5*this.nside+1)>=a?(s=Utils.castToInt(a-this.ncap-1),n=Utils.castToInt(s/this.nl4+this.nside)):(s=this.npix-a+1,i=s/2,e=Utils.castToInt(i),n=Utils.castToInt(Math.sqrt(i-Math.sqrt(e)))+1,n=this.nl4-n),n},t.prototype.integration_limits_in_costh=function(t){"use strict";var s,i,n,a;return a=1*this.nside,this.nside>=t?(i=1-Math.pow(t,2)/3/this.npface,n=1-Math.pow(t-1,2)/3/this.npface,s=t==this.nside?2*(this.nside-1)/3/a:1-Math.pow(t+1,2)/3/this.npface):this.nl3>t?(i=2*(2*this.nside-t)/3/a,n=2*(2*this.nside-t+1)/3/a,s=2*(2*this.nside-t-1)/3/a):(n=t==this.nl3?2*(-this.nside+1)/3/a:-1+Math.pow(4*this.nside-t+1,2)/3/this.npface,s=-1+Math.pow(this.nl4-t-1,2)/3/this.npface,i=-1+Math.pow(this.nl4-t,2)/3/this.npface),[n,i,s]},t.prototype.pixel_boundaries=function(t,s,i,n){var a,e,h,r,o,c,u,p,l=1*this.nside;if(Math.abs(n)>=1-1/3/this.npface)return u=i*Constants.PIOVER2,p=(i+1)*Constants.PIOVER2,[u,p];if(1.5*n>=1)a=Math.sqrt(3*(1-n)),e=1/l/a,h=s,r=h-1,o=t-s,c=o+1,u=Constants.PIOVER2*(Math.max(r*e,1-c*e)+i),p=Constants.PIOVER2*(Math.min(1-o*e,h*e)+i);else if(1.5*n>-1){var d=.5*(1-1.5*n),f=d+1,I=this.nside+t%2;h=s-(I-t)/2,r=h-1,o=(I+t)/2-s,c=o+1,u=Constants.PIOVER2*(Math.max(f-c/l,-d+r/l)+i),p=Constants.PIOVER2*(Math.min(f-o/l,-d+h/l)+i)}else{a=Math.sqrt(3*(1+n)),e=1/l/a;var M=2*this.nside;h=t-M+s,r=h-1,o=M-s,c=o+1,u=Constants.PIOVER2*(Math.max(1-(M-r)*e,(M-c)*e)+i),p=Constants.PIOVER2*(Math.min(1-(M-h)*e,(M-o)*e)+i)}return[u,p]},t.vector=function(t,s){"use strict";var i=1*Math.sin(t)*Math.cos(s),n=1*Math.sin(t)*Math.sin(s),a=1*Math.cos(t);return new SpatialVector(i,n,a)},t.prototype.corners_ring=function(s,i){"use strict";var n=2*i+2,a=Array(n),e=this.pix2ang_ring(s),h=Math.cos(e[0]),r=e[0],o=e[1],c=Utils.castToInt(o/Constants.PIOVER2),u=this.ring(s),p=Math.min(u,Math.min(this.nside,this.nl4-u)),l=0,d=Constants.PIOVER2/p;l=u>=this.nside&&this.nl3>=u?Utils.castToInt(o/d+u%2/2)+1:Utils.castToInt(o/d)+1,l-=c*p;var f=n/2,I=this.integration_limits_in_costh(u),M=Math.acos(I[0]),y=Math.acos(I[2]),g=this.pixel_boundaries(u,l,c,I[0]);if(a[0]=l>p/2?t.vector(M,g[1]):t.vector(M,g[0]),g=this.pixel_boundaries(u,l,c,I[2]),a[f]=l>p/2?t.vector(y,g[1]):t.vector(y,g[0]),1==i){var P=Math.acos(I[1]);g=this.pixel_boundaries(u,l,c,I[1]),a[1]=t.vector(P,g[0]),a[3]=t.vector(P,g[1])}else for(var x=I[2]-I[0],C=x/(i+1),v=1;i>=v;v++)h=I[0]+C*v,r=Math.acos(h),g=this.pixel_boundaries(u,l,c,h),a[v]=t.vector(r,g[0]),a[n-v]=t.vector(r,g[1]);return a},t.vec2Ang=function(t){"use strict";var s=t.z/t.length(),i=Math.acos(s),n=0;return(0!=t.x||0!=t.y)&&(n=Math.atan2(t.y,t.x)),0>n&&(n+=2*Math.PI),[i,n]},t.prototype.queryDisc=function(s,i,n,a){"use strict";if(0>i||i>Constants.PI)throw{name:"Illegal argument",message:"angular radius is in RADIAN and should be in [0,pi]"};var e,h,r,o,c,u,p,l,d,f,I,M,y,g,P,x,C,v,_,R=new LongRangeSetBuilder,T=null,c=i;if(a&&(c+=Constants.PI/this.nl4),T=t.vec2Ang(s),u=T[0],p=T[1],I=this.fact2,M=this.fact1,o=Math.cos(u),_=1/Math.sqrt((1-o)*(1+o)),g=u-c,P=u+c,l=Math.cos(c),C=Math.cos(g),e=this.ringAbove(C)+1,x=Math.cos(P),h=this.ringAbove(x),e>h&&0==h&&(h=e),0>=g)for(var m=1;e>m;++m)this.inRing(m,0,Math.PI,R);for(r=e;h>=r;++r)v=this.nside>r?1-r*r*I:this.nl3>=r?(this.nl2-r)*M:-1+(this.nl4-r)*(this.nl4-r)*I,d=(l-v*o)*_,f=1-v*v-d*d,y=Math.atan2(Math.sqrt(f),d),isNaN(y)&&(y=c),this.inRing(r,p,y,R);if(P>=Math.PI)for(var m=h+1;this.nl4>m;++m)this.inRing(m,0,Math.PI,R,!1);var b;if(n){for(var S=R.items,U=[],A=0;S.length>A;A++){var O=this.ring2nest(S[A]);U.indexOf(O)>=0||U.push(O)}b=U}else b=R.items;return b},t.prototype.inRing=function(t,s,i,n,a){"use strict";var e,h,r,o,c=!1,u=!1,p=1e-12,l=0,d=0,f=0,I=0,M=(s-i)%Constants.TWOPI-p,y=s+i+p,g=(s+i)%Constants.TWOPI+p;if(p>Math.abs(i-Constants.PI)&&(c=!0),t>=this.nside&&this.nl3>=t?(d=t-this.nside+1,r=this.ncap+this.nl4*(d-1),o=r+this.nl4-1,e=d%2,h=this.nl4):(this.nside>t?(d=t,r=2*d*(d-1),o=r+4*d-1):(d=4*this.nside-t,r=this.npix-2*d*(d+1),o=r+4*d-1),h=4*d,e=1),c)return n.appendRange(r,o),void 0;if(l=e/2,a)f=Math.round(h*M/Constants.TWOPI-l),I=Math.round(h*y/Constants.TWOPI-l),f%=h,I>h&&(I%=h);else{if(f=Math.ceil(h*M/Constants.TWOPI-l),I=Utils.castToInt(h*g/Constants.TWOPI-l),f>I&&1==t&&(I=Utils.castToInt(h*y/Constants.TWOPI-l)),f==I+1&&(f=I),1==f-I&&Constants.PI>i*h)return console.log("the interval is too small and avay from center"),void 0;f=Math.min(f,h-1),I=Math.max(I,0)}if(f>I&&(u=!0),u)f+=r,I+=r,n.appendRange(r,I),n.appendRange(f,o);else{if(0>f)return f=Math.abs(f),n.appendRange(r,r+I),n.appendRange(o-f+1,o),void 0;f+=r,I+=r,n.appendRange(f,I)}},t.prototype.ringAbove=function(t){"use strict";var s=Math.abs(t);if(s>Constants.TWOTHIRD){var i=Utils.castToInt(this.nside*Math.sqrt(3*(1-s)));return t>0?i:4*this.nside-i-1}return Utils.castToInt(this.nside*(2-1.5*t))},t.prototype.ring2nest=function(t){"use strict";var s=this.ring2xyf(t);return this.xyf2nest(s.ix,s.iy,s.face_num)},t.prototype.ring2xyf=function(s){"use strict";var i,n,a,e,h={};if(this.ncap>s){i=Utils.castToInt(.5*(1+Math.sqrt(1+2*s))),n=s+1-2*i*(i-1),a=0,e=i,h.face_num=0;var r=n-1;r>=2*i&&(h.face_num=2,r-=2*i),r>=i&&++h.face_num}else if(this.npix-this.ncap>s){var o=s-this.ncap;this.order>=0?(i=(o>>this.order+2)+this.nside,n=(o&this.nl4-1)+1):(i=o/this.nl4+this.nside,n=o%this.nl4+1),a=1&i+this.nside,e=this.nside;var c,u,p=i-this.nside+1,l=this.nl2+2-p;this.order>=0?(c=n-Utils.castToInt(p/2)+this.nside-1>>this.order,u=n-Utils.castToInt(l/2)+this.nside-1>>this.order):(c=(n-Utils.castToInt(p/2)+this.nside-1)/this.nside,u=(n-Utils.castToInt(l/2)+this.nside-1)/this.nside),h.face_num=u==c?4==u?4:Utils.castToInt(u)+4:c>u?Utils.castToInt(u):Utils.castToInt(c)+8}else{var o=this.npix-s;i=Utils.castToInt(.5*(1+Math.sqrt(2*o-1))),n=4*i+1-(o-2*i*(i-1)),a=0,e=i,i=2*this.nl2-i,h.face_num=8;var r=n-1;r>=2*e&&(h.face_num=10,r-=2*e),r>=e&&++h.face_num}var d=i-t.JRLL[h.face_num]*this.nside+1,f=2*n-t.JPLL[h.face_num]*e-a-1;return f>=this.nl2&&(f-=8*this.nside),h.ix=f-d>>1,h.iy=-(f+d)>>1,h},t}(),Utils=function(){},Utils.radecToPolar=function(t,s){return{theta:Math.PI/2-s/180*Math.PI,phi:t/180*Math.PI}},Utils.polarToRadec=function(t,s){return{ra:180*s/Math.PI,dec:180*(Math.PI/2-t)/Math.PI}},Utils.castToInt=function(t){return t>0?Math.floor(t):Math.ceil(t)};//=================================


// Copyright 2013 - UDS/CNRS
// The Aladin Lite program is distributed under the terms
// of the GNU General Public License version 3.
//
// This file is part of Aladin Lite.
//
//    Aladin Lite is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, version 3 of the License.
//
//    Aladin Lite is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    The GNU General Public License is available in COPYING file
//    along with Aladin Lite.
//



/******************************************************************************
 * Aladin Lite project
 * 
 * File HealpixCache
 * 
 * Author: Thomas Boch[CDS]
 * 
 *****************************************************************************/

// class holding some HEALPix computations for better performances
//
// it is made of :
// - a static cache for HEALPix corners at nside=8 
// - a dynamic cache for 
HealpixCache = (function() {

    var HealpixCache = {};
    
    HealpixCache.staticCache = {corners: {nside8: []}};
    // TODO : utilisation du dynamicCache
    HealpixCache.dynamicCache = {};
    
    HealpixCache.lastNside = 8;
    
    HealpixCache.hpxIdxCache = null;
    
    // TODO : conserver en cache le dernier résultat ?
    
    HealpixCache.init = function() {
    	// pre-compute corners position for nside=8
    	var hpxIdx = new HealpixIndex(8);
    	hpxIdx.init();
    	var npix = HealpixIndex.nside2Npix(8);
        var corners;
    	for (var ipix=0; ipix<npix; ipix++) {
            corners =  hpxIdx.corners_nest(ipix, 1);
    		HealpixCache.staticCache.corners.nside8.push(corners);
    	}
    	
    	HealpixCache.hpxIdxCache = hpxIdx;
    };

    HealpixCache.init();
    
    HealpixCache.corners_nest = function(ipix, nside) {
    	if (nside==8) {
    		return HealpixCache.staticCache.corners.nside8[ipix];
    	}
    	
    	if (nside != HealpixCache.lastNside) {
    		HealpixCache.hpxIdxCache = new HealpixIndex(nside);
    		HealpixCache.hpxIdxCache.init();
    		HealpixCache.lastNside = nside;
    	}
    	
    	return HealpixCache.hpxIdxCache.corners_nest(ipix, 1);
    	
    };
    
    return HealpixCache;
})();
	
// Copyright 2013 - UDS/CNRS
// The Aladin Lite program is distributed under the terms
// of the GNU General Public License version 3.
//
// This file is part of Aladin Lite.
//
//    Aladin Lite is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, version 3 of the License.
//
//    Aladin Lite is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    The GNU General Public License is available in COPYING file
//    along with Aladin Lite.
//




/******************************************************************************
 * Aladin Lite project
 * 
 * File Utils
 * 
 * Author: Thomas Boch[CDS]
 * 
 *****************************************************************************/

Utils = Utils || {};

Utils.cssScale = undefined;
// adding relMouseCoords to HTMLCanvasElement prototype (see http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element ) 
function relMouseCoords(event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;
   
    if (event.offsetX) {
        return {x: event.offsetX, y:event.offsetY};
    } 
    else {
        if (!Utils.cssScale) {
            var st = window.getComputedStyle(document.body, null);
            var tr = st.getPropertyValue("-webkit-transform") ||
                    st.getPropertyValue("-moz-transform") ||
                    st.getPropertyValue("-ms-transform") ||
                    st.getPropertyValue("-o-transform") ||
                    st.getPropertyValue("transform");
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
            var matches = tr.match(matrixRegex);
            if (matches) {
                Utils.cssScale = parseFloat(matches[1]);
            }
            else {
                Utils.cssScale = 1;
            }
        }
        var e = event;
        var canvas = e.target;
        // http://www.jacklmoore.com/notes/mouse-position/
        var target = e.target || e.srcElement;
        var style = target.currentStyle || window.getComputedStyle(target, null);
        var borderLeftWidth = parseInt(style['borderLeftWidth'], 10);
        var borderTopWidth = parseInt(style['borderTopWidth'], 10);
        var rect = target.getBoundingClientRect();

        var clientX = e.clientX;
        var clientY = e.clientY;
        if (e.clientX == undefined) {
            clientX = e.originalEvent.changedTouches[0].clientX;
            clientY = e.originalEvent.changedTouches[0].clientY;
        }

        var offsetX = clientX - borderLeftWidth - rect.left;
        var offsetY = clientY - borderTopWidth - rect.top

        return {x: parseInt(offsetX/Utils.cssScale), y: parseInt(offsetY/Utils.cssScale)};
    }
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;



//Function.prototype.bind polyfill from 
//https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function (obj) {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var slice = [].slice,
        args = slice.call(arguments, 1),
        self = this,
        nop = function () { },
        bound = function () {
            return self.apply(this instanceof nop ? this : (obj || {}),
                    args.concat(slice.call(arguments)));
        };

        bound.prototype = this.prototype;

        return bound;
    };
}








$ = $ || jQuery;

/* source : http://stackoverflow.com/a/8764051 */
$.urlParam = function(name, queryString){
    if (queryString===undefined) {
        queryString = location.search;
    }
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(queryString)||[,""])[1].replace(/\+/g, '%20'))||null;
};

/* source: http://stackoverflow.com/a/1830844 */
Utils.isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

Utils.isInt = function(n) {
    return Utils.isNumber(n) && Math.floor(n)==n;
};

/* a debounce function, used to prevent multiple calls to the same function if less than delay milliseconds have passed */
Utils.debounce = function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
};

/* return a throttled function, to rate limit the number of calls (by default, one call every 250 milliseconds) */
Utils.throttle = function(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}


/* A LRU cache, inspired by https://gist.github.com/devinus/409353#file-gistfile1-js */
// TODO : utiliser le LRU cache pour les tuiles images
Utils.LRUCache = function (maxsize) {
    this._keys = [];
    this._items = {};
    this._expires = {};
    this._size = 0;
    this._maxsize = maxsize || 1024;
};
   
Utils.LRUCache.prototype = {
        set: function (key, value) {
            var keys = this._keys,
                items = this._items,
                expires = this._expires,
                size = this._size,
                maxsize = this._maxsize;

            if (size >= maxsize) { // remove oldest element when no more room
                keys.sort(function (a, b) {
                    if (expires[a] > expires[b]) return -1;
                    if (expires[a] < expires[b]) return 1;
                    return 0;
                });

                size--;
                delete expires[keys[size]];
                delete items[keys[size]];
            }

            keys[size] = key;
            items[key] = value;
            expires[key] = Date.now();
            size++;

            this._keys = keys;
            this._items = items;
            this._expires = expires;
            this._size = size;
        },

        get: function (key) {
            var item = this._items[key];
            if (item) this._expires[key] = Date.now();
            return item;
        },
        
        keys: function() {
            return this._keys;
        }
};

////////////////////////////////////////////////////////////////////////////:

/**
  Make an AJAX call, given a list of potential mirrors
  First successful call will result in options.onSuccess being called back
  If all calls fail, onFailure is called back at the end

  This method assumes the URL are CORS-compatible, no proxy will be used
 */
Utils.loadFromMirrors = function(urls, options) {
    var data    = options && options.data || null;
    var method = options && options.method || 'GET';
    var dataType = options && options.dataType || null;
    var timeout = options && options.timeout || 20;

    var onSuccess = options && options.onSuccess || null;
    var onFailure = options && options.onFailure || null;

    if (urls.length === 0) {
        (typeof onFailure === 'function') && onFailure();
    }
    else {
        var ajaxOptions = {
            url: urls[0],
            data: data
        }
        if (dataType) {
            ajaxOptions.dataType = dataType;
        }

        $.ajax(ajaxOptions)
        .done(function(data) {
            (typeof onSuccess === 'function') && onSuccess(data);
        })
        .fail(function() {
             Utils.loadFromMirrors(urls.slice(1), options);
        });
    }
} 

// return the jquery ajax object configured with the requested parameters
// by default, we use the proxy (safer, as we don't know if the remote server supports CORS)
Utils.getAjaxObject = function(url, method, dataType, useProxy) {
        if (useProxy!==false) {
            useProxy = true;
        }

        if (useProxy===true) {
            var urlToRequest = Aladin.JSONP_PROXY + '?url=' + encodeURIComponent(url);
        }
        else {
            urlToRequest = url;
        }
        method = method || 'GET';
        dataType = dataType || null;

        return $.ajax({
            url: urlToRequest,
            method: method,
            dataType: dataType
        }); 
};

// return true if script is executed in a HTTPS context
// return false otherwise
Utils.isHttpsContext = function() {
    return ( window.location.protocol === 'https:' );
};

// generate an absolute URL from a relative URL
// example: getAbsoluteURL('foo/bar/toto') return http://cds.unistra.fr/AL/foo/bar/toto if executed from page http://cds.unistra.fr/AL/
Utils.getAbsoluteURL = function(url) {
    var a = document.createElement('a');
    a.href = url;

    return a.href;
};

// generate a valid v4 UUID
Utils.uuidv4 = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Copyright 2013 - UDS/CNRS
// The Aladin Lite program is distributed under the terms
// of the GNU General Public License version 3.
//
// This file is part of Aladin Lite.
//
//    Aladin Lite is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, version 3 of the License.
//
//    Aladin Lite is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    The GNU General Public License is available in COPYING file
//    along with Aladin Lite.
//



/******************************************************************************
 * Aladin Lite project
 * 
 * File Downloader
 * Queue downloading for image elements
 * 
 * Author: Thomas Boch[CDS]
 * 
 *****************************************************************************/

Downloader = (function() {
	var NB_MAX_SIMULTANEOUS_DL = 8;
	// TODO : le fading ne marche pas bien actuellement
	var FADING_ENABLED = false;
	var FADING_DURATION = 700; // in milliseconds
	
	
	var Downloader = function(view) {
        		this.dlQueue = []; // queue of items being downloaded
        this.urlsInQueue = {};
        
		this.view = view; // reference to the view to be able to request redraw
		this.nbDownloads = 0; // number of current downloads

	};

	Downloader.prototype.emptyQueue = function() {
		this.dlQueue = [];
        var remaining = [];
        for (const [k, url] of Object.entries(this.urlsInQueue)) {
            remaining.push(url);
        }
        this.urlsInQueue = {};
        return remaining;
    };
	
	Downloader.prototype.requestDownload = function(img, url, cors) {
        // first check if url already in queue
        if (url in this.urlsInQueue)  {
            return;
        }
		// put in queue
		this.dlQueue.push({img: img, url: url, cors: cors});
		this.urlsInQueue[url] = 1;
		
		this.tryDownload();
	};
	
	// try to download next items in queue if possible
	Downloader.prototype.tryDownload = function() {
	    //if (this.dlQueue.length>0 && this.nbDownloads<NB_MAX_SIMULTANEOUS_DL) {
		while (this.dlQueue.length>0 && this.nbDownloads<NB_MAX_SIMULTANEOUS_DL) {
			this.startDownloadNext();
		}
	};
	
	Downloader.prototype.startDownloadNext = function() {
		// get next in queue
		var next = this.dlQueue.shift();
		if ( ! next) {
			return;
		}

		this.nbDownloads++;
		var downloaderRef = this;
		next.img.onload = function() {
			downloaderRef.completeDownload(this, true); // in this context, 'this' is the Image
		};
			
		next.img.onerror = function(e) {
			downloaderRef.completeDownload(this, false); // in this context, 'this' is the Image
		};
		if (next.cors) {
		    next.img.crossOrigin = 'anonymous';
		}
		
		else {
		    if (next.img.crossOrigin !== undefined) {
		        delete next.img.crossOrigin;
		    }
		}
		
		
		next.img.src = next.url;
	};
	
	Downloader.prototype.completeDownload = function(img, success) {
        delete this.urlsInQueue[img.src];
		img.onerror = null;
		img.onload = null;
		this.nbDownloads--;
		if (success) {
			if (FADING_ENABLED) {
				var now = new Date().getTime();
				img.fadingStart = now;
				img.fadingEnd = now + FADING_DURATION;
			}
			this.view.requestRedraw();
		}
		else {
		    img.dlError = true;
		}
		
		this.tryDownload();
	};
	
	
	
	return Downloader;
})();
// Generated by CoffeeScript 1.6.3
(function() {
  var Base, BinaryTable, CompressedImage, DataUnit, Decompress, FITS, HDU, Header, HeaderVerify, Image, ImageUtils, Parser, Table, Tabular, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  if (this.astro == null) {
    this.astro = {};
  }

  Base = (function() {
    function Base() {}

    Base.include = function(obj) {
      var key, value;
      for (key in obj) {
        value = obj[key];
        this.prototype[key] = value;
      }
      return this;
    };

    Base.extend = function(obj) {
      var key, value;
      for (key in obj) {
        value = obj[key];
        this[key] = value;
      }
      return this;
    };

    Base.prototype.proxy = function(func) {
      var _this = this;
      return function() {
        return func.apply(_this, arguments);
      };
    };

    Base.prototype.invoke = function(callback, opts, data) {
      var context;
      context = (opts != null ? opts.context : void 0) != null ? opts.context : this;
      if (callback != null) {
        return callback.call(context, data, opts);
      }
    };

    return Base;

  })();

  Parser = (function(_super) {
    __extends(Parser, _super);

    Parser.prototype.LINEWIDTH = 80;

    Parser.prototype.BLOCKLENGTH = 2880;

    File.prototype.slice = File.prototype.slice || File.prototype.webkitSlice;

    Blob.prototype.slice = Blob.prototype.slice || Blob.prototype.webkitSlice;

    function Parser(arg, callback, opts) {
      var xhr,
        _this = this;
      this.arg = arg;
      this.callback = callback;
      this.opts = opts;
      this.hdus = [];
      this.blockCount = 0;
      this.begin = 0;
      this.end = this.BLOCKLENGTH;
      this.offset = 0;
      this.headerStorage = new Uint8Array();
      if (typeof this.arg === 'string') {
        this.readNextBlock = this._readBlockFromBuffer;
        xhr = new XMLHttpRequest();
        xhr.open('GET', this.arg);
        xhr.responseType = 'arraybuffer';

        // the onerror handling has been added wrt the original fitsjs library as retrieved on the astrojs github repo
        // if an error occurs, we return an empty object
        xhr.onerror = function() {
          _this.invoke(_this.callback, _this.opts);
        }

        xhr.onload = function() {
          if (xhr.status !== 200) {
            _this.invoke(_this.callback, _this.opts);
            return;
          }
          _this.arg = xhr.response;
          _this.length = _this.arg.byteLength;
          return _this.readFromBuffer();
        };
        xhr.send();
      } else {
        this.length = this.arg.size;
        this.readNextBlock = this._readBlockFromFile;
        this.readFromFile();
      }
    }

    Parser.prototype.readFromBuffer = function() {
      var block;
      block = this.arg.slice(this.begin + this.offset, this.end + this.offset);
      return this.readBlock(block);
    };

    Parser.prototype.readFromFile = function() {
      var block,
        _this = this;
      this.reader = new FileReader();
      this.reader.onloadend = function(e) {
        return _this.readBlock(e.target.result);
      };
      block = this.arg.slice(this.begin + this.offset, this.end + this.offset);
      return this.reader.readAsArrayBuffer(block);
    };

    Parser.prototype.readBlock = function(block) {
      var arr, dataLength, dataunit, header, rowIndex, rows, s, slice, tmp, value, _i, _len, _ref;
      arr = new Uint8Array(block);
      tmp = new Uint8Array(this.headerStorage);
      this.headerStorage = new Uint8Array(this.end);
      this.headerStorage.set(tmp, 0);
      this.headerStorage.set(arr, this.begin);
      rows = this.BLOCKLENGTH / this.LINEWIDTH;
      while (rows--) {
        rowIndex = rows * this.LINEWIDTH;
        if (arr[rowIndex] === 32) {
          continue;
        }
        if (arr[rowIndex] === 69 && arr[rowIndex + 1] === 78 && arr[rowIndex + 2] === 68 && arr[rowIndex + 3] === 32) {
          s = '';
          _ref = this.headerStorage;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            value = _ref[_i];
            s += String.fromCharCode(value);
          }
          header = new Header(s);
          this.start = this.end + this.offset;
          dataLength = header.getDataLength();
          slice = this.arg.slice(this.start, this.start + dataLength);
          if (header.hasDataUnit()) {
            dataunit = this.createDataUnit(header, slice);
          }
          this.hdus.push(new HDU(header, dataunit));
          this.offset += this.end + dataLength + this.excessBytes(dataLength);
          if (this.offset === this.length) {
            this.headerStorage = null;
            this.invoke(this.callback, this.opts, this);
            return;
          }
          this.blockCount = 0;
          this.begin = this.blockCount * this.BLOCKLENGTH;
          this.end = this.begin + this.BLOCKLENGTH;
          this.headerStorage = new Uint8Array();
          block = this.arg.slice(this.begin + this.offset, this.end + this.offset);
          this.readNextBlock(block);
          return;
        }
        break;
      }
      this.blockCount += 1;
      this.begin = this.blockCount * this.BLOCKLENGTH;
      this.end = this.begin + this.BLOCKLENGTH;
      block = this.arg.slice(this.begin + this.offset, this.end + this.offset);
      this.readNextBlock(block);
    };

    Parser.prototype._readBlockFromBuffer = function(block) {
      return this.readBlock(block);
    };

    Parser.prototype._readBlockFromFile = function(block) {
      return this.reader.readAsArrayBuffer(block);
    };

    Parser.prototype.createDataUnit = function(header, blob) {
      var type;
      type = header.getDataType();
      return new astro.FITS[type](header, blob);
    };

    Parser.prototype.excessBytes = function(length) {
      return (this.BLOCKLENGTH - (length % this.BLOCKLENGTH)) % this.BLOCKLENGTH;
    };

    Parser.prototype.isEOF = function() {
      if (this.offset === this.length) {
        return true;
      } else {
        return false;
      }
    };

    return Parser;

  })(Base);

  FITS = (function(_super) {
    __extends(FITS, _super);

    function FITS(arg, callback, opts) {
      var parser,
        _this = this;
      this.arg = arg;
      parser = new Parser(this.arg, function(fits) {
        _this.hdus = parser.hdus;
        return _this.invoke(callback, opts, _this);
      });
    }

    FITS.prototype.getHDU = function(index) {
      var hdu, _i, _len, _ref;
      if ((index != null) && (this.hdus[index] != null)) {
        return this.hdus[index];
      }
      _ref = this.hdus;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        hdu = _ref[_i];
        if (hdu.hasData()) {
          return hdu;
        }
      }
    };

    FITS.prototype.getHeader = function(index) {
      return this.getHDU(index).header;
    };

    FITS.prototype.getDataUnit = function(index) {
      return this.getHDU(index).data;
    };

    return FITS;

  })(Base);

  FITS.version = '0.6.5';

  this.astro.FITS = FITS;

  DataUnit = (function(_super) {
    __extends(DataUnit, _super);

    DataUnit.swapEndian = {
      B: function(value) {
        return value;
      },
      I: function(value) {
        return (value << 8) | (value >> 8);
      },
      J: function(value) {
        return ((value & 0xFF) << 24) | ((value & 0xFF00) << 8) | ((value >> 8) & 0xFF00) | ((value >> 24) & 0xFF);
      }
    };

    DataUnit.swapEndian[8] = DataUnit.swapEndian['B'];

    DataUnit.swapEndian[16] = DataUnit.swapEndian['I'];

    DataUnit.swapEndian[32] = DataUnit.swapEndian['J'];

    function DataUnit(header, data) {
      if (data instanceof ArrayBuffer) {
        this.buffer = data;
      } else {
        this.blob = data;
      }
    }

    return DataUnit;

  })(Base);

  this.astro.FITS.DataUnit = DataUnit;

  HeaderVerify = {
    verifyOrder: function(keyword, order) {
      if (order !== this.cardIndex) {
        return console.warn("" + keyword + " should appear at index " + this.cardIndex + " in the FITS header");
      }
    },
    verifyBetween: function(keyword, value, lower, upper) {
      if (!(value >= lower && value <= upper)) {
        throw "The " + keyword + " value of " + value + " is not between " + lower + " and " + upper;
      }
    },
    verifyBoolean: function(value) {
      if (value === "T") {
        return true;
      } else {
        return false;
      }
    },
    VerifyFns: {
      SIMPLE: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = arguments[0];
        this.primary = true;
        this.verifyOrder("SIMPLE", 0);
        return this.verifyBoolean(value);
      },
      XTENSION: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        this.extension = true;
        this.extensionType = arguments[0];
        this.verifyOrder("XTENSION", 0);
        return this.extensionType;
      },
      BITPIX: function() {
        var args, key, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        key = "BITPIX";
        value = parseInt(arguments[0]);
        this.verifyOrder(key, 1);
        if (value !== 8 && value !== 16 && value !== 32 && value !== (-32) && value !== (-64)) {
          throw "" + key + " value " + value + " is not permitted";
        }
        return value;
      },
      NAXIS: function() {
        var args, array, key, required, value, _ref;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        key = "NAXIS";
        value = parseInt(arguments[0]);
        array = arguments[1];
        if (!array) {
          this.verifyOrder(key, 2);
          this.verifyBetween(key, value, 0, 999);
          if (this.isExtension()) {
            if ((_ref = this.extensionType) === "TABLE" || _ref === "BINTABLE") {
              required = 2;
              if (value !== required) {
                throw "" + key + " must be " + required + " for TABLE and BINTABLE extensions";
              }
            }
          }
        }
        return value;
      },
      PCOUNT: function() {
        var args, key, order, required, value, _ref;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        key = "PCOUNT";
        value = parseInt(arguments[0]);
        order = 1 + 1 + 1 + this.get("NAXIS");
        this.verifyOrder(key, order);
        if (this.isExtension()) {
          if ((_ref = this.extensionType) === "IMAGE" || _ref === "TABLE") {
            required = 0;
            if (value !== required) {
              throw "" + key + " must be " + required + " for the " + this.extensionType + " extensions";
            }
          }
        }
        return value;
      },
      GCOUNT: function() {
        var args, key, order, required, value, _ref;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        key = "GCOUNT";
        value = parseInt(arguments[0]);
        order = 1 + 1 + 1 + this.get("NAXIS") + 1;
        this.verifyOrder(key, order);
        if (this.isExtension()) {
          if ((_ref = this.extensionType) === "IMAGE" || _ref === "TABLE" || _ref === "BINTABLE") {
            required = 1;
            if (value !== required) {
              throw "" + key + " must be " + required + " for the " + this.extensionType + " extensions";
            }
          }
        }
        return value;
      },
      EXTEND: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = arguments[0];
        if (!this.isPrimary()) {
          throw "EXTEND must only appear in the primary header";
        }
        return this.verifyBoolean(value);
      },
      BSCALE: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseFloat(arguments[0]);
      },
      BZERO: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseFloat(arguments[0]);
      },
      BLANK: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = arguments[0];
        if (!(this.get("BITPIX") > 0)) {
          console.warn("BLANK is not to be used for BITPIX = " + (this.get('BITPIX')));
        }
        return parseInt(value);
      },
      DATAMIN: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseFloat(arguments[0]);
      },
      DATAMAX: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseFloat(arguments[0]);
      },
      EXTVER: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      },
      EXTLEVEL: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      },
      TFIELDS: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = parseInt(arguments[0]);
        this.verifyBetween("TFIELDS", value, 0, 999);
        return value;
      },
      TBCOL: function() {
        var args, index, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = arguments[0];
        index = arguments[2];
        this.verifyBetween("TBCOL", index, 0, this.get("TFIELDS"));
        return value;
      },
      ZIMAGE: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return this.verifyBoolean(arguments[0]);
      },
      ZCMPTYPE: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = arguments[0];
        if (value !== 'GZIP_1' && value !== 'RICE_1' && value !== 'PLIO_1' && value !== 'HCOMPRESS_1') {
          throw "ZCMPTYPE value " + value + " is not permitted";
        }
        if (value !== 'RICE_1') {
          throw "Compress type " + value + " is not yet implement";
        }
        return value;
      },
      ZBITPIX: function() {
        var args, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = parseInt(arguments[0]);
        if (value !== 8 && value !== 16 && value !== 32 && value !== 64 && value !== (-32) && value !== (-64)) {
          throw "ZBITPIX value " + value + " is not permitted";
        }
        return value;
      },
      ZNAXIS: function() {
        var args, array, value;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = parseInt(arguments[0]);
        array = arguments[1];
        value = value;
        if (!array) {
          this.verifyBetween("ZNAXIS", value, 0, 999);
        }
        return value;
      },
      ZTILE: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      },
      ZSIMPLE: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (arguments[0] === "T") {
          return true;
        } else {
          return false;
        }
      },
      ZPCOUNT: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      },
      ZGCOUNT: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      },
      ZDITHER0: function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return parseInt(arguments[0]);
      }
    }
  };

  this.astro.FITS.HeaderVerify = HeaderVerify;

  Header = (function(_super) {
    __extends(Header, _super);

    Header.include(HeaderVerify);

    Header.prototype.arrayPattern = /(\D+)(\d+)/;

    Header.prototype.maxLines = 600;

    function Header(block) {
      var method, name, _ref;
      this.primary = false;
      this.extension = false;
      this.verifyCard = {};
      _ref = this.VerifyFns;
      for (name in _ref) {
        method = _ref[name];
        this.verifyCard[name] = this.proxy(method);
      }
      this.cards = {};
      this.cards["COMMENT"] = [];
      this.cards["HISTORY"] = [];
      this.cardIndex = 0;
      this.block = block;
      this.readBlock(block);
    }

    Header.prototype.get = function(key) {
      if (this.contains(key)) {
        return this.cards[key].value;
      } else {
        return null;
      }
    };

    Header.prototype.set = function(key, value, comment) {
      comment = comment || '';
      this.cards[key] = {
        index: this.cardIndex,
        value: value,
        comment: comment
      };
      return this.cardIndex += 1;
    };

    Header.prototype.contains = function(key) {
      return this.cards.hasOwnProperty(key);
    };

    Header.prototype.readLine = function(l) {
      var blank, comment, firstByte, indicator, key, value, _ref;
      key = l.slice(0, 8).trim();
      blank = key === '';
      if (blank) {
        return;
      }
      indicator = l.slice(8, 10);
      value = l.slice(10);
      if (indicator !== "= ") {
        if (key === 'COMMENT' || key === 'HISTORY') {
          this.cards[key].push(value.trim());
        }
        return;
      }
      _ref = value.split(' /'), value = _ref[0], comment = _ref[1];
      value = value.trim();
      firstByte = value[0];
      if (firstByte === "'") {
        value = value.slice(1, -1).trim();
      } else {
        if (value !== 'T' && value !== 'F') {
          value = parseFloat(value);
        }
      }
      value = this.validate(key, value);
      return this.set(key, value, comment);
    };

    Header.prototype.validate = function(key, value) {
      var baseKey, index, isArray, match, _ref;
      index = null;
      baseKey = key;
      isArray = this.arrayPattern.test(key);
      if (isArray) {
        match = this.arrayPattern.exec(key);
        _ref = match.slice(1), baseKey = _ref[0], index = _ref[1];
      }
      if (baseKey in this.verifyCard) {
        value = this.verifyCard[baseKey](value, isArray, index);
      }
      return value;
    };

    Header.prototype.readBlock = function(block) {
      var i, line, lineWidth, nLines, _i, _ref, _results;
      lineWidth = 80;
      nLines = block.length / lineWidth;
      nLines = nLines < this.maxLines ? nLines : this.maxLines;
      _results = [];
      for (i = _i = 0, _ref = nLines - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        line = block.slice(i * lineWidth, (i + 1) * lineWidth);
        _results.push(this.readLine(line));
      }
      return _results;
    };

    Header.prototype.hasDataUnit = function() {
      if (this.get("NAXIS") === 0) {
        return false;
      } else {
        return true;
      }
    };

    Header.prototype.getDataLength = function() {
      var i, length, naxis, _i, _ref;
      if (!this.hasDataUnit()) {
        return 0;
      }
      naxis = [];
      for (i = _i = 1, _ref = this.get("NAXIS"); 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        naxis.push(this.get("NAXIS" + i));
      }
      length = naxis.reduce(function(a, b) {
        return a * b;
      }) * Math.abs(this.get("BITPIX")) / 8;
      length += this.get("PCOUNT");
      return length;
    };

    Header.prototype.getDataType = function() {
      switch (this.extensionType) {
        case 'BINTABLE':
          if (this.contains('ZIMAGE')) {
            return 'CompressedImage';
          }
          return 'BinaryTable';
        case 'TABLE':
          return 'Table';
        default:
          if (this.hasDataUnit()) {
            return 'Image';
          } else {
            return null;
          }
      }
    };

    Header.prototype.isPrimary = function() {
      return this.primary;
    };

    Header.prototype.isExtension = function() {
      return this.extension;
    };

    return Header;

  })(Base);

  this.astro.FITS.Header = Header;

  ImageUtils = {
    getExtent: function(arr) {
      var index, max, min, value;
      index = arr.length;
      while (index--) {
        value = arr[index];
        if (isNaN(value)) {
          continue;
        }
        min = max = value;
        break;
      }
      if (index === -1) {
        return [NaN, NaN];
      }
      while (index--) {
        value = arr[index];
        if (isNaN(value)) {
          continue;
        }
        if (value < min) {
          min = value;
        }
        if (value > max) {
          max = value;
        }
      }
      return [min, max];
    },
    getPixel: function(arr, x, y) {
      return arr[y * this.width + x];
    }
  };

  this.astro.FITS.ImageUtils = ImageUtils;

  Image = (function(_super) {
    __extends(Image, _super);

    Image.include(ImageUtils);

    Image.prototype.allocationSize = 16777216;

    function Image(header, data) {
      var begin, frame, i, naxis, _i, _j, _ref;
      Image.__super__.constructor.apply(this, arguments);
      naxis = header.get("NAXIS");
      this.bitpix = header.get("BITPIX");
      this.naxis = [];
      for (i = _i = 1; 1 <= naxis ? _i <= naxis : _i >= naxis; i = 1 <= naxis ? ++_i : --_i) {
        this.naxis.push(header.get("NAXIS" + i));
      }
      this.width = header.get("NAXIS1");
      this.height = header.get("NAXIS2") || 1;
      this.depth = header.get("NAXIS3") || 1;
      this.bzero = header.get("BZERO") || 0;
      this.bscale = header.get("BSCALE") || 1;
      this.bytes = Math.abs(this.bitpix) / 8;
      this.length = this.naxis.reduce(function(a, b) {
        return a * b;
      }) * Math.abs(this.bitpix) / 8;
      this.frame = 0;
      this.frameOffsets = [];
      this.frameLength = this.bytes * this.width * this.height;
      this.nBuffers = this.buffer != null ? 1 : 2;
      for (i = _j = 0, _ref = this.depth - 1; 0 <= _ref ? _j <= _ref : _j >= _ref; i = 0 <= _ref ? ++_j : --_j) {
        begin = i * this.frameLength;
        frame = {
          begin: begin
        };
        if (this.buffer != null) {
          frame.buffers = [this.buffer.slice(begin, begin + this.frameLength)];
        }
        this.frameOffsets.push(frame);
      }
    }

    Image.prototype._getFrame = function(buffer, bitpix, bzero, bscale) {
      var arr, bytes, dataType, i, nPixels, swapEndian, tmp, value;
      bytes = Math.abs(bitpix) / 8;
      nPixels = i = buffer.byteLength / bytes;
      dataType = Math.abs(bitpix);
      if (bitpix > 0) {
        switch (bitpix) {
          case 8:
            tmp = new Uint8Array(buffer);
            tmp = new Uint16Array(tmp);
            swapEndian = function(value) {
              return value;
            };
            break;
          case 16:
            tmp = new Int16Array(buffer);
            swapEndian = function(value) {
              return ((value & 0xFF) << 8) | ((value >> 8) & 0xFF);
            };
            break;
          case 32:
            tmp = new Int32Array(buffer);
            swapEndian = function(value) {
              return ((value & 0xFF) << 24) | ((value & 0xFF00) << 8) | ((value >> 8) & 0xFF00) | ((value >> 24) & 0xFF);
            };
        }
        if (!(parseInt(bzero) === bzero && parseInt(bscale) === bscale)) {
          arr = new Float32Array(tmp.length);
        } else {
          arr = tmp;
        }
        while (nPixels--) {
          tmp[nPixels] = swapEndian(tmp[nPixels]);
          arr[nPixels] = bzero + bscale * tmp[nPixels];
        }
      } else {
        arr = new Uint32Array(buffer);
        swapEndian = function(value) {
          return ((value & 0xFF) << 24) | ((value & 0xFF00) << 8) | ((value >> 8) & 0xFF00) | ((value >> 24) & 0xFF);
        };
        while (i--) {
          value = arr[i];
          arr[i] = swapEndian(value);
        }
        arr = new Float32Array(buffer);
        while (nPixels--) {
          arr[nPixels] = bzero + bscale * arr[nPixels];
        }
      }
      return arr;
    };

    Image.prototype._getFrameAsync = function(buffers, callback, opts) {
      var URL, blobGetFrame, blobOnMessage, fn1, fn2, i, mime, msg, onmessage, pixels, start, urlGetFrame, urlOnMessage, worker,
        _this = this;
      onmessage = function(e) {
        var arr, bitpix, bscale, buffer, bzero, data, url;
        data = e.data;
        buffer = data.buffer;
        bitpix = data.bitpix;
        bzero = data.bzero;
        bscale = data.bscale;
        url = data.url;
        importScripts(url);
        arr = _getFrame(buffer, bitpix, bzero, bscale);
        return postMessage(arr);
      };
      fn1 = onmessage.toString().replace('return postMessage', 'postMessage');
      fn1 = "onmessage = " + fn1;
      fn2 = this._getFrame.toString();
      fn2 = fn2.replace('function', 'function _getFrame');
      mime = "application/javascript";
      blobOnMessage = new Blob([fn1], {
        type: mime
      });
      blobGetFrame = new Blob([fn2], {
        type: mime
      });
      URL = window.URL || window.webkitURL;
      urlOnMessage = URL.createObjectURL(blobOnMessage);
      urlGetFrame = URL.createObjectURL(blobGetFrame);
      worker = new Worker(urlOnMessage);
      msg = {
        buffer: buffers[0],
        bitpix: this.bitpix,
        bzero: this.bzero,
        bscale: this.bscale,
        url: urlGetFrame
      };
      i = 0;
      pixels = null;
      start = 0;
      worker.onmessage = function(e) {
        var arr;
        arr = e.data;
        if (pixels == null) {
          pixels = new arr.constructor(_this.width * _this.height);
        }
        pixels.set(arr, start);
        start += arr.length;
        i += 1;
        if (i === _this.nBuffers) {
          _this.invoke(callback, opts, pixels);
          URL.revokeObjectURL(urlOnMessage);
          URL.revokeObjectURL(urlGetFrame);
          return worker.terminate();
        } else {
          msg.buffer = buffers[i];
          return worker.postMessage(msg, [buffers[i]]);
        }
      };
      worker.postMessage(msg, [buffers[0]]);
    };

    Image.prototype.getFrame = function(frame, callback, opts) {
      var begin, blobFrame, blobs, buffers, bytesPerBuffer, frameInfo, i, nRowsPerBuffer, reader, start, _i, _ref,
        _this = this;
      this.frame = frame || this.frame;
      frameInfo = this.frameOffsets[this.frame];
      buffers = frameInfo.buffers;
      if ((buffers != null ? buffers.length : void 0) === this.nBuffers) {
        return this._getFrameAsync(buffers, callback, opts);
      } else {
        this.frameOffsets[this.frame].buffers = [];
        begin = frameInfo.begin;
        blobFrame = this.blob.slice(begin, begin + this.frameLength);
        blobs = [];
        nRowsPerBuffer = Math.floor(this.height / this.nBuffers);
        bytesPerBuffer = nRowsPerBuffer * this.bytes * this.width;
        for (i = _i = 0, _ref = this.nBuffers - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          start = i * bytesPerBuffer;
          if (i === this.nBuffers - 1) {
            blobs.push(blobFrame.slice(start));
          } else {
            blobs.push(blobFrame.slice(start, start + bytesPerBuffer));
          }
        }
        buffers = [];
        reader = new FileReader();
        reader.frame = this.frame;
        i = 0;
        reader.onloadend = function(e) {
          var buffer;
          frame = e.target.frame;
          buffer = e.target.result;
          _this.frameOffsets[frame].buffers.push(buffer);
          i += 1;
          if (i === _this.nBuffers) {
            return _this.getFrame(frame, callback, opts);
          } else {
            return reader.readAsArrayBuffer(blobs[i]);
          }
        };
        return reader.readAsArrayBuffer(blobs[0]);
      }
    };

    Image.prototype.getFrames = function(frame, number, callback, opts) {
      var cb,
        _this = this;
      cb = function(arr, opts) {
        _this.invoke(callback, opts, arr);
        number -= 1;
        frame += 1;
        if (!number) {
          return;
        }
        return _this.getFrame(frame, cb, opts);
      };
      return this.getFrame(frame, cb, opts);
    };

    Image.prototype.isDataCube = function() {
      if (this.naxis.length > 2) {
        return true;
      } else {
        return false;
      }
    };

    return Image;

  })(DataUnit);

  this.astro.FITS.Image = Image;

  Tabular = (function(_super) {
    __extends(Tabular, _super);

    Tabular.prototype.maxMemory = 1048576;

    function Tabular(header, data) {
      Tabular.__super__.constructor.apply(this, arguments);
      this.rowByteSize = header.get("NAXIS1");
      this.rows = header.get("NAXIS2");
      this.cols = header.get("TFIELDS");
      this.length = this.rowByteSize * this.rows;
      this.heapLength = header.get("PCOUNT");
      this.columns = this.getColumns(header);
      if (this.buffer != null) {
        this.rowsInMemory = this._rowsInMemoryBuffer;
        this.heap = this.buffer.slice(this.length, this.length + this.heapLength);
      } else {
        this.rowsInMemory = this._rowsInMemoryBlob;
        this.firstRowInBuffer = this.lastRowInBuffer = 0;
        this.nRowsInBuffer = Math.floor(this.maxMemory / this.rowByteSize);
      }
      this.accessors = [];
      this.descriptors = [];
      this.elementByteLengths = [];
      this.setAccessors(header);
    }

    Tabular.prototype._rowsInMemoryBuffer = function() {
      return true;
    };

    Tabular.prototype._rowsInMemoryBlob = function(firstRow, lastRow) {
      if (firstRow < this.firstRowInBuffer) {
        return false;
      }
      if (lastRow > this.lastRowInBuffer) {
        return false;
      }
      return true;
    };

    Tabular.prototype.getColumns = function(header) {
      var columns, i, key, _i, _ref;
      columns = [];
      for (i = _i = 1, _ref = this.cols; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        key = "TTYPE" + i;
        if (!header.contains(key)) {
          return null;
        }
        columns.push(header.get(key));
      }
      return columns;
    };

    Tabular.prototype.getColumn = function(name, callback, opts) {
      var accessor, cb, column, descriptor, elementByteLength, elementByteOffset, factor, i, index, iterations, rowsPerIteration,
        _this = this;
      if (this.blob != null) {
        index = this.columns.indexOf(name);
        descriptor = this.descriptors[index];
        accessor = this.accessors[index];
        elementByteLength = this.elementByteLengths[index];
        elementByteOffset = this.elementByteLengths.slice(0, index);
        if (elementByteOffset.length === 0) {
          elementByteOffset = 0;
        } else {
          elementByteOffset = elementByteOffset.reduce(function(a, b) {
            return a + b;
          });
        }
        column = this.typedArray[descriptor] != null ? new this.typedArray[descriptor](this.rows) : [];
        rowsPerIteration = ~~(this.maxMemory / this.rowByteSize);
        rowsPerIteration = Math.min(rowsPerIteration, this.rows);
        factor = this.rows / rowsPerIteration;
        iterations = Math.floor(factor) === factor ? factor : Math.floor(factor) + 1;
        i = 0;
        index = 0;
        cb = function(buffer, opts) {
          var nRows, offset, startRow, view;
          nRows = buffer.byteLength / _this.rowByteSize;
          view = new DataView(buffer);
          offset = elementByteOffset;
          while (nRows--) {
            column[i] = accessor(view, offset)[0];
            i += 1;
            offset += _this.rowByteSize;
          }
          iterations -= 1;
          index += 1;
          if (iterations) {
            startRow = index * rowsPerIteration;
            return _this.getTableBuffer(startRow, rowsPerIteration, cb, opts);
          } else {
            _this.invoke(callback, opts, column);
          }
        };
        return this.getTableBuffer(0, rowsPerIteration, cb, opts);
      } else {
        cb = function(rows, opts) {
          column = rows.map(function(d) {
            return d[name];
          });
          return _this.invoke(callback, opts, column);
        };
        return this.getRows(0, this.rows, cb, opts);
      }
    };

    Tabular.prototype.getTableBuffer = function(row, number, callback, opts) {
      var begin, blobRows, end, reader,
        _this = this;
      number = Math.min(this.rows - row, number);
      begin = row * this.rowByteSize;
      end = begin + number * this.rowByteSize;
      blobRows = this.blob.slice(begin, end);
      reader = new FileReader();
      reader.row = row;
      reader.number = number;
      reader.onloadend = function(e) {
        return _this.invoke(callback, opts, e.target.result);
      };
      return reader.readAsArrayBuffer(blobRows);
    };

    Tabular.prototype.getRows = function(row, number, callback, opts) {
      var begin, blobRows, buffer, end, reader, rows,
        _this = this;
      if (this.rowsInMemory(row, row + number)) {
        if (this.blob != null) {
          buffer = this.buffer;
        } else {
          begin = row * this.rowByteSize;
          end = begin + number * this.rowByteSize;
          buffer = this.buffer.slice(begin, end);
        }
        rows = this._getRows(buffer, number);
        this.invoke(callback, opts, rows);
        return rows;
      } else {
        begin = row * this.rowByteSize;
        end = begin + Math.max(this.nRowsInBuffer * this.rowByteSize, number * this.rowByteSize);
        blobRows = this.blob.slice(begin, end);
        reader = new FileReader();
        reader.row = row;
        reader.number = number;
        reader.onloadend = function(e) {
          var target;
          target = e.target;
          _this.buffer = target.result;
          _this.firstRowInBuffer = _this.lastRowInBuffer = target.row;
          _this.lastRowInBuffer += target.number;
          return _this.getRows(row, number, callback, opts);
        };
        return reader.readAsArrayBuffer(blobRows);
      }
    };

    return Tabular;

  })(DataUnit);

  this.astro.FITS.Tabular = Tabular;

  Table = (function(_super) {
    __extends(Table, _super);

    function Table() {
      _ref = Table.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Table.prototype.dataAccessors = {
      A: function(value) {
        return value.trim();
      },
      I: function(value) {
        return parseInt(value);
      },
      F: function(value) {
        return parseFloat(value);
      },
      E: function(value) {
        return parseFloat(value);
      },
      D: function(value) {
        return parseFloat(value);
      }
    };

    Table.prototype.setAccessors = function(header) {
      var descriptor, form, i, match, pattern, type, _i, _ref1, _results,
        _this = this;
      pattern = /([AIFED])(\d+)\.*(\d+)*/;
      _results = [];
      for (i = _i = 1, _ref1 = this.cols; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        form = header.get("TFORM" + i);
        type = header.get("TTYPE" + i);
        match = pattern.exec(form);
        descriptor = match[1];
        _results.push((function(descriptor) {
          var accessor;
          accessor = function(value) {
            return _this.dataAccessors[descriptor](value);
          };
          return _this.accessors.push(accessor);
        })(descriptor));
      }
      return _results;
    };

    Table.prototype._getRows = function(buffer) {
      var accessor, arr, begin, end, i, index, line, nRows, row, rows, subarray, value, _i, _j, _k, _len, _len1, _ref1, _ref2;
      nRows = buffer.byteLength / this.rowByteSize;
      arr = new Uint8Array(buffer);
      rows = [];
      for (i = _i = 0, _ref1 = nRows - 1; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
        begin = i * this.rowByteSize;
        end = begin + this.rowByteSize;
        subarray = arr.subarray(begin, end);
        line = '';
        for (_j = 0, _len = subarray.length; _j < _len; _j++) {
          value = subarray[_j];
          line += String.fromCharCode(value);
        }
        line = line.trim().split(/\s+/);
        row = {};
        _ref2 = this.accessors;
        for (index = _k = 0, _len1 = _ref2.length; _k < _len1; index = ++_k) {
          accessor = _ref2[index];
          value = line[index];
          row[this.columns[index]] = accessor(value);
        }
        rows.push(row);
      }
      return rows;
    };

    return Table;

  })(Tabular);

  this.astro.FITS.Table = Table;

  BinaryTable = (function(_super) {
    __extends(BinaryTable, _super);

    function BinaryTable() {
      _ref1 = BinaryTable.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    BinaryTable.prototype.typedArray = {
      B: Uint8Array,
      I: Uint16Array,
      J: Uint32Array,
      E: Float32Array,
      D: Float64Array,
      1: Uint8Array,
      2: Uint16Array,
      4: Uint32Array
    };

    BinaryTable.offsets = {
      L: 1,
      B: 1,
      I: 2,
      J: 4,
      K: 8,
      A: 1,
      E: 4,
      D: 8,
      C: 8,
      M: 16
    };

    BinaryTable.prototype.dataAccessors = {
      L: function(view, offset) {
        var val, x;
        x = view.getInt8(offset);
        offset += 1;
        val = x === 84 ? true : false;
        return [val, offset];
      },
      B: function(view, offset) {
        var val;
        val = view.getUint8(offset);
        offset += 1;
        return [val, offset];
      },
      I: function(view, offset) {
        var val;
        val = view.getInt16(offset);
        offset += 2;
        return [val, offset];
      },
      J: function(view, offset) {
        var val;
        val = view.getInt32(offset);
        offset += 4;
        return [val, offset];
      },
      K: function(view, offset) {
        var factor, highByte, lowByte, mod, val;
        highByte = Math.abs(view.getInt32(offset));
        offset += 4;
        lowByte = Math.abs(view.getInt32(offset));
        offset += 4;
        mod = highByte % 10;
        factor = mod ? -1 : 1;
        highByte -= mod;
        val = factor * ((highByte << 32) | lowByte);
        return [val, offset];
      },
      A: function(view, offset) {
        var val;
        val = view.getUint8(offset);
        val = String.fromCharCode(val);
        offset += 1;
        return [val, offset];
      },
      E: function(view, offset) {
        var val;
        val = view.getFloat32(offset);
        offset += 4;
        return [val, offset];
      },
      D: function(view, offset) {
        var val;
        val = view.getFloat64(offset);
        offset += 8;
        return [val, offset];
      },
      C: function(view, offset) {
        var val, val1, val2;
        val1 = view.getFloat32(offset);
        offset += 4;
        val2 = view.getFloat32(offset);
        offset += 4;
        val = [val1, val2];
        return [val, offset];
      },
      M: function(view, offset) {
        var val, val1, val2;
        val1 = view.getFloat64(offset);
        offset += 8;
        val2 = view.getFloat64(offset);
        offset += 8;
        val = [val1, val2];
        return [val, offset];
      }
    };

    BinaryTable.prototype.toBits = function(byte) {
      var arr, i;
      arr = [];
      i = 128;
      while (i >= 1) {
        arr.push((byte & i ? 1 : 0));
        i /= 2;
      }
      return arr;
    };

    BinaryTable.prototype.getFromHeap = function(view, offset, descriptor) {
      var arr, heapOffset, heapSlice, i, length;
      length = view.getInt32(offset);
      offset += 4;
      heapOffset = view.getInt32(offset);
      offset += 4;
      heapSlice = this.heap.slice(heapOffset, heapOffset + length);
      arr = new this.typedArray[descriptor](heapSlice);
      i = arr.length;
      while (i--) {
        arr[i] = this.constructor.swapEndian[descriptor](arr[i]);
      }
      return [arr, offset];
    };

    BinaryTable.prototype.setAccessors = function(header) {
      var count, descriptor, form, i, isArray, match, pattern, type, _i, _ref2, _results,
        _this = this;
      pattern = /(\d*)([P|Q]*)([L|X|B|I|J|K|A|E|D|C|M]{1})/;
      _results = [];
      for (i = _i = 1, _ref2 = this.cols; 1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; i = 1 <= _ref2 ? ++_i : --_i) {
        form = header.get("TFORM" + i);
        type = header.get("TTYPE" + i);
        match = pattern.exec(form);
        count = parseInt(match[1]) || 1;
        isArray = match[2];
        descriptor = match[3];
        _results.push((function(descriptor, count) {
          var accessor, nBytes;
          _this.descriptors.push(descriptor);
          _this.elementByteLengths.push(_this.constructor.offsets[descriptor] * count);
          if (isArray) {
            switch (type) {
              case "COMPRESSED_DATA":
                accessor = function(view, offset) {
                  var arr, pixels, _ref3;
                  _ref3 = _this.getFromHeap(view, offset, descriptor), arr = _ref3[0], offset = _ref3[1];
                  pixels = new _this.typedArray[_this.algorithmParameters["BYTEPIX"]](_this.ztile[0]);
                  Decompress.Rice(arr, _this.algorithmParameters["BLOCKSIZE"], _this.algorithmParameters["BYTEPIX"], pixels, _this.ztile[0], Decompress.RiceSetup);
                  return [pixels, offset];
                };
                break;
              case "GZIP_COMPRESSED_DATA":
                accessor = function(view, offset) {
                  var arr;
                  arr = new Float32Array(_this.width);
                  i = arr.length;
                  while (i--) {
                    arr[i] = NaN;
                  }
                  return [arr, offset];
                };
                break;
              default:
                accessor = function(view, offset) {
                  return _this.getFromHeap(view, offset, descriptor);
                };
            }
          } else {
            if (count === 1) {
              accessor = function(view, offset) {
                var value, _ref3;
                _ref3 = _this.dataAccessors[descriptor](view, offset), value = _ref3[0], offset = _ref3[1];
                return [value, offset];
              };
            } else {
              if (descriptor === 'X') {
                nBytes = Math.log(count) / Math.log(2);
                accessor = function(view, offset) {
                  var arr, bits, buffer, byte, bytes, _j, _len;
                  buffer = view.buffer.slice(offset, offset + nBytes);
                  bytes = new Uint8Array(buffer);
                  bits = [];
                  for (_j = 0, _len = bytes.length; _j < _len; _j++) {
                    byte = bytes[_j];
                    arr = _this.toBits(byte);
                    bits = bits.concat(arr);
                  }
                  offset += nBytes;
                  return [bits.slice(0, +(count - 1) + 1 || 9e9), offset];
                };
              } else if (descriptor === 'A') {
                accessor = function(view, offset) {
                  var arr, buffer, s, value, _j, _len;
                  buffer = view.buffer.slice(offset, offset + count);
                  arr = new Uint8Array(buffer);
                  s = '';
                  for (_j = 0, _len = arr.length; _j < _len; _j++) {
                    value = arr[_j];
                    s += String.fromCharCode(value);
                  }
                  s = s.trim();
                  offset += count;
                  return [s, offset];
                };
              } else {
                accessor = function(view, offset) {
                  var data, value, _ref3;
                  i = count;
                  data = [];
                  while (i--) {
                    _ref3 = _this.dataAccessors[descriptor](view, offset), value = _ref3[0], offset = _ref3[1];
                    data.push(value);
                  }
                  return [data, offset];
                };
              }
            }
          }
          return _this.accessors.push(accessor);
        })(descriptor, count));
      }
      return _results;
    };

    BinaryTable.prototype._getRows = function(buffer, nRows) {
      var accessor, index, offset, row, rows, value, view, _i, _len, _ref2, _ref3;
      view = new DataView(buffer);
      offset = 0;
      rows = [];
      while (nRows--) {
        row = {};
        _ref2 = this.accessors;
        for (index = _i = 0, _len = _ref2.length; _i < _len; index = ++_i) {
          accessor = _ref2[index];
          _ref3 = accessor(view, offset), value = _ref3[0], offset = _ref3[1];
          row[this.columns[index]] = value;
        }
        rows.push(row);
      }
      return rows;
    };

    return BinaryTable;

  })(Tabular);

  this.astro.FITS.BinaryTable = BinaryTable;

  Decompress = {
    RiceSetup: {
      1: function(array) {
        var fsbits, fsmax, lastpix, pointer;
        pointer = 1;
        fsbits = 3;
        fsmax = 6;
        lastpix = array[0];
        return [fsbits, fsmax, lastpix, pointer];
      },
      2: function(array) {
        var bytevalue, fsbits, fsmax, lastpix, pointer;
        pointer = 2;
        fsbits = 4;
        fsmax = 14;
        lastpix = 0;
        bytevalue = array[0];
        lastpix = lastpix | (bytevalue << 8);
        bytevalue = array[1];
        lastpix = lastpix | bytevalue;
        return [fsbits, fsmax, lastpix, pointer];
      },
      4: function(array) {
        var bytevalue, fsbits, fsmax, lastpix, pointer;
        pointer = 4;
        fsbits = 5;
        fsmax = 25;
        lastpix = 0;
        bytevalue = array[0];
        lastpix = lastpix | (bytevalue << 24);
        bytevalue = array[1];
        lastpix = lastpix | (bytevalue << 16);
        bytevalue = array[2];
        lastpix = lastpix | (bytevalue << 8);
        bytevalue = array[3];
        lastpix = lastpix | bytevalue;
        return [fsbits, fsmax, lastpix, pointer];
      }
    },
    Rice: function(array, blocksize, bytepix, pixels, nx, setup) {
      var b, bbits, diff, fs, fsbits, fsmax, i, imax, k, lastpix, nbits, nonzeroCount, nzero, pointer, _ref2, _ref3;
      bbits = 1 << fsbits;
      _ref2 = setup[bytepix](array), fsbits = _ref2[0], fsmax = _ref2[1], lastpix = _ref2[2], pointer = _ref2[3];
      nonzeroCount = new Uint8Array(256);
      nzero = 8;
      _ref3 = [128, 255], k = _ref3[0], i = _ref3[1];
      while (i >= 0) {
        while (i >= k) {
          nonzeroCount[i] = nzero;
          i -= 1;
        }
        k = k / 2;
        nzero -= 1;
      }
      nonzeroCount[0] = 0;
      b = array[pointer++];
      nbits = 8;
      i = 0;
      while (i < nx) {
        nbits -= fsbits;
        while (nbits < 0) {
          b = (b << 8) | array[pointer++];
          nbits += 8;
        }
        fs = (b >> nbits) - 1;
        b &= (1 << nbits) - 1;
        imax = i + blocksize;
        if (imax > nx) {
          imax = nx;
        }
        if (fs < 0) {
          while (i < imax) {
            pixels[i] = lastpix;
            i += 1;
          }
        } else if (fs === fsmax) {
          while (i < imax) {
            k = bbits - nbits;
            diff = b << k;
            k -= 8;
            while (k >= 0) {
              b = array[pointer++];
              diff |= b << k;
              k -= 8;
            }
            if (nbits > 0) {
              b = array[pointer++];
              diff |= b >> (-k);
              b &= (1 << nbits) - 1;
            } else {
              b = 0;
            }
            if ((diff & 1) === 0) {
              diff = diff >> 1;
            } else {
              diff = ~(diff >> 1);
            }
            pixels[i] = diff + lastpix;
            lastpix = pixels[i];
            i++;
          }
        } else {
          while (i < imax) {
            while (b === 0) {
              nbits += 8;
              b = array[pointer++];
            }
            nzero = nbits - nonzeroCount[b];
            nbits -= nzero + 1;
            b ^= 1 << nbits;
            nbits -= fs;
            while (nbits < 0) {
              b = (b << 8) | array[pointer++];
              nbits += 8;
            }
            diff = (nzero << fs) | (b >> nbits);
            b &= (1 << nbits) - 1;
            if ((diff & 1) === 0) {
              diff = diff >> 1;
            } else {
              diff = ~(diff >> 1);
            }
            pixels[i] = diff + lastpix;
            lastpix = pixels[i];
            i++;
          }
        }
      }
      return pixels;
    }
  };

  this.astro.FITS.Decompress = Decompress;

  CompressedImage = (function(_super) {
    __extends(CompressedImage, _super);

    CompressedImage.include(ImageUtils);

    CompressedImage.extend(Decompress);

    CompressedImage.randomGenerator = function() {
      var a, i, m, random, seed, temp, _i;
      a = 16807;
      m = 2147483647;
      seed = 1;
      random = new Float32Array(10000);
      for (i = _i = 0; _i <= 9999; i = ++_i) {
        temp = a * seed;
        seed = temp - m * parseInt(temp / m);
        random[i] = seed / m;
      }
      return random;
    };

    CompressedImage.randomSequence = CompressedImage.randomGenerator();

    function CompressedImage(header, data) {
      var i, key, value, ztile, _i, _ref2;
      CompressedImage.__super__.constructor.apply(this, arguments);
      this.zcmptype = header.get("ZCMPTYPE");
      this.zbitpix = header.get("ZBITPIX");
      this.znaxis = header.get("ZNAXIS");
      this.zblank = header.get("ZBLANK");
      this.blank = header.get("BLANK");
      this.zdither = header.get('ZDITHER0') || 0;
      this.ztile = [];
      for (i = _i = 1, _ref2 = this.znaxis; 1 <= _ref2 ? _i <= _ref2 : _i >= _ref2; i = 1 <= _ref2 ? ++_i : --_i) {
        ztile = header.contains("ZTILE" + i) ? header.get("ZTILE" + i) : i === 1 ? header.get("ZNAXIS1") : 1;
        this.ztile.push(ztile);
      }
      this.width = header.get("ZNAXIS1");
      this.height = header.get("ZNAXIS2") || 1;
      this.algorithmParameters = {};
      if (this.zcmptype === 'RICE_1') {
        this.algorithmParameters["BLOCKSIZE"] = 32;
        this.algorithmParameters["BYTEPIX"] = 4;
      }
      i = 1;
      while (true) {
        key = "ZNAME" + i;
        if (!header.contains(key)) {
          break;
        }
        value = "ZVAL" + i;
        this.algorithmParameters[header.get(key)] = header.get(value);
        i += 1;
      }
      this.zmaskcmp = header.get("ZMASKCMP");
      this.zquantiz = header.get("ZQUANTIZ") || "LINEAR_SCALING";
      this.bzero = header.get("BZERO") || 0;
      this.bscale = header.get("BSCALE") || 1;
    }

    CompressedImage.prototype._getRows = function(buffer, nRows) {
      var accessor, arr, blank, data, i, index, nTile, offset, r, rIndex, row, scale, seed0, seed1, value, view, zero, _i, _j, _len, _len1, _ref2, _ref3;
      view = new DataView(buffer);
      offset = 0;
      arr = new Float32Array(this.width * this.height);
      while (nRows--) {
        row = {};
        _ref2 = this.accessors;
        for (index = _i = 0, _len = _ref2.length; _i < _len; index = ++_i) {
          accessor = _ref2[index];
          _ref3 = accessor(view, offset), value = _ref3[0], offset = _ref3[1];
          row[this.columns[index]] = value;
        }
        data = row['COMPRESSED_DATA'] || row['UNCOMPRESSED_DATA'] || row['GZIP_COMPRESSED_DATA'];
        blank = row['ZBLANK'] || this.zblank;
        scale = row['ZSCALE'] || this.bscale;
        zero = row['ZZERO'] || this.bzero;
        nTile = this.height - nRows;
        seed0 = nTile + this.zdither - 1;
        seed1 = (seed0 - 1) % 10000;
        rIndex = parseInt(this.constructor.randomSequence[seed1] * 500);
        for (index = _j = 0, _len1 = data.length; _j < _len1; index = ++_j) {
          value = data[index];
          i = (nTile - 1) * this.width + index;
          if (value === -2147483647) {
            arr[i] = NaN;
          } else if (value === -2147483646) {
            arr[i] = 0;
          } else {
            r = this.constructor.randomSequence[rIndex];
            arr[i] = (value - r + 0.5) * scale + zero;
          }
          rIndex += 1;
          if (rIndex === 10000) {
            seed1 = (seed1 + 1) % 10000;
            rIndex = parseInt(this.randomSequence[seed1] * 500);
          }
        }
      }
      return arr;
    };

    CompressedImage.prototype.getFrame = function(nFrame, callback, opts) {
      var heapBlob, reader,
        _this = this;
      if (this.heap) {
        this.frame = nFrame || this.frame;
        return this.getRows(0, this.rows, callback, opts);
      } else {
        heapBlob = this.blob.slice(this.length, this.length + this.heapLength);
        reader = new FileReader();
        reader.onloadend = function(e) {
          _this.heap = e.target.result;
          return _this.getFrame(nFrame, callback, opts);
        };
        return reader.readAsArrayBuffer(heapBlob);
      }
    };

    return CompressedImage;

  })(BinaryTable);

  this.astro.FITS.CompressedImage = CompressedImage;

  HDU = (function() {
    function HDU(header, data) {
      this.header = header;
      this.data = data;
    }

    HDU.prototype.hasData = function() {
      if (this.data != null) {
        return true;
      } else {
        return false;
      }
    };

    return HDU;

  })();

  this.astro.FITS.HDU = HDU;

}).call(this);


	

