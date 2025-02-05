// Progress tracking functionality
document.addEventListener("DOMContentLoaded", () => {
  // Load progress from localStorage
  const progress = JSON.parse(
    localStorage.getItem("bitcoinStudyProgress") || "{}"
  );

  // Update progress indicators
  for (let i = 1; i <= 8; i++) {
    const indicator = document.getElementById(`ch${i}-progress`);
    if (progress[`chapter${i}`]) {
      indicator.classList.add("completed");
    }
  }

  // Add click listeners to track progress
  document.querySelectorAll(".chapter-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const chapterNum = e.target
        .closest(".chapter-card")
        .querySelector("h3")
        .textContent.match(/Chapter (\d+)/)[1];
      progress[`chapter${chapterNum}`] = true;
      localStorage.setItem(
        "bitcoinStudyProgress",
        JSON.stringify(progress)
      );

      const indicator = document.getElementById(
        `ch${chapterNum}-progress`
      );
      indicator.classList.add("completed");
    });
  });
});