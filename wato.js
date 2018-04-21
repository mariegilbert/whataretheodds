//What are the odds
// Returns a random number between min (inclusive) and max (exclusive)
const count = x => {
	let output = [];
	for ( let i = 1; i <= x; i += 1){
		output.push(i)
	}
	return output;
};
const oddscount = x => x


function getRandomArbitrary(min,max) {
	return Math.random() * (max -min) + min;
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution.
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(38));



module.exports = {
	count,
	oddscount, 
	getRandomArbitrary,
	getRandomInt

};