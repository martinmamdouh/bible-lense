exports.loadJsonData = (dataSet) => {
  const DATA = require(`@/assets/database/${dataSet}.json`);
  return DATA;
};
exports.loadJsData = (dataSet) => {
  const { DATA } = require(`@/assets/database/${dataSet}.js`);
  return DATA;
};
