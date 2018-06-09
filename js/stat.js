'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var GAP = 10;
var acolors = ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)'];
var renderCloud = function (ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - GAP);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + GAP);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};
var getMaxElement = function (times) {
  var maxElement = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};
var mdrawRect = function (ctx, v, n, t, p) {
  var x = CLOUD_X + COLUMN_SPACE + (COLUMN_WIDTH * n) + (COLUMN_SPACE * n);
  var y = CLOUD_Y + CLOUD_HEIGHT - (GAP * 4 + v);
  var h = v;
  var w = COLUMN_WIDTH;
  ctx.fillRect(x, y, w, h);

  ctx.fillStyle = 'black';
  ctx.fillText(t, x, y - (GAP));
  ctx.fillText(p, x, CLOUD_Y + CLOUD_HEIGHT - (GAP * 2));
};
window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillStyle = 'rgba(255, 255 ,255, 1)';
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  var maxTime = getMaxElement(times);
  ctx.fillStyle = 'rgba(0, 0 , 0, 1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, CLOUD_Y + GAP * 5);

  for (var i = players.length - 1; i >= 0; i--) {
    ctx.fillStyle = acolors[i];
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    }
    var playerValue = Math.round(times[i] / (maxTime / COLUMN_HEIGHT));

    mdrawRect(ctx, playerValue, i, Math.round(times[i]), players[i]);
  }

};
