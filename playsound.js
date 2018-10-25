const buttons = document.getElementsByClassName('button');
const audiotag = document.getElementsByTagName('audio');

var playing = "off";
function playSound(id) {
    var setsound = document.getElementById(id);
    if (playing === "on") {
      setsound.pause();
      setsound.currentTime = 0;
      playing = "off";
    }
    else {
      setsound.play();
      playing = "on";
    }
}

function SetVolume(val){
  let idArray = [];
  for(let i = 0; i < buttons.length; i++){
    idArray.append(buttons[i].id);
  }
  var noise = document.getElementById(idArray);
  noise.volume = val / 100;
}
