const breadcrumbContainer = document.getElementById('breadcrumb');

const pathSegments = window.location.pathname.split('/').filter(seg => seg && seg !== 'index.html');

let breadcrumbHTML = `<a href="/index.html">Home</a>`;

let pathAccumulator = '';

pathSegments.forEach((segment, index) => {
  pathAccumulator += `/${segment}`;
  
  const formattedSegment = segment.replace(/[-_]/g, ' ').replace(/\.\w+$/, '').replace(/\b\w/g, l => l.toUpperCase());

  if (index === pathSegments.length - 1) {
    breadcrumbHTML += ` &gt; <span>${formattedSegment}</span>`;
  } else {
    breadcrumbHTML += ` &gt; <a href="${pathAccumulator}/index.html">${formattedSegment}</a>`;
  }
});

breadcrumbContainer.innerHTML = breadcrumbHTML;
