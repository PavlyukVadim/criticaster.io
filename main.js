var map;
var marker;

$(document).ready(function() {
  $('.button-collapse').sideNav();
});

/*
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.448080, lng: 30.451475},
    zoom: 12
  });

   marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 50.448080, lng: 30.451475}
  });

	var styles = [
	  {
	    featureType: "all",
	    stylers: [
	      { saturation: -80 }
	    ]
	  },{
	    featureType: "road.arterial",
	    elementType: "geometry",
	    stylers: [
	      { hue: "#00ffee" },
	      { saturation: 50 }
	    ]
	  },{
	    featureType: "poi.business",
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];

	map.setOptions({styles: styles});
};

initMap();*/