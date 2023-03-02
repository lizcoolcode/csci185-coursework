// Wrap every letter in a span
var textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.letter',
    translateY: ["1.1em", 0],
    duration: 750,
    delay: (el, i) => 50 * i
  });
