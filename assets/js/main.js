document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const newTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
        });
    }

    // RTL Toggle Logic
    const rtlToggle = document.getElementById('rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
            htmlElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Accordion functionality
    window.toggleAccordion = function (button) {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        // Close all other accordions
        const allAccordions = document.querySelectorAll('.accordion-content');
        const allIcons = document.querySelectorAll('.accordion-icon');

        allAccordions.forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
            }
        });

        allIcons.forEach(item => {
            if (item !== icon) {
                item.classList.remove('rotate');
            }
        });

        // Toggle current accordion
        content.classList.toggle('active');
        icon.classList.toggle('rotate');
    };

    // Themes dropdown functionality
    window.toggleThemesDropdown = function () {
        const dropdown = document.getElementById('themes-dropdown');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }
    };

    // Custom Dropdown Logic
    const customDropdowns = document.querySelectorAll('.custom-dropdown');

    customDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const items = dropdown.querySelectorAll('.dropdown-item');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();

            // Close other dropdowns
            customDropdowns.forEach(other => {
                if (other !== dropdown) other.classList.remove('active');
            });

            // Check viewport space for mobile
            if (window.innerWidth < 768) {
                const rect = toggle.getBoundingClientRect();
                const spaceBelow = window.innerHeight - rect.bottom;
                if (spaceBelow < 250) {
                    dropdown.classList.add('open-upward');
                } else {
                    dropdown.classList.remove('open-upward');
                }
            }

            dropdown.classList.toggle('active');
        });

        items.forEach(item => {
            item.addEventListener('click', () => {
                toggle.querySelector('span').textContent = item.textContent;
                dropdown.classList.remove('active');

                // Trigger change event or similar if needed
                console.log('Selected:', item.textContent);
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        customDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Sticky Header Scroll Effect
    const header = document.querySelector('.header-sticky');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md', 'py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.remove('shadow-md', 'py-2');
                header.classList.add('py-4');
            }
        });
    }
});
