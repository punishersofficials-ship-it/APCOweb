// Модальное окно

document.addEventListener("DOMContentLoaded", function() {
    const modalBtns = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    const form = document.getElementById("newticket");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const agreement = document.getElementById("agreement").checked;
        if (!agreement) {
            alert("Пожалуйста, подтвердите согласие на обработку данных.");
            return;
        }
        const formData = { name, phone };
        let database = JSON.parse(localStorage.getItem("tickets") || "[]");
        database.push(formData);
        localStorage.setItem("tickets", JSON.stringify(database));
        form.reset();
        const modal = document.getElementById("modal");
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Слайдер с авто

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add(n > currentSlide ? 'prev' : 'next');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.remove('prev', 'next');
        slides[currentSlide].classList.add('active');
    }
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    setInterval(nextSlide, 3000);
});


//  Допуслуги

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabs = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// burger-menu

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.footer a');
    burgerIcon.addEventListener('click', function() {
        burgerIcon.classList.toggle('active');
        menu.classList.toggle('active');
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});

// FAQ

function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('.faq-icon');
            if (answer.style.display === 'none' || !answer.style.display) {
                answer.style.display = 'block';
                icon.textContent = '−';
            } else {
                answer.style.display = 'none';
                icon.textContent = '+';
            }
}