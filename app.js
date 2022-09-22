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

const path='./public/songs/'

const playImg=`<i class="fa-solid fa-play fa-3x"></i>`
const pauseImg=`<i class="fa-solid fa-pause fa-3x"></i>`

var songList = [
    {
        name: 'Blinding Lights',
        artist: 'The Weekend',
        path: `${path}blindingLights.mp3`,
        img: './public/img/BL.jpg'
    },
    {
        name: 'One Love',
        artist: 'Blue',
        path: `${path}oneLove.mp3`,
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
    playBtn.innerHTML= `${playImg}`
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
    playBtn.innerHTML= `${playImg}`
})

prev.addEventListener('click', function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadSong(songIndex);
    playBtn.innerHTML= `${playImg}`
})

playBtn.addEventListener("click", function play() {
    if(playBtn.innerHTML== `${pauseImg}`){
        curr_track.pause()
        playBtn.innerHTML= `${playImg}`
        isPlaying=false
    }
    else if('${playImg'){
    playBtn.innerHTML=`${pauseImg}`
    curr_track.play()
    updateTimer = setInterval(setUpdate, 300);
    }
})