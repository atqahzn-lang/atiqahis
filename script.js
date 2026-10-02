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
        "ornament.svg could not be loaded."
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


    const paths =
      Array.from(
        originalSVG.querySelectorAll(
          "path"
        )
      );


    if (
      paths.length === 0
    ) {
      return;
    }



    /*
      Find a non-white ornamental path.
    */

    let ornamentPath =
      paths.find(
        path => {

          const fill =
            (
              path.getAttribute(
                "fill"
              ) ||
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
      );


    /*
      Fallback:
      use the final SVG path.
    */

    if (
      !ornamentPath
    ) {

      ornamentPath =
        paths[
          paths.length - 1
        ];

    }



    /*
      CREATE CLEAN SVG
    */

    const cleanSVG =
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

      cleanSVG.setAttribute(
        "viewBox",
        viewBox
      );

    }


    else {

      const width =
        originalSVG.getAttribute(
          "width"
        ) || 1000;


      const height =
        originalSVG.getAttribute(
          "height"
        ) || 1000;


      cleanSVG.setAttribute(
        "viewBox",
        `0 0 ${width} ${height}`
      );

    }


    cleanSVG.setAttribute(
      "preserveAspectRatio",
      "xMidYMid meet"
    );



    /*
      CLONE ORNAMENT PATH
    */

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


    cleanSVG.appendChild(
      path
    );


    ornamentMount.innerHTML =
      "";


    ornamentMount.appendChild(
      cleanSVG
    );



    /*
      GET PATH LENGTH
    */

    const length =
      path.getTotalLength();


    path.style.strokeDasharray =
      `${length}`;


    path.style.strokeDashoffset =
      `${length}`;


    path.style.opacity =
      "0";


    path.getBoundingClientRect();



    /* =====================================
       CURL OUT
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
       CURL IN
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
       SHOW WHEN IN VIEW
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
          threshold: 0.2
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
      "Ornament failed:",
      error
    );

  }

}



loadOrnament();
