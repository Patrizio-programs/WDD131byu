const feed = document.getElementById("photoFeed");
const uploadForm = document.querySelector("form[action='/upload']");

// Handle the photo feed page
if (feed) {
  window.addEventListener("DOMContentLoaded", () => {
    loadStoredImages();
  });

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

// Handle the upload form page
if (uploadForm) {
  uploadForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const photoInput = document.getElementById("photo");
    const locationInput = document.getElementById("location");
    const photographerInput = document.getElementById("photographer");
    
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        // Get existing photos or create new array
        const photos = JSON.parse(localStorage.getItem("photocalPhotos")) || [];
        
        // Create new photo object
        const newPhoto = {
          src: e.target.result,
          location: locationInput.value,
          photographer: photographerInput.value
        };
        
        // Add to array and save to localStorage
        photos.push(newPhoto);
        localStorage.setItem("photocalPhotos", JSON.stringify(photos));
        
        // Show success message
        const successMsg = document.createElement("div");
        successMsg.textContent = "Photo uploaded successfully!";
        successMsg.style.color = "green";
        uploadForm.appendChild(successMsg);
        
        // Reset form
        uploadForm.reset();
        
        // Redirect to feed after 1.5 seconds
        setTimeout(() => {
          window.location.href = "feed.html";
        }, 1500);
      };
      
      reader.readAsDataURL(photoInput.files[0]);
    }
  });
}
