"use strict";

import { EventDispatcher } from "./EventDispatcher.js";

export class Counter2 extends EventDispatcher {
  static get events() {
    return {
      ON_COUNTER_STARTED: "on-counter-started",
      ON_COUNTER_CHANGED: "on-counter-changed",
      ON_COUNTER_FINISHED: "on-counter-finished",
    };
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
    this.dispatchEvent(Counter2.events.ON_COUNTER_STARTED, {
      target: this,
      count: this._count,
    });
    for (; this._count < this._stop; this._count += this._step) {
      this.dispatchEvent(Counter2.events.ON_COUNTER_CHANGED, {
        target: this,
        count: this._count,
      });
    }
    this.dispatchEvent(Counter2.events.ON_COUNTER_FINISHED, {
      target: this,
      count: this._count,
    });
  }
}
