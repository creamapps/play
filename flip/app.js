var toggle = document.getElementById('toggle')
  , card = document.getElementById('card')
  , expanded = false;



toggle.addEventListener('click', function() {
  card.style.height = (expanded) ? '200px' : '400px'
  expanded = !expanded;
});