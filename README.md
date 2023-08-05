# fluentui-emoji-js
### A JavaScript wrapper for Microsoft's [Fluent Emojis](https://github.com/microsoft/fluentui-emoji).

[View on NPM](https://www.npmjs.com/package/fluentui-emoji-js) | [View Live Demo](https://fluentui-emoji-js-demo.netlify.app)

![Fluent Emoji](art/readme_banner.webp)

## Usage
### Install
```bash
npm install fluentui-emoji-js
```

### Import
```js
const emoji = require('fluentui-emoji-js')
// or
import * as emoji from 'fluentui-emoji-js'
```

### Examples
#### Common JS
```cjs
const emoji = require('fluentui-emoji-js')

emoji.fromGlyph('👋','3D').then((emojiFile) => {
  console.log(emojiFile)
})
```

#### ES Module
```mjs
import * as emoji from 'fluentui-emoji-js'

const emojiFile = await emoji.fromGlyph('👋','3D')
console.log(emojiFile)
```

## Displaying the emoji
Both `fromGlyph(glyph, style)` and `fromCode(code, style)` return the location of the emoji image relative to the base emoji folder. You can download the assets folder from the [fluentui-emoji repo](https://github.com/microsoft/fluentui-emoji) or use a service like [jsdelivr](https://jsdelivr.com) to get the emoji image.

#### Getting emoji image via jsdelivr
```js
const emojiImage = document.querySelector('#emojiImage');
const emoji = '🍕';

emoji.fromGlyph(emoji,'3D').then((emojiFile) => {
  emojiImage.src = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets${emojiFile}`
})
```

### More Info
fluentui-emoji-js has 2 main functions `fromGlyph(glyph, style)` and `fromCode(code, style)`. Both return the location of the emoji image relative to the base emoji folder.

`fromGlyph(glyph, style)`
- `glyph`: string contaning an emoji
- `style`: string `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`

`fromCode(code, style)`
- `code`: string contaning the unicode for an emoji
  - `code` should be just the hexcode. ex.`'1f44b'` not `'U+1F44B'`
- `style`: string `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`
