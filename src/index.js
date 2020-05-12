import React from 'react';
import ReactDOM from 'react-dom';
import { CounterView, withInmemoryCounter } from './framework/ReactCounter';
import { Counter as HookCounter } from './framework/ReactHookCounter';

import Vue from 'vue';
import VueCounter from './framework/VueCounter';

import { RichCounterView } from './view/RichCounterView';
import { SimpleCounterView } from './view/SimpleCounterView';
import { InmemoryCounterController } from './controller/InmemoryCounterController';
import { LocalStorageCounterController } from './controller/LocalStorageCounterController';
import { PeakabooView } from './view/PeakabooView';

const richEl = document.createElement('div');
const simpleEl = document.createElement('div');
const peakabooEl = document.createElement('div');

InmemoryCounterController(richEl, RichCounterView);
LocalStorageCounterController(simpleEl, SimpleCounterView);
PeakabooView(peakabooEl, {
  title: 'Counter',
  ChildView: dom => LocalStorageCounterController(dom, SimpleCounterView),
});

document.body.appendChild(richEl);
document.body.appendChild(simpleEl);
document.body.appendChild(peakabooEl);

ReactDOM.render(
  React.createElement(withInmemoryCounter(CounterView)),
  document.querySelector('#react'),
);

ReactDOM.render(
  React.createElement(HookCounter),
  document.querySelector('#react-hook'),
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(VueCounter),
}).$mount('#vue');
