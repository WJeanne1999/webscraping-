function viewProperty(id) {
    
    const properties = [
        {
            id: 1,
            title: "Beautiful Family House",
            price: "$500,000",
            description: "A beautiful family house located in a serene environment.",
            image: "property1.jpg"
        },
        {
            id: 2,
            title: "Modern Apartment",
            price: "$300,000",
            description: "A modern apartment with all the latest amenities.",
            image: "property2.jpg"
        }
       
    ];

    const property = properties.find(p => p.id === id);
    
    if (property) {
     
        localStorage.setItem('property', JSON.stringify(property));
        window.location.href = 'property.html';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('property.html')) {
        const property = JSON.parse(localStorage.getItem('property'));
        if (property) {
            document.getElementById('property-title').innerText = property.title;
            document.getElementById('property-price').innerText = property.price;
            document.getElementById('property-description').innerText = property.description;
            document.getElementById('property-image').src = property.image;
        }
    }
});

