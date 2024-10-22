const dates = ['24.10.21', '15/01/24', '98-13-23', '2/46/24', '12-12'];

const dateFormatter = (array) => {
	const dates = array.map((str) => {
		const strDate = str
			.split('')
			.filter((l) => l >= 0)
			.join('');

		if (strDate.length === 6) {
			const toDigits = strDate.slice(0, 2);
			const toDigits2 = strDate.slice(2, 4);
			const yyyy = strDate.slice(4);

			let dd;
			let mm;

			if (toDigits <= 31 && toDigits2 <= 12) {
				dd = toDigits;
				mm = toDigits2;
			} else if (toDigits2 <= 31 && toDigits <= 12) {
				dd = toDigits2;
				mm = toDigits;
			}

			if (!dd || !mm || !yyyy) return undefined;

			return `${dd}.${mm}.${yyyy}`;
		}
	});
	return dates.filter((date) => date !== undefined);
};

console.log(dateFormatter(dates));
