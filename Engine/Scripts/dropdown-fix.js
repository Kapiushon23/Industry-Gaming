// Dropdown Hover Stability Fix
//
// Fixes and stabilizes the issue with the dropdowns disappearing after hovering on one when the dropdown is not present in the central area, mostly after first hover. (Still some Improvements to do, to tired rn xd)
//


document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const subDropdowns = document.querySelectorAll('.sub-dropdown');

    let closeDropdownTimeout;
    let closeSubDropdownTimeout;

    dropdowns.forEach(item => {
        const dropdownContent = item.querySelector('.dropdown-content');

        item.addEventListener('mouseenter', () => {
            clearTimeout(closeDropdownTimeout);
            dropdownContent.style.display = 'block';
            dropdownContent.style.opacity = '1';
            dropdownContent.style.visibility = 'visible';
        });

        item.addEventListener('mouseleave', () => {
            closeDropdownTimeout = setTimeout(() => {
                if (!dropdownContent.matches(':hover')) {
                    dropdownContent.style.display = 'none';
                    dropdownContent.style.opacity = '0';
                    dropdownContent.style.visibility = 'hidden';
                }
            }, 300);  
        });

        dropdownContent.addEventListener('mouseenter', () => {
            clearTimeout(closeDropdownTimeout);
        });

        dropdownContent.addEventListener('mouseleave', () => {
            closeDropdownTimeout = setTimeout(() => {
                dropdownContent.style.display = 'none';
                dropdownContent.style.opacity = '0';
                dropdownContent.style.visibility = 'hidden';
            }, 300);
        });
    });

    subDropdowns.forEach(item => {
        const subDropdownContent = item.querySelector('.sub-dropdown-content');

        item.addEventListener('mouseenter', () => {
            // Hide all other sub-dropdowns
            subDropdowns.forEach(subItem => {
                const subContent = subItem.querySelector('.sub-dropdown-content');
                if (subContent !== subDropdownContent) {
                    subContent.style.display = 'none';
                    subContent.style.opacity = '0';
                    subContent.style.visibility = 'hidden';
                }
            });

            clearTimeout(closeSubDropdownTimeout);
            subDropdownContent.style.display = 'block';
            subDropdownContent.style.opacity = '1';
            subDropdownContent.style.visibility = 'visible';
        });

        item.addEventListener('mouseleave', () => {
            closeSubDropdownTimeout = setTimeout(() => {
                if (!subDropdownContent.matches(':hover')) {
                    subDropdownContent.style.display = 'none';
                    subDropdownContent.style.opacity = '0';
                    subDropdownContent.style.visibility = 'hidden';
                }
            }, 300); 
        });

        subDropdownContent.addEventListener('mouseenter', () => {
            clearTimeout(closeSubDropdownTimeout);
        });

        subDropdownContent.addEventListener('mouseleave', () => {
            closeSubDropdownTimeout = setTimeout(() => {
                subDropdownContent.style.display = 'none';
                subDropdownContent.style.opacity = '0';
                subDropdownContent.style.visibility = 'hidden';
            }, 300);
        });
    });
});
