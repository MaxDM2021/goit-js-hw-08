
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time"


const iframe = document.querySelector('iframe');

const player = Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
localStorage.getItem(STORAGE_KEY, currentTime)

}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});





// const player = new Player(iframe);

// document.addEventListener("DOMContentLoaded", (evt) => {
//     // const message = evt.target.value;
//     // const message = player.setCurrentTime(evt);
//     localStorage.setItem(STORAGE_KEY, evt)
//    }); 




// player.setCurrentTime(value),
// localeStorage.getItem(STORAGE_KEY, player )