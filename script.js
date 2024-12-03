function changeBackgroundColor() {
    const color = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = color;
}

function changeFontSize() {
    const paragraph = document.getElementById("aboutParagraph");
    let currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = (currentSize + 2) + "px";
}

function switchImage() {
    const img1 = document.getElementById("im1");
    const img2 = document.getElementById("im2");
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;
}