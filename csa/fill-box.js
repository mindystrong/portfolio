const produceList = [{
        name: "onion",
        imgsrc: "csa-images/onion-pic.png",
        availability: ["summer", "winter", "fall"],
        price: 2,
    },
    {
        name: "corn",
        imgsrc: "csa-images/corn-pic.png",
        availability: ["summer"],
        price: 2,
    },
    {
        name: "tomato",
        imgsrc: "csa-images/tomato-pic.png",
        availability: ["summer"],
        price: 1,
    },
    {
        name: "spinach",
        imgsrc: "csa-images/spinach-pic.png",
        availability: ["winter"],
        price: 1,
    },
    {
        name: "beets",
        imgsrc: "csa-images/beet-pic.png",
        availability: ["winter", "fall"],
        price: 1,
    },
    {
        name: "apricots",
        imgsrc: "csa-images/apricot-pic.png",
        availability: ["spring"],
        price: 1,
    },
    {
        name: "grapefruit",
        imgsrc: "csa-images/grapefruit-pic.png",
        availability: ["winter", "spring"],
        price: 2,
    },
    {
        name: "kiwi",
        imgsrc: "csa-images/kiwi-pic.png",
        availability: ["winter", "summer"],
        price: 1,
    },
    {
        name: "pumpkin",
        imgsrc: "csa-images/pumpkin-pic.png",
        availability: ["winter", "fall"],
        price: 5,
    },
    {
        name: "broccoli",
        imgsrc: "csa-images/broccoli-pic.png",
        availability: ["spring", "fall", "spring"],
        price: 1,
    },
    {
        name: "avocado",
        imgsrc: "csa-images/avocado-pic.png",
        availability: ["summer", "spring"],
        price: 2,
    },
    {
        name: "apple",
        imgsrc: "csa-images/apple-pic.png",
        availability: ["summer", "spring"],
        price: 1,
    },
    {
        name: "potato",
        imgsrc: "csa-images/potato-pic.png",
        availability: ["fall", "winter"],
        price: 1,
    },
    {
        name: "pear",
        imgsrc: "csa-images/pear-pic.png",
        availability: ["winter", "fall"],
        price: 1,
    },
    {
        name: "kale",
        imgsrc: "csa-images/kale-pic.png",
        availability: ["fall", "spring"],
        price: 1,  
    },
];

let box = [];
let cart = [];

//sort through object and create buttons of produce in season
function createOptions(season) {

    let selectlist = document.getElementById("list");

    for (let i = 0; i < produceList.length; i++) {
        if (produceList[i].availability.indexOf(season) > -1) {
            let name = produceList[i].name;
            let image = produceList[i].imgsrc;
            let price = produceList[i].price;

            let veggie = document.createElement("button");
            veggie.textContent = name;
            veggie.value = name;
            veggie.id = name;
            veggie.setAttribute("data-price", price);

            //create and set new img element and add to box onclick
            veggie.onclick = function convert() {

                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                
                if (box.length < 8) {
                    box.push(x);
                    cart.push({price, name});
                }
                else {
                 window.alert("Sorry, your box is full");
                }
                
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                } 
            }   
            selectlist.appendChild(veggie);
        }    
    }   
}

//get sum of prices array
function addSum() {
    let sum = 0;
    for (let k = 0; k < cart.length; k++) {
        sum += parseInt(cart[k].price);   
    }    
    return sum; 
}     

//window alert sum
 function showPrice() {
    let checkout = addSum();
    window.alert(checkout);
}

//remove produce in array and remove image elements
function deleteProduce() {
   box.pop();
   cart.pop();
   let list = document.getElementById('resultBox');
   list.removeChild(list.childNodes[box.length]);
}




    




