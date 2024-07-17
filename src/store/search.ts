import { makeAutoObservable } from "mobx";

class Search {
  value: string;

  constructor() {
    this.value = "";

    makeAutoObservable(this);
  }

  update(value: string) {
    this.value = value;
  }
}

export default new Search();
