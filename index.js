fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-container');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="buy-button">Buy Now</button>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading products:', error));
    


  
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-button')) {
        const card = e.target.parentElement;
        const product = {
            name: card.querySelector('h2').innerText,
            price: card.querySelector('.price').innerText,
            image: card.querySelector('img').src
        };
        

        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        

        cartItems.push(product);
        

        localStorage.setItem('cart', JSON.stringify(cartItems));
        
        alert(`${product.name} has been added to your cart!`);
    }
});




        // header menu
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.querySelector('.navbar');

        menuBtn.addEventListener('click', () => {

            if (navbar.style.display === 'flex') {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'flex';
            }
        });


        if (window.innerWidth > 768) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navbar.style.display = 'flex'; 
            } else {
                navbar.style.display = 'none'; 
            }
        });



// Swiper Slider Configuration
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});