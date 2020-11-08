import homeTab from './home_tab';
import menuTab from './menu_tab';
import contactTab from './contact_tab';

const content = document.getElementById('content');

const switchActiveTab = () => {
    const currentActive = document.getElementsByClassName('active-tab');
    if (currentActive.length) {
        currentActive[0].classList.remove('active-tab');
    }
}

const displayTabContent = (event) => {
    console.log(event)
    switchActiveTab();
    event.target.setAttribute('class', 'active-tab');
    const tab = event.target.innerText;
    const tabContentContainer = document.getElementById('tab-content');
    const contentHtml = {
        'Home': homeTab.innerHTML,
        'Menu': menuTab.innerHTML,
        'Contact': contactTab.innerHTML
    };
    tabContentContainer.innerHTML = contentHtml[tab];
}


const tabs = ['Home', 'Menu', 'Contact'];
const tabsContainer = document.createElement('ul');
tabsContainer.setAttribute('id', 'tabs');
content.appendChild(tabsContainer);
tabs.forEach((tab) => {
    const tabLabel = document.createElement('li');
    const tabText = document.createTextNode(tab);
    tabLabel.setAttribute('id', `${tab}-tab`);
    tabLabel.appendChild(tabText);
    tabLabel.addEventListener('click', displayTabContent)
    tabsContainer.appendChild(tabLabel);
});

document.getElementById('Home-tab').setAttribute('class', 'active-tab');

const tabContentContainer = document.createElement('div');
tabContentContainer.setAttribute('id', 'tab-content');
tabContentContainer.innerHTML = homeTab.innerHTML;
content.appendChild(tabContentContainer);