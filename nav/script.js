/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  labels: [
    "Case studies",
    "UGC Marketing",
    "E-mail Sth sth",
    "Case studies",
    "Case studies",
    "Case studies"
  ],

  duration: 3300,

  lilyWidth: 590,

  lilyTop: 95,

  pointSize: 1.65,

  maxParticles: 5000,

  breakupAmount: 85,

  breakupDrop: 90,

  lilyPause: 220,

  divaDuration: 850,

  finalHold: 1100
};


/* =========================================================
   EXACT LILY SOURCE
========================================================= */

const LILY_SOURCE = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⢄⣄⣤⠤⣴⢽⣻⢲⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠎⢍⠀⠈⡿⡜⡆⢥⠞⡞⢸⢸⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢝⠄⠈⠊⠘⡇⢧⠂⢆⠂⠟⠠⠀⠀⠐⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡮⢦⠑⠢⠠⠀⠱⠘⡀⠌⡞⡌⠀⠀⠀⠀⠉⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡯⡗⣣⡢⠡⠀⠘⣇⢇⠘⣴⢡⡆⠀⠀⠀⠀⢷⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⣿⣪⡱⣧⠡⠁⠀⢻⡸⡄⢾⣹⣗⡆⠋⠀⠀⢸⣾⡄⠀⠀⠀⠀⠀⢀⣤⢶⣹⢖⠢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣲⢥⣛⢽⢣⢃⣀⢽⣧⢷⠈⣿⣞⣧⣧⠛⢀⡀⢻⣿⠀⠀⠀⣰⣝⣯⠾⢇⢏⠔⡒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣢⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢧⢟⡼⣻⡣⠀⢜⣿⣿⡇⣿⣻⣟⡇⠀⠘⢠⡸⣿⡄⣜⣿⣿⠼⣠⢟⠟⣸⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⡸⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⢟⣵⠿⣗⢀⠰⣿⣷⣿⣿⣿⣯⢾⣁⡄⣾⡥⢯⣿⣿⡿⣜⡻⢭⢿⡸⣍⡾⠴⠋⠁⡀⠀⠀⠀⢀⠔⠗⠁⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡠⣄⣢⣠⠀⠈⠀⠉⠀⢀⣀⠐⢨⣯⣟⣮⣿⣿⣻⡀⠈⢿⣿⣿⢿⣷⡿⣽⡁⣿⣿⣿⣿⡿⣜⣿⣹⣞⣷⢿⡹⢼⡀⠆⡀⢀⠀⣀⡤⡋⠈⠀⠀⠀⠀⠀
⠀⠀⠄⡈⠢⠙⡜⢣⢃⠂⢉⡀⠠⠄⠀⠀⠐⠫⢻⣧⣻⣾⣿⣿⣷⣿⡂⢻⣿⣿⡘⣷⣿⡹⢿⣝⣿⣿⡟⣿⣿⣿⣿⢯⣛⢶⡽⣪⡝⡼⡘⣆⠷⠍⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠌⠁⠀⠀⡱⢌⡱⢂⠍⣈⣀⠀⠀⢠⡀⠀⠐⠀⢹⣷⣮⢿⣿⡿⣿⣯⡊⢻⣿⡇⣿⣖⡟⡽⢯⣿⢿⣽⣿⣿⣿⡿⣣⢟⣮⢷⡳⢝⡲⣝⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠐⠀⠀⠰⡰⢎⡶⣩⢞⡤⣉⢄⡀⠠⠄⠀⠘⡰⠀⣿⣯⡻⣿⣻⢽⣛⠿⣼⣿⢗⢸⣯⢳⠿⣿⢗⣽⣿⣿⣿⣿⣳⢿⢯⢏⡯⡼⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡠⠂⠈⠡⡉⠯⠼⣭⠫⡝⡹⠞⡋⠟⠶⠶⣴⣦⣻⣾⣽⣿⣤⣭⣣⡛⢟⠬⡛⢿⡌⡟⢸⡏⣳⣾⢿⣿⣿⣿⢞⣯⢫⠵⣊⡕⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠮⠁⠀⠀⢠⢁⡛⡔⢢⠑⡈⠄⣀⠰⠗⠀⣰⠀⠾⠽⣿⣿⣿⣿⣿⡿⣿⣷⣧⣮⣮⣿⡌⠀⢵⣟⣽⢻⣗⣫⣷⣾⣱⢾⡔⢃⡘⠻⣌⡦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠣⠄⡀⢄⠢⣌⠲⡉⢆⡓⣈⠄⡁⡤⠀⣠⠈⠀⠓⠐⠛⢨⡿⢿⣿⢿⡿⠿⣟⣛⣙⣳⡈⡧⣺⣺⠚⠋⠈⣿⣛⡿⢋⠿⣱⣋⢬⡙⠠⠌⡉⠩⢒⣄⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⠐⠡⣂⠣⠑⠄⠐⠀⠀⢂⠰⢖⢣⣰⣴⠶⢃⡾⣕⡂⢾⡿⣿⡞⣿⣿⣿⣿⣿⣿⣱⣿⣷⣭⣓⣾⣾⣳⡾⣿⣛⢬⣙⠺⣬⡕⢂⡁⠡⠒⢈⠊⠤⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠐⠀⠄⡀⠀⠀⡤⣬⠗⣋⡠⢑⣦⣤⣾⣵⠶⢿⣣⡼⣿⢿⣿⡿⣿⣿⣏⢏⣜⡻⢿⣿⣷⣿⣿⣷⣿⣮⢿⡔⣫⠘⡰⢉⡤⢁⠒⠈⠄⠩⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠠⠁⢀⠒⣙⡛⠉⡏⣉⣷⣾⣿⣷⣿⣿⣿⣟⡱⣿⣿⣿⡟⡿⣙⣿⣵⢻⣿⢿⡯⣟⢿⣻⣽⣝⡦⡙⡙⠖⠄⡈⠄⠀⠁⠀⠡⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⢠⡸⣁⠎⣁⠀⠰⣵⡟⣯⡿⣟⢿⣿⣫⢷⠲⡿⣟⣿⣿⣏⠶⢩⣿⣿⣳⣟⣫⡷⢏⡾⣫⠳⣏⡟⣷⣬⡀⠁⠀⠈⠀⠀⠂⠈⠠⢀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⠠⢲⢝⠁⠈⡁⣾⠟⣡⡟⠡⠖⡉⢞⠣⠆⡖⡻⣽⡻⣿⣿⣿⣦⣽⢿⣿⡝⣷⡹⡼⡍⢯⣇⠓⠤⢉⠓⢮⣝⠦⣄⠀⠀⠀⠀⠀⠀⠀⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢡⢊⡷⣋⠨⢢⡾⢣⢞⠃⠀⠀⢀⣴⣣⡏⢦⡽⣷⣿⣗⢿⣿⣿⣽⣮⣻⣏⡿⣵⢿⢳⡙⡵⠀⠧⠙⢤⠀⠀⠈⠓⢮⡒⢄⠀⠀⠀⠀⡀⠈
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡺⣽⢶⡱⢯⣍⡴⢃⢈⠔⣄⣶⡟⠉⠀⠀⠈⠶⢹⣿⣳⣾⢻⣿⢡⠝⣿⡾⣝⡟⢋⡰⡃⠑⡜⡴⡒⡀⡀⠠⡐⠀⠀⠉⢢⡑⢄⠀⣢⠴⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⣽⢹⣯⣷⢳⡎⡖⢡⣯⣼⣿⠋⠀⠀⠀⠀⢰⠈⢹⣿⡇⣬⠉⣿⡌⠘⠉⣿⣿⡏⠙⢳⣽⡄⢻⣼⣼⡞⡆⠀⠈⠂⠀⠀⠀⠈⣦⣵⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣱⣿⣽⡝⣾⢧⡻⢼⠻⣌⣷⠟⠀⠀⠀⠀⠀⠸⢠⠐⣿⢧⡎⠀⣿⠃⠀⠀⣝⣯⠂⠀⠀⠈⠙⠒⠫⠜⣼⢹⡐⣆⠀⠀⠀⠀⠀⠈⠵⠂⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣟⣽⡾⣼⣿⠟⡱⢌⡶⠙⠀⠀⠀⠀⠀⠀⠀⠀⢛⠆⢹⢲⠱⠀⢸⠀⠀⠀⡜⡧⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠐⠂⠠⠐⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣽⣟⢣⢉⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⠸⣩⣸⠀⢸⡄⠀⣰⣯⢇⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡞⡤⠃⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⠊⡄⢸⢦⠵⣿⣿⡛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠰⢇⣧⢼⣯⢿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⣾⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;


/* =========================================================
   EXACT LILY OCCUPANCY MAP
========================================================= */

const PATTERN =
  LILY_SOURCE
    .replace(/^\n|\n$/g, "")
    .split("\n")
    .map(
      line =>
        [...line]
          .map(
            char =>
              (
                char === "⠀" ||
                char === " "
              )
                ? "."
                : "#"
          )
          .join("")
    );


/* =========================================================
   LET'S GO, DIVA!
========================================================= */

const DIVA_FONT = {

  "L": [
    "#....",
    "#....",
    "#....",
    "#....",
    "#....",
    "#....",
    "#####"
  ],

  "E": [
    "#####",
    "#....",
    "#....",
    "####.",
    "#....",
    "#....",
    "#####"
  ],

  "T": [
    "#####",
    "..#..",
    "..#..",
    "..#..",
    "..#..",
    "..#..",
    "..#.."
  ],

  "'": [
    "##",
    "##",
    ".#",
    "#.",
    "..",
    "..",
    ".."
  ],

  "S": [
    "#####",
    "#....",
    "#....",
    "#####",
    "....#",
    "....#",
    "#####"
  ],

  "G": [
    "#####",
    "#....",
    "#....",
    "#.###",
    "#...#",
    "#...#",
    "#####"
  ],

  "O": [
    "#####",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "#####"
  ],

  ",": [
    "..",
    "..",
    "..",
    "..",
    "..",
    "##",
    ".#"
  ],

  "D": [
    "####.",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "####."
  ],

  "I": [
    "#####",
    "..#..",
    "..#..",
    "..#..",
    "..#..",
    "..#..",
    "#####"
  ],

  "V": [
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    "#...#",
    ".#.#.",
    "..#.."
  ],

  "A": [
    ".###.",
    "#...#",
    "#...#",
    "#####",
    "#...#",
    "#...#",
    "#...#"
  ],

  "!": [
    "#",
    "#",
    "#",
    "#",
    "#",
    ".",
    "#"
  ],

  " ": [
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
};


/* =========================================================
   ELEMENTS
========================================================= */

const widget =
  document.getElementById("widget");

const stage =
  document.getElementById("stage");

const nav =
  document.getElementById("nav");

const status =
  document.getElementById("status");

const canvas =
  document.getElementById("particleCanvas");

const ctx =
  canvas.getContext("2d");


const shapes = [];
const buttons = [];

let busy = false;
let frameID = null;

const gap = 10;

const pillWidth =
  (720 - gap * 5) / 6;


/* =========================================================
   CANVAS
========================================================= */

const DPR = 2;

ctx.setTransform(
  DPR,
  0,
  0,
  DPR,
  0,
  0
);


/* =========================================================
   BUILD NAV
========================================================= */

CONFIG.labels.forEach(
  (label, index) => {

    const shape =
      document.createElement("div");

    shape.className =
      "shape";

    shape.style.left =
      `${index * (pillWidth + gap)}px`;

    shape.style.width =
      `${pillWidth}px`;

    shape.setAttribute(
      "aria-hidden",
      "true"
    );

    stage.appendChild(
      shape
    );

    shapes.push(
      shape
    );


    const button =
      document.createElement(
        "button"
      );

    button.type =
      "button";

    button.textContent =
      label;

    button.addEventListener(
      "click",
      () => run(index)
    );

    nav.appendChild(
      button
    );

    buttons.push(
      button
    );
  }
);


/* =========================================================
   RESPONSIVE
========================================================= */

function resize() {

  const scale =
    Math.min(
      1,
      widget.clientWidth / 720
    );

  stage.style.transform =
    `translateX(-50%) scale(${scale})`;

  widget.style.height =
    `${440 * scale}px`;
}

new ResizeObserver(
  resize
).observe(
  widget
);

resize();


/* =========================================================
   MATH
========================================================= */

function clamp(
  value,
  min,
  max
) {

  return Math.min(
    Math.max(
      value,
      min
    ),
    max
  );
}


function lerp(
  start,
  end,
  amount
) {

  return (
    start +
    (
      end -
      start
    ) *
    amount
  );
}


function easeOutCubic(t) {

  return (
    1 -
    Math.pow(
      1 - t,
      3
    )
  );
}


function easeInOutCubic(t) {

  return (
    t < .5

      ? 4 *
        t *
        t *
        t

      : 1 -
        Math.pow(
          -2 * t + 2,
          3
        ) / 2
  );
}


function noise(seed) {

  const value =
    Math.sin(
      seed *
      12.9898
    ) *
    43758.5453;

  return (
    value -
    Math.floor(
      value
    )
  );
}


/* =========================================================
   READ EXACT LILY PATTERN
========================================================= */

function createLilyDestinations() {

  let minColumn =
    Infinity;

  let maxColumn =
    -Infinity;

  let minRow =
    Infinity;

  let maxRow =
    -Infinity;


  PATTERN.forEach(
    (row, rowIndex) => {

      [...row].forEach(
        (cell, columnIndex) => {

          if (
            cell !== "#"
          ) {
            return;
          }

          minColumn =
            Math.min(
              minColumn,
              columnIndex
            );

          maxColumn =
            Math.max(
              maxColumn,
              columnIndex
            );

          minRow =
            Math.min(
              minRow,
              rowIndex
            );

          maxRow =
            Math.max(
              maxRow,
              rowIndex
            );
        }
      );
    }
  );


  const occupiedColumns =
    maxColumn -
    minColumn +
    1;

  const occupiedRows =
    maxRow -
    minRow +
    1;


  const cellSize =
    CONFIG.lilyWidth /
    occupiedColumns;


  const lilyLeft =
    360 -
    (
      occupiedColumns *
      cellSize
    ) / 2;


  const destinations = [];


  PATTERN.forEach(
    (row, rowIndex) => {

      [...row].forEach(
        (cell, columnIndex) => {

          if (
            cell !== "#"
          ) {
            return;
          }


          destinations.push({

            x:
              lilyLeft +
              (
                columnIndex -
                minColumn
              ) *
              cellSize,

            y:
              CONFIG.lilyTop +
              (
                rowIndex -
                minRow
              ) *
              cellSize,

            row:
              rowIndex -
              minRow,

            column:
              columnIndex -
              minColumn
          });

        }
      );
    }
  );


  return {
    destinations,
    cellSize,
    lilyHeight:
      occupiedRows *
      cellSize
  };
}


/* =========================================================
   PARTICLE LIMIT
========================================================= */

function limitDestinations(
  destinations
) {

  if (
    destinations.length <=
    CONFIG.maxParticles
  ) {
    return destinations;
  }


  const result = [];

  const step =
    destinations.length /
    CONFIG.maxParticles;


  for (
    let i = 0;
    i < CONFIG.maxParticles;
    i++
  ) {

    result.push(
      destinations[
        Math.floor(
          i * step
        )
      ]
    );
  }


  return result;
}


/* =========================================================
   NAVBAR ORIGINS
========================================================= */

function createNavbarOrigins(
  requiredCount
) {

  const border = [];


  shapes.forEach(
    (_, index) => {

      const left =
        index *
        (
          pillWidth +
          gap
        );

      const right =
        left +
        pillWidth;

      const top =
        20;

      const bottom =
        64;


      for (
        let x = left;
        x <= right;
        x += 1.6
      ) {

        border.push({
          x,
          y: top
        });

        border.push({
          x,
          y: bottom
        });
      }


      for (
        let y = top;
        y <= bottom;
        y += 1.6
      ) {

        border.push({
          x: left,
          y
        });

        border.push({
          x: right,
          y
        });
      }

    }
  );


  const origins = [];


  for (
    let i = 0;
    i < requiredCount;
    i++
  ) {

    const position =
      (
        i /
        Math.max(
          1,
          requiredCount - 1
        )
      ) *
      (
        border.length - 1
      );


    const index =
      Math.floor(
        position
      );


    const point =
      border[index];


    origins.push({

      x:
        point.x +
        (
          noise(
            i + 50
          ) -
          .5
        ) *
        1.6,

      y:
        point.y +
        (
          noise(
            i + 100
          ) -
          .5
        ) *
        1.6

    });
  }


  return origins;
}


/* =========================================================
   CREATE LILY PARTICLES
========================================================= */

function createParticles() {

  const map =
    createLilyDestinations();


  let destinations =
    limitDestinations(
      map.destinations
    );


  destinations =
    destinations.map(
      (destination, index) => ({

        ...destination,

        orderNoise:
          noise(
            index + 4000
          )

      })
    );


  const origins =
    createNavbarOrigins(
      destinations.length
    );


  return destinations.map(
    (destination, index) => {

      const origin =
        origins[index];


      const n1 =
        noise(
          index + 1000
        );

      const n2 =
        noise(
          index + 2000
        );

      const n3 =
        noise(
          index + 3000
        );


      const scatterX =
        origin.x +
        (
          n1 -
          .5
        ) *
        CONFIG.breakupAmount;


      const scatterY =
        origin.y +
        15 +
        n2 *
        CONFIG.breakupDrop;


      const formationStart =
        .12 +
        destination.orderNoise *
        .34;


      const formationDuration =
        .36 +
        n3 *
        .22;


      const curve =
        (
          n2 -
          .5
        ) *
        65;


      return {

        startX:
          origin.x,

        startY:
          origin.y,

        scatterX,

        scatterY,

        endX:
          destination.x,

        endY:
          destination.y,

        formationStart,

        formationDuration,

        curve,

        size:
          CONFIG.pointSize *
          (
            .7 +
            n1 *
            .55
          ),

        opacity:
          .65 +
          n2 *
          .35

      };
    }
  );
}


/* =========================================================
   DRAW LILY PARTICLE
========================================================= */

function drawParticle(
  particle,
  progress
) {

  let x;
  let y;
  let opacity;


  if (
    progress <
    particle.formationStart
  ) {

    const local =
      clamp(
        progress /
        particle.formationStart,
        0,
        1
      );


    const eased =
      easeOutCubic(
        local
      );


    x =
      lerp(
        particle.startX,
        particle.scatterX,
        eased
      );


    y =
      lerp(
        particle.startY,
        particle.scatterY,
        eased
      );


    opacity =
      lerp(
        1,
        .55,
        eased
      );
  }


  else {

    const local =
      clamp(
        (
          progress -
          particle.formationStart
        ) /
        particle.formationDuration,
        0,
        1
      );


    const eased =
      easeInOutCubic(
        local
      );


    const arc =
      Math.sin(
        local *
        Math.PI
      );


    x =
      lerp(
        particle.scatterX,
        particle.endX,
        eased
      ) +
      arc *
      particle.curve;


    y =
      lerp(
        particle.scatterY,
        particle.endY,
        eased
      );


    opacity =
      lerp(
        .55,
        particle.opacity,
        eased
      );
  }


  ctx.globalAlpha =
    opacity;


  ctx.fillRect(
    x,
    y,
    particle.size,
    particle.size
  );
}


/* =========================================================
   NAVBAR → LILY ANIMATION
========================================================= */

function animateParticles(
  particles
) {

  return new Promise(
    resolve => {

      const started =
        performance.now();


      function frame(now) {

        const elapsed =
          now -
          started;


        const progress =
          clamp(
            elapsed /
            CONFIG.duration,
            0,
            1
          );


        ctx.clearRect(
          0,
          0,
          720,
          440
        );


        ctx.fillStyle =
          "#262626";


        particles.forEach(
          particle => {

            drawParticle(
              particle,
              progress
            );

          }
        );


        ctx.globalAlpha =
          1;


        if (
          progress < 1
        ) {

          frameID =
            requestAnimationFrame(
              frame
            );

        }

        else {

          frameID =
            null;

          resolve();

        }

      }


      frameID =
        requestAnimationFrame(
          frame
        );

    }
  );
}


/* =========================================================
   DRAW COMPLETED LILY
========================================================= */

function drawCompletedLily(
  particles
) {

  ctx.fillStyle =
    "#262626";


  particles.forEach(
    particle => {

      drawParticle(
        particle,
        1
      );

    }
  );


  ctx.globalAlpha =
    1;
}


/* =========================================================
   CREATE "LET'S GO, DIVA!" POINTS
========================================================= */

function createDivaPoints() {

  const text =
    "LET'S GO, DIVA!";


  const pixelSize =
    2.35;

  const pixelGap =
    .75;

  const step =
    pixelSize +
    pixelGap;

  const characterGap =
    step * 1.6;


  const characterWidths =
    [...text].map(
      character => {

        const pattern =
          DIVA_FONT[
            character
          ];


        if (
          !pattern
        ) {
          return 0;
        }


        const columns =
          Math.max(
            ...pattern.map(
              row =>
                row.length
            )
          );


        return (
          columns *
          step +
          characterGap
        );
      }
    );


  const totalWidth =
    characterWidths.reduce(
      (sum, width) =>
        sum + width,
      0
    );


  let cursorX =
    (
      720 -
      totalWidth
    ) / 2;


  const startY =
    388;


  const points = [];


  [...text].forEach(
    (character, characterIndex) => {

      const pattern =
        DIVA_FONT[
          character
        ];


      if (
        !pattern
      ) {
        return;
      }


      pattern.forEach(
        (row, rowIndex) => {

          [...row].forEach(
            (cell, columnIndex) => {

              if (
                cell !== "#"
              ) {
                return;
              }


              const index =
                points.length;


              points.push({

                x:
                  cursorX +
                  columnIndex *
                  step,

                y:
                  startY +
                  rowIndex *
                  step,

                size:
                  pixelSize,

                reveal:
                  noise(
                    index +
                    characterIndex *
                    91 +
                    9000
                  ) *
                  .68,

                driftX:
                  (
                    noise(
                      index +
                      12000
                    ) -
                    .5
                  ) *
                  12,

                driftY:
                  6 +
                  noise(
                    index +
                    14000
                  ) *
                  12

              });

            }
          );

        }
      );


      cursorX +=
        characterWidths[
          characterIndex
        ];

    }
  );


  return points;
}


/* =========================================================
   DRAW "LET'S GO, DIVA!"
========================================================= */

function drawDiva(
  points,
  progress
) {

  ctx.fillStyle =
    "#262626";


  points.forEach(
    point => {

      const local =
        clamp(
          (
            progress -
            point.reveal
          ) /
          .32,
          0,
          1
        );


      if (
        local <= 0
      ) {
        return;
      }


      const eased =
        easeOutCubic(
          local
        );


      const x =
        lerp(
          point.x +
          point.driftX,
          point.x,
          eased
        );


      const y =
        lerp(
          point.y +
          point.driftY,
          point.y,
          eased
        );


      ctx.globalAlpha =
        eased;


      ctx.fillRect(
        x,
        y,
        point.size,
        point.size
      );

    }
  );


  ctx.globalAlpha =
    1;
}


/* =========================================================
   REVEAL "LET'S GO, DIVA!"
========================================================= */

function animateDivaReveal(
  particles,
  divaPoints
) {

  return new Promise(
    resolve => {

      const started =
        performance.now();


      function frame(now) {

        const elapsed =
          now -
          started;


        const progress =
          clamp(
            elapsed /
            CONFIG.divaDuration,
            0,
            1
          );


        ctx.clearRect(
          0,
          0,
          720,
          440
        );


        drawCompletedLily(
          particles
        );


        drawDiva(
          divaPoints,
          progress
        );


        if (
          progress < 1
        ) {

          frameID =
            requestAnimationFrame(
              frame
            );

        }

        else {

          frameID =
            null;

          resolve();

        }

      }


      frameID =
        requestAnimationFrame(
          frame
        );

    }
  );
}


/* =========================================================
   FINAL COMPOSITION
========================================================= */

function drawFinalComposition(
  particles,
  divaPoints
) {

  ctx.clearRect(
    0,
    0,
    720,
    440
  );


  drawCompletedLily(
    particles
  );


  drawDiva(
    divaPoints,
    1
  );


  ctx.globalAlpha =
    1;
}


/* =========================================================
   DISSOLVE ORIGINAL NAV
========================================================= */

function dissolveNavbar(
  selectedIndex
) {

  shapes.forEach(
    (shape, index) => {

      shape.animate(

        [
          {
            opacity: 1
          },

          {
            offset: .3,
            opacity: .85
          },

          {
            opacity: 0
          }
        ],

        {
          duration: 620,

          delay:
            index * 32,

          easing:
            "ease-out",

          fill:
            "forwards"
        }
      );

    }
  );


  buttons.forEach(
    (button, index) => {

      button.animate(

        [
          {
            opacity: 1
          },

          {
            offset: .45,

            opacity:
              index ===
              selectedIndex
                ? 1
                : .65
          },

          {
            opacity: 0
          }
        ],

        {
          duration:
            index ===
            selectedIndex
              ? 950
              : 760,

          easing:
            "ease-out",

          fill:
            "forwards"
        }
      );

    }
  );
}


/* =========================================================
   MAIN
========================================================= */

async function run(
  selectedIndex
) {

  if (
    busy
  ) {
    return;
  }


  busy =
    true;


  widget.setAttribute(
    "aria-busy",
    "true"
  );


  buttons.forEach(
    button =>
      button.disabled =
        true
  );


  buttons[
    selectedIndex
  ].setAttribute(
    "aria-current",
    "page"
  );


  status.textContent =
    `Opening ${CONFIG.labels[selectedIndex]}`;


  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (
    reducedMotion
  ) {

    finishNavigation(
      selectedIndex
    );

    return;
  }


  try {

    const particles =
      createParticles();


    const divaPoints =
      createDivaPoints();


    dissolveNavbar(
      selectedIndex
    );


    await animateParticles(
      particles
    );


    drawCompletedLily(
      particles
    );


    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          CONFIG.lilyPause
        )
    );


    await animateDivaReveal(
      particles,
      divaPoints
    );


    drawFinalComposition(
      particles,
      divaPoints
    );


    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          CONFIG.finalHold
        )
    );


    finishNavigation(
      selectedIndex
    );

  }


  catch (
    error
  ) {

    console.error(
      error
    );


    reset();


    status.textContent =
      "Please try again.";

  }

}


/* =========================================================
   WIX MESSAGE
========================================================= */

function finishNavigation(
  selectedIndex
) {

  window.parent.postMessage(

    {

      type:
        "portfolio-navigation-complete",

      index:
        selectedIndex,

      label:
        CONFIG.labels[
          selectedIndex
        ]

    },

    "*"
  );


  status.textContent =
    "Animation complete.";


  setTimeout(
    reset,
    250
  );
}


/* =========================================================
   RESET
========================================================= */

function reset() {

  if (
    frameID !== null
  ) {

    cancelAnimationFrame(
      frameID
    );

    frameID =
      null;
  }


  ctx.clearRect(
    0,
    0,
    720,
    440
  );


  ctx.globalAlpha =
    1;


  shapes.forEach(
    shape => {

      shape
        .getAnimations()
        .forEach(
          animation =>
            animation.cancel()
        );


      shape.style.opacity =
        "1";

    }
  );


  buttons.forEach(
    button => {

      button
        .getAnimations()
        .forEach(
          animation =>
            animation.cancel()
        );


      button.disabled =
        false;


      button.style.opacity =
        "1";


      button.removeAttribute(
        "aria-current"
      );

    }
  );


  busy =
    false;


  widget.removeAttribute(
    "aria-busy"
  );
}
