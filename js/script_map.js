
      function initMap() {
        var uluru = {lat: 53.8910576, lng: 27.5669412};
        var uluru1 = {lat: 53.8937105, lng: 27.5479572};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
         var marker = new google.maps.Marker({
          position: uluru1,
          map: map
        });
      }
    