import "./assets/css/tailwind.css";

let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});

let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("h-fit");
  menu.classList.toggle("h-0");
  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-[0.208rem]");
  line2.classList.toggle("-rotate-45");
  line2.classList.toggle("-translate-y-[0.208rem]");
})