var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = '#00ffff';

function deg2Rad(deg) {
  var factor = Math.PI / 180;
  return deg * factor;
}

function renderTime() {
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();

  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var mil = now.getMilliseconds();
  var smoothsec = sec + (mil / 1000);
  var smoothmin = min + (smoothsec / 60);

  (function renderBackground() {
    var gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);
  })();
  (function renderHours() {
    ctx.beginPath();
    // arc(x, y, r, beginAngle, endAngle): 圆的中心坐标x, 坐标y,圆的半径，起始角度（弧度），结束角度（弧度），绘制方向：False = 顺时针；true = 逆时针
    ctx.arc(250, 250, 200, deg2Rad(270), deg2Rad((hrs * 30) - 90));
    ctx.stroke();
  })();
  (function renderMinutes() {
    ctx.beginPath();
    ctx.arc(250, 250, 170, deg2Rad(270), deg2Rad((smoothmin * 6) - 90));
    ctx.stroke();
  })();
  (function renderSeconds() {
    ctx.beginPath();
    ctx.arc(250, 250, 140, deg2Rad(270), deg2Rad((smoothsec * 6) - 90));
    ctx.stroke();
  })();
  (function renderDateAndTime() {
    ctx.font = "25px Helvetica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(today, 175, 250);

    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time + ":" + mil, 175, 280);
  })();
}
window.setInterval(renderTime, 40);
