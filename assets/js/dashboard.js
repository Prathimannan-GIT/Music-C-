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

    // Mobile Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    function toggleSidebar() {
        if (!sidebar) return;
        const isOpen = !sidebar.classList.contains('hidden');
        if (isOpen) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('flex', 'fixed', 'inset-0', 'z-50', 'w-full');
        } else {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('flex', 'fixed', 'inset-0', 'z-50', 'w-full');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleSidebar);
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', toggleSidebar);
    }

    // Close sidebar when clicking on a link (on mobile)
    const sidebarLinks = document.querySelectorAll('aside nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024 && sidebar && !sidebar.classList.contains('hidden')) {
                toggleSidebar();
            }
        });
    });
});
