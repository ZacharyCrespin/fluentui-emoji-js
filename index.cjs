const fs = require('fs/promises');
const path = require('path');

const emojiFolder = './assets';
const emojiDataFile = 'emojiData.json';

// Valid emoji skintones
const skintones = [
  'Default',
  'Light',
  'Medium-Light',
  'Medium',
  'Medium-Dark',
  'Dark',
]

// All valid Fluent Emoji styles
const styles = [
  '3D',
  'Color',
  'Flat',
  'High Contrast',
]

// Retrieve command-line arguments
const args = process.argv.slice(2);

let emojiData = []

// Get all the folders in a directory
async function getFolders(dir) {
  return (await fs.readdir(dir, { withFileTypes: true }))
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
}

// Get all the files in a directory
async function getFiles(dir) {
  return (await fs.readdir(dir, { withFileTypes: true }))
    .map((dir) => dir.name);
}

// Get all the emojis
async function generateEmojiData() {
  async function getEmojiData(name) {
    const meta = JSON.parse(
      (await fs.readFile(path.join(__dirname, emojiFolder, name, 'metadata.json'))).toString()
    );
    const { unicodeSkintones, unicode, glyph } = meta;
    if (unicodeSkintones) {
      let hasSkinToneFolder;
      
      try {
        await fs.stat(path.join(__dirname, emojiFolder, name, 'Default'));
        hasSkinToneFolder = true;
      } catch {
        hasSkinToneFolder = false;
      }
  
      for (let i = 0; i < unicodeSkintones.length; i++) {
        const skintoneCode = unicodeSkintones[i];
        const skintone = skintones[i];
        const glyphMod = String.fromCodePoint(
          ...skintoneCode.split(' ').map((c) => parseInt(c, 16))
        );
        const folder = `${emojiFolder}/${name}${hasSkinToneFolder ? '/' + skintone : ''}`;
        const emojiStyles = await getFolders(path.join(__dirname, folder));

        emojiData.push({
          glyph: glyphMod,
          unicode,
          folder,
          emojiStyles
        })
      }
    } else {
      const folder = `${emojiFolder}/${name}`;
      const emojiStyles = await getFolders(path.join(__dirname, folder));

      emojiData.push({
        glyph,
        unicode,
        folder,
        emojiStyles
      })
    }
  }

  const emojiFolders = await getFolders(emojiFolder);
  for (let i = 0; i < emojiFolders.length; i++) {
    await getEmojiData(emojiFolders[i]);
    console.log(`Processed ${i + 1} / ${emojiFolders.length}`);
  }

  // Save emojiData to json file
  await fs.writeFile(path.join(__dirname, emojiDataFile), JSON.stringify(emojiData))
  console.log(`Generated ${emojiDataFile}`)
}
// Check if "--generate" argument is provided
// if so regenerate emoji data
if (args.includes("--generate")) {
  generateEmojiData();
}

// Load emoji data from file
async function loadEmojiData() {
  emojiData = JSON.parse(
    (await fs.readFile(path.join(__dirname, emojiDataFile))).toString()
  )
}

async function getEmoji(key, q, style) {
  await loadEmojiData();
  // Even if this is valid that does not mean that emoji has that style
  if (!styles.includes(style)) {
    console.log('Invalad style');
    return;
  }
  const data = emojiData.find(item => item[key] == q);
  if (!data) {
    console.log('Emoji not found');
    return;
  }
  const folder = `${data.folder}/${style}`;
  const image = await getFiles(path.join(__dirname, folder));
  if (image.length == 1) {
    return `${folder}/${image}`.replace(emojiFolder, "");
  } else {
    console.log('Unexpected folder contents');
    return;
  }
}

// Get image by glyph
async function fromGlyph(glyph, style) {
  return await getEmoji('glyph', glyph, style);
}

// Get image by unicode
async function fromCode(code, style) {
  code = code.toLowerCase();
  return await getEmoji('unicode', code, style);
}

module.exports = { fromGlyph, fromCode }
