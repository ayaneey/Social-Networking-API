const addDateSuffix = (date) => {
	let dateStr = date.toString();

	const lastChar = dateStr.chaAt(dateStr.length - 1);

	if (lastChar === "1" && dateStr !== "11") {
		dateStr = `${dateStr}st`;
	} else if (lastChar === "2" && dateStr !== "12") {
		dateStr = `${dateStr}nd`;
	} else if (lastChar === "3" && dateStr !== "13") {
		dateStr = `${dateStr}rd`;
	} else {
		dateStr = `${dateStr}th`;
	}

	return dateStr;
};

// function to format timestamp
module.exports = (
	timestamp,
	{ monthLength = "short", dateSuffix = true } = {}
) => {
	let months;

	if (monthLength === "short") {
		months = {
			0: "Jan",
			1: "Feb",
			2: "Mar",
			3: "Apr",
			4: "May",
			5: "Jun",
			6: "Jul",
			7: "Aug",
			8: "Sep",
			9: "Oct",
			10: "Nov",
			11: "Dec",
		};
	}
};
