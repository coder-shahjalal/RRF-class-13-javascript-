// Open Popup on "Get Started Now" Button Click
document.getElementById("getStartedBtn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const jokes = [
      ""
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("popupMessage").innerHTML = `ধন্যবাদ! আপনি এখনই শুরু করতে প্রস্তুত।<br><br>${randomJoke}`;
    document.getElementById("popupModal").style.display = "flex";
  });
  
  // Close Popup on Close Button Click
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupModal").style.display = "none";
  });
  
  // Change Hero Section Color and Text Color on Header Button Click
  document.getElementById("colorChangeBtn").addEventListener("click", function () {
    const heroSection = document.getElementById("heroSection");
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random hex color
    const textColor = getContrastColor(randomColor); // Ensure text is readable
    heroSection.style.backgroundColor = randomColor;
    heroSection.style.color = textColor;
  
    // Add random animation to header
    const animations = ["shake", "bounce", "rotate"];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    const header = document.getElementById("mainHeader");
    header.style.animation = `${randomAnimation} 0.5s ease`;
  });
  
  // Function to get contrasting text color
  function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#ffffff";
  }