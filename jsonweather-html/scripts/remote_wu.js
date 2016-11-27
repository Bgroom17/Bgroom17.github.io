// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: 'https://api.wunderground.com/api/3f747b309a7431f8/geolookup/conditions/q/' + lat + ',' + long + '.json',
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var location = data['location']['city'] + ','+ data['location']['state'];
                var temp= data['current_observation']['temp_f'];
                var current = data['current_observation']['weather'];
                var windchill = data['current_observation']['windchill_f'];
                var humidity = data['current_observation']['relative_humidity'];
                var precip = data['current_observation']['precip_today_in'];
                $('#cityDisplay').html(location);
                $('#currentTemp').html(Math.round(temp)+"&#176;F");
                $('#summary').html(toTitleCase(current));
                $('#add1').html("Windchill: "+(windchill)+"&#176;F");
                $('#add2').html("Humidity: "+(humidity));
                $('#add3').html("Precipitation: "+(precip)+" inches");
                
                

            }
        });
        
        







        $("#cover").fadeOut(250);
    }


    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});