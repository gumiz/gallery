var playBtn = document.getElementById('playAudioId');
var pauseBtn = document.getElementById('pauseAudioId');
var volumeUp = document.getElementById('volumeUpId');
var volumeDown = document.getElementById('volumeDownId');

let player = {
	howl: undefined,
	volume: 0.5
}

player.play = function(){
    if (!player.howl) {
		player.howl = new Howl({
		  src: ['./audio/sample.mp3'],
		  html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
		  onplay: function() {
			pauseBtn.style.display = 'block';
		  },
		  onpause: function() {
		  },
		  onstop: function() {
		  }
		});
	}

    player.howl.play();

    // Show the pause button.
    if (player.howl.state() === 'loaded') {
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'block';
    } else {
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'none';
    }
}

player.pause = function() {
    // Puase the sound.
    player.howl.pause();

    // Show the play button.
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
};

player.setVolume = function(val) {
    Howler.volume(val);
};

playBtn.addEventListener('click', function() { 
	player.play(); 
});

pauseBtn.addEventListener('click', function() { 
	player.pause(); 
});

volumeUp.addEventListener('click', function() { 
	player.volume += 0.1;
	if (player.volume > 1) 
		player.volume = 1;
	player.setVolume(player.volume); 
});

volumeDown.addEventListener('click', function() { 
	player.volume -= 0.1;
	if (player.volume < 0) 
		player.volume = 0;
	player.setVolume(player.volume); 
});

