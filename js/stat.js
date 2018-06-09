'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var GAP = 10;
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
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};
var getRandomColor = function () {
  var randomColor = 'rgba(0, 0, 255, INTENSIVE)';
  var randomValue = Math.random() * (1 - 0.3) + 0.3;
  return randomColor.replace('INTENSIVE', randomValue);
};
var mdrawRect = function (ctx, playerColumnHeight, playerNumber, playerTime, playerName) {
  var x = CLOUD_X + COLUMN_SPACE + (COLUMN_WIDTH * playerNumber) + (COLUMN_SPACE * playerNumber);
  var y = CLOUD_Y + CLOUD_HEIGHT - (GAP * 4 + playerColumnHeight);
  ctx.fillRect(x, y, COLUMN_WIDTH, playerColumnHeight);

  ctx.fillStyle = 'black';
  ctx.fillText(playerTime, x, y - (GAP));
  ctx.fillText(playerName, x, CLOUD_Y + CLOUD_HEIGHT - (GAP * 2));
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
  getRandomColor();
  for (var i = players.length - 1; i >= 0; i--) {
    ctx.fillStyle = getRandomColor();
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    }
    var playerValue = Math.round(times[i] / (maxTime / COLUMN_HEIGHT));

    mdrawRect(ctx, playerValue, i, Math.round(times[i]), players[i]);
  }

};
