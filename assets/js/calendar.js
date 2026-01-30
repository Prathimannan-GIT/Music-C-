/**
 * Calendar Interactivity
 */
document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('.calendar-slot, .h-16.hover\\:bg-primary\\/5');
    const bookingPreview = document.getElementById('booking-preview');

    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove previous selection
            slots.forEach(s => s.classList.remove('bg-primary/5', 'ring-2', 'ring-primary', 'ring-inset'));

            // Highlight current
            slot.classList.add('bg-primary/5', 'ring-2', 'ring-primary', 'ring-inset');

            // Update Preview (Mock logic)
            if (bookingPreview) {
                // In a real app, you'd pull data from the slot's dataset attributes
                // updatePreview(slot.dataset.time, slot.dataset.instructor);
            }
        });
    });

    // Timezone Switcher
    const tzSelect = document.getElementById('tz-select');
    if (tzSelect) {
        tzSelect.addEventListener('change', (e) => {
            console.log('Switching timezone to:', e.target.value);
            // Re-render calendar with new offsets
        });
    }
});
