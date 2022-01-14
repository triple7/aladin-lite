echo Testing healpix with big Int
if [ ! -e ./tests.json ]; then
    conda activate tf2
    python generate-testcase.py > ./tests.json
fi
if [ -e ./runTests.js ]; then
    rm ./runTests.js
fi
cp ../healpix.js ./runTests.js
cat tests.js >> runTests.js
node runTests.js
rm tests.json