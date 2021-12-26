(function () {
  const NxActiveableDataList = require('../src');

  describe('01/NxActiveableDataList.property', function () {
    let data;
    beforeEach(() => {
      data = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    });

    test('prop:length/max/min should get numbers', function () {
      var list = new NxActiveableDataList(data);
      expect(list.length).toBe(9);
      expect(list.max).toBe(8);
      expect(list.min).toBe(0);
    });
  });

  describe('02/NxActiveableDataList.methods with default options', function () {
    let data;
    beforeEach(() => {
      data = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    });

    test('method:get', function () {
      var list = new NxActiveableDataList(data);
      expect(list.get()).toBe('item1');
    });

    test('method:to', function () {
      var list = new NxActiveableDataList(data);
      expect(list.to(0)).toBe(0);
      expect(list.to(10)).toBe(8);
      expect(list.to(-1)).toBe(0);
    });

    test('method:next - continuous: false', function () {
      var list = new NxActiveableDataList(data);
      expect(list.next()).toBe(1);
      expect(list.get()).toBe('item2');
      for (var i = 0; i < 100; i++) {
        list.next();
      }
      expect(list.get()).toBe('item9');
    });

    test('method:next - continuous: true', function () {
      var list = new NxActiveableDataList(data, { continuous: true });
      expect(list.next()).toBe(1);
      expect(list.get()).toBe('item2');
      for (var i = 0; i < 7; i++) {
        list.next();
      }
      expect(list.get()).toBe('item9');
      list.next();
      expect(list.get()).toBe('item1');
    });

    test('method:prev - continuous: false', function () {
      var list = new NxActiveableDataList(data);
      expect(list.last()).toBe(8);
      expect(list.get()).toBe('item9');
      for (var i = 0; i < 100; i++) {
        list.prev();
      }
      expect(list.get()).toBe('item1');
    });

    test('method:prev - continuous: true', function () {
      var list = new NxActiveableDataList(data, { continuous: true });
      expect(list.last()).toBe(8);
      expect(list.get()).toBe('item9');
      for (var i = 0; i < 8; i++) {
        list.prev();
      }
      expect(list.get()).toBe('item1');
      list.prev();
      expect(list.get()).toBe('item9');
    });

    test('method:first/last', function () {
      var list = new NxActiveableDataList(data);
      expect(list.first()).toBe(0);
      expect(list.get()).toBe('item1');
      expect(list.last()).toBe(8);
      expect(list.get()).toBe('item9');
    });
  });
})();
