document.getElementById("bg-color")?.addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
  });
  
  document.getElementById("change-font")?.addEventListener("click", function () {
    const aboutText = document.getElementById("about-text");
    aboutText.style.fontSize = aboutText.style.fontSize === "20px" ? "16px" : "20px";
  });
  
  document.getElementById("switch-image")?.addEventListener("click", function () {
    const img1 = document.getElementById("im1");
    const img2 = document.getElementById("im2");
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;
  });