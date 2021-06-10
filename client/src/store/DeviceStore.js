import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Fridge' },
      { id: 2, name: 'TV' },
      { id: 3, name: 'Phones' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Kivi' },
      { id: 3, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Duo Holodulo',
        price: 12000,
        rating: 4,
        img: 'https://media.gq.ru/photos/602b779754a33575d22d5d97/master/w_1920,c_limit/20200325-anime-10.jpg',
      },
      {
        id: 2,
        name: 'TR-D 1092',
        price: 13000,
        rating: 3,
        img: 'https://media.gq.ru/photos/602b779754a33575d22d5d97/master/w_1920,c_limit/20200325-anime-10.jpg',
      },
      {
        id: 3,
        name: 'Note Pro 12',
        price: 26000,
        rating: 4,
        img: 'https://media.gq.ru/photos/602b779754a33575d22d5d97/master/w_1920,c_limit/20200325-anime-10.jpg',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
