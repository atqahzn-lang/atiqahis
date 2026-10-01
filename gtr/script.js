const portfolioData = {

  who: {

    question: [
      {
        text: "Who",
        style: "italic"
      },

      {
        text: " is ",
        style: "regular"
      },

      {
        text: "Atiqah",
        style: "bold"
      },

      {
        text: "?",
        style: "regular"
      }
    ],


    context: [
      {
        text: "A little ",
        style: "regular"
      },

      {
        text: "about me",
        style: "italic"
      }
    ],


    answer: [
      {
        text: "A marketer ",
        style: "highlight"
      },

      {
        text:
          "who likes figuring out how people behave, ",
        style: "regular"
      },

      {
        text:
          "where systems break ",
        style: "lowlight"
      },

      {
        text:
          "and what can be improved.",
        style: "regular"
      }
    ]
  },


  this: {

    question: [
      {
        text: "What",
        style: "italic"
      },

      {
        text: " is this, ",
        style: "regular"
      },

      {
        text: "even",
        style: "bold"
      },

      {
        text: "?",
        style: "regular"
      }
    ],


    context: [
      {
        text:
          "Imagine if I had named it something like ",
        style: "regular"
      },

      {
        text:
          "amalgamations",
        style: "italic"
      }
    ],


    answer: [
      {
        text:
          "A portfolio + learning log ",
        style: "highlight"
      },

      {
        text:
          "for the things I’ve built, tested and learned ",
        style: "regular"
      },

      {
        text:
          "along the way.",
        style: "lowlight"
      }
    ]
  },


  worked: {

    question: [
      {
        text: "What",
        style: "italic"
      },

      {
        text: " I’ve ",
        style: "regular"
      },

      {
        text: "worked on",
        style: "bold"
      },

      {
        text: ".",
        style: "regular"
      }
    ],


    context: [
      {
        text:
          "Verified ",
        style: "regular"
      },

      {
        text:
          "can-do's",
        style: "italic"
      }
    ],


    answer: [
      {
        text:
          "Paid media",
        style: "highlight"
      },

      {
        text:
          ", creative R&D, ",
        style: "regular"
      },

      {
        text:
          "customer journeys + lead qualification",
        style: "lowlight"
      },

      {
        text:
          ", CRM + journey automation, and ",
        style: "regular"
      },

      {
        text:
          "performance reporting.",
        style: "highlight"
      }
    ]
  },


  working: {

    question: [
      {
        text: "What",
        style: "italic"
      },

      {
        text: " I’m ",
        style: "regular"
      },

      {
        text: "working on",
        style: "bold"
      },

      {
        text: ".",
        style: "regular"
      }
    ],


    context: [
      {
        text:
          "I wouldn't call them ",
        style: "regular"
      },

      {
        text:
          "projects",
        style: "italic"
      }
    ],


    answer: [
      {
        text:
          "I’m currently tinkering with ",
        style: "regular"
      },

      {
        text:
          "Figma",
        style: "highlight"
      },

      {
        text:
          ", some coding but mostly how to turn ideas into ",
        style: "regular"
      },

      {
        text:
          "small functional tools with AI.",
        style: "highlightItalic"
      }
    ]
  },


  misc: {

    question: [
      {
        text:
          "Miscellaneous",
        style: "italic"
      },

      {
        text:
          "...miscle..",
        style: "regular"
      },

      {
        text:
          "misc",
        style: "bold"
      }
    ],


    context: [
      {
        text:
          "dan lain-lain",
        style: "italic"
      }
    ],


    answer: [
      {
        text:
          "Experiments, unfinished ideas and learning notes ",
        style: "lowlight"
      },

      {
        text:
          "that don’t fit neatly anywhere else.",
        style: "regular"
      }
    ]
  }
};


/* =========================================
   ELEMENTS
========================================= */

const dropdown =
  document.getElementById(
    "portfolioDropdown"
  );

const trigger =
  document.getElementById(
    "dropdownTrigger"
  );

const triggerText =
  document.getElementById(
    "dropdownTriggerText"
  );

const contextText =
  document.getElementById(
    "contextText"
  );

const answerText =
  document.getElementById(
    "answerText"
  );

const options =
  Array.from(
    document.querySelectorAll(
      ".dropdown-option"
    )
  );


/* =========================================
   STYLE MAPS
========================================= */

const questionClassMap = {

  italic:
    "question-italic",

  regular:
    "question-regular",

  bold:
    "question-bold"
};


const answerClassMap = {

  regular:
    "answer-regular",

  lowlight:
    "answer-lowlight",

  highlight:
    "answer-highlight",

  highlightItalic:
    "answer-highlight-italic"
};


let keyboardIndex =
  -1;

let updateTimer;


/* =========================================
   RENDER SEGMENTS
========================================= */

function renderSegments(
  container,
  segments,
  classMap
) {

  container.textContent =
    "";


  segments.forEach(
    segment => {

      const span =
        document.createElement(
          "span"
        );


      span.textContent =
        segment.text;


      if (
        classMap[
          segment.style
        ]
      ) {

        span.className =
          classMap[
            segment.style
          ];
      }


      container.appendChild(
        span
      );

    }
  );
}


/* =========================================
   RENDER CONTEXT
========================================= */

function renderContext(
  segments
) {

  contextText.textContent =
    "";


  segments.forEach(
    segment => {

      const tag =
        segment.style === "italic"

          ? "em"

          : segment.style === "bold"

            ? "strong"

            : "span";


      const element =
        document.createElement(
          tag
        );


      element.textContent =
        segment.text;


      contextText.appendChild(
        element
      );

    }
  );
}


/* =========================================
   INITIAL ANSWER
========================================= */

renderSegments(

  answerText,

  [
    {
      text:
        "Select a question ",
      style:
        "lowlight"
    },

    {
      text:
        "and I’ll tell you a little more ",
      style:
        "highlight"
    },

    {
      text:
        "about my life.",
      style:
        "regular"
    }
  ],

  answerClassMap
);


/* =========================================
   KEYBOARD FOCUS
========================================= */

function clearKeyboardFocus() {

  options.forEach(
    option => {

      option.classList.remove(
        "keyboard-focus"
      );


      option.tabIndex =
        -1;

    }
  );
}


function updateKeyboardFocus() {

  clearKeyboardFocus();


  if (
    keyboardIndex < 0 ||
    keyboardIndex >=
      options.length
  ) {

    return;
  }


  const option =
    options[
      keyboardIndex
    ];


  option.classList.add(
    "keyboard-focus"
  );


  option.tabIndex =
    0;


  option.focus();
}


/* =========================================
   OPEN DROPDOWN
========================================= */

function openDropdown() {

  dropdown.classList.add(
    "open"
  );


  trigger.setAttribute(
    "aria-expanded",
    "true"
  );


  keyboardIndex =
    Math.max(

      options.findIndex(
        option =>
          option.classList.contains(
            "selected"
          )
      ),

      0
    );
}


/* =========================================
   CLOSE DROPDOWN
========================================= */

function closeDropdown(
  returnFocus = false
) {

  dropdown.classList.remove(
    "open"
  );


  trigger.setAttribute(
    "aria-expanded",
    "false"
  );


  clearKeyboardFocus();


  if (
    returnFocus
  ) {

    trigger.focus();
  }
}


/* =========================================
   SELECT OPTION
========================================= */

function selectOption(
  option
) {

  const selected =
    portfolioData[
      option.dataset.value
    ];


  if (
    !selected
  ) {

    return;
  }


  options.forEach(
    item => {

      item.classList.remove(
        "selected"
      );


      item.setAttribute(
        "aria-selected",
        "false"
      );

    }
  );


  option.classList.add(
    "selected"
  );


  option.setAttribute(
    "aria-selected",
    "true"
  );


  renderSegments(
    triggerText,
    selected.question,
    questionClassMap
  );


  closeDropdown(
    true
  );


  clearTimeout(
    updateTimer
  );


  contextText.classList.add(
    "fade"
  );


  answerText.classList.add(
    "fade"
  );


  updateTimer =
    setTimeout(

      () => {

        renderContext(
          selected.context
        );


        renderSegments(
          answerText,
          selected.answer,
          answerClassMap
        );


        contextText.classList.remove(
          "fade"
        );


        answerText.classList.remove(
          "fade"
        );

      },

      180
    );
}


/* =========================================
   TRIGGER CLICK
========================================= */

trigger.addEventListener(

  "click",

  () => {

    dropdown.classList.contains(
      "open"
    )

      ? closeDropdown()

      : openDropdown();

  }
);


/* =========================================
   TRIGGER KEYBOARD
========================================= */

trigger.addEventListener(

  "keydown",

  event => {

    if (
      event.key ===
      "ArrowDown"
    ) {

      event.preventDefault();


      if (
        !dropdown.classList.contains(
          "open"
        )
      ) {

        openDropdown();
      }


      updateKeyboardFocus();
    }


    if (
      event.key ===
      "ArrowUp"
    ) {

      event.preventDefault();


      if (
        !dropdown.classList.contains(
          "open"
        )
      ) {

        openDropdown();

        keyboardIndex =
          options.length -
          1;
      }


      updateKeyboardFocus();
    }

  }
);


/* =========================================
   OPTIONS
========================================= */

options.forEach(

  (option, index) => {

    option.addEventListener(

      "click",

      () =>
        selectOption(
          option
        )
    );


    option.addEventListener(

      "keydown",

      event => {

        switch (
          event.key
        ) {


          case "ArrowDown":

            event.preventDefault();

            keyboardIndex =
              Math.min(
                index + 1,
                options.length - 1
              );

            updateKeyboardFocus();

            break;


          case "ArrowUp":

            event.preventDefault();

            keyboardIndex =
              Math.max(
                index - 1,
                0
              );

            updateKeyboardFocus();

            break;


          case "Home":

            event.preventDefault();

            keyboardIndex =
              0;

            updateKeyboardFocus();

            break;


          case "End":

            event.preventDefault();

            keyboardIndex =
              options.length -
              1;

            updateKeyboardFocus();

            break;


          case "Enter":

          case " ":

            event.preventDefault();

            selectOption(
              option
            );

            break;


          case "Escape":

            event.preventDefault();

            closeDropdown(
              true
            );

            break;

        }

      }
    );

  }
);


/* =========================================
   CLICK OUTSIDE
========================================= */

document.addEventListener(

  "click",

  event => {

    if (
      !dropdown.contains(
        event.target
      )
    ) {

      closeDropdown();
    }

  }
);


/* =========================================
   ESCAPE
========================================= */

document.addEventListener(

  "keydown",

  event => {

    if (
      event.key ===
        "Escape" &&

      dropdown.classList.contains(
        "open"
      )
    ) {

      closeDropdown(
        true
      );
    }

  }
);
