function playSound(e){
   const audio = document.querySelesctor('audio[data.key"${e.keyCode}"]');
   const keys = document.querySelectorAll('.key[data-key"${e.keyCode}"]');
   if(!audio)return;
   audio.currentTime = 0;
   audio.play();
   Key.classList.add('playing');
   
};

function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => Key.addEventListener('transitioned',removeTransitioned))
window.addEventListener("keydown",playSound);
