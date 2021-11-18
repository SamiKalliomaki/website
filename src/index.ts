import "./style.scss";

window.addEventListener('load', () => {
    // Set the current page active in the menu.
    const currentUrl = window.location.pathname;
    const menuItems = document.getElementsByClassName('menu-item');
    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];

        const href = item.getAttribute('href');
        if (href === currentUrl
            || href + 'index.html' === currentUrl
            || href == currentUrl + '/') {
            item.classList.add('active');
        }
    }
});