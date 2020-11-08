const restaurantHeader = document.createElement('h1');
const headerText = document.createTextNode('Restaurant');
restaurantHeader.appendChild(headerText);

const reservationsHeader = document.createElement('h2');
const reservationsText = document.createTextNode('Make a Reservation');
reservationsHeader.appendChild(reservationsText);
const reservationsDescription = document.createElement('div');
const reservationsDescriptionText = document.createTextNode('Coming Soon!');
reservationsDescription.appendChild(reservationsDescriptionText);

const restaurantDescription = document.createElement('div');
const descriptionText = document.createTextNode(`Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Fusce eu velit lobortis tellus semper volutpat a eget ipsum.
    Aliquam ac eros dictum, blandit enim et, posuere eros.
    Vivamus at risus convallis, porta libero in, dictum ipsum.
    Maecenas vitae luctus lectus. Curabitur sit amet auctor risus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Curabitur tortor augue, accumsan eget libero sit amet,
    iaculis aliquam metus. Proin iaculis blandit velit vel gravida.
    Mauris sed elit ac justo ornare finibus. Donec vel fringilla turpis.`);
restaurantDescription.appendChild(descriptionText);

const restaurantDescription2 = document.createElement('p');
const descriptionText2 = document.createTextNode(`Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Fusce eu velit lobortis tellus semper volutpat a eget ipsum.
    Aliquam ac eros dictum, blandit enim et, posuere eros.
    Vivamus at risus convallis, porta libero in, dictum ipsum.
    Maecenas vitae luctus lectus. Curabitur sit amet auctor risus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Curabitur tortor augue, accumsan eget libero sit amet,
    iaculis aliquam metus. Proin iaculis blandit velit vel gravida.
    Mauris sed elit ac justo ornare finibus. Donec vel fringilla turpis.`);
restaurantDescription2.appendChild(descriptionText2);


const homeTab = document.createElement('div');
homeTab.appendChild(restaurantHeader);
homeTab.appendChild(restaurantDescription);
homeTab.appendChild(reservationsHeader);
homeTab.appendChild(reservationsDescriptionText);
homeTab.appendChild(restaurantDescription2);

export default homeTab