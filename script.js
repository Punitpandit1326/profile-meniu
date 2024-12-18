// document.addEventListener("DOMContentLoaded", () => {
//   const profileButton = document.getElementById("profile-button");
//   const dropdownMenu = document.getElementById("dropdown-menu");
//   const sideMenu = document.getElementById("side-menu");
//   const modalMenu = document.getElementById("modal-menu");
//   const menuSelector = document.getElementById("menu-selector");
//   const closeMenuIcon = document.getElementById("close_menu");

//   const menus = {
//     dropdown: dropdownMenu,
//     side: sideMenu,
//     modal: modalMenu,
//   };

//   let activeMenu = null;

//   const closeActiveMenu = () => {
//     if (activeMenu) {
//       activeMenu.classList.add("hidden");
//       activeMenu = null;
//     }
//   };

//   profileButton.addEventListener("click", () => {
//     const selectedMenu = menus[menuSelector.value];

//     if (activeMenu && activeMenu !== selectedMenu) {
//       closeActiveMenu();
//     }

//     if (selectedMenu.classList.contains("hidden")) {
//       selectedMenu.classList.remove("hidden");
//       activeMenu = selectedMenu;
//     } else {
//       closeActiveMenu();
//     }
//   });

//   document.addEventListener("click", (event) => {
//     // Handle modal-specific click behavior first
//     if (activeMenu === modalMenu) {
//       if (
//         !event.target.closest(".modal-content") &&
//         !event.target.closest("#profile-button")
//       ) {
//         console.log("true for modal");
//         closeActiveMenu();
//       }
//       // return; // Prevent general logic from running
//     }

//     // General menu-closing logic
//     if (
//       !event.target.closest("#profile-button") &&
//       !event.target.closest(".menu")
//     ) {
//       closeActiveMenu();
//     }
//   });

//   document.querySelectorAll(".menu ul li").forEach((menuItem) => {
//     menuItem.addEventListener("click", () => {
//       alert(`${menuItem.textContent} selected`);
//     });
//   });

//   closeMenuIcon.addEventListener("click", () => {
//     hideAllMenus();
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const menuSelector = document.getElementById("menu-selector");
//     const profileButton = document.getElementById("profile-button");
//     const closeMenuIcon = document.getElementById("close_menu");
//     const menus = {
//         dropdown: document.getElementById("dropdown-menu"),
//         modal: document.getElementById("modal-menu"),
//         side: document.getElementById("side-menu"),
//     };

//     let activeMenu = null;

//     // Function to hide all menus
//     const hideAllMenus = () => {
//         Object.values(menus).forEach((menu) => menu.classList.add("hidden"));
//     };

//     // Show the selected menu
//     const showMenu = (menuType) => {
//         hideAllMenus();
//         activeMenu = menus[menuType];
//         if (activeMenu) {
//             activeMenu.classList.remove("hidden");
//         }
//     };

//     // Handle profile button click
//     profileButton.addEventListener("click", () => {
//         const selectedMenu = menuSelector.value;
//         showMenu(selectedMenu);
//     });

//     // Handle close icon click
//     closeMenuIcon.addEventListener("click", () => {
//         hideAllMenus();
//     });

//     // Close modal menu when clicking outside of it
//     window.addEventListener("click", (event) => {
//         if (activeMenu === menus.modal && event.target === menus.modal) {
//             hideAllMenus();
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuSelector = document.getElementById("menu-selector");
  const profileButton = document.getElementById("profile-button");
  const closeMenuIcon = document.getElementById("close_menu");
  const menus = {
    dropdown: document.getElementById("dropdown-menu"),
    modal: document.getElementById("modal-menu"),
    side: document.getElementById("side-menu"),
  };

  let activeMenu = null;

  const hideAllMenus = () => {
    Object.values(menus).forEach((menu) => menu.classList.add("hidden"));
    activeMenu = null;
  };

  // Show the selected menu
  const showMenu = (menuType) => {
    hideAllMenus();
    activeMenu = menus[menuType];
    if (activeMenu) {
      activeMenu.classList.remove("hidden");
    }
  };

  // Handle profile button click
  profileButton.addEventListener("click", () => {
    const selectedMenu = menuSelector.value;
    showMenu(selectedMenu);
  });

  profileButton.addEventListener('click', () => {
    sideMenu.classList.remove('hidden');
    setTimeout(() => {
      sideMenu.classList.add('open');
    }, 50); 
  });
  

  closeMenuIcon.addEventListener("click", () => {
    hideAllMenus();
  });

  document.addEventListener("click", (event) => {
    if (
      activeMenu &&
      !activeMenu.contains(event.target) &&
      event.target !== profileButton &&
      event.target !== menuSelector
    ) {
      hideAllMenus();
    }
  });

  menu.addEventListener("click", (event) => event.stopPropagation());
});
