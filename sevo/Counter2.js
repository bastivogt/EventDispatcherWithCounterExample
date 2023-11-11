"use strict";

import { EventDispatcher } from "./EventDispatcher.js";

export class Counter2 extends EventDispatcher {
  static get ON_COUNTER_START() {
    return "onCounterStart";
  }
  static get ON_COUNTER_CHANGE() {
    return "onCounterChange";
  }
  static get ON_COUNTER_FINISH() {
    return "onCounterFinish";
  }

  constructor(start = 0, stop = 10, step = 1) {
    super();
    this._start = start;
    this._stop = stop;
    this._step = step;
    this._count = this._start;
  }

  run() {
    this._count = this._start;
    this.dispatchEvent(Counter2.ON_COUNTER_START, {
      target: this,
      count: this._count,
    });
    for (; this._count < this._stop; this._count += this._step) {
      this.dispatchEvent(Counter2.ON_COUNTER_CHANGE, {
        target: this,
        count: this._count,
      });
    }
    this.dispatchEvent(Counter2.ON_COUNTER_FINISH, {
      target: this,
      count: this._count,
    });
  }
}
