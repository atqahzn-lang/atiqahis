/* =========================================
   FOLDER + WIP FILES
========================================= */

const folderZone =
  document.querySelector(
    ".folder-wip-zone"
  );


const folderButton =
  document.getElementById(
    "folderButton"
  );


const wipFiles =
  document.getElementById(
    "wipFiles"
  );


if (
  folderZone &&
  folderButton &&
  wipFiles
) {

  folderButton.addEventListener(
    "click",
    () => {

      const isOpen =
        folderZone.classList.toggle(
          "open"
        );


      folderButton.setAttribute(
        "aria-expanded",
        isOpen
          ? "true"
          : "false"
      );


      wipFiles.setAttribute(
        "aria-hidden",
        isOpen
          ? "false"
          : "true"
      );

    }
  );

}



/* =========================================
   ORNAMENT
========================================= */

const ornamentContainer =
  document.getElementById(
    "ornament"
  );


const ornamentMount =
  document.getElementById(
    "ornamentMount"
  );


async function loadOrnament() {

  if (
    !ornamentContainer ||
    !ornamentMount
  ) {
    return;
  }


  try {

    const response =
      await fetch(
        "./ornament.svg"
      );


    if (
      !response.ok
    ) {

      console.error(
        "Could not find ornament.svg"
      );

      return;
    }


    const svgText =
      await response.text();


    const parser =
      new DOMParser();


    const svgDocument =
      parser.parseFromString(
        svgText,
        "image/svg+xml"
      );


    const originalSVG =
      svgDocument.querySelector(
        "svg"
      );


    if (
      !originalSVG
    ) {
      return;
    }


    const allPaths =
      Array.from(
        originalSVG.querySelectorAll(
          "path"
        )
      );


    if (
      allPaths.length === 0
    ) {
      return;
    }


    /*
      Try to locate the dark ornament
      instead of a white/background path.
    */

    const ornamentPath =
      allPaths.find(
        path => {

          const fill =
            (
              path.getAttribute("fill") ||
              ""
            )
              .trim()
              .toLowerCase();


          return (
            fill !== "" &&
            fill !== "none" &&
            fill !== "white" &&
            fill !== "#fff" &&
            fill !== "#ffffff" &&
            fill !== "transparent"
          );

        }
      )
      ||
      allPaths[
        allPaths.length - 1
      ];


    const newSVG =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );


    const viewBox =
      originalSVG.getAttribute(
        "viewBox"
      );


    if (
      viewBox
    ) {

      newSVG.setAttribute(
        "viewBox",
        viewBox
      );

    }


    else {

      const width =
        originalSVG.getAttribute(
          "width"
        )
        ||
        "1000";


      const height =
        originalSVG.getAttribute(
          "height"
        )
        ||
        "1000";


      newSVG.setAttribute(
        "viewBox",
        `0 0 ${width} ${height}`
      );

    }


    newSVG.setAttribute(
      "preserveAspectRatio",
      "xMidYMid meet"
    );


    const path =
      ornamentPath.cloneNode(
        true
      );


    path.classList.add(
      "ornament-path"
    );


    path.setAttribute(
      "fill",
      "none"
    );


    path.setAttribute(
      "stroke",
      "#292934"
    );


    path.setAttribute(
      "stroke-width",
      "1.2"
    );


    path.setAttribute(
      "stroke-linecap",
      "round"
    );


    path.setAttribute(
      "stroke-linejoin",
      "round"
    );


    newSVG.appendChild(
      path
    );


    ornamentMount.innerHTML =
      "";


    ornamentMount.appendChild(
      newSVG
    );


    let length;


    try {

      length =
        path.getTotalLength();

    }


    catch (
      error
    ) {

      console.error(
        "Could not measure ornament path.",
        error
      );

      return;
    }


    path.style.strokeDasharray =
      `${length}`;


    path.style.strokeDashoffset =
      `${length}`;


    path.style.opacity =
      "0";


    path.getBoundingClientRect();



    /* =====================================
       DRAW OUT
    ====================================== */

    function curlOut() {

      path
        .getAnimations()
        .forEach(
          animation =>
            animation.cancel()
        );


      path.animate(

        [
          {
            strokeDashoffset:
              length,

            opacity:
              0
          },

          {
            offset:
              0.08,

            opacity:
              1
          },

          {
            strokeDashoffset:
              0,

            opacity:
              1
          }
        ],

        {
          duration:
            2600,

          easing:
            "cubic-bezier(.22,.61,.36,1)",

          fill:
            "forwards"
        }

      );

    }



    /* =====================================
       DRAW BACK IN
    ====================================== */

    function curlIn() {

      path
        .getAnimations()
        .forEach(
          animation =>
            animation.cancel()
        );


      path.animate(

        [
          {
            strokeDashoffset:
              0,

            opacity:
              1
          },

          {
            strokeDashoffset:
              length,

            opacity:
              0
          }
        ],

        {
          duration:
            1800,

          easing:
            "cubic-bezier(.55,.06,.68,.19)",

          fill:
            "forwards"
        }

      );

    }



    /* =====================================
       SCROLL OBSERVER
    ====================================== */

    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                curlOut();

              }


              else {

                curlIn();

              }

            }
          );

        },

        {
          threshold:
            0.25
        }

      );


    observer.observe(
      ornamentContainer
    );

  }


  catch (
    error
  ) {

    console.error(
      "Ornament failed to load:",
      error
    );

  }

}


loadOrnament();
