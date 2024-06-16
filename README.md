# fluentui-emoji-js
## A JavaScript wrapper for Microsoft's <a href="https://github.com/microsoft/fluentui-emoji" target="_blank">Fluent Emojis</a>.

<a href="https://www.npmjs.com/package/fluentui-emoji-js" target="_blank">NPM</a> | 
<a href="https://github.com/ZacharyCrespin/fluentui-emoji-js" target="_blank">Github</a> | 
<a href="https://zacharyc.site/fluentui-emoji-js/demo" target="_blank">Live Demo</a>

### Install
```bash
npm install fluentui-emoji-js
```

### Usage
#### Common JS
```js
const emoji = require('fluentui-emoji-js')

emoji.fromGlyph('👋','3D').then((emojiFile) => {
  console.log(emojiFile)
})
```

#### ES Module
```js
import * as emoji from 'fluentui-emoji-js'

const emojiFile = await emoji.fromGlyph('👋','3D')
console.log(emojiFile)
```

#### Displaying the emoji
Both `fromGlyph()` and `fromCode()` return the location of the emoji image relative to the base emoji folder. You can download the assets folder from the [fluentui-emoji repo](https://github.com/microsoft/fluentui-emoji) or use a service like [jsdelivr](https://jsdelivr.com) to get the emoji image.

##### Getting emoji image via jsdelivr
```js
const emojiImage = document.querySelector('#emojiImage');
const emoji = '🍕';

emoji.fromGlyph(emoji,'3D').then((emojiFile) => {
  emojiImage.src = `https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@latest/assets${emojiFile}`
})
```

### More Info
fluentui-emoji-js has 2 main functions `fromGlyph()` and `fromCode()`. Both require an emoji and style to be specified and return the location of the emoji image relative to the base emoji folder.

`fromGlyph()`
- `glyph`: String containing a single emoji
- `style`: String `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`

`fromCode()`
- `code`: String containing the striped unicode of an emoji
  - `code` should be just the hex code. ex.`'1f44b'` not `'U+1F44B'`
- `style`: String `'3D'`, `'Color'`, `'Flat'`, or `'High Contrast'`
