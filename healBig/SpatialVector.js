SpatialVector = (function() {
    "use stric";
    
    function SpatialVector(t, s, i) {
        if (t) {
        (this.x = t), (this.y = s), (this.z = i), (this.ra_ = 0), (this.dec_ = 0), (this.okRaDec_ = !1);
    }
    };
    
        SpatialVector.prototype.setXYZ = function(t, s, i) {
            (this.x = t), (this.y = s), (this.z = i), (this.okRaDec_ = !1);
        };
        
        SpatialVector.prototype.length = function() {
            return Math.sqrt(this.lengthSquared());
        };
        
SpatialVector.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        };
        
SpatialVector.prototype.normalized = function() {
            var t = this.length();
            (this.x /= t), (this.y /= t), (this.z /= t);
        };
        
SpatialVector.prototype.set = function(t, s) {
    this.ra_ = t;
    this.dec_ = s;
    this.okRaDec_ = !0;
    var t = Math.cos(this.dec_ * Constants.C_PR);
    (this.x = Math.cos(this.ra_ * Constants.C_PR) * t), (this.y = Math.sin(this.ra_ * Constants.C_PR) * t), (this.z = Math.sin(this.dec_ * Constants.C_PR));
        };
        
SpatialVector.angle = function(t) {
            var s = this.y * t.z - this.z * t.y,
                i = this.z * t.x - this.x * t.z,
                n = this.x * t.y - this.y * t.x,
                a = Math.sqrt(s * s + i * i + n * n);
            return Math.abs(Math.atan2(a, dot(t)));
        };
        
SpatialVector.get = function() {
            return [x, y, z];
        };
        
SpatialVector.toString = function() {
            return "SpatialVector[" + this.x + ", " + this.y + ", " + this.z + "]";
        };
        
SpatialVector.cross = function(s) {
            return new SpatialVector(this.y * s.z - s.y * this.z, this.z * s.x - s.z * this.x, this.x * s.y - s.x() * this.y);
        };
        
SpatialVector.equal = function(t) {
            return this.x == t.x && this.y == t.y && this.z == t.z() ? !0 : !1;
        };
        
SpatialVector.mult = function(s) {
            return new SpatialVector(s * this.x, s * this.y, s * this.z);
        };
        
SpatialVector.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        };
        
SpatialVector.add = function(s) {
            return new SpatialVector(this.x + s.x, this.y + s.y, this.z + s.z);
            ;}
        
SpatialVector.sub = function(s) {
            return new SpatialVector(this.x - s.x, this.y - s.y, this.z - s.z);
        };
        
SpatialVector.prototype.dec = function() {
            return this.okRaDec_ || (this.normalized(), this.updateRaDec()), this.dec_;
        };
        
SpatialVector.prototype.ra = function() {
            return this.okRaDec_ || (this.normalized(), this.updateRaDec()), this.ra_;
            ;}
        
SpatialVector.updateXYZ = function() {
            var t = Math.cos(this.dec_ * Constants.C_PR);
            (this.x = Math.cos(this.ra_ * Constants.C_PR) * t), (this.y = Math.sin(this.ra_ * Constants.C_PR) * t), (this.z = Math.sin(this.dec_ * Constants.C_PR));
        };
        
SpatialVector.prototype.updateRaDec = function() {
            this.dec_ = Math.asin(this.z) / Constants.C_PR;
            var t = Math.cos(this.dec_ * Constants.C_PR);
            (this.ra_ =
                t > Constants.EPS || -Constants.EPS > t
                    ? this.y > Constants.EPS || this.y < -Constants.EPS
                        ? 0 > this.y
                            ? 360 - Math.acos(this.x / t) / Constants.C_PR
                            : Math.acos(this.x / t) / Constants.C_PR
                        : 0 > this.x
                        ? 180
                        : 0
                    : 0),
                (this.okRaDec_ = !0);
        };
        
        var updateRaDec = function() {
                    this.dec_ = Math.asin(this.z) / Constants.C_PR;
                    var t = Math.cos(this.dec_ * Constants.C_PR);
                    (this.ra_ =
                        t > Constants.EPS || -Constants.EPS > t
                            ? this.y > Constants.EPS || this.y < -Constants.EPS
                                ? 0 > this.y
                                    ? 360 - Math.acos(this.x / t) / Constants.C_PR
                                    : Math.acos(this.x / t) / Constants.C_PR
                                : 0 > this.x
                                ? 180
                                : 0
                            : 0),
                        (this.okRaDec_ = !0);
                };
SpatialVector.prototype.toRaRadians = function() {
            var t = 0;
            return (0 != this.x || 0 != this.y) && (t = Math.atan2(this.y, this.x)), 0 > t && (t += 2 * Math.PI), t;
        };
        
SpatialVector.toDeRadians = function() {
            var t = z / this.length(),
                s = Math.acos(t);
            return Math.PI / 2 - s;
        };
 
        return SpatialVector;       
})();
var v = new SpatialVector(1, 0, 0);
v.set(0.35, 1.22);