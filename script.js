const nav = document.querySelector("nav");

nav.addEventListener("click", function (e) {
  if (e.target.id === "dropdown") {
    const dropdownMenu = e.target.firstElementChild;
    if (dropdownMenu.classList.contains("active")) {
      dropdownMenu.classList.remove("active");
      dropdownMenu.classList.add("slide-up");

      dropdownMenu.addEventListener(
        "animationend",
        function () {
          dropdownMenu.classList.remove("slide-up");
        },
        { once: true }
      );
    } else {
      dropdownMenu.classList.add("active");
    }
  }
});
