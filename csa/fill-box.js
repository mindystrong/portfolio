const vegetableList = [{
        name: "onion",
        imgsrc: "/csa-images/onion-pic.png",
        availability: ["summer"],
        price: "2",
        markets: "",
    },
    {
        name: "corn",
        imgsrc: "/csa-images/corn-pic.png",
        availability: ["summer"],
        price: "1",
        markets: ""
    },
    {
        name: "tomato",
        imgsrc: "/csa-images/tomato-pic.png",
        availability: ["summer"],
        price: "1",
        markets: ""
    },
    {
        name: "spinach",
        imgsrc: "/csa-images/spinach-pic.png",
        availability: ["winter"],
        price: "1",
        markets: ""
    }
];

let box = [];

//sort through object and create option list of produce in season
function createSummerOptions() {
    let selectlist = document.getElementById("list");

    for (let i = 0; i < vegetableList.length; i++) {
        if (vegetableList[i].availability == "summer") {
            let name = vegetableList[i].name;
            let image = vegetableList[i].imgsrc;
            let option = document.createElement("option");
            option.textContent = name;
            option.value = name;
            option.id = name;
           

            //create and set new img element and add to box onclick
            option.onclick = function convert() {
                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                box.push(x);
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                }
            }
            selectlist.appendChild(option);
        }
    }
}

function createWinterOptions() {
    let selectlist = document.getElementById("list");

    for (let i = 0; i < vegetableList.length; i++) {
        if (vegetableList[i].availability == "winter") {
            let name = vegetableList[i].name;
            let image = vegetableList[i].imgsrc;
            let option = document.createElement("option");
            option.textContent = name;
            option.value = name;
            option.id = name;
            //create and set new img element and add to box onclick
            option.onclick = function convert() {
                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                box.push(x);
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                }
            }
            selectlist.appendChild(option);
        }
    }
}

function createFallOptions() {
    let selectlist = document.getElementById("list");

    for (let i = 0; i < vegetableList.length; i++) {
        if (vegetableList[i].availability == "fall") {
            let name = vegetableList[i].name;
            let image = vegetableList[i].imgsrc;
            let option = document.createElement("option");
            option.textContent = name;
            option.value = name;
            option.id = name;

            //create and set new img element and add to box onclick
            option.onclick = function convert() {
                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                box.push(x);
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                }
            }
            selectlist.appendChild(option);
        }
    }
}

function createSpringOptions() {
    let selectlist = document.getElementById("list");

    for (let i = 0; i < vegetableList.length; i++) {
        if (vegetableList[i].availability == "spring") {
            let name = vegetableList[i].name;
            let image = vegetableList[i].imgsrc;
            let option = document.createElement("option");
            option.inp
            option.textContent = name;
            option.value = name;
            option.id = name;

            //create and set new img element and add to box onclick
            option.onclick = function convert() {
                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                box.push(x);
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                }
            }
            selectlist.appendChild(option);
        }
    }
}





