document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Gallery Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Select Service from Card directly to Form
    const serviceButtons = document.querySelectorAll('.btn-select-service');
    const serviceSelect = document.getElementById('service-select');

    serviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedService = btn.getAttribute('data-service');
            if (serviceSelect) {
                serviceSelect.value = selectedService;
                // Smooth scroll to booking section
                document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle Form Submission (WhatsApp Integration)
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service-select').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Barber Shop Phone Number (Replace with actual business number)
            const barberPhoneNumber = "5491198765432";

            // Craft WhatsApp Message
            const message = `*SOLICITUD DE TURNO - LA CASA DEL CABALLERO*%0A%0A` +
                            `*Cliente:* ${name}%0A` +
                            `*Teléfono:* ${phone}%0A` +
                            `*Servicio:* ${service}%0A` +
                            `*Fecha:* ${date}%0A` +
                            `*Hora:* ${time}%0A%0A` +
                            `_Mensaje enviado desde la web oficial._`;

            // Open WhatsApp Link
            const whatsappUrl = `https://wa.me/${barberPhoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
