let codes = ['pfuw5smhkmxx4xo2rw6sd24u2qnow7nqbygdqfq
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['PlantBeanShareCodes' + index] = codes[i];
}