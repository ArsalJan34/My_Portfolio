document.querySelectorAll("nav a").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
}
