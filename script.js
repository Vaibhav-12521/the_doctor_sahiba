// WhatsApp button - Show modal instead of direct link
const whatsappBtn = document.getElementById('whatsappBtn');
const appointmentModal = document.getElementById('appointmentModal');
const closeModal = document.getElementById('closeModal');

if (whatsappBtn) {
  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    appointmentModal.classList.add('active');
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    appointmentModal.classList.remove('active');
  });
}

// Close modal when clicking on the overlay
if (appointmentModal) {
  appointmentModal.addEventListener('click', (e) => {
    if (e.target === appointmentModal) {
      appointmentModal.classList.remove('active');
    }
  });
}
