document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById('breadcrumb');
  if (!breadcrumbContainer) return;

  const path = window.location.pathname.replace("/wdd230/chamber/", "");
  const page = path === "" || path === "index.html" ? "" : path;

  let breadcrumbHTML = `<a href="/wdd230/chamber/index.html">Home</a>`;

  if (page) {
    const formatted = page
      .replace(/\.html$/, "")            
      .replace(/[-_]/g, " ")             
      .replace(/\b\w/g, l => l.toUpperCase()); 

    breadcrumbHTML += ` &gt; <a href="/wdd230/chamber/${page}">${formatted}</a>`;
  }

  if (!page) {
    breadcrumbContainer.style.display = "none";
  } else {
    breadcrumbContainer.innerHTML = breadcrumbHTML;
  }
});