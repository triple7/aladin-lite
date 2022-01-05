HealpixIndex = (function() {
    "use strict";
var NSIDELIST = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216];
var NS_MAX = 16777216;
var ORDER_MAX = 24;
var PI2 = 2 * Math.PI;
var PI = Math.PI;
var PI_2 = Math.PI / 2;
var PI_4 = Math.PI / 4;
var PI_8 = Math.PI / 8;
var NSIDELIST = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216];

    function HealpixIndex(nside) {
    this.Nside = nside;
    console.log('created new hpxid '+nside);
    };
    
    HealpixIndex.order2nside = function(order) {
        return 1 << order;
    };

HealpixIndex.nside2order = function(nside) {
        return HealpixIndex.ilog2(nside);
    };

HealpixIndex.nside2Npix = function(nside) {
        return 12 * nside * nside;
    };

    HealpixIndex.vec2pix_nest = function(nside, v) {
        const { z, a } = HealpixIndex.vec2za(v[0], v[1], v[2]);
        return HealpixIndex.za2pix_nest(nside, z, a);
    };

HealpixIndex.vec2pix_ring = function(nside, v) {
        const { z, a } = HealpixIndex.vec2za(v[0], v[1], v[2]);
        return HealpixIndex.nest2ring(nside, HealpixIndex.za2pix_nest(nside, z, a));
    };

HealpixIndex.ang2pix_nest = function(nside, theta, phi) {
    console.log('external func');
        const z = Math.cos(theta);
        return HealpixIndex.za2pix_nest(nside, z, phi);
    };

    var ang2pix_nest = function(theta, phi) {
        console.log('internal func');
            const z = Math.cos(theta);
            return HealpixIndex.za2pix_nest(this.Nside, z, phi);
        };
        
HealpixIndex.ang2pix_ring = function(nside, theta, phi) {
        const z = Math.cos(theta);
        return HealpixIndex.nest2ring(nside, HealpixIndex.za2pix_nest(nside, z, phi));
    };

    HealpixIndex.nest2ring = function(nside, ipix) {
        const { f, x, y } = HealpixIndex.nest2fxy(nside, ipix);
        return HealpixIndex.fxy2ring(nside, f, x, y);
    };
    
HealpixIndex.ring2nest = function(nside, ipix) {
        if (nside == 1) {
            return ipix;
        }
        const { f, x, y } = HealpixIndex.ring2fxy(nside, ipix);
        return HealpixIndex.fxy2nest(nside, f, x, y);
    };
    
    HealpixIndex.ring2fxy = function(nside, ipix) {
        const polar_lim = 2 * nside * (nside - 1);
        if (ipix < polar_lim) { // north polar cap
            var i = Math.floor((Math.sqrt(1 + 2 * ipix) + 1) / 2);
            var j = ipix - 2 * i * (i - 1);
            var f = Math.floor(j / i);
            var k = j % i;
            var x = nside - i + k;
            const y = nside - 1 - k;
            return { f, x, y };
        }
        if (ipix < polar_lim + 8 * nside * nside) { // equatorial belt
            const k = ipix - polar_lim;
            const ring = 4 * nside;
            const i = nside - Math.floor(k / ring);
            const s = i % 2 == 0 ? 1 : 0;
            const j = 2 * (k % ring) + s;
            const jj = j - 4 * nside;
            const ii = i + 5 * nside - 1;
            const pp = (ii + jj) / 2;
            const qq = (ii - jj) / 2;
            const PP = Math.floor(pp / nside);
            const QQ = Math.floor(qq / nside);
            const V = 5 - (PP + QQ);
            const H = PP - QQ + 4;
            const f = 4 * V + (H >> 1) % 4;
            const x = pp % nside;
            const y = qq % nside;
            return { f, x, y };
        }
        else { // south polar cap
            const p = 12 * nside * nside - ipix - 1;
            const i = Math.floor((Math.sqrt(1 + 2 * p) + 1) / 2);
            const j = p - 2 * i * (i - 1);
            const f = 11 - Math.floor(j / i);
            const k = j % i;
            const x = i - k - 1;
            const y = k;
            return { f, x, y };
        }
    };
    
    HealpixIndex.pix2vec_nest = function(nside, ipix) {
        const { f, x, y } = HealpixIndex.nest2fxy(nside, ipix);
        const { t, u } = HealpixIndex.fxy2tu(nside, f, x, y);
        const { z, a } = HealpixIndex.tu2za(t, u);
        return HealpixIndex.za2vec(z, a);
    };
    
    HealpixIndex.pix2ang_nest = function(nside, ipix) {
        const { f, x, y } = HealpixIndex.nest2fxy(nside, ipix);
        const { t, u } = HealpixIndex.fxy2tu(nside, f, x, y);
        const { z, a } = HealpixIndex.tu2za(t, u);
        return { theta: Math.acos(z), phi: a };
    };

HealpixIndex.pix2vec_ring = function(nside, ipix) {
        return HealpixIndex.pix2vec_nest(nside, HealpixIndex.ring2nest(nside, ipix));
    };

HealpixIndex.pix2ang_ring = function(nside, ipix) {
        return HealpixIndex.pix2ang_nest(nside, HealpixIndex.ring2nest(nside, ipix));
    };

    // TODO: cleanup
    HealpixIndex.query_disc_inclusive_nest = function(nside, v, radius, cb) {
        if (radius >HealpixIndex.PI_2) {
            throw new Error(`query_disc: radius must <HealpixIndex.PI/2`);
        }
        constHealpixIndex.PIxrad = HealpixIndex.max_pixrad(nside);
        const d =HealpixIndex.PI_4 / nside;
        const { z: z0, a: a0 } = HealpixIndex.vec2za(v[0], v[1], v[2]); // z0 = cos(theta)
        const sin_t = Math.sqrt(1n - z0 * z0);
        const cos_r = Math.cos(radius); // r := radius 
        const sin_r = Math.sin(radius);
        const z1 = z0 * cos_r + sin_t * sin_r; // cos(theta - r)
        const z2 = z0 * cos_r - sin_t * sin_r; // cos(theta + r)
        const u1 = HealpixIndex.za2tu(z1, 0).u;
        const u2 = HealpixIndex.za2tu(z2, 0).u;
        const cover_north_pole = sin_t * cos_r - z0 * sin_r < 0; // sin(theta - r) < 0
        const cover_south_pole = sin_t * cos_r + z0 * sin_r < 0; // sin(theta - r) < 0
        let i1 = Math.floor((PI_2 - u1) / d);
        let i2 = Math.floor((PI_2 - u2) / d + 1);
        if (cover_north_pole) {
            ++i1;
            for (let i = 1; i <= i1; ++i)
                HealpixIndex.walk_ring(nside, i, cb);
            ++i1;
        }
        if (i1 == 0) {
            HealpixIndex.walk_ring(nside, 1, cb);
            i1 = 2;
        }
        if (cover_south_pole) {
            --i2;
            for (let i = i2; i <= 4 * nside - 1; ++i)
                HealpixIndex.walk_ring(nside, i, cb);
            --i2;
        }
        if (i2 == 4n * nside) {
            HealpixIndex.walk_ring(nside, 4n * nside - 1, cb);
            i2 = 4n * nside - 2n;
        }
        const theta = Math.acos(z0);
        for (let i = i1; i <= i2; ++i)
            HealpixIndex.walk_ring_around(nside, i, a0, theta, radius +HealpixIndex.PIxrad, function(ipix) {
                if (HealpixIndex.angle(HealpixIndex.pix2vec_nest(nside, ipix), v) <= radius +HealpixIndex.PIxrad)
                    cb(ipix);
            });
    };

    var queryDisc = function(v, radius, cb) {
        console.log('querying '+v.x+' '+v.y+' '+v.z+' '+radius);
        var nside = this.Nside;
        if (radius >HealpixIndex.PI_2) {
            throw new Error(`query_disc: radius must <HealpixIndex.PI/2`);
        }
        constHealpixIndex.PIxrad = HealpixIndex.max_pixrad(nside);
        const d =HealpixIndex.PI_4 / nside;
        const { z: z0, a: a0 } = HealpixIndex.vec2za(v.x, v.y, v.z); // z0 = cos(theta)
        const sin_t = Math.sqrt(1n - z0 * z0);
        const cos_r = Math.cos(radius); // r := radius 
        const sin_r = Math.sin(radius);
        const z1 = z0 * cos_r + sin_t * sin_r; // cos(theta - r)
        const z2 = z0 * cos_r - sin_t * sin_r; // cos(theta + r)
        const u1 = HealpixIndex.za2tu(z1, 0).u;
        const u2 = HealpixIndex.za2tu(z2, 0).u;
        const cover_north_pole = sin_t * cos_r - z0 * sin_r < 0; // sin(theta - r) < 0
        const cover_south_pole = sin_t * cos_r + z0 * sin_r < 0; // sin(theta - r) < 0
        let i1 = Math.floor((PI_2 - u1) / d);
        let i2 = Math.floor((PI_2 - u2) / d + 1);
        if (cover_north_pole) {
            ++i1;
            for (let i = 1; i <= i1; ++i)
                HealpixIndex.walk_ring(nside, i, cb);
            ++i1;
        }
        if (i1 == 0) {
            HealpixIndex.walk_ring(nside, 1, cb);
            i1 = 2;
        }
        if (cover_south_pole) {
            --i2;
            for (let i = i2; i <= 4 * nside - 1; ++i)
                HealpixIndex.walk_ring(nside, i, cb);
            --i2;
        }
        if (i2 == 4 * nside) {
            HealpixIndex.walk_ring(nside, 4 * nside - 1, cb);
            i2 = 4 * nside - 2;
        }
        const theta = Math.acos(z0);
        for (let i = i1; i <= i2; ++i)
            HealpixIndex.walk_ring_around(nside, i, a0, theta, radius +HealpixIndex.PIxrad, function(ipix) {
                if (HealpixIndex.angle(HealpixIndex.pix2vec_nest(nside, ipix), v) <= radius +HealpixIndex.PIxrad)
                    cb(ipix);
            });
    };
    
HealpixIndex.query_disc_inclusive_ring = function(nside, v, radius, cb_ring) {
        return HealpixIndex.query_disc_inclusive_nest(nside, v, radius, function(ipix) {
            cb_ring(nest2ring(nside, ipix));
        });
    };

HealpixIndex.max_pixrad = function(nside) {
        const unit =HealpixIndex.PI_4 / nside;
        return HealpixIndex.angle(
            HealpixIndex.tu2vec(unit, nside * unit),
            HealpixIndex.tu2vec(unit, (nside + 1) * unit),
        );
    };

HealpixIndex.angle = function(a, b) {
        return 2 * Math.asin(Math.sqrt(HealpixIndex.distance2(a, b)) / 2);
    };

HealpixIndex.tu2vec = function(t, u) {
        const { z, a } = HealpixIndex.tu2za(t, u);
        return HealpixIndex.za2vec(z, a);
    };

HealpixIndex.distance2 = function(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return dx * dx + dy * dy  + dz * dz;
    };

HealpixIndex.walk_ring_around = function(nside, i, a0, theta, r, cb) {
        if (theta < r || theta + r >HealpixIndex.PI)
            return walk_ring(nside, i, cb);
        const u =HealpixIndex.PI_4 * (2n - i / nside);
        const z = HealpixIndex.tu2za(PI_4, u).z;
        const st = Math.sin(theta);
        const ct = Math.cos(theta);
        const sr = Math.sin(r);
        const cr = Math.cos(r);
        const w = Math.atan2(
            Math.sqrt(-HealpixIndex.square(z - ct * cr) / (square(st) * sr * sr) + 1) * sr,
            (-z * ct + cr) / st
        );
        if (w >=HealpixIndex.PI)
            return HealpixIndex.walk_ring(nside, i, cb);
        const t1 = HealpixIndex.center_t(nside, i, za2tu(z, HealpixIndex.wrap(a0 - w,HealpixIndex.PI2)).t);
        const t2 = HealpixIndex.center_t(nside, i, HealpixIndex.za2tu(z, wrap(a0 + w,HealpixIndex.PI2)).t);
        const begin = HealpixIndex.tu2fxy(nside, t1, u);
        const end = HealpixIndex.right_next_pixel(nside, HealpixIndex.tu2fxy(nside, t2, u));
        for (let s = begin; !HealpixIndex.fxy_compare(s, end); s = HealpixIndex.right_next_pixel(nside, s)) {
            cb(HealpixIndex.fxy2nest(nside, s.f, s.x, s.y));
        }
    };

HealpixIndex.center_t = function(nside, i, t) {
        var d =HealpixIndex.PI_4 / nside;
        t /= d;
        t = (((t + i % 2) >> 1) << 1) + 1 - i % 2;
        t *= d;
        return t;
    };

HealpixIndex.walk_ring = function(nside, i, cb) {
        const u =HealpixIndex.PI_4 * (2 - i / nside);
        const t =HealpixIndex.PI_4 * (1 + (1 - i % 2) / nside);
        const begin = HealpixIndex.tu2fxy(nside, t, u);
        let s = begin;
        do {
            cb(HealpixIndex.fxy2nest(nside, s.f, s.x, s.y));
            s = HealpixIndex.right_next_pixel(nside, s);
        } while (!HealpixIndex.fxy_compare(s, begin))
    };

HealpixIndex.fxy_compare = function(a, b) {
        return a.x == b.x && a.y == b.y && a.f == b.f;
    };

HealpixIndex.right_next_pixel = function(nside, { f, x, y}) {
        ++x;
        if (x == nside) {
            switch (Math.floor(f / 4)) {
                case 0:
                    f = (f + 1) % 4;
                    x = y;
                    y = nside;
                    break;
                case 1:
                    f = f - 4;
                    x = 0;
                    break;
                case 2:
                    f = 4 + (f + 1) % 4;
                    x = 0;
                    break;
            }
        }
        --y;
        if (y == -1) {
            switch (Math.floor(f / 4)) {
                case 0:
                    f = 4 + (f + 1) % 4;
                    y = nside - 1;
                    break
                case 1:
                    f = f + 4;
                    y = nside - 1;
                    break;
                case 2: {
                    f = 8 + (f + 1) % 4;
                    y = x - 1;
                    x = 0;
                    break;
                }
            }
        }
        return { f, x, y };
    };

HealpixIndex.corners_nest = function(ipix, nside) {
    console.log('getting corners');
        const { f, x, y } = HealpixIndex.nest2fxy(nside, ipix);
        const { t, u } = HealpixIndex.fxy2tu(nside, f, x, y);
        const d =HealpixIndex.PI_4 / nside;
        var xyzs = [];
        for (const [tt, uu] of [
            [0, d],
            [-d, 0],
            [0, -d],
            [d, 0],
        ]) {
            const { z, a } = HealpixIndex.tu2za(t + tt, u + uu);
            xyzs.push(HealpixIndex.za2vec(z, a));
        }
        return xyzs;
    };
    
HealpixIndex.prototype.corners_nest = function(ipix) {
            const { f, x, y } = HealpixIndex.nest2fxy(this.Nside, ipix);
            const { t, u } = HealpixIndex.fxy2tu(this.Nside, f, x, y);
            const d =HealpixIndex.PI_4 / this.Nside;
            var xyzs = [];
            for (const [tt, uu] of [
                [0, d],
                [-d, 0],
                [0, -d],
                [d, 0],
            ]) {
                const { z, a } = HealpixIndex.tu2za(t + tt, u + uu);
                xyzs.push(HealpixIndex.za2vec(z, a));
            }
            return xyzs;
        };
        
HealpixIndex.corners_ring = function(nside, ipix) {
        return HealpixIndex.corners_nest(nside, HealpixIndex.ring2nest(nside, ipix));
    };

    //HealpixIndex.PIxel area
HealpixIndex.nside2pixarea = function(nside) {
        returnHealpixIndex.PI / (3 * nside * nside); //$$
    };

    // averageHealpixIndex.PIxel size
HealpixIndex.nside2resol = function(nside) {
        return Math.sqrt(PI / 3) / nside;
    };

HealpixIndex.pixcoord2vec_nest = function(nside, ipix, ne, nw) {
        const { f, x, y } = HealpixIndex.nest2fxy(nside, ipix);
        const { t, u } = HealpixIndex.fxy2tu(nside, f, x, y);
        const d =HealpixIndex.PI_4 / nside;
        const { z, a } = HealpixIndex.tu2za(t + d * (ne - nw), u + d * (ne + nw - 1));
        return HealpixIndex.za2vec(z, a);
    };

HealpixIndex.pixcoord2vec_ring = function(nside, ipix, ne, nw) {
        return HealpixIndex.pixcoord2vec_nest(nside, HealpixIndex.ring2nest(nside, ipix), ne, nw);
    };

HealpixIndex.za2pix_nest = function(nside, z, a) {
        const { t, u } = HealpixIndex.za2tu(z, a);
        const { f, x, y } = HealpixIndex.tu2fxy(nside, t, u);
        return HealpixIndex.fxy2nest(nside, f, x, y);
    };

HealpixIndex.tu2fxy = function(nside, t, u) {
        const { f, p, q } = HealpixIndex.tu2fpq(t, u);
        const x = HealpixIndex.clip(Math.floor(nside * p), 0, nside - 1);
        const y = HealpixIndex.clip(Math.floor(nside * q), 0, nside - 1);
        return { f, x, y };
    };

HealpixIndex.wrap = function(A, B) {
        return A < 0 ? B - (-A % B) : A % B;
    };

HealpixIndex.sigma = function(z) {
        if (z < 0)
            return -HealpixIndex.sigma(-z);
        else
            return 2 - Math.sqrt(3 * (1 - z));
    };

    /**
     * HEALPix spherical projection.
     */
HealpixIndex.za2tu = function(z, a) {
        if (Math.abs(z) <= 2 / 3) { // equatorial belt
            const t = a;
            const u = 3 *HealpixIndex.PI_8 * z;
            return { t, u };
        }
        else { // polar caps
            const p_t = a % (PI_2);
            const sigma_z = HealpixIndex.sigma(z);
            const t = a - (Math.abs(sigma_z) - 1) * (p_t -HealpixIndex.PI_4);
            const u =HealpixIndex.PI_4 * sigma_z;
            return { t, u };
        }
    };

    /**
     * Inverse HEALPix spherical projection.
     */
HealpixIndex.tu2za = function(t, u) {
        const abs_u = Math.abs(u);
        if (abs_u >=HealpixIndex.PI_2) { // error
            return { z: HealpixIndex.sign(u), a: 0 };
        }
        if (abs_u <= Math.PI / 4) { // equatorial belt
            const z = 8 / (3 *HealpixIndex.PI) * u;
            const a = t;
            return { z, a };
        }
        else { // polar caps
            const t_t = t % (Math.PI / 2);
            const a = t - (abs_u -HealpixIndex.PI_4) / (abs_u -HealpixIndex.PI_2) * (t_t -HealpixIndex.PI_4);
            const z = HealpixIndex.sign(u) * (1 - 1 / 3 * HealpixIndex.square(2 - 4 * abs_u /HealpixIndex.PI));
            return { z, a };
        }
    };

    // (x, y, z) -> (z = cos(theta), phi)
HealpixIndex.vec2za = function(X, Y, z) {
        const r2 = X * X + Y * Y;
        if (r2 == 0)
            return { z: z < 0 ? -1 : 1, a: 0 };
        else {
            const a = (Math.atan2(Y, X) +HealpixIndex.PI2) %HealpixIndex.PI2;
            z /= Math.sqrt(z * z + r2);
            return { z, a };
        }
    };

    // (z = cos(theta), phi) -> (x, y, z)
HealpixIndex.za2vec = function(z, a) {
        const sin_theta = Math.sqrt(1 - z * z);
        const X = sin_theta * Math.cos(a);
        const Y = sin_theta * Math.sin(a);
        return new SpatialVector(X, Y, z);
    };

HealpixIndex.ang2vec = function(theta, phi) {
        const z = Math.cos(theta);
        return za2vec(z, phi);
    };

HealpixIndex.vec2ang = function(v) {
        const { z, a } = vec2za(v[0], v[1], v[2]);
        return { theta: Math.acos(z), phi: a };
    };

    // spherical projection -> f, p, q
    // f: baseHealpixIndex.PIxel index
    // p: coord in north east axis of baseHealpixIndex.PIxel
    // q: coord in north west axis of baseHealpixIndex.PIxel
HealpixIndex.tu2fpq = function(t, u) {
        t /=HealpixIndex.PI_4;
        u /=HealpixIndex.PI_4;
        t = HealpixIndex.wrap(t, 8);
        t += -4;
        u += 5;
        const pp = HealpixIndex.clip((u + t) / 2, 0, 5);
        const PP = Math.floor(pp);
        const qq = HealpixIndex.clip((u - t) / 2, 3 - PP, 6 - PP);
        const QQ = Math.floor(qq);
        const V = 5 - (PP + QQ);
        if (V < 0) { // clip
            return { f: 0, p: 1, q: 1 };
        }
        const H = PP - QQ + 4;
        const f = 4 * V + (H >> 1) % 4;
        const p = pp % 1;
        const q = qq % 1;
        return { f, p, q };
    };

    // f, p, q -> nest index
HealpixIndex.fxy2nest = function(nside, f, x, y) {
        return BigInt(f) * BigInt(nside) * BigInt(nside) + HealpixIndex.bit_combine(x, y);
    };

    // x = (...x2 x1 x0)_2 <- in binary
    // y = (...y2 y1 y0)_2
    // p = (...y2 x2 y1 x1 y0 x0)_2
    // returns p
/* Python for bit manipulation
n = 25
s = ' | '.join(['x & 1'] + [f'(x & BigInt(0x{2 ** (i+1):x}) | y & BigInt(0x{2 ** i:x})) << {i + 1}n' for i in range(n)] + [f'y & BigInt(0x{2**n:x}) << {n+1}n'])
*/
HealpixIndex.bit_combine = function(x, y) {
        var x = BigInt(x);
        var y = BigInt(y);
        HealpixIndex.assert(x < (1n << 26n));
        HealpixIndex.assert(y < (1n << 25n));

        return (
            x & 1n | (x & BigInt(0x2) | y & BigInt(0x1)) << 1n | (x & BigInt(0x4) | y & BigInt(0x2)) << 2n | (x & BigInt(0x8) | y & BigInt(0x4)) << 3n | (x & BigInt(0x10) | y & BigInt(0x8)) << 4n | (x & BigInt(0x20) | y & BigInt(0x10)) << 5n | (x & BigInt(0x40) | y & BigInt(0x20)) << 6n | (x & BigInt(0x80) | y & BigInt(0x40)) << 7n | (x & BigInt(0x100) | y & BigInt(0x80)) << 8n | (x & BigInt(0x200) | y & BigInt(0x100)) << 9n | (x & BigInt(0x400) | y & BigInt(0x200)) << 10n | (x & BigInt(0x800) | y & BigInt(0x400)) << 11n | (x & BigInt(0x1000) | y & BigInt(0x800)) << 12n | (x & BigInt(0x2000) | y & BigInt(0x1000)) << 13n | (x & BigInt(0x4000) | y & BigInt(0x2000)) << 14n | (x & BigInt(0x8000) | y & BigInt(0x4000)) << 15n | (x & BigInt(0x10000) | y & BigInt(0x8000)) << 16n | (x & BigInt(0x20000) | y & BigInt(0x10000)) << 17n | (x & BigInt(0x40000) | y & BigInt(0x20000)) << 18n | (x & BigInt(0x80000) | y & BigInt(0x40000)) << 19n | (x & BigInt(0x100000) | y & BigInt(0x80000)) << 20n | (x & BigInt(0x200000) | y & BigInt(0x100000)) << 21n | (x & BigInt(0x400000) | y & BigInt(0x200000)) << 22n | (x & BigInt(0x800000) | y & BigInt(0x400000)) << 23n | (x & BigInt(0x1000000) | y & BigInt(0x800000)) << 24n | (x & BigInt(0x2000000) | y & BigInt(0x1000000)) << 25n | y & BigInt(0x2000000) << 26n
        );
    };

    // x = (...x2 x1 x0)_2 <- in binary
    // y = (...y2 y1 y0)_2
    // p = (...y2 x2 y1 x1 y0 x0)_2
    // returns x, y
HealpixIndex.bit_decombine = function(p) {
        HealpixIndex.assert(p <= 0x1fffffffffffff);
        // (python)
        // ' | '.join(f'(p & BigInt(0x{2**(2*i):x})) >> {i}n' for i in range(26))
        var p = BigInt(p);
const x = ((p & BigInt(0x1)) >> 0n | (p & BigInt(0x4)) >> 1n | (p & BigInt(0x10)) >> 2n | (p & BigInt(0x40)) >> 3n | (p & BigInt(0x100)) >> 4n | (p & BigInt(0x400)) >> 5n | (p & BigInt(0x1000)) >> 6n | (p & BigInt(0x4000)) >> 7n | (p & BigInt(0x10000)) >> 8n | (p & BigInt(0x40000)) >> 9n | (p & BigInt(0x100000)) >> 10n | (p & BigInt(0x400000)) >> 11n | (p & BigInt(0x1000000)) >> 12n | (p & BigInt(0x4000000)) >> 13n | (p & BigInt(0x10000000)) >> 14n | (p & BigInt(0x40000000)) >> 15n | (p & BigInt(0x100000000)) >> 16n | (p & BigInt(0x400000000)) >> 17n | (p & BigInt(0x1000000000)) >> 18n | (p & BigInt(0x4000000000)) >> 19n | (p & BigInt(0x10000000000)) >> 20n | (p & BigInt(0x40000000000)) >> 21n | (p & BigInt(0x100000000000)) >> 22n | (p & BigInt(0x400000000000)) >> 23n | (p & BigInt(0x1000000000000)) >> 24n | (p & BigInt(0x4000000000000)) >> 25n);
                // (python)
        // ' | '.join(f'(p & BigInt(0x{2**(2*i + 1):x})) >> {i+1}n' for i in range(25))
const y = ((p & BigInt(0x2)) >> 1n | (p & BigInt(0x8)) >> 2n | (p & BigInt(0x20)) >> 3n | (p & BigInt(0x80)) >> 4n | (p & BigInt(0x200)) >> 5n | (p & BigInt(0x800)) >> 6n | (p & BigInt(0x2000)) >> 7n | (p & BigInt(0x8000)) >> 8n | (p & BigInt(0x20000)) >> 9n | (p & BigInt(0x80000)) >> 10n | (p & BigInt(0x200000)) >> 11n | (p & BigInt(0x800000)) >> 12n | (p & BigInt(0x2000000)) >> 13n | (p & BigInt(0x8000000)) >> 14n | (p & BigInt(0x20000000)) >> 15n | (p & BigInt(0x80000000)) >> 16n | (p & BigInt(0x200000000)) >> 17n | (p & BigInt(0x800000000)) >> 18n | (p & BigInt(0x2000000000)) >> 19n | (p & BigInt(0x8000000000)) >> 20n | (p & BigInt(0x20000000000)) >> 21n | (p & BigInt(0x80000000000)) >> 22n | (p & BigInt(0x200000000000)) >> 23n | (p & BigInt(0x800000000000)) >> 24n | (p & BigInt(0x2000000000000)) >> 25n);
        return { x, y };
    };

    // f: baseHealpixIndex.PIxel index
    // x: north east index in baseHealpixIndex.PIxel
    // y: north west index in baseHealpixIndex.PIxel
HealpixIndex.nest2fxy = function(nside, ipix) {
        var ipix = Number(ipix);

        const nside2 = nside * nside;
        const f = Math.floor(ipix / nside2); // baseHealpixIndex.PIxel index
        const k = ipix % nside2;             // nestedHealpixIndex.PIxel index in baseHealpixIndex.PIxel
        const { x, y } = HealpixIndex.bit_decombine(k);
        return { f, x, y };
    };

HealpixIndex.fxy2ring = function(nside, f, x, y) {
        var nside = BigInt(nside);
        var f = BigInt(f);
        const f_row = f / 4n; // {0 .. 2}
        const f1 = f_row + 2n;            // {2 .. 4}
        const v = x + y;
        const i = f1 * nside - v - 1n;

        if (i < nside) { // north polar cap
            const f_col = f % 4n;
            const ipix = 2n * i * (i - 1n) + (i * f_col) + nside - y - 1n;
            return ipix
        }
        if (i < 3n * nside) { // equatorial belt
            const h = x - y;
            const f2 = 2n * (f % 4n) - (f_row % 2n) + 1n;  // {0 .. 7}
            const k = (f2 * nside + h + (8n * nside)) % (8n * nside);
            const offset = 2n * nside * (nside - 1n);
            const ipix = offset + (i - nside) * 4n * nside + (k >> 1n);
            return ipix;
        }
        else { // south polar cap
            const i_i = 4n * nside - i
            const i_f_col = 3n - (f % 4n)
            const j = 4n * i_i - (i_i * i_f_col) - y
            const i_j = 4n * i_i - j + 1n
            const ipix = 12n * nside * nside - 2n * i_i * (i_i - 1n) - i_j;
            return ipix;
        }
    };

    // f, x, y -> spherical projection
HealpixIndex.fxy2tu = function(nside, f, x, y) {
        var x = Number(x);
        var y = Number(y);
        const f_row = Math.floor(f / 4);
        const f1 = f_row + 2;
        const f2 = 2 * (f % 4) - (f_row % 2) + 1;
        const v = x + y;
        const h = x - y;
        const i = f1 * nside - v - 1;
        const k = (f2 * nside + h + (8 * nside));
        const t = k / nside *HealpixIndex.PI_4;
        const u =HealpixIndex.PI_2 - i / nside *HealpixIndex.PI_4;
        return { t, u };
    };

HealpixIndex.orderpix2uniq = function(order, ipix) {
        /**
         * Pack `(order, ipix)` into a `uniq` integer.
         * 
         * This HEALPix "unique identifier scheme" is starting to be used widely:
         * - see section 3.2 in http://healpix.sourceforge.net/pdf/intro.pdf
         * - see section 2.3.1 in http://ivoa.net/documents/MOC/
         */
        return 4n * ((1n << (2n * BigInt(order))) - 1n) + BigInt(ipix);
    };

HealpixIndex.uniq2orderpix = function(uniq) {
        /**
         * Unpack `uniq` integer into `(order, ipix)`.
         * 
         * Inverse of `orderpix2uniq`.
         */
        HealpixIndex.assert(uniq <= 0x1fffffffffffff);
        var uniq = BigInt(uniq);
        let order = 0n;
        let l = (uniq >> 2n) + 1n;
        while (l >= 4n) {
            l >>= 2n;
            ++order;
        }
        const ipix = uniq - (((1n << (2n * order)) - 1n) << 2n);
        return {order:  order, ipix: ipix };
    };

HealpixIndex.ilog2 = function(x) {
    return x.toString(2).length - 1;
    };

HealpixIndex.sign = function(A) {
        return A > 0 ? 1 : (A < 0 ? -1 : 0);
    };

HealpixIndex.square = function(A) {
        return A * A;
    };

HealpixIndex.clip = function(Z, A, B) {
        return Z < A ? A : (Z > B ? B : Z);
    };

HealpixIndex.assert = function(condition) {
    console.assert(condition);
        if (!condition) {
            debugger;
        }
    };

    // HealpixIndex.calculateNSide = function(s) {
    //     console.log('nside max is '+HealpixIndex.NS_MAX);
    //     for (var i = 0, n = s * s, a = 180 / Constants.PI, e = 3600 * 3600 * 4 * Constants.PI * a * a, h = Utils.castToInt(e / n), r = h / 12, o = Math.sqrt(r), c = HealpixIndex.NS_MAX, u = 0, p = 0; HealpixIndex.NSIDELIST.length > p; p++)
    //         if ((c >= Math.abs(o - HealpixIndex.NSIDELIST[p]) && ((c = Math.abs(o - HealpixIndex.NSIDELIST[p])), (i = HealpixIndex.NSIDELIST[p]), (u = p)), o > i && HealpixIndex.NS_MAX > o && (i = HealpixIndex.NSIDELIST[u + 1]), o > HealpixIndex.NS_MAX))
    //             return console.log("nside cannot be bigger than " + HealpixIndex.NS_MAX), HealpixIndex.NS_MAX;
    //     return i;
    // };
    
    return HealpixIndex;
})();
