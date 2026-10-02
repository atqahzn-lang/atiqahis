const ornamentMount =
  document.getElementById(
    "ornamentMount"
  );


async function loadOrnament() {

  if (!ornamentMount) {
    return;
  }


  try {

    const response =
      await fetch(
        "./assets/ornament.svg"
      );


    if (!response.ok) {
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


    if (!originalSVG) {
      return;
    }


    /*
      Insert the SVG directly.

      This preserves the ornament's
      original vector appearance.
    */

    ornamentMount.innerHTML =
      originalSVG.outerHTML;

  }

  catch (error) {

    console.error(
      "Could not load ornament:",
      error
    );

  }

}


loadOrnament();
