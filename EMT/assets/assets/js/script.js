function toggleMenu() {
  var menu = document.getElementById("menu");
  var bars = document.querySelectorAll('.bar');

  if (window.getComputedStyle(menu).display === "block") {
    menu.classList.remove("active");
    bars.forEach(bar => bar.classList.remove('cross'));
  } else {
    menu.classList.add("active");
    bars.forEach(bar => bar.classList.add('cross'));
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
