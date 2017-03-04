var map;
var marker;

(function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.325, lng: 18.070},
    zoom: 8
  });

   marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.327, lng: 18.067}
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
})();

$("ul.tabs").tabs({
	onShow: function(tab) { 
		if (tab.selector === '#portfolio' ) {
			$('#portfolio').css({
				visibility: 'visible',
				position: 'static'
				
			});
		} else {
			$('#portfolio').css({
				visibility: 'hidden',
				position: 'absolute'
			});
		}
	 }
});
    
if ($( window ).width() >= 768) {
	$('#works-slider').slick();
} else {
	$('.slick-slide').css('display', 'block');
}   
