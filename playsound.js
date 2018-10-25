const buttons = document.getElementsByClassName('button');
const audiotag = document.getElementsByTagName('audio');
let idArray = [];
for(let i = 0; i < buttons.length; i++){
  idArray.append(buttons[i].id);
}

var playing = "off";
function playSound(id) {
    var x = document.getElementById(id);
    if (playing === "on") {
      x.pause();
      x.currentTime = 0;
      playing = "off";
    }
    else {
      x.play();
      playing = "on";
    }
}

function SetVolume(val){
    var show = document.getElementById(idArray);
        show.volume = val / 100;  
}
