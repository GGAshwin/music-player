let curr_track = document.createElement('audio');
let seek_slider = document.querySelector('.slider');

let playBtn = document.querySelector('#play')
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

let card__img = document.querySelector('#card__img')
let song__name = document.querySelector('.song__name')
let song__singer = document.querySelector('.song__singer')

var songIndex = 0;
var isPlaying = false

var songList = [
    {
        name: 'Blinding Lights',
        artist: 'The Weekend',
        path: './public/songs/blindingLights.mp3',
        img: './public/img/BL.jpg'
    },
    {
        name: 'One Love',
        artist: 'Blue',
        path: './public/songs/oneLove.mp3',
        img: './public/img/oneLove.jpg'
    }
]

function loadSong(songIndex) {
    curr_track.src = songList[songIndex].path
    card__img.src = songList[songIndex].img
    song__name.innerHTML = songList[songIndex].name
    song__singer.innerHTML = songList[songIndex].artist
    curr_track.load()
}

window.onload = () => {
    loadSong(songIndex)
    playBtn.innerHTML= `<i class="fa-solid fa-play fa-5x"></i>`
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
    }
}


// Button Controls

next.addEventListener('click', function nextSong() {
    songIndex++
    if (songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadSong(songIndex);
    playBtn.innerHTML= `<i class="fa-solid fa-play fa-5x"></i>`
})

prev.addEventListener('click', function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadSong(songIndex);
})

playBtn.addEventListener("click", function play() {
    if(playBtn.innerHTML== `<i class="fa-solid fa-pause fa-5x"></i>`){
        curr_track.pause()
        playBtn.innerHTML= `<i class="fa-solid fa-play fa-5x"></i>`
        isPlaying=false
    }
    else if('<i class="fa-solid fa-play fa-5x"></i>'){
    playBtn.innerHTML=`<i class="fa-solid fa-pause fa-5x"></i>`
    curr_track.play()
    updateTimer = setInterval(setUpdate, 300);
    }
})