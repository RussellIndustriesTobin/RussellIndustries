// Define your custom words
const words = [
  "2020 Canada's Fastest-Growing Companies            ",
  'Established 1996            ',
  '20+ Facilities            '
];

let i = 0;
let offset = 0;
let forwards = true;
const speed = 130;
const eraseDelay = 1000; // 1 second delay after erasing

function wordFlick() {
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        forwards = false;
        setTimeout(() => {
          forwards = true;
          offset = 0;
          i++;
          if (i >= words.length) {
            i = 0;
          }
          document.querySelector('#mini-title').textContent = ''; // Clear the text before typing the next line
        }, eraseDelay);
      }
    } else {
      if (offset === 0) {
        forwards = true;
      }
    }
    const part = words[i].substr(0, offset);
    if (forwards) {
      offset++;
    } else {
      offset--;
    }
    document.querySelector('#mini-title').textContent = part;
  }, speed);
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', wordFlick);