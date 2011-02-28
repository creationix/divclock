var hour, minute, second;
function tick() {
  var time = new Date();
  var hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
  var deg = hours * 30 + minutes / 2 + seconds / 120;
  hour.style.webkitTransform = "rotate(" + deg + "deg)";
  deg = minutes * 6 + seconds / 10;
  minute.style.webkitTransform = "rotate(" + deg + "deg)";
  deg = seconds * 6;
  second.style.webkitTransform = "rotate(" + deg + "deg)";
}
window.addEventListener('load', function () {
  var div = document.getElementById('numbers');
  for (var i = 1; i <= 12; i++) {
    var angle = (i * 30) / 180 * Math.PI;
    var h = 170;
    var x = Math.sin(angle) * h;
    var y = Math.cos(angle) * -h;
    var number = document.createElement('div');
    number.innerText = i;
    number.style.top = y + "px";
    number.style.left = x + "px";
    div.appendChild(number);
    console.log(number);
  }


  hour = document.getElementById("hour-hand");
  minute = document.getElementById("minute-hand");
  second = document.getElementById("second-hand");
  tick();
  setInterval(tick, 1000);
  if (typeof PalmSystem !== 'undefined') {
    PalmSystem.stageReady();
    PalmSystem.enableFullScreenMode(true);
  }
});

