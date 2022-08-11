

const timeCheck = (inputDate)=>{
	const nonDigitRegEx = /\D+/;
	let result = {
		"unix": null,
		"utc": null 
	};

	try{
		// check if it's an epoch date, in order to parse integers
		if (!nonDigitRegEx.test(inputDate) && inputDate != ""){
			let epochDate = parseInt(inputDate);

			if (epochDate > 8640000000000000){
				throw "Epoch date is larger tha max limit.";
			}

			let resultDate = new Date(epochDate);

			result.unix = resultDate.getTime();
			result.utc =  resultDate.toUTCString();

			// other date formats:
		} else {
			let resultDate = new Date(inputDate);

			if (resultDate.toString() == 'Invalid Date'){
				throw "Invalid date."
			}
			result.unix = resultDate.getTime();
			result.utc =  resultDate.toUTCString();
		}
	} catch (err){
		result = {"error" : "Invalid Date"};
	} finally {
		return result;
	}
}






module.exports = timeCheck;
