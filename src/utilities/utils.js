exports.countByKey = (arr, key) => {
	const result = [];
	const count = {};
	arr.forEach((obj) => {
		const value = obj[key];
		count[value] = (count[value] || 0) + 1;
	});
	for (const value in count) {
		result.push({ [key]: value, count: count[value] });
	}
	return result;
};

exports.groupAndSum = (arr, groupBy, sumKey) => {
	const result = [];
	const sum = {};
	arr.forEach((obj) => {
		const value = obj[groupBy];
		sum[value] = (sum[value] || 0) + obj[sumKey];
	});
	for (const value in sum) {
		result.push({ [groupBy]: value, sum: sum[value] });
	}
	return result;
};

exports.filterFintechs = (fintechs, filter) => {
	if (
		filter.selectedCategories.length == 0 &&
    filter.selectedSubCategories.length == 0 &&
    filter.selectedFintechs.length == 0 &&
    filter.startDate == null &&
    filter.endDate == null
	) {
		return fintechs;
	}
	let filteredFintechs = structuredClone(fintechs);

	// Filter by Category
	if (filter.selectedCategories?.length > 0) {
		filteredFintechs = filteredFintechs.filter((fintech) =>
			filter.selectedCategories.includes(fintech.category)
		);
	}

	// Filter by SubCategory
	if (filter.selectedSubCategories?.length > 0) {
		filteredFintechs = filteredFintechs.filter((fintech) =>
			filter.selectedSubCategories.includes(fintech.subCat)
		);
	}

	// Filter by Fintech Name
	if (filter.selectedFintechs?.length > 0) {
		filteredFintechs = filteredFintechs.filter((fintech) =>
			filter.selectedFintechs.includes(fintech.name)
		);
	}
	// Filter By Date
	filteredFintechs = filteredFintechs.filter((fintech) => {
		let creationDate = new Date(fintech.createdAt).getTime();
		let start = filter.startDate
			? new Date(filter.startDate).getTime()
			: new Date("01-01-1950").getTime();
		let end = filter.endDate
			? new Date(filter.endDate).getTime()
			: new Date("01-01-2950").getTime();
		return creationDate >= start && creationDate <= end;
	});

	return filteredFintechs;
};

exports.removeDuplicates = (array, key) => {
	return array.filter((obj, index, self) => {
		return index === self.findIndex((o) => o[key] === obj[key]);
	});
};

exports.sort = (array, key) => {
	array.sort((a, b) => a[key].localeCompare(b[key]));
	return array;
};
