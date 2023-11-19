function showProductDetails(productId) {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById('modalContent');
  var product = products.find(p => p.id === productId);

  var videoHeight = window.innerWidth > 2000 ? '250px' : 'auto'; // Adjust as needed

  modalContent.innerHTML = `
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%" height="${videoHeight}">
          <source src="${product.video}" type="video/mp4">
          Your browser does not support the video tag.
      </video>

      <h3 class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h3>
      <h5>${product.details}</h5>
  `;

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}