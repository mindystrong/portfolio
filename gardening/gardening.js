//initialize myGarden!
let myGarden = [];

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
      }
      //event listener to to create list of produce onchange
      seasonList.addEventListener('change', createProduceOptions);
      zoneDrop.addEventListener('change', createProduceOptions);


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

      function renderProduceInfo(plantFrost) {

        //remove previous produce list item
        let q = document.getElementById("plantResults");
        while (q.firstChild) {
          q.removeChild(plantResults.firstChild);

          //remove existing add to myGarden! button
          let x = document.getElementById("gardenBtn");
          x.remove(x.selectedIndex);

          //remove visit myGarden! button
          let y = document.getElementById("showGarden");
          y.remove(y.selectedIndex);


        }
        //get the value of the current produce user selection
        let currentProduce = document.getElementById('produceList').value;
        //match user selection with produce name
        for (let k = 0; k < data.produce.length; k++) {
          if (data.produce[k].name == currentProduce && currentProduce != "") {
            plantFrost = data.produce[k].frost;
            //grab unordered list element from HTML
            let produceList = document.getElementById('plantResults');
            //create list item and display produce info
            const item = document.createElement('li');
            item.innerHTML = ` 
            <h2>Plant in ${getDaysUntilPlant()} days!</h2>
            <p>Produce: ${data.produce[k].name}</p>
            <p>Environment: ${data.produce[k].environment}</p>
            <p>Sun Exposure: ${data.produce[k].sunExposure}</p>
            <p>Soil Type: ${data.produce[k].soilType}</p>
            <p>Soil pH: ${data.produce[k].soilpH}</p>
            `;
            produceList.appendChild(item);

            //create add to myGarden! button
            let btn = document.createElement("BUTTON");
            let t = document.createTextNode("Add to myGarden!");
            btn.setAttribute("Id", "gardenBtn")
            btn.appendChild(t);
            //add produce item to garden array onclick
            btn.onclick = function alert() {
              //push produce into myGarden array
              myGarden.push(item);
              window.alert(data.produce[k].name + ' is added to your garden');
              console.log(myGarden);
            }
            //add add to myGarden! button to page
            document.body.appendChild(btn);


            let showGarden = document.createElement("BUTTON");
            let gardenText = document.createTextNode("Visit myGarden!");
            showGarden.setAttribute("Id", "showGarden")
            showGarden.appendChild(gardenText);
            //display garden onclick                        
            document.body.appendChild(showGarden);
            showGarden.addEventListener('click', displayGarden);

          }

          function getDaysUntilPlant() {
            //get current user zone selection
            let currentZone = document.getElementById("zoneList").value;

            //get today's day of year
            let now = new Date();
            let start = new Date(now.getFullYear(), 0, 0);
            let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
            let oneDay = 1000 * 60 * 60 * 24;
            let today = Math.floor(diff / oneDay);

            //match user zone selection with zones in JSON object
            for (let z = 0; z < data.zones.length; z++) {
              if (currentZone == data.zones[z].name) {

                //if match, add the zone frost day of year to plant days from frost
                let zoneFrost = data.zones[z].frost;
                let plantDayOfYear = parseInt(zoneFrost) + parseInt(plantFrost);

                //console checks
                console.log(plantFrost);
                console.log(zoneFrost);
                console.log(plantDayOfYear);
                console.log(today);

                //subtract today from the plant day of year and return
                let daysUntilPlant = parseInt(plantDayOfYear) - today;
                if (daysUntilPlant < 0) {
                  daysUntilPlant += 365;
                }
                return daysUntilPlant;
              }
            }
          }
        }
      }
    }
  }
  request.send();
}


function displayGarden() {
//remove existing plantNow! result
  let b = document.getElementById("plantResults");
  while (b.firstChild) {
    b.removeChild(plantResults.firstChild);
  }
  //hide myGarden! results
  document.getElementById("myGardenResults").classList.remove('hide');

  //remove existing visit myGarden! button
  let y = document.getElementById("showGarden");
  y.remove(y.selectedIndex);

  //remove existing add to myGarden! button
  let r = document.getElementById("gardenBtn");
  r.remove(r.selectedIndex);

  //hide all existing elements on page 
  document.getElementById('zone').classList.add('hide');

  //populate myGarden! 
  let gardenList = document.getElementById('myGardenResults');
  for (let i = 0; i < myGarden.length; i++) {
    let x = myGarden[i];
    console.log(x);
    gardenList.appendChild(x);
  }

  //create Add More button
  let backBtn = document.createElement("BUTTON");
  let btnText = document.createTextNode("Add more");
  backBtn.setAttribute("Id", "backBtn");
  backBtn.appendChild(btnText);

  backBtn.onclick = function show() {
    //unhide page elements onclick and hide myGarden! results
    document.getElementById('zone').classList.remove('hide');
    document.getElementById("myGardenResults").classList.add('hide');

    //remove add more button
    let p = document.getElementById("backBtn");
    p.remove(p.selectedIndex);

    //remove reset myGarden! button
    let z = document.getElementById("refreshBtn");
    z.remove(z.selectedIndex);

    //remove add to myGarden! button
    let t = document.getElementById("gardenBtn");
    t.remove(t.selectedIndex);

  }

  //add add more button to page
  document.body.appendChild(backBtn);

  //create reset myGarden! button
  let refreshBtn = document.createElement("BUTTON");
  let refreshText = document.createTextNode("Reset myGarden!");
  refreshBtn.setAttribute("Id", "refreshBtn");
  refreshBtn.appendChild(refreshText);
  refreshBtn.onclick = function resetGarden() {
    //reset myGarden array onclick
    myGarden = [];
    let a = document.getElementById("myGardenResults");
    //remove garden results list element children
    while (a.firstChild) {
      a.removeChild(myGardenResults.firstChild);
    }
  }
  //add reset myGarden button to page
  document.body.appendChild(refreshBtn);
}



