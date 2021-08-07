const menuBtn = document.querySelector('.menu-btn');

const navbarList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  if(navbarList.className === "navbar-list"){
    navbarList.className = "nav-mobile-list";
  }else{
    navbarList.className = "navbar-list";
  }
});