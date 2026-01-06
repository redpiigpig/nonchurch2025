// =========================
// 平滑滾動到特定雜誌標題
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// =========================
// 連結滑鼠懸停效果
// =========================
document.querySelectorAll(".left-section a").forEach((link) => {
  link.addEventListener("mouseover", function () {
    link.style.color = "#0056b3";
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseout", function () {
    link.style.color = "#007bff";
    link.style.textDecoration = "none";
  });
});
