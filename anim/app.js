(function() {
  function makeSmall(el) {
    var style = el.style;
    var currentWidth = window.getComputedStyle(el).width;

    if (currentWidth === '0px') {
      document.getElementById('toggle').innerHTML = 'hahaha'
      style.width = '16.66%';
    } else {
      document.getElementById('toggle').innerHTML = 'Click me'
      style.width = 0;
    }
  }

  var el = document.getElementById('toggle');

  el.addEventListener('click', function() {
    var list = document.getElementsByClassName('box');

    for (var i = 0; i < list.length; i++) {
      makeSmall(list[i]);
    }
  })
})();