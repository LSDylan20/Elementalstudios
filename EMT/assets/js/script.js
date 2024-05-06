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
// Function to handle navigation
// Function to handle navigation
const handleNavigation = (event) => {
  event.preventDefault();
  const targetUrl = event.target.getAttribute('href');
  
  // Remove .html extension if the target URL ends with .html
  const cleanUrl = targetUrl.endsWith('.html')
      ? targetUrl.slice(0, -5) // Remove last 5 characters (.html)
      : targetUrl;
  
  history.pushState({}, '', cleanUrl);
  renderContent();
};


