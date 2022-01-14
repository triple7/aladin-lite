var h = new HealpixIndex(8);
    const tests = require('./tests.json');

    var funcs = [];
    for (k in tests) {
        funcs.push(k);
    }

    var testFuncs = {
    vec2pix_nest: function(h, args) {
    return HealpixIndex.vec2pix_nest.apply(this, args);
    },
    vec2pix_ring: function(h, args) {
    return HealpixIndex.vec2pix_ring.apply(this, args);
    },
    ang2pix_nest: function(h, args) {
    return HealpixIndex.ang2pix_nest.apply(this, args);
    },
    ang2pix_ring: function(h, args) {
    return HealpixIndex.ang2pix_ring.apply(this, args);
    },
    nest2ring: function(h, args) {
    return HealpixIndex.nest2ring.apply(this, args);
    },
    ring2nest: function(h, args) {
    return HealpixIndex.ring2nest.apply(this, args);
    },
    pix2vec_nest: function(h, args) {
    return HealpixIndex.pix2vec_nest.apply(this, args);
    },
    pix2vec_ring: function(h, args) {
    return HealpixIndex.pix2vec_ring.apply(this, args);
    },
    nside2pixarea: function(h, args) {
    return HealpixIndex.nside2pixarea.apply(this, args);
    },
    nside2resol: function(h, args) {
    return HealpixIndex.nside2resol.apply(this, args);
    },
    max_pixrad: function(h, args) {
    return HealpixIndex.max_pixrad.apply(this, args);
    },
    corners_nest: function(h, args) {
    return HealpixIndex.corners_nest.apply(this, args);
    },
    corners_ring: function(h, args) {
    return HealpixIndex.corners_ring.apply(this, args);
    },
    orderpix2uniq: function(h, args) {
    return HealpixIndex.orderpix2uniq.apply(this, args);
    },
    uniq2orderpix: function(h, args) {
    return HealpixIndex.uniq2orderpix.apply(this, args);
    },
    nside2order: function(h, args) {
    return HealpixIndex.nside2order.apply(this, args);
    }
    };

    function equals(a, b) {

        if (typeof a === 'number' || typeof a === 'bigint') {
            return a == b;
        } else if (a.constructor == Object){
            for (k in a) {
                if (a[k] != b[k]) {
                    return false;
                }
            }
            return true;
        } else {
            for (var c = 0; c < e.length; ++c) {
                if (a[c].length === 'undefined') {
                    if (Math.abs(a[c] - e[c]) > 10e-4) {
                        return false;
                    }
                } else {
                    for (var i = 0; i < a[c].length; ++i) {
                        if (Math.abs(a[c][i] - e[c][i]) > 10e-5) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
    };

    var start = Date.now();
    var total = 0;

     for (f in testFuncs) {
         console.log(f);
         var cases = tests[f];
         var count = 0;
         for (t of cases) {
             total ++;
             var a = t.args;
             var e = t.expected;
             if (equals(testFuncs[f](h, a), e)) {
                 continue;
         }else {
             if (count == 0) {
                         console.log('expected \n'+e+'\ngot\n'+testFuncs[f](h, a));
                     }
                                 count ++;
         }
         }
         console.log('mismatch '+count);
         count = 0;
     }
     var end = Date.now();
     console.log('made '+total+' comparisons in '+((end-start)/1000)+' seconds');
