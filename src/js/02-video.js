
import Player from '@vimeo/player';
import '../css/common.css';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";


const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const getCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (getCurrentTime) {

    // .setCurrentTime - фиксирует плеер на том-же месте
    player.setCurrentTime(getCurrentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
localStorage.setItem(LOCALSTORAGE_KEY, seconds)

console.log(onPlay);
}









