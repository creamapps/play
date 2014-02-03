(function() {

  function makeSmall(el) {
    var style = el.style;
    var currentWidth = window.getComputedStyle(el).width;
    style.width = (currentWidth === '0px')
      ? '16.66%'
      : 0;
  }
  

  var el = document.getElementById('toggle');

  el.addEventListener('click', function() {
    var list = document.getElementsByClassName('box');
    for (var i = 0; i < list.length; i++) {
      makeSmall(list[i]);
    }
  });

})();