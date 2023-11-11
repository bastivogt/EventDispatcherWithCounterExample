"use strict";

export class Counter {
  constructor(start = 0, stop = 10, step = 1) {
    this._start = start;
    this._stop = stop;
    this._step = step;
    this._count = this._start;

    this.onCounterStart = null;
    this.onCounterChange = null;
    this.onCounterFinish = null;
  }

  run() {
    this._count = this._start;
    if (typeof this.onCounterStart === "function")
      this.onCounterStart({ target: this, count: this._count });

    for (; this._count < this._stop; this._count += this._step) {
      if (typeof this.onCounterChange === "function")
        this.onCounterChange({ target: this, count: this._count });
    }

    if (typeof this.onCounterFinish === "function")
      this.onCounterFinish({ target: this, count: this._count });
  }
}
