(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = {
    activeIndex: 0,
    continuous: false
  };

  var NxActiveableDataList = nx.declare('nx.ActiveableDataList', {
    properties: {
      length: function () {
        return this.items.length;
      },
      max: function () {
        return this.length - 1;
      },
      min: function () {
        return 0;
      }
    },
    methods: {
      init: function (inItems, inOptions) {
        this.items = inItems;
        this.options = nx.mix(null, defaults, inOptions);
        this.activeIndex = this.options.activeIndex;
      },
      get: function () {
        return this.items[this.activeIndex];
      },
      to: function (inIndex) {
        var idx = inIndex;
        if (inIndex < this.min) idx = 0;
        if (inIndex > this.max) idx = this.max;
        return (this.activeIndex = idx);
      },
      next: function () {
        var idx = this.activeIndex;
        var continuous = this.options.continuous;
        var isEdge = idx === this.max;
        var activeIndex = isEdge ? (continuous ? this.min : idx) : idx + 1;
        return (this.activeIndex = activeIndex);
      },
      prev: function () {
        var idx = this.activeIndex;
        var continuous = this.options.continuous;
        var isEdge = idx === this.min;
        var activeIndex = isEdge ? (continuous ? this.max : idx) : idx - 1;
        return (this.activeIndex = activeIndex);
      },
      first: function () {
        return (this.activeIndex = 0);
      },
      last: function () {
        return (this.activeIndex = this.max);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxActiveableDataList;
  }
})();
