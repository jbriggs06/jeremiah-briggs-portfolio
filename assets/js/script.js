"use strict";

// Responsive profile details toggle.
const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarButton) {
  sidebarButton.addEventListener("click", () => {
    const expanded = sidebar.classList.toggle("active");
    sidebarButton.setAttribute("aria-expanded", String(expanded));
  });
}

// Portfolio filtering, both full-width buttons and compact dropdown.
const projectItems = [...document.querySelectorAll("[data-filter-item]")];
const filterButtons = [...document.querySelectorAll("[data-filter-btn]")];
const selectButton = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-selecct-value]");
const selectItems = [...document.querySelectorAll("[data-select-item]")];
function applyFilter(category) {
  const normalized = category.trim().toLowerCase();
  projectItems.forEach(item => item.classList.toggle("active", normalized === "all" || item.dataset.category === normalized));
  filterButtons.forEach(button => {
    const active = button.textContent.trim().toLowerCase() === normalized;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (selectValue) selectValue.textContent = category;
}
filterButtons.forEach(button => button.addEventListener("click", () => applyFilter(button.textContent)));
if (selectButton) {
  selectButton.addEventListener("click", () => {
    const expanded = selectButton.classList.toggle("active");
    selectButton.setAttribute("aria-expanded", String(expanded));
  });
}
selectItems.forEach(button => button.addEventListener("click", () => {
  applyFilter(button.textContent);
  if (selectButton) {
    selectButton.classList.remove("active");
    selectButton.setAttribute("aria-expanded", "false");
  }
}));

// Preserve the vCard single-page view switching; native buttons support Enter and Space.
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const pages = [...document.querySelectorAll("[data-page]")];
navLinks.forEach(button => button.addEventListener("click", () => {
  const target = button.textContent.trim().toLowerCase();
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === target));
  navLinks.forEach(link => {
    const active = link === button;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}));
