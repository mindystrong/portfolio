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
        name: "beets"
        imgsrc: 
        availability: ["winter", "fall"]
        price:
        markets:""
    },
    {
        name: "apricots"
        imgsrc:
        availability: ["spring"]
        price:
        markets:""
    },
    {
        name: "grapefruit"
        imgsrc:
        availability: ["winter"]
        price:
        markets:""
    },
    {
        name: "kiwi"
        imgsrc:
        availability: ["winter", "summer"]
        price:
        markets:""
    },
    {
        name: "pumpkin"
        imgsrc:
        availability: ["winter", "fall"]
        price:
        markets:""
    },
    {
        name: "broccoli"
        imgsrc:
        availability: ["spring", "fall"]
        price:
        markets:""
    },
    {
        name: "avocado"
        imgsrc:
        availability: ["summer"]
        price:
        markets:""
    },
    {
        name: "apple"
        imgsrc:
        availability: ["summer"]
        price:
        markets:""
    },
    {
        name: "potato"
        imgsrc:
        availability: ["fall", "winter"]
        price:
        markets:""
    },
    {
        name: "pear"
        imgsrc:
        availability: ["winter", "fall"]
        markets:""
    },
    {
        name: "kale"
        imgsrc:
        availability: ["fall"]
        price:
        markets:""
    },
    {
        name:
        imgsrc:
        availability:
        price:
        markets:""
    },
    {
        name:
        imgsrc:
        availability:
        price:
        markets:""
    },
    {
        name:
        imgsrc:
        availability:
        price:
        markets:""
    },
    {
        name:
        imgsrc:
        availability:
        price:
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

            let produceBtn = document.createElement("button");
            produceBtn.textContent = name;
            produceBtn.value = name;
            produceBtn.id = name;
            produceBtn.setAttribute("data-price", price);

            //create and set new img element and add to box onclick
            produceBtn.onclick = function convert() {

                let x = document.createElement("img");
                x.setAttribute("src", image);
                x.setAttribute("alt", name);
                
                if (box.length < 8) {
                    box.push(x);
                    cart.push({price, name});
                }
                //display box in resultBox div
                for (let j = 0; j < box.length; j++) {
                    document.getElementById('resultBox').appendChild(box[j]);
                
                } 
            }   
            selectlist.appendChild(produceBtn);
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





