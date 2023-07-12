const emoji = require('./index.cjs')

// From Glyph
emoji.fromGlyph('🎅', '3D').then((emojiFile) => {
  console.log(emojiFile)
})

// test skin color
emoji.fromGlyph('👵🏿', '3D').then((emojiFile) => {
  console.log(emojiFile)
})

emoji.fromGlyph('👋','3D').then((emojiFile) => {
  console.log(emojiFile)
})

emoji.fromGlyph('🍕','3D').then((emojiFile) => {
  console.log(emojiFile)
})

// From Code
// 🥐
emoji.fromCode('1f950','3D').then((emojiFile) => {
  console.log(emojiFile)
})

// 😂
emoji.fromCode('1F602','3D').then((emojiFile) => {
  console.log(emojiFile)
})

// 👨‍🚒
emoji.fromCode('1f468 200d 1f692','3D').then((emojiFile) => {
  console.log(emojiFile)
})

// test styles
emoji.fromGlyph('🥨','3D').then((emojiFile) => {
  console.log(emojiFile)
})

emoji.fromGlyph('🥨','Color').then((emojiFile) => {
  console.log(emojiFile)
})

emoji.fromGlyph('🥨','Flat').then((emojiFile) => {
  console.log(emojiFile)
})
emoji.fromGlyph('🥨','High Contrast').then((emojiFile) => {
  console.log(emojiFile)
})

// Errors
// invalid emoji
emoji.fromGlyph('not an emoji','3D').then((emojiFile) => {
  console.log("undefined is good", emojiFile)
})

// invalad style
emoji.fromGlyph('👳🏽‍♂️','not a style').then((emojiFile) => {
  console.log("undefined is good", emojiFile)
})

// multiple emojis
emoji.fromGlyph('🌮🐈🐐🧀🍕','3D').then((emojiFile) => {
  console.log("undefined is good", emojiFile)
})

// multiple emojis (code)
// 👩‍🚒👨‍🚒
emoji.fromCode('1f469 200d 1f692 1f468 200d 1f692','3D').then((emojiFile) => {
  console.log("undefined is good", emojiFile)
})

// wrong input
emoji.fromCode('🚲','3D').then((emojiFile) => {
  console.log("undefined is good", emojiFile)
})