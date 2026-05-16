const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.querySelector('[data-nav-menu]');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const staticForm = document.querySelector('[data-static-form]');
if (staticForm) {
  staticForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = staticForm.querySelector('[data-form-status]');
    if (status) {
      status.textContent = 'Het formulier is nog niet gekoppeld aan een verzendsysteem. Gebruik de officiële contactgegevens zodra deze zijn toegevoegd.';
    }
  });
}
