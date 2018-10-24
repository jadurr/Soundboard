const buttons = document.getElementsByClassName('button');
const audiotag = document.getElementsByTagName('audio');

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
    var show = document.getElementById('show');
    if (oninput >= 0)
    show.volume = val / 100;
}
