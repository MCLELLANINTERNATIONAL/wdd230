document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    if (!breadcrumbContainer) return;
 
    const path = window.location.pathname.replace("/wdd230/chamber", "");
    const pathSegments = path.split('/').filter(seg => seg && seg !== "index.html");
  
    if (pathSegments.length === 0) {
      breadcrumbContainer.style.display = "none";
      return;
    }
  
    let breadcrumbHTML = `<a href="/wdd230/chamber/index.html">Home</a>`;
    let pathAccumulator = "/wdd230/chamber";
  
    pathSegments.forEach((segment, index) => {
      pathAccumulator += `/${segment}`;
      const formatted = segment
        .replace(/[-_]/g, ' ')
        .replace(/\.\w+$/, '')
        .replace(/\b\w/g, l => l.toUpperCase());
  
      if (index === pathSegments.length - 1) {
        breadcrumbHTML += ` &gt; <span>${formatted}</span>`;
      } else {
        breadcrumbHTML += ` &gt; <a href="${pathAccumulator}/index.html">${formatted}</a>`;
      }
    });
  
    breadcrumbContainer.innerHTML = breadcrumbHTML;
  });