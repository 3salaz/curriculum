$(document).ready(function() {
    M.AutoInit();
    $('carousel.carousel-item').carousel({fullWidth:true});
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
      });
    // on click button click check slide number and go to link address
    let slink = 
});