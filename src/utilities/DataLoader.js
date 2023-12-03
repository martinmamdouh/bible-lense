exports.loadJsonData = (dataSet) => {
	const DATA = require(`@/assets/database/${dataSet}.json`);
	return DATA;
}