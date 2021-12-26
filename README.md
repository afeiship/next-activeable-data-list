# next-activeable-data-list
> Next data list with active index.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-activeable-data-list
```

## apis
| api | params | description   |
|-----|--------|---------------|
| get | -      | Get current active item. |
| to | -      | Go to the input index. |
| next | -      | Go to next index. |
| prev | -      | Go to previous index. |
| first | -      | Go to first index. |
| last | -      | Go to last index. |

## options
```js
{ activeIndex: 0, continuous: false }
```

## usage
```js
import NxActiveableDataList from '@jswork/next-activeable-data-list';

const items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
];
const list = new NxActiveableDataList();
list.next();    // 1
list.next();    // 2
list.prev();    // 1
list.prev();    // 0
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-activeable-data-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-activeable-data-list
[version-url]: https://npmjs.org/package/@jswork/next-activeable-data-list

[license-image]: https://img.shields.io/npm/l/@jswork/next-activeable-data-list
[license-url]: https://github.com/afeiship/next-activeable-data-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-activeable-data-list
[size-url]: https://github.com/afeiship/next-activeable-data-list/blob/master/dist/next-activeable-data-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-activeable-data-list
[download-url]: https://www.npmjs.com/package/@jswork/next-activeable-data-list
