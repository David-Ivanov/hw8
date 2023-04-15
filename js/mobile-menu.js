(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  // const menuCloseBtnRef = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    mobileMenuRef.classList.toggle("is-open");
    // menuCloseBtnRef.mobileMenuRef.classList.delete("is-open");
  });
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.header__menu--btn'),
//     closeMenuBtn: document.querySelector('.header__menu--close'),
//     menu: document.querySelector('.header__overlay'),
//     body: document.querySelector('body'),
//     menuList: document.querySelector('.header-menu-list'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.menuList.addEventListener('click', removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//     refs.body.classList.toggle('no-scroll');
//   }

//   function removeMenu() {
//     refs.menu.classList.add('is-hidden');
//   }
// })();