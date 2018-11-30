function loadJSON() {

  const url = 'gardening.json';

  //make HTTP AJAX request
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function createZoneOptions() {

    //parse data from JSON file
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);

      //create zone option elements from 1-11
      let zoneDrop = document.getElementById('zoneList');
      zoneDrop.length = 0;
      for (let z = 0; z <= 11; z++) {
        let zoneOption = document.createElement("option");
        zoneOption.value = z;
        zoneOption.text = z;
        zoneOption.id = z;
        zoneDrop.appendChild(zoneOption);
        //event listener to to create list of produce onchange
        zoneDrop.addEventListener('change', createProduceOptions);
      }

      function createProduceOptions() {
        //grab season and zone user selection values
        let currentZone = document.getElementById("zoneList").value;
        let currentSeason = document.getElementById("seasonList").value;

        //create produce option elements
        let produceDrop = document.getElementById('produceList');
        produceDrop.length = 0;
        for (let i = 0; i < data.produce.length; i++) {
          if ((data.produce[i].season.indexOf(currentSeason) > -1) && (data.produce[i].zone.indexOf(currentZone) > -1)) {
            let option = document.createElement("option");
            option.text = data.produce[i].name;
            option.value = data.produce[i].name;
            option.id = data.produce[i].name;
            produceDrop.appendChild(option);
          }
        }

      }
      //event listener to display produce info onclick
      let plantNow = document.getElementById('plantNowBtn');
      plantNow.addEventListener('click', renderProduceInfo);

      function renderProduceInfo() {
        //get the value of the current produce user selection
        let currentProduce = document.getElementById('produceList').value;
        //match user selection with produce name
        for (let k = 0; k < data.produce.length; k++) {
          if (data.produce[k].name == currentProduce) {
            //grab unordered list element from HTML
            let produceList = document.getElementById('plantResults');
            //create list item and display produce info
            const item = document.createElement('li');
            item.innerHTML = ` 
            <h2>Plant in _____ days!</h2>
            <p>Produce: ${data.produce[k].name}</p>
            <p>Environment: ${data.produce[k].environment}</p>
            <p>Sun Exposure: ${data.produce[k].sunExposure}</p>
            <p>Soil Type: ${data.produce[k].soilType}</p>
            <p>Soil pH: ${data.produce[k].soilpH}</p>
            `;
            produceList.appendChild(item);
            

            
          }
          
        }
      }
    }
  }
  request.send();
}



//returns today's day of year from 1-365
function getTodayDayOfYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

//returns the day of year the produce should be planted
function getPlantDayOfYear() {
  // return (data.zone.frost + data.produce.frost);
}

//returns how many days until you can plant
function getDaysUntilPlant() {
  getTodayDayOfYear() = today;
  getPlantDayOfYear() = plantDay;
  if (plantDay < today) {
    window.alert('sorry, plant date has passed');
    return false;
  } else {
    let difference = plantDay - today;
    return difference;
  }
}