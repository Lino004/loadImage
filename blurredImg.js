const list = document.querySelectorAll(".blurred-img");
// console.log('🚀 - file: blurredImg.js:2 - list:', list);
list.forEach(el => {
  el.style.backgroundImage = `url(${el.getAttribute('data-img')})`;
  const img = el.querySelector("img");
  if (img) {
    const loaded = () => el.classList.add("loaded");
    if (img.complete) loaded();
    else img.addEventListener("load", loaded);
  }
});