import { makeAutoObservable } from "mobx";

class Counter {
  count: number;
  constructor() {
    this.count = 0;

    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}

export default new Counter();
