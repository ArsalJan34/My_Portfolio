// Highlight active nav link based on URL
document.querySelectorAll("nav a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Show sidebar (mobile menu)
function showSidebar() {
  const sidebar = document.querySelector(".mobile-nav");
  sidebar.classList.add("show");
}

// Hide sidebar
function hideSidebar() {
  const sidebar = document.querySelector(".mobile-nav");
  sidebar.classList.remove("show");
}
