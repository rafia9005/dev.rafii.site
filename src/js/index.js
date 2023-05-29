// navbar
const navbtn = document.getElementById("navbtn");
const navbox = document.querySelector("nav ul");

navbtn.onclick = () => {
  navbox.classList.toggle("active");
};
// dark mode
const darkbtn = document.querySelector('#dark')
const dark = document.querySelector('#body')

darkbtn.onclick = () => {
  dark.classList.toggle('active')
}

function changeText() {
  var text = document.getElementById("text");
  if (text.innerHTML === "Dark") {
    text.innerHTML = "Light";
  } else {
    text.innerHTML = "Dark";
  }
}
