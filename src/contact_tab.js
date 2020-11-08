const contactHeader = document.createElement('h1');
const headerText = document.createTextNode('Contact');
contactHeader.appendChild(headerText);

const contactContainer = document.createElement('div');
contactContainer.appendChild(contactHeader);

const phoneNumber = document.createElement('div');
phoneNumber.setAttribute('class', 'contact-info');
const phoneLabel = document.createElement('span');
const number = document.createElement('span');
const labelText = document.createTextNode('Phone:');
const numberText = document.createTextNode('555-555-5555');
phoneLabel.appendChild(labelText);
number.appendChild(numberText);
phoneNumber.appendChild(phoneLabel);
phoneNumber.appendChild(number);

const addressContainer = document.createElement('div');
addressContainer.setAttribute('class', 'contact-info');
const addressLabel = document.createElement('span');
const addressLabelText = document.createTextNode('Address:');
const address = document.createElement('span');
const addressText = document.createTextNode('2 a.m. Chili Lane');
addressLabel.appendChild(addressLabelText);
address.appendChild(addressText);
addressContainer.appendChild(addressLabel);
addressContainer.appendChild(address);

contactContainer.appendChild(phoneNumber);
contactContainer.appendChild(addressContainer);

export default contactContainer