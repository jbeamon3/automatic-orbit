let image = document.querySelector(".image");
let type = document.querySelector(".type");
let year = document.querySelector(".year");
let link = document.querySelector(".link");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

let coin1 = {
    image: "https://news.artnet.com/app/news-upload/2016/02/hacoin-1-y-2-256x256.jpg",
    type: "Penny",
    year: "1900",
    link: "https://news.artnet.com/market/heritage-auctions-sells-two-18th-century-pennies-870k-603899"
};

let coin2 = {
    image: "https://www.cardboardandcoins.com/cdn/shop/files/5c-1944-P-Silver-Jefferson-Nickel-Coin-Rare-War-Nickel-WWII-Low-Mintage-Philadelphia-Mint-100923_2_-REV_large.jpg?v=1697825341",
    type: "Nickle",
    year: "1944",
    link: "https://en.wikipedia.org/wiki/Jefferson_nickel"
};

let objects = [
    coin1,
    coin2
];
console.log(objects);

button.onclick = function() {
    let imageValue = image.value;
    let typeValue = type.value;
    let yearValue = year.value;
    let linkValue = link.value;


    let userCoin = {
        image: imageValue,
        type: typeValue,
        year: yearValue,
        link: linkValue

    };
    objects.push(userCoin);

    result.innerHTML = " ";

    objects.forEach(function(userCoins) {
        result.insertAdjacentHTML('beforeend', `<img src= "${userCoins.image}"></img> <li> Type: ${userCoins.type}</li> <li>Year: ${userCoins.year}</li> <li> Link: ${userCoins.link}</li>`);
    });
};