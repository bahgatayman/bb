// const stars = document.querySelectorAll('.star');
// const ratingValue = document.getElementById('rating-value');

// stars.forEach(star => {
//   star.addEventListener('click', function () {
//     const rating = this.getAttribute('data-value');
    
//     // إزالة أي تحديد سابق
//     stars.forEach(s => s.classList.remove('selected'));

//     // إضافة تحديد جديد
//     this.classList.add('selected');
//     let prevStar = this.previousElementSibling;
//     while (prevStar) {
//       prevStar.classList.add('selected');
//       prevStar = prevStar.previousElementSibling;
//     }

//     // عرض التقييم
//     ratingValue.textContent = `Your rating: ${rating}`;
//   });
// });



        const video = document.getElementById('myVideo');

        function playVideo() {
            video.play();
        }

        function pauseVideo() {
            video.pause();
        }





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