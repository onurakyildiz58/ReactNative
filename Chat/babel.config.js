/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
