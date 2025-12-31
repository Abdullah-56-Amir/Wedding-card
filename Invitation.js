const envelope = document.getElementById("envelope");
const cardsContainer = document.getElementById("cards-container");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function openEnvelope() {
  envelope.style.display = "none";
  cardsContainer.classList.remove("hidden");
  showCard(currentCard);
}

// Show card with hearts animation
function showCard(index) {
  const card = cards[index];
  card.classList.add("active");
  createHearts(card);
}

// Next button
function nextCard() {
  cards[currentCard].classList.remove("active");
  currentCard++;
  if (currentCard < cards.length) {
    showCard(currentCard);
  }
}

// Heart animation
function createHearts(card) {
  const container = card.querySelector(".hearts");
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    heart.style.fontSize = 12 + Math.random() * 20 + "px";
    heart.innerHTML = "❤️";
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
