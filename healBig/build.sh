touch healpix.min.js
cat Constants.js >> healpix.min.js
cat SpatialVector.js >> healpix.min.js
cat Utils.js >> healpix.min.js
cat healpix.js >> healpix.min.js
mv healpix.min.js ../src/js/libs/
cp ./View.js ../src/js/
cp ./HealpixCache.js ../src/js/