import { RichCounterView } from './view/RichCounterView';
import { SimpleCounterView } from './view/SimpleCounterView';
import { InmemoryCounterController } from './controller/InmemoryCounterController';
import { LocalStorageCounterController } from './controller/LocalStorageCounterController';

const richEl = document.createElement('div');
const simpleEl = document.createElement('div');

InmemoryCounterController(richEl, RichCounterView)
LocalStorageCounterController(simpleEl, SimpleCounterView)

document.body.appendChild(richEl);
document.body.appendChild(simpleEl);
