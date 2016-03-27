$(document).ready(function(){
// mobile-menu
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('mobile-nav-visible');
  }


//map
  var points = [
    {lat: 60.044609, lng: 30.336287},
  ];

  var images = [
    '../img/icon-map.png',
  ];

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/js',
      dataType: 'jsonp',
    jsonp: 'callback',
    success: mapInit
  });

  function mapInit() {
    var map = new google.maps.Map($('#map').get(0), {
      center: {lat: 60.044609, lng: 30.336287},
      zoom: 15,
      disableDefaultUI: true,
      scrollwheel: false, // убираем скролл колесом
    });

    var markers = [];

    points.forEach(function (position, i) {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        icon: images[i]
      }));
    });
  }




// owl-carousel
  var owl = $('#carousel-first');
  owl.owlCarousel({
    'items': 1,
    'loop': true,
  });

  $('#photo .carousel-next').on('click', function(){
    owl.trigger('next.owl.carousel');
  })
  $('#photo .carousel-prev').on('click', function(){
    owl.trigger('prev.owl.carousel');
  })


});


