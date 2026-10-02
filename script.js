const folderZone =
  document.querySelector(".folder-wip-zone");

const folderButton =
  document.getElementById("folderButton");

const wipFiles =
  document.getElementById("wipFiles");


if (
  folderZone &&
  folderButton &&
  wipFiles
) {

  folderButton.addEventListener(
    "click",
    () => {

      const isOpen =
        folderZone.classList.toggle("open");

      folderButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      wipFiles.setAttribute(
        "aria-hidden",
        isOpen ? "false" : "true"
      );

    }
  );

}
