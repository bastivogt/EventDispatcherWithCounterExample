"use strict";

import { Counter } from "./sevo/Counter.js";
import { Counter2 } from "./sevo/Counter2.js";

console.log("--- Callback Functions ---");

const counter = new Counter();

counter.onCounterStart = function (evt) {
  console.log("onCounterStart count:", evt.count);
};

counter.onCounterChange = function (evt) {
  console.log("onCounterChange count:", evt.count);
};

counter.onCounterFinish = function (evt) {
  console.log("onCounterFinish count:", evt.count);
};

//counter.onCounterChange = null;

counter.run();

console.log("-------------------------------------------------------------");

console.log("--- EventDispatcher ---");

const counter2 = new Counter2();

counter2.addListener(Counter2.events.ON_COUNTER_STARTED, (evt) => {
  console.log("evt", evt);
  console.log(Counter2.events.ON_COUNTER_STARTED, "count:", evt.count);
  console.log("target", evt.target);
});

counter2.addListener(Counter2.events.ON_COUNTER_CHANGED, (evt) => {
  console.log(Counter2.events.ON_COUNTER_CHANGED, "count:", evt.count);
});

counter2.addListener(Counter2.events.ON_COUNTER_FINISHED, (evt) => {
  console.log(Counter2.events.ON_COUNTER_FINISHED, "count:", evt.count);
});

//counter2.removeListener(Counter2.events.ON_COUNTER_CHANGED);

counter2.run();
