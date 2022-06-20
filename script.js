(function () {}.call(this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
//# sourceURL=coffeescript

var btn = $("button1");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

let button = document.querySelector(".button-3");

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});

function change1() {
  // no ';' here
  var elem = document.getElementById("button-3");
  if (elem.value == "Dark mode") elem.value = "Light mode";
  else elem.value = "Dark mode";
}

// function change() {
//   // no ';' here
//   var elems = document.getElementById("Myid");
//   if (elems.value == "Show Countdown") elems.value = "Hide Countdown";
//   else elems.value = "Show Countdown";
// }

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 900,
  reset: true,
});

sr.reveal(".container", { delay: 50 });
sr.reveal(".btn", { distance: "15px", delay: 50, interval: 80 });

sr.reveal(".card", { distance: "10px", delay: 60, interval: 80, reset: false });
sr.reveal(".quote", { distance: "10px", delay: 100 });
sr.reveal(".notice", { distance: "10px", delay: 150 });
