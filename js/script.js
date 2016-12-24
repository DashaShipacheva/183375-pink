var header = document.querySelector(".page-header");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
header.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    header.classList.add("page-header--open-nav");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    header.classList.remove("page-header--open-nav");
  }
});

var popupSuccess = document.querySelector(".modal-content--success");
var popupFail = document.querySelector(".modal-content--fail");
var form = document.querySelector(".order-form");
var surname = form.querySelector("[name=surname]");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var good = popupFail.querySelector(".modal-content__btn-ok");
var close = popupSuccess.querySelector(".modal-content__btn-close");
form.addEventListener("submit", function (event) {
  if (!surname.value || !name.value || !email.value) {
    event.preventDefault();
    popupFail.classList.add("modal-content__show");
  } else {
    popupFail.classList.remove("modal-content__show");
    popupSuccess.classList.add("modal-content__show");
  }
});

//form.addEventListener("submit", function (event) {
//  if (surname.value && name.value && email.value) {
//    event.preventDefault();
//    popupSuccess.classList.add("modal-content__show");
//  } else {
//    popupFail.classList.remove("modal-content__show");
//    popupSuccess.classList.remove("modal-content__show");
//  }
//});

if (popupFail) {
  good.addEventListener("click", function (event) {
    event.preventDefault();
    popupFail.classList.remove("modal-content__show");
  });
}

if (popupSuccess) {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    popupSuccess.classList.remove("modal-content__show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupFail.classList.contains("modal-content__show")) {
      popupFail.classList.remove("modal-content__show");
    } else {
      popupSuccess.classList.remove("modal-content__show");
    }
  }
});

var map;
function initMap() {
  var image = "img/icon-map-marker.svg";
  var myLatLng = {lat: 59.9362413, lng: 30.3210924};

  map = new google.maps.Map(document.getElementById("mapMap"), {
    center: myLatLng,
    scrollwheel: false,
    // disableDefaultUI: true,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });

  google.maps.event.addListener(map, "mouseout", function(){
    this.setOptions({scrollwheel:false});
  });

  map.addListener("click", function() {
    map.set("scrollwheel", true);
  });
}

function initMap() {
  var mapPosition = {lat: 59.93643, lng: 30.32104};
  var markerPosition = {lat: 59.93610, lng: 30.32104};

  var map = new google.maps.Map(document.getElementById('contacts-map'), {
    zoom: 16,
    center: mapPosition,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    icon: 'img/icon-map-marker.svg'
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapPosition);
  });
}
