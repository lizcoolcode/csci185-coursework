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

let i = 0;
while (i < photos.length) {
    let template = `
    <div class="card" style="background-image:url('${ photos [i]}')"></div>
`;
    document.querySelector('.cards').insertAdjacentHTML('beforeend', template);
    ++i;
}
