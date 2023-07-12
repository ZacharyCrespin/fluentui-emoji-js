import * as emoji from './index.cjs'

// From Glyph
const test0 = await emoji.fromGlyph('🎅', '3D')
console.log(test0)

// test skin color
const test1 = await emoji.fromGlyph('👵🏿', '3D')
console.log(test1)

const test2 = await emoji.fromGlyph('👋','3D')
console.log(test2)

const test3 = await emoji.fromGlyph('🍕','3D')
console.log(test3)

// From Code
// 🥐
const test4 = await emoji.fromCode('1f950','3D')
console.log(test4)

// 😂
const test5 = await emoji.fromCode('1F602','3D')
console.log(test5)

// 👨‍🚒
const test5_1 = await emoji.fromCode('1f468 200d 1f692','3D')
console.log(test5_1)

// test styles
const test6 = await emoji.fromGlyph('🥨','3D')
console.log(test6)

const test7 = await emoji.fromGlyph('🥨','Color')
console.log(test7)

const test8 = await emoji.fromGlyph('🥨','Flat')
console.log(test8)

const test9 = await emoji.fromGlyph('🥨','High Contrast')
console.log(test9)

// Errors
// invalid emoji
const test10 = await emoji.fromGlyph('not an emoji','3D')
console.log("undefined is good", test10)

// invalad style
const test11 = await emoji.fromGlyph('👳🏽‍♂️','not a style')
console.log("undefined is good", test11)

// multiple emojis
const test12 = await emoji.fromGlyph('🌮🐈🐐🧀🍕','3D')
console.log("undefined is good", test12)

// multiple emojis (code)
// 👩‍🚒👨‍🚒
const test13 = await emoji.fromCode('1f469 200d 1f692 1f468 200d 1f692','3D')
console.log("undefined is good", test13)

// wrong input
const test14 = await emoji.fromCode('🚲','3D')
console.log("undefined is good", test14)