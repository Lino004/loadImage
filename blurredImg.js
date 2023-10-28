const list = document.querySelectorAll("figure");
list.forEach(el => {
  el.style.setProperty('--src-img', `url(${el.getAttribute('data-img')})`);
  const img = el.querySelector("img");
  if (img) {
    const loaded = () => el.classList.add("loaded");
    if (img.complete) loaded();
    else img.addEventListener("load", loaded);
  }
});