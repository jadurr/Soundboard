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

const buttons = document.getElementsByClassName('button');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", playSound(buttons[i].getElementsByTagName("audio")[0].id));
// }
