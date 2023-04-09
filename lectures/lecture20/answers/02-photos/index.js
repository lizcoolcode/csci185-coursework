const photos = [
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

// Create a card for every image in the photos list using a for...of loop and
// template variables
counter = 0;
while (counter < photos.length) {
    const template = `
        <div class="card" style="background-image:url('${photos[counter]}')"></div>
    `;
    document.querySelector('.cards').insertAdjacentHTML('beforeend', template);

    counter++;
}
