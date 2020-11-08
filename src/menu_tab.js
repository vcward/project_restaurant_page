const menuHeader = document.createElement('h1');
const headerText = document.createTextNode('Menu');
menuHeader.appendChild(headerText);

const menuContainer = document.createElement('div');
menuContainer.appendChild(menuHeader);

const menuItems = new Array(10).fill({ item: '2 a.m. chili', price: '$10.99' });
menuItems.forEach((i) => {
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'menu-item');
    const itemName = document.createElement('span');
    const itemNameText = document.createTextNode(i.item)
    itemName.appendChild(itemNameText);
    const itemPrice = document.createElement('span');
    const itemPriceText = document.createTextNode(i.price)
    itemPrice.appendChild(itemPriceText);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemPrice);
    menuContainer.appendChild(itemContainer);
});

export default menuContainer