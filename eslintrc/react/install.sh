REPO="$(cd $(dirname $0) && pwd)"
cp $REPO/.eslintrc.js ./

npm install --save-dev \
    prettier \
    eslint-config-airbnb \
    eslint-plugin-promise \
    eslint-plugin-prettier \
    eslint-config-prettier

# create react app already install
# jest \
# eslint \
# eslint-plugin-import \
# eslint-plugin-jest \
# eslint-plugin-react \
# eslint-plugin-react-hooks \
# eslint-plugin-jsx-a11y
