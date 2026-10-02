const ornamentContainer =
  document.getElementById("ornament");

const ornamentMount =
  document.getElementById("ornamentMount");


async function loadOrnament() {

  if (
    !ornamentContainer ||
    !ornamentMount
  ) {
    return;
  }


  const response =
    await fetch("./ornament.svg");


  const svgText =
    await response.text();


  const parser =
    new DOMParser();


  const documentSVG =
    parser.parseFromString(
      svgText,
      "image/svg+xml"
    );


  const originalSVG =
    documentSVG.querySelector("svg");


  if (
    !originalSVG
  ) {
    return;
  }


  const paths =
    Array.from(
      originalSVG.querySelectorAll("path")
    );


  const ornamentPath =
    paths.find(path => {

      const fill =
        path.getAttribute("fill");


      return (
        fill === "#0f0f0f" ||
        fill === "#0F0F0F"
      );

    });


  if (
    !ornamentPath
  ) {
    return;
  }


  const svg =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );


  svg.setAttribute(
    "viewBox",
    originalSVG.getAttribute("viewBox")
  );


  svg.setAttribute(
    "preserveAspectRatio",
    "xMidYMid meet"
  );


  const path =
    ornamentPath.cloneNode(true);


  path.classList.add(
    "ornament-path"
  );


  path.removeAttribute(
    "fill"
  );


  path.removeAttribute(
    "stroke"
  );


  path.removeAttribute(
    "stroke-width"
  );


  svg.appendChild(
    path
  );


  ornamentMount.appendChild(
    svg
  );


  const length =
    path.getTotalLength();


  path.style.strokeDasharray =
    `${length}`;


  path.style.strokeDashoffset =
    `${length}`;


  path.getBoundingClientRect();


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
          0.35
      }

    );


  observer.observe(
    ornamentContainer
  );

}


loadOrnament();
