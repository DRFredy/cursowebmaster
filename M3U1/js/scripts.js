// document.querySelector('#navHome').addEventListener('click', function (event) {
//   document.querySelector('#mainContents').innerHTML = '<object class="mainContent" type="text/html" data="home.html"></object>';
// });

function addNavItemsEventListeners() {
  let navItems = document.querySelectorAll('.navItem');

  navItems.forEach(function (itm, index) {
    let elemName = itm.id.replace('nav', '');
    document.querySelector('#' + itm.id).addEventListener('click', function (event) {      
      document.querySelector('#mainContents').innerHTML = 
        '<object class="mainContent" type="text/html" data="' + elemName.toLowerCase() + '.html"></object>';
        setActive(itm.id);
    });
  });
  
}

function setActive(navOptId) {
  let activeNavItem = document.querySelector('.navItem.active');

  activeNavItem.classList.remove('active');
  document.querySelector('#' + navOptId).classList.add('active');
}

addNavItemsEventListeners();
document.querySelector('#navHome').click();