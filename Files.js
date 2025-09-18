document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("settingsDropdown");
  const dropbtn = document.getElementById("dropbtn");

  dropbtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });
});


const likeButtons = document.querySelectorAll(".post-actions button:first-child");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("liked")) {
      btn.textContent = "👍 Like";
      btn.classList.remove("liked");
    } else {
      btn.textContent = "❤️ Liked";
      btn.classList.add("liked");
    }
  });
});


const addBtns = document.querySelectorAll(".btn.add");

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "✔";
    btn.style.background = "#42b72a"; 
    btn.disabled = true;
  });
});
