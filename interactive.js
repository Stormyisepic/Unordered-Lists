const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');

playButton.addEventListener('click', function() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playButton.textContent = 'Pause Music';
  } else {
    musicPlayer.pause();
    playButton.textContent = 'Play Music';
  }
});