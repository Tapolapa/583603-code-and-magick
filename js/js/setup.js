'use strict';
var blockElement = document.querySelector('.setup');
blockElement.classList.remove('hidden');

var wizardSetLength = 4;
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizartRobes = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var getRandom = function (arr) {
  var makeValue = arr[Math.floor(Math.random() * arr.length)];
  return makeValue;
};

for (var i = 0; i < wizardSetLength; i++) {
  wizards[i] = {
    name: getRandom(wizardNames) + ' ' + getRandom(wizardSurnames),
    coatColor: getRandom(wizartRobes),
    eyesColor: getRandom(wizardEyes)
  };
}
var wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsListElement = document.querySelector('.setup-similar-list');

wizards.forEach(function (item) {
  var wizardElement = wizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = item.name;
  wizardElement.querySelector('.wizard-coat').style.fill = item.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
  wizardsListElement.appendChild(wizardElement);
});

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
