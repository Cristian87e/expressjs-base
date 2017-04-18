# back-end-base

## About ESlint AirBnB for NodeJS:
    @justjake @txchen Using "extends": "airbnb/base" in .eslintrc is deprecated, see:

    https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnbbase
    Currently the way to avoid using eslint-plugin-react is to use eslint-config-airbnb-base, see:

    https://www.npmjs.com/package/eslint-config-airbnb-base
    It requires only eslint and eslint-plugin-import as peer deps and you use it with "extends": "airbnb-base" in .eslintrc - or with "extends": "airbnb-base/legacy" for ES5 and below.

    source: https://github.com/airbnb/javascript/issues/451
