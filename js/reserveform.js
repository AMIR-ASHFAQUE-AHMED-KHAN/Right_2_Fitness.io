function openReservationPopup(productId) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById('modalContent');
    var product = products.find(p => p.id === productId);
    var hiddenProductIdInput = '<input type="hidden" id="productId" value="' + productId + '">';

    modalContent.innerHTML = `
        <h3>Reservation Form for ${product.descr}</h3>
        <form id="reservationForm">
            ${hiddenProductIdInput}
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" required>

            <label for="address">Address:</label>
            <textarea id="address" name="address" required></textarea>

            <div class="error" id="error-message"></div>

            <button type="submit">Submit Reservation</button>
        </form>
    `;

    modal.style.display = "block";

    
    document.getElementById('reservationForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        submitReservation();
    });
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;
    var errorMessage = document.getElementById('error-message');

    if (!name || !email || !mobile || !address) {
        errorMessage.innerText = 'All fields are required.';
        return false;
    }

    // FORM VALIDATION EMAIL
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerText = 'Please enter a valid email address.';
        return false;
    }

    // FORM VALIDATION MOBILE NUMBER
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(mobile)) {
        errorMessage.innerText = 'PLEASE ENTER 10 DIGIT MOBILE NUMBER.';
        return false;
    }

    errorMessage.innerText = ''; 
    return true;
}

function submitReservation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;

  if (!validateForm()) {
        return; // STOP IF VALIDATION FAILS
    }

    document.getElementById('error-message').innerText = '';

    var productId = document.getElementById("productId").value;
    var product = products.find(p => p.id === parseInt(productId));

    var reservationDetails = `
        <div>
            <h2>Reservation Details</h2>
            <h3><strong>Product:</strong> ${product.descr}</h3>
            <h3><strong>Name:</strong> ${name}</h3>
            <h3><strong>Email:</strong> ${email}</h3>
            <h3><strong>Mobile Number:</strong> ${mobile}</h3>
            <h3><strong>Address:</strong> ${address}</h3>
        </div>
        <h3 style="color: green; font-weight: bold;">Product registered successfully!</h3>
    `;

    var modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = reservationDetails;
}