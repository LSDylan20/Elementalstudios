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
  
  // Get the target URL from the anchor element's href attribute
  const targetUrl = new URL(event.target.href);
  
  // Check if the pathname ends with .html and is not the root URL
  if (targetUrl.pathname.endsWith('.html') && targetUrl.pathname !== '/') {
      // Remove .html extension from the pathname
      const cleanPathname = targetUrl.pathname.slice(0, -5);
      // Construct the new URL without .html extension
      const newUrl = targetUrl.origin + cleanPathname + targetUrl.search + targetUrl.hash;
      // Update the URL using History API
      history.pushState({}, '', newUrl);
  } else {
      // Use the original target URL as is
      history.pushState({}, '', targetUrl.href);
  }

  // Render content based on the updated URL
  renderContent();
};


