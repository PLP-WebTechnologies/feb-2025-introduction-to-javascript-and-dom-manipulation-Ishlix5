
  const title = document.getElementById("title");
  title.textContent = "Welcome to my javascript title"; // Updates text

  // Change text content and style
document.getElementById("btn").addEventListener("click", () => {
    const title = document.getElementById("title");
    const career = document.getElementById("career");
  
    title.textContent = "You've clicked the button!";
    career.textContent = "Exploring JavaScript DOM magic.";
  
    title.style.color = "red";
    career.style.fontWeight = "bold";
  });
// Add/remove an element dynamically
document.getElementById("toggle-btn").addEventListener("click", () => {
    const existing = document.getElementById("extra");
  
    if (existing) {
      existing.remove();
    } else {
      const newPara = document.createElement("p");
      newPara.id = "extra";
      newPara.textContent = "This paragraph was added with JavaScript!";
      document.querySelector(".container").appendChild(newPara);
    }
  });