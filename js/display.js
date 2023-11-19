//HERE WE HAVE PRODUCT VARIABLE STORING PRODUCT DATA 
var products = [
    {
        id : 1,
        image: 'images/dumb_pd-1.jpg',
        descr: 'Enter Sports Dumbbells',
        details: 'Dumbbells Adjustable Dumbbell Set for Saving Place, Dumbbells Adjustable with Non-Slip Handle 5 Weight Levels-2-12kg, Good for Home, Office, Gym, Body Training',
        price: '€ 100.50',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/9772dcf3-8810-4bf2-9df5-ca788c5f6fed/default.jobtemplate.mp4.480.mp4'
    },
    {
        id : 2,
        image: 'images/skip_pd-1.jpg',
        descr: 'Skipping Rope with Counter',
        details: 'Skipping Rope with Counter, Gritin Digital Speed Jump Rope for Kids Adults Fitness, Tangle-free Adjustable Rope, Weighted & Non-slip Handle for Exercise, Fat Burning, Workout Home Jumping,Boxing,HIIT',
        price: '€ 20.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/98e03473-a7d2-47b5-a34b-50ba7c8f39a8/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 3,
        image: 'images/ben_pd-1.jpg',
        descr: 'JX Fitness Adjustable Bench',
        details: 'JX FITNESS Adjustable Weight Bench Incline Decline Flat Workout Bench 90 Degree Upright Home Training Sit up Gym Bench',
        price: '€ 80.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/9036b8ab-2240-4ff8-b099-5c7134e5e4ce/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 4,
        image: 'images/cyc_pd-1.jpg',
        descr: 'Wenoker Exercise Bike',
        details: 'Wenoker Exercise Bike Indoor Cycling Bike for Home Gym Use with LCD Display, Tablet Holder & Comfortable Seat Cushion Bike Fitness for Home Training Cardio Workout',
        price: '€ 210.50',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/144a7e1e-e6e3-43ec-a327-dbc2ecceefec/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 5,
        image: 'images/ful_pd-1.jpg',
        descr: 'Fulfil Vitamin Protein Bar',
        details: 'Fulfil Vitamin and Protein Bar (15 x 55 g Bars) — Chocolate Salted Caramel Flavour — 20 g High Protein, 9 Vitamins, Low Sugar',
        price: '€ 15.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/f1b690c3-194f-4145-b54c-2d5c906204b8/default.jobtemplate.mp4.480.mp4',
        
    },
    {
        id : 6,
        image: 'images/pub_pd-1.jpg',
        descr: 'TOMSHOO Push Up Board',
        details: 'TOMSHOO Push Up Board, 12 in 1 Press Up Board Foldable Portable with Push Up Handle and Anti-slip Stickers, Multifunctional Muscle Board Workout Equipment for Gym, Home, Strength Training',
        price: '€ 25.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/99905d2a-918a-4075-84f0-2942a2fc527b/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 7,
        image: 'images/pull_pd-1.jpg',
        descr: 'Sportsroyals Power Tower',
        details: 'Sportsroyals Power Tower Dip Station Pull Up Bar for Home Gym Strength Training Workout Equipment, 400LBS',
        price: '€ 180.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/9d09ed4c-e304-4527-816e-9b2153f660b1/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 8,
        image: 'images/tread_pd-1.jpg',
        descr: 'Walking Pad Treadmill',
        details: 'Walking Pad Treadmill for home, PHIWOS Under Desk Treadmill, Walking Running Machine with Remote Control and LED Display, Adjustable Speeds, Folding for walking Jogging',
        price: '€ 250.00',
        video: 'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/0acf7e2a-d629-4b8c-aa95-a99206520d22/default.jobtemplate.mp4.480.mp4',
    },
    {
        id : 9,
        image: 'images/yoga_pd-1.jpg',
        descr: 'Thick Yoga Mat',
        details: 'GADEL Extra Thick Yoga Mat Non Slip Thick Exercise Mat Wide TPE 12mm Eco Friendly Yoga Mats for Men/Women Workout Mats for Home Gym Fitness Hiit Gymnastics Meditation Pilates Yoga Mat Alignment Lines',
        price: '€ 50.00',
        video:'https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/46d29ea5-0169-4eba-9298-ccc061270673/default.jobtemplate.mp4.480.mp4'
    }
]

function populateData() {
    products.forEach(createProduct);
}

function createProduct(product) {
    var el = '<li style="margin-bottom: 20px;">' +
        '<div  style="padding: 10px; border: 1px solid #ccc;">' +
        
        '<div id="carousel-' + product.id + '" class="carousel slide" data-ride="carousel">' +
        '<div class="carousel-inner">' +
        '<div class="carousel-item active">' +
        '<img class="d-block w-100" src="' + product.image + '" alt="' + product.descr + '">' +
        '</div>' +
        '<div class="carousel-item">' +
        '<img class="d-block w-100" src="' + product.image + '" alt="' + product.descr + '">' +
        '</div>' +
        '<div class="carousel-item">' +
        '<img class="d-block w-100" src="' + product.image + '" alt="' + product.descr + '">' +
        '</div>' +
        '</div>' +
        '<a class="carousel-control-prev" href="#carousel-' + product.id + '" role="button" data-slide="prev">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</a>' +
        '<a class="carousel-control-next" href="#carousel-' + product.id + '" role="button" data-slide="next">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</a>' +
        '<h4>' + product.descr + '</h4>' +
        '<h5>' + product.price + '</h5>' +'<button onclick="openReservationPopup(' + product.id + ')" class="reserve-btn">RESERVE PRODUCT</button>' +
        '<button onclick="showProductDetails(' + product.id + ')" class="details-btn">SHOW DETAILS</button>' +
        '<div id="myModal" class="modal">' +
        '<span class="crossMark" onclick="closeModal()">&times;</span>' +
        '<div id="modalContent"></div>' +
        '</div>' +
        '</div>' +
        '</li>';

    document.querySelector('.content').innerHTML += el;
}






