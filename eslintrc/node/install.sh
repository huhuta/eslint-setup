REPO="$(cd $(dirname $0) && pwd)"
cp $REPO/.eslintrc.js ./

npm install --save-dev \
    jest \
    jest-cli \
    eslint \
    prettier \
    eslint-plugin-jest \
    eslint-plugin-promise \
    eslint-plugin-import \
    eslint-plugin-prettier \
    eslint-config-prettier \
    eslint-config-airbnb-base 
