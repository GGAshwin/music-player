const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const audio = document.querySelector('#audio');

const music = document.createElement('audio');
audio.appendChild(music);

var songs = [
    "1.mp3",
    "2.mp3",
    "3.mp3"
]
var index = 0;
var count = 0

function loadSong(song) {
    music.src = `audio/${song}`;
    music.play();
    count++
}

play.addEventListener('click', () => {
    if (music.paused) {
        if (count == 0) {
            loadSong(songs[index]);

        }
        else {
            music.play();
            console.log("triggered");
        }
        play.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        play.innerHTML = '<i class="fas fa-play"></i>';
    }
});

next.addEventListener('click', () => {
    if (index == songs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    loadSong(songs[index]);
    play.innerHTML = '<i class="fas fa-pause"></i>';
});

prev.addEventListener('click', () => {
    if (index == 0) {
        index = songs.length - 1;
    }
    else {
        index--;
    }
    loadSong(songs[index]);
    play.innerHTML = '<i class="fas fa-pause"></i>';
});