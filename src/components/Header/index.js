import './style.css';
import Content from 'components/Content';

export default class Header {
  constructor() {
    this.menuContainer = document.createElement('div');
    this.menuContainer.className = 'menu__container';
  }

  handleMenuClick(event) {
    console.log(event.target);
  }

  handleMenuListClick(menuList) {
    menuList.hidden = !menuList.hidden;
  }

  handleMenuListItemClick(event) {
    new Content().rerender(event.target.textContent);
  }

  render() {
    const nav = document.getElementById('nav');

    import(/* webpackPreload: true */ 'data/menus.json').then(
      ({ default: menus }) => {
        for (let menu in menus) {
          const menuElement = document.createElement('div');
          menuElement.innerText = menu;
          menuElement.className = 'menu';

          if (menus[menu] instanceof Array) {
            const menuList = document.createElement('ul');
            menuList.classList.add('menu__list');

            menus[menu].forEach((item, index) => {
              const listItem = document.createElement('li');
              listItem.textContent = item;
              listItem.id = index;
              listItem.className = 'menu__list__item';
              listItem.onclick = this.handleMenuListItemClick.bind(this);
              menuList.appendChild(listItem);
            });

            menuList.hidden = true;

            menuElement.appendChild(menuList);
            menuElement.onclick = this.handleMenuListClick.bind(this, menuList);
          } else {
            menuElement.onclick = this.handleMenuClick.bind(this);
          }

          this.menuContainer.appendChild(menuElement);
        }

        nav.appendChild(this.menuContainer);
      }
    );

    return nav;
  }
}
