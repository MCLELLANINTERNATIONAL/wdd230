document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    if (!breadcrumbContainer) return;
  
    const path = window.location.pathname.replace("/wdd230/", "");
    const segments = path.split('/').filter(seg => seg && seg !== 'index.html');
  
    let breadcrumbHTML = `
      <a href="/wdd230/">Chamber</a> &gt; 
      <a href="/wdd230/chamber/index.html">Home</a>
    `;
  
    if (segments.length > 1 || (segments.length === 1 && segments[0] !== 'chamber')) {
      const lastSegment = segments[segments.length - 1];
      const formatted = lastSegment
        .replace(/[-_]/g, ' ')
        .replace(/\.\w+$/, '')
        .replace(/\b\w/g, l => l.toUpperCase());
  
      let link;
      if (lastSegment.endsWith('.html')) {
        link = `/wdd230/chamber/${lastSegment}`;
      } else {
        link = `/wdd230/chamber/${lastSegment}/index.html`;
      }
  
      breadcrumbHTML += ` &gt; <a href="${link}">${formatted}</a>`;
    }
  
    if (segments.length === 0 || (segments.length === 1 && segments[0] === 'chamber')) {
      breadcrumbContainer.style.display = 'none'; 
    } else {
      breadcrumbContainer.innerHTML = breadcrumbHTML;
    }
  });