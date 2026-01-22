fetch("navbar.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;
    setActiveLink();
  });

function setActiveLink() {
  const current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === current
    );
  });
}
