let btn = document.getElementById("btn");
let slider = document.getElementById("myRange");
let hexCol = document.getElementById("hexColor");
let rgbaCol = document.getElementById("rgbaColor");
let clipboardHex = document.getElementById("clipboardHex");
let clipboardRgba = document.getElementById("clipboardRgba");
let modal = document.getElementById("modal");

// modal pop-up
setTimeout(function() {
    modal.classList.remove("hidden");
    document.body.classList.add("body-color"); 
    document.getElementsByTagName("main")[0].classList.add("opacity-50"); 
    
}, 5000); 

document.body.addEventListener("click", function() {
    if (document.body.classList.contains("body-color")) {
        modal.classList.add("hidden");
        document.body.classList.remove("body-color"); 
        document.getElementsByTagName("main")[0].classList.remove("opacity-50"); 

    }
})




btn.addEventListener("click", randomColor);

[clipboardHex, clipboardRgba].forEach((ar) => {
  ar.addEventListener("click", function () {
    let textCopy = this.parentElement.getElementsByTagName("input")[0];
    textCopy.select();
    textCopy.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(textCopy.value);
    alert("Copied the text: " + textCopy.value);
  });
});

rgbaCol.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    convertRGBA();
  }
});
hexCol.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    convertHex();
  }
});

slider.addEventListener("change", sliderChange);

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);

  let redHex =
    red.toString(16).length < 2 ? "0" + red.toString(16) : red.toString(16);
  let blueHex =
    blue.toString(16).length < 2 ? "0" + blue.toString(16) : blue.toString(16);
  let greenHex =
    green.toString(16).length < 2
      ? "0" + green.toString(16)
      : green.toString(16);

  let alpha = slider.value / 100;

  let alphaHexCode = Math.floor(alpha * 255);
  let alphaHex =
    Number(alphaHexCode).toString(16).length < 2
      ? "0" + Number(alphaHexCode).toString(16)
      : Number(alphaHexCode).toString(16); // this needs to be multiplied by 255 as it is currently percentage value and doesn't convert correctly

  hexCol.value = "#" + redHex + blueHex + greenHex + alphaHex;
  rgbaCol.value = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";

  document.body.style.backgroundColor =
    "#" + redHex + blueHex + greenHex + alphaHex;
}

function convertRGBA() {
  let rgba = rgbaCol.value.slice(5, rgbaCol.value.length - 1);
  let rgbaArr = rgba.split(",");

  let redHex =
    Number(rgbaArr[0]).toString(16).length < 2
      ? "0" + Number(rgbaArr[0]).toString(16)
      : Number(rgbaArr[0]).toString(16);
  let blueHex =
    Number(rgbaArr[1]).toString(16).length < 2
      ? "0" + Number(rgbaArr[1]).toString(16)
      : Number(rgbaArr[1]).toString(16);
  let greenHex =
    Number(rgbaArr[2]).toString(16).length < 2
      ? "0" + Number(rgbaArr[2]).toString(16)
      : Number(rgbaArr[2]).toString(16);
  let alphaHex =
    Math.floor(Number(rgbaArr[3] * 255)).length < 2
      ? "0" + Math.floor(Number(rgbaArr[3] * 255))
      : Math.floor(Number(rgbaArr[3] * 255)).toString(16);

  hexCol.value = "#" + redHex + blueHex + greenHex + alphaHex;
  slider.value = rgbaArr[3] * 100;
  document.body.style.backgroundColor =
    "#" + redHex + blueHex + greenHex + alphaHex;
}

function convertHex() {
  let hex = hexCol.value.slice(1);
  let red = parseInt(hex.slice(0, 2), 16);
  let green = parseInt(hex.slice(2, 4), 16);
  let blue = parseInt(hex.slice(4, 6), 16);
  let alpha = hex.length <= 6 ? slider.value : parseInt(hex.slice(6), 16);
  if (hex.length <= 6) {
    alpha = alpha / 100;
  } else {
    alpha = Math.round((alpha / 255) * 100) / 100;
  }
  console.log(alpha);

  rgbaCol.value = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";

  slider.value = alpha * 100;
  document.body.style.backgroundColor =
    "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}

function sliderChange() {
  let alpha = Number(this.value) / 100;
  let alphaHexCode = Math.floor(alpha * 255);
  let alphaHex =
    Number(alphaHexCode).toString(16).length < 2
      ? "0" + Number(alphaHexCode).toString(16)
      : Number(alphaHexCode).toString(16); // this needs to be multiplied by 255 as it is currently percentage value and doesn't convert correctly

  if (hexCol.value != "" || rgbaCol.value != "") {
    let hexVal =
      hexCol.value.length <= 7
        ? hexCol.value + alphaHex
        : hexCol.value.slice(0, 7) + alphaHex;
    hexCol.value = hexVal;

    let rgba = rgbaCol.value.slice(5, rgbaCol.value.length - 1);
    let rgbaArr = rgba.split(",");

    let rgbaVal =
      "rgba(" +
      rgbaArr[0] +
      "," +
      rgbaArr[1] +
      "," +
      rgbaArr[2] +
      "," +
      alpha +
      ")";
    rgbaCol.value = rgbaVal;

    document.body.style.backgroundColor = String(hexVal);
  }
}
