export const CounterMixin = {
  data() {
    return {
      count: 0,
      min: 0,
      max: 10,
      step: 1,
    };
  },
  methods: {
    increment() {
      const number = this.count + this.step;
      const max = this.max;

      this.count = Math.min(number, max);
    },
    decrement() {
      const number = this.count - this.step;
      const min = this.min;

      this.count = Math.max(number, min);
    },
    reset() {
      this.count = 0;
      this.max = 10;
      this.min = 0;
      this.step = 1;
    },
    maxCount() {
      this.count = this.max;
    },
    minCount() {
      this.count = this.min;
    },
  },
};
