const produceList = [{
        name: "onion",
        imgsrc: "/csa-images/onion-pic.png",
        availability: ["summer", "winter", "fall"],
        price: 2,
        markets: "",
    },
    {
        name: "corn",
        imgsrc: "/csa-images/corn-pic.png",
        availability: ["summer"],
        price: 2,
        markets: ""
    },
    {
        name: "tomato",
        imgsrc: "/csa-images/tomato-pic.png",
        availability: ["summer"],
        price: 1,
        markets: ""
    },
    {
        name: "spinach",
        imgsrc: "/csa-images/spinach-pic.png",
        availability: ["winter"],
        price: 1,
        markets: ""
    },
    {
        name: "beets",
        imgsrc: "",
        availability: ["winter", "fall"],
        price: 1,
        markets:""
    },
    {
        name: "apricots",
        imgsrc: "",
        availability: ["spring"],
        price: 1,
        markets:""
    },
    {
        name: "grapefruit",
        imgsrc: "",
        availability: ["winter"],
        price: 2,
        markets:""
    },
    {
        name: "kiwi",
        imgsrc: "",
        availability: ["winter", "summer"],
        price: 1,
        markets:""
    },
    {
        name: "pumpkin",
        imgsrc: "",
        availability: ["winter", "fall"],
        price: 5,
        markets:""
    },
    {
        name: "broccoli",
        imgsrc: "",
        availability: ["spring", "fall"],
        price: 1,
        markets:""
    },
    {
        name: "avocado",
        imgsrc: "",
        availability: ["summer"],
        price: 2,
        markets:""
    },
    {
        name: "apple",
        imgsrc: "",
        availability: ["summer"],
        price: 1,
        markets:""
    },
    {
        name: "potato",
        imgsrc: "",
        availability: ["fall", "winter"],
        price: 1,
        markets:""
    },
    {
        name: "pear",
        imgsrc: "",
        availability: ["winter", "fall"],
        price: 1,
        markets:""
    },
    {
        name: "kale",
        imgsrc: "",
        availability: ["fall"],
        price: 1,
        markets:""
    },
    {
        name: "",
        imgsrc: "",
        availability: "",
        price: "",
        markets:""
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





