const movieSuggestions = {
  Comedy: ["Housefull 5", "Pintu Ki Pappi", "The Mask", "Home Alone", "Superbad"],
  Horror: ["Chhorii 2", "The Bhootnii", "The Conjuring", "It", "A Quiet Place"],
  Romantic: ["Saiyaara", "Dhadak 2", "Metro...In Dino", "Loveyapa", "Sweet Dreams","Bhool Chuk Maaf", "Shershaah"],
  Drama: ["Homebound", "Well Done C.A. Sahab", "Aankhon Ki Gustaakhiyan"],
  Action: ["Sky Force", "Sikandar"],
  Science: ["Baida", "Gana", "Cargo"],
  Adventure: ["Azaad", "Thug Life", "Hari Hara Veera Mallu"],

};

let selectedMood = "";

document.querySelectorAll(".mood-btn").forEach(button => {
  button.addEventListener("click", () => {
    selectedMood = button.getAttribute("data-mood");

    document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

function generatePlan() {
  const genre = document.getElementById("genre").value;
  const snacks = [];
  if (document.getElementById("popcorn").checked) snacks.push("🍿 Popcorn");
  if (document.getElementById("soda").checked) snacks.push("🥤 Soda");
  if (document.getElementById("cookies").checked) snacks.push("🍪 Cookies");
  if (document.getElementById("pizza slices").checked) snacks.push("🍕 Pizza Slices");



  const movies = movieSuggestions[selectedMood] || ["Any good movie!"];
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const planHTML = `
    <p><strong>Mood:</strong> ${selectedMood}</p>
    <p><strong>Genre:</strong> ${genre}</p>
    <p><strong>Movie Suggestion:</strong> ${movie}</p>
    <p><strong>Snacks:</strong> ${snacks.join(", ") || "None"}</p>
  `;

  document.getElementById("planResult").innerHTML = planHTML;
  const modal = new bootstrap.Modal(document.getElementById('resultModal'));
  modal.show();
}