const tabs = document.getElementById('tabs').querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((el) => {
    el.addEventListener('click', (e) => {
        tabs.forEach((el) => el.setAttribute('aria-selected', 'false'));
        e.currentTarget.setAttribute('aria-selected', 'true');

        const controls = e.currentTarget.getAttribute('aria-controls');
        panels.forEach((el) => {
            if (el.getAttribute('id') === controls) {
                el.removeAttribute('hidden');
            } else {
                el.setAttribute('hidden', '');
            }
        });
    });
});