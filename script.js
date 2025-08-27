//reuseable function for DOM
function getElement(id) {
  return document.getElementById(id);
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}
//-------------------------------------------------------------

document.querySelector(".cards").addEventListener("click", (e) => {
  const btn = e.target;

  /*heart functionality*/
  let heartCount = parseInt(getInnerText("heart-count"));
  if (btn.className.includes("heart")) {
    getElement("heart-count").innerText = heartCount + 1;
    btn.classList.remove("heart");
    console.log(btn.classList);
  }
});
