if (feed) {
  window.addEventListener("DOMContentLoaded", () => {
    loadHardcodedImages();
    loadGenericImages();
    loadStoredImages();
  });

  function loadHardcodedImages() {
    const hardcoded = [
      {
        src: "images/post1.jpg",
        location: "South Central Province, Maldives",
        photographer: "Asad",
      },
      {
        src: "images/post2.jpg",
        location: "RAAS, Nicaragua",
        photographer: "Fabian Wiktor",
      },
      {
        src: "images/post3.jpg",
        location: "Bora Bora, French Polynesia.",
        photographer: "Vincent Gerbouin",
      },
    ];
    hardcoded.forEach((photo) => addPhotoToFeed(photo, false));
  }

  function loadStoredImages() {
    const stored = JSON.parse(localStorage.getItem("photocalPhotos")) || [];
    stored.forEach((photo) => addPhotoToFeed(photo, true));
  }

  function addPhotoToFeed(photo, isUserUpload) {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${photo.src}" alt="Photo" />
      <div class="photo-info">
        <p><strong>Location:</strong> ${photo.location}</p>
        <p><strong>Photographer:</strong> ${photo.photographer}</p>
        ${isUserUpload ? "<p><em>(Uploaded)</em></p>" : ""}
      </div>
    `;
    feed.prepend(card);
  }
}
