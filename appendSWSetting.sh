#/bin/bash


cat ./template.1.txt >> ./dist/sw.js

pathName=`find ./dist -type f | grep -v 'sw.js\|.nojekyll\|README.md' | sed -e 's/\.\/dist//g'`

for pathname in ${pathName}; do
  echo \"$pathname\", >> ./dist/sw.js
done

cat ./template.2.txt >> ./dist/sw.js

