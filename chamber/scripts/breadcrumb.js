document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return;

  // Get just the filename from the path
  const fullPath = window.location.pathname;
  const filename = fullPath.substring(fullPath.lastIndexOf("/") + 1);

  // Hide breadcrumb on home page
  if (filename === "" || filename === "index.html") {
    breadcrumbContainer.style.display = "none";
    return;
  }

  // Format filename to a page title (e.g., discover.html → Discover)
  const pageTitle = filename
    .replace(".html", "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Build breadcrumb: Home > Page
  breadcrumbContainer.innerHTML = `
    <a href="/wdd230/chamber/index.html">Home</a>;
    <span>${pageTitle}</span>
  `;
});


