function initMap() {
  var myLatLng = new google.maps.LatLng(59.9362413, 30.3210924);
  var mapOptions = {
    center: myLatLng,
    zoom: 16,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "img/icon-map-marker.svg"
  });
}
if (document.querySelector("#map")) {
  google.maps.event.addDomListener(window, "load", initMap);
}
