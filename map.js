
    mapboxgl.accessToken = 'pk.eyJ1Ijoibml0aW5iYXJhaSIsImEiOiJja3V4d2FwcGkyb3N0MzBzN2w3dmJuOWxoIn0.k2WVUxxEVmLFqxEMXAlrbQ';
var  map
function mapinit(){
   map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
  });

  feedData() }



  function feedData() {
      fetch('https://photobucket-app-fb67d-default-rtdb.firebaseio.com/feed.json')
      .then((response) => {
          return response.json()
      })
      .then((data)=>{
          var ids = Object.keys(data)

          for (i=0;i<ids.length;i++){
              // create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<p> Status : ' + data[ids[i]].status + ' </p> <img src=' + data[ids[i]].image + ' /> <p> Email : ' + data[ids[i]].email + ' </p>'
    );
     NamedNodeMap
    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';
     
    // create the marker
    new mapboxgl.Marker()
    .setLngLat([data[ids[i]].location.longitude, data[ids[i]].location.latitude])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);
          }
      })
  }
