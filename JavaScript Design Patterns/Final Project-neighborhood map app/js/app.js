'use strict';

var initialLocations = [
    { tag: "places", name: 'Park Ave Penthouse', location: { lat: 40.7713024, lng: -73.9632393 } },
    { tag: "places", name: 'Chelsea Loft', location: { lat: 40.7444883, lng: -73.9949465 } },
    { tag: "places", name: 'Union Square Open Floor Plan', location: { lat: 40.7347062, lng: -73.9895759 } },
    { tag: "Hotel", name: 'East Village Hip Studio', location: { lat: 40.7281777, lng: -73.984377 } },
    { tag: "Hotel", name: 'TriBeCa Artsy Bachelor Pad', location: { lat: 40.7195264, lng: -74.0089934 } },
    { tag: "Hotel", name: 'Chinatown Homey Space', location: { lat: 40.7180628, lng: -73.9961237 } }
];

// Declaring global variables now to satisfy strict mode
var map;
var clientID;
var clientSecret;

// formatPhone function referenced from
// http://snipplr.com/view/65672/10-digit-string-to-phone-format/

function formatPhone(phonenum) {
    var regexObj = /^(?:\+?1[-. ]?)?(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regexObj.test(phonenum)) {
        var parts = phonenum.match(regexObj);
        var phone = "";
        if (parts[1]) { phone += "+1 (" + parts[1] + ") "; }
        phone += parts[2] + "-" + parts[3];
        return phone;
    }
    else {
        //invalid phone number
        return phonenum;
    }
}

var Location = function(data) {
    var self = this;
    this.name = data.name;
	this.lat = data.location.lat;
	this.long = data.location.lng;
	this.URL = "";
	this.street = "";
	this.city = "";
    this.phone = "";
    
    this.visible =ko.observable(true);

    var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll='+ this.lat + ',' + this.long + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20160118' + '&query=' + this.name;
    // 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20180323&limit=1&ll='+ this.lat + ',' + this.long + '&query=' + this.name;
    $.getJSON(foursquareURL).done(function(data) {
		var results = data.response.venues[0];
		self.URL = results.url;
		if (typeof self.URL === 'undefined'){
			self.URL = "";
		}
		self.street = results.location.formattedAddress[0];
     	self.city = results.location.formattedAddress[1];
      	self.phone = results.contact.phone;
      	if (typeof self.phone === 'undefined'){
			self.phone = "";
		} else {
			self.phone = formatPhone(self.phone);
		}
	}).fail(function() {
		alert("There was an error with the Foursquare API call. Please refresh the page and try again to load Foursquare data.");
    });
    
    this.contentString = '<div class="info-window-content"><div class="title"><b>' + data.name + "</b></div>" +
        '<div class="content"><a href="' + self.URL +'">' + self.URL + "</a></div>" +
        '<div class="content">' + self.street + "</div>" +
        '<div class="content">' + self.city + "</div>" +
        '<div class="content">' + self.phone + "</div></div>";

    this.infoWindow = new google.maps.InfoWindow({content: self.contentString});

    this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.location.lat, data.location.lng),
            map: map,
            title: data.name
    });

    this.showMarker = ko.computed(function() {
		if(this.visible() === true) {
			this.marker.setMap(map);
		} else {
			this.marker.setMap(null);
		}
		return true;
    }, this);
    
    this.marker.addListener('click', function(){
		self.contentString = '<div class="info-window-content"><div class="title"><b>' + data.name + "</b></div>" +
        '<div class="content"><a href="' + self.URL +'">' + self.URL + "</a></div>" +
        '<div class="content">' + self.street + "</div>" +
        '<div class="content">' + self.city + "</div>" +
        '<div class="content"><a href="tel:' + self.phone +'">' + self.phone +"</a></div></div>";

        self.infoWindow.setContent(self.contentString);

		self.infoWindow.open(map, this);

		self.marker.setAnimation(google.maps.Animation.BOUNCE);
      	setTimeout(function() {
      		self.marker.setAnimation(null);
     	}, 2100);
	});

	this.bounce = function(place) {
		google.maps.event.trigger(self.marker, 'click');
	};
};

function viewModel() {
    var self = this;

    this.locationList = ko.observableArray([]);

    this.searchTerm = ko.observable("");

    map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: {lat: 40.749597, lng: -73.987359}});

    // Foursquare API settings
	clientID = "GAFURFHBM0KG23500KBAPQC5TM12SEUXBQCBSOK1TV0TCLGS";
	clientSecret = "LDPXNLQAWUAM2I0B04GF24WVA22LSHOICXVH1S1TBTZGTMBP";

    initialLocations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    this.filteredList = ko.computed( function() {
        var filter = self.searchTerm().toLowerCase();
        if (!filter) {
			self.locationList().forEach(function(locationItem){
				locationItem.visible(true);
			});
			return self.locationList();
		} else {
			return ko.utils.arrayFilter(self.locationList(), function(locationItem) {
				var string = locationItem.name.toLowerCase();
				var result = (string.search(filter) >= 0);
				locationItem.visible(result);
				return result;
			});
		}
    }, self);

    this.mapElem = document.getElementById('map');
	this.mapElem.style.height = window.innerHeight - 50;
};

function startApp() {
	ko.applyBindings(new viewModel());
}

function errorHandling() {
	alert("Google Maps has failed to load. Please check your internet connection and try again.");
}
