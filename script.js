//your JS code here. If required.
document.addEventListener("DOMContentLoaded", (event) => {
  const newP = document.createElement("p");

  const newContent = document.createTextNode("DOM load success");

  newP.appendChild(newContent);

  const currentDiv = document.getElementById("para");
  document.body.insertBefore(newP, currentDiv);
});