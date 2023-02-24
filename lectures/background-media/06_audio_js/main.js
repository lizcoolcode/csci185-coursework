document.querySelector('#play').addEventListener('click', ev => {
    document.querySelector('audio').play();
});

document.querySelector('#pause').addEventListener('click', ev => {
    document.querySelector('audio').pause();
});