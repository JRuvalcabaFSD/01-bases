(() => {
	enum AudioLevel {
		min = 1,
		medium,
		medium2,
		max = 10,
	}

	let currentAudio: AudioLevel = 10;
	console.log(currentAudio);
	console.log(AudioLevel);
})();
