<template>
  <section class="container p-4">
    <button data-id="btn-max" class="btn btn-primary" @click="maxCount">
      <i class="fas fa-angle-double-up"></i>
    </button>
    <button data-id="btn-increment" class="btn btn-primary" @click="increment">
      <i class="fas fa-arrow-up"></i>
    </button>
    <h2 data-id="txt-count" class="d-inline-block ml-2 mr-2">{{ count }}</h2>
    <button data-id="btn-decrement" class="btn btn-danger" @click="decrement">
      <i class="fas fa-arrow-down"></i>
    </button>
    <button data-id="btn-min" class="btn btn-danger" @click="minCount">
      <i class="fas fa-angle-double-down"></i>
    </button>
  </section>
</template>

<script>
import Vue from 'vue';
import { CounterMixin } from './CounterMixin';

export default Vue.extend({
  mixins: [CounterMixin],
});
</script>
