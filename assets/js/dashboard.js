/**
 * Dashboard Specific Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Progress Ring Animation (if any rings are added later)
    const progressRings = document.querySelectorAll('.progress-ring');
    progressRings.forEach(ring => {
        // Animation logic...
    });

    // Sidebar Active State
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('aside nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-primary', 'bg-purple-50', 'dark:bg-primary/10', 'font-bold');
            link.classList.remove('text-gray-500');
        }
    });

    // Mobile Sidebar Toggle (for mobile views with sidebar)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('header button.lg\\:hidden');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('flex');
            sidebar.classList.toggle('fixed');
            sidebar.classList.toggle('inset-0');
            sidebar.classList.toggle('z-50');
        });
    }
});
