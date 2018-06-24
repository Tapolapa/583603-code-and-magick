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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupBlock = document.querySelector('.setup');
var setupOpenBlock = document.querySelector('.setup-open');
var inputUserName = document.querySelector('.setup-user-name');
var setupCloseButton = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
setupOpenIcon.setAttribute('tabindex', '0');
setupCloseButton.setAttribute('tabindex', '0');

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEsc);
};
var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEsc);
};
setupOpenBlock.addEventListener('click', openPopup);
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
setupCloseButton.addEventListener('click', closePopup);
setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
var onPopupEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && inputUserName !== document.activeElement) {
    closePopup();
  }
};
inputUserName.addEventListener('invalid', function (evt) {
  if (inputUserName.validity.tooShort) {
    inputUserName.setCustomValidity('Имя должно состоять минимум из 2 символов');
  } else if (inputUserName.validity.tooLong) {
    inputUserName.setCustomValidity('Имя должно состоять максимум из 25 символов');
  } else if (inputUserName.validity.valueMissing) {
    inputUserName.setCustomValidity('Обязательное для заполнения поле');
  }
});
