import {openPopupImage} from './PopupPhoto.js';

class Person {
  constructor(data) { // конструктор получает объект
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    return document.querySelector('.template').content.cloneNode(true);
  }

  generatePerson() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const image = this._element.querySelector('.person__image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.person__name').textContent = this._name;
    this._element.querySelector('.person__town').textContent = this._town;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.person__image').addEventListener('click', openPopupImage);
  }
}

class extendedPerson extends Person {
  constructor(data) {
    super(data);
    this._town = data.town;
  }

  generatePerson() {
    super.generatePerson();
    return this._element;
  }
}

function createPersons(personList, list) {
  personList.forEach((item) => {
// Создадим экземпляр
    const person = item.town ? new extendedPerson(item) : new Person(item);
    // Создаём личность и возвращаем наружу
    const personElement = person.generatePerson();
    const selectorList = document.querySelector(list);
    // Добавляем в DOM
    selectorList.append(personElement);

  });
}

export {createPersons};