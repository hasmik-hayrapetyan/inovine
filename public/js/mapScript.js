function initMap() {
    let map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 17,
        center: {lat: 40.176760, lng: 44.514747},
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    });
    let contentString = `<div id="content" class="px-md-4">
                <div id="siteNotice"></div>
                <h6 id="firstHeading" class="firstHeading text-center mb-0">
                    Do you want to build your product, MVP, or hire a development team?<br> Or do you simply have a question?<br> Drop us a line.
                </h6>
                <div id="bodyContent">
                    <hr style="border: 1px solid #343434;" class="my-2">
                    <div class="col-md-12 text-center">
                        <a href="https://www.linkedin.com/company/inovineteam/about/" class="linkedin_hover d-inline-block" target="_blank">
				        	<span class="fa-stack fa-md">
  				        		<i class="fa fa-circle text-black fa-stack-2x"></i>
  				        		<i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
				        	</span>
                        </a>
                        <a href="https://www.facebook.com/Inovine-402144417219520/" class="fb_hover d-inline-block" target="_blank">
				        	<span class="fa-stack fa-md">
  				        		<i class="fa fa-circle text-black fa-stack-2x"></i>
  				        		<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
				        	</span>
                        </a>
                    </div>
                    <div class="col-md-12 text-center">
                        <a href="mailto:hello@inovine.io" class="text-black">hello@inovine.io</a>
                    </div>
                    <div class="col-md-12 text-center">
                        <p>2/2 Melik Adamyan Street, Yerevan, Armenia</p>
                    </div>
                </div>
            </div>`;

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    let image = {
        url: 'public/images/map-icon.png',
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    let marker = new google.maps.Marker({
        position: {lat: 40.177008, lng: 44.515241},
        map: map,
        icon: image
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}