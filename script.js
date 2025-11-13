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
// function hideSidebar(){
//   const sidebar = document.querySelector(".mobile-nav");
//   sidebar.classList.add("show");
// }
// function hideSidebar() {
//   const sidebar = document.querySelector(".mobile-nav");
//   sidebar.classList.add("show");

// }
// Add this in a <script> tag or JS file
  const skills = document.querySelectorAll(".skill-level");

    function checkSkills() {
      const triggerBottom = window.innerHeight * 0.8;

      skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const skillLevel = skill.getAttribute("data-level");

        if (skillTop < triggerBottom) {
          skill.style.width = skillLevel; // Animate to full width
        }
      });
    }

    window.addEventListener("scroll", checkSkills);
    window.addEventListener("load", checkSkills);


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
