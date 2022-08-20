import BSN from 'bootstrap.native';

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]')
};


const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');


openModal();

console.log(modal);

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick)

function openModal () {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed){
        console.log('Максимальное количество надоеданий или подписался')
        return;
    }
setTimeout(() => {
    console.log('Октрываем надоедалку');
    modal.show();
    promptCounter += 1;
}, PROMPT_DELAY);
}


function onSubscribeBtnClick () {
    hasSubscribed = true;
    modal.hide();
}