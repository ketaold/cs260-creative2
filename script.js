document.getElementById("locSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    latitude = document.getElementById("latInput").value;
    longitude = document.getElementById("longInput").value;
    if (latitude === "" || longitude === "")
        return;
    console.log("lat: " + latitude + ", long: " + longitude);
    url = "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude;

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let results = "";
            results += '<p id="sunrise">Sunrise: ' + json.results.sunrise + '</p>';
            results += '<p id="sunset">Sunset: ' + json.results.sunset + '</p>';
            results += '<p id="noon">Solar noon: ' + json.results.solar_noon + '</p>';
            document.getElementById("basicInfo").innerHTML = results;
            results = "";
            results += '<p class="twilight">Civil Twilight: from ' + json.results.civil_twilight_begin + " to " + json.results.civil_twilight_end + '</p> ';
            results += '<p class="twilight">Nautical Twilight: from ' + json.results.nautical_twilight_begin + " to " + json.results.nautical_twilight_end + '</p> ';
            results += '<p class="twilight">Astronomical Twilight: from ' + json.results.astronomical_twilight_begin + " to " + json.results.astronomical_twilight_end + '</p> ';
            document.getElementById("advancedInfo").innerHTML = results;
        });

});
