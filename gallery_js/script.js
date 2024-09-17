let sider = document.querySelector('#sider_id');
let hamburger = document.querySelector('#id_sider_btn');
let bool = true;
hamburger.addEventListener('click', (event)=>{
    bool = !bool;
    switch(bool){
        case false:
            sider.style.left = '0%';
            break;
        case true:
            sider.style.left = '-100%';
            break;
    }
    console.log(bool);
})

let selectCountries = document.querySelector("#select_countries_id");
let mainPicture = document.querySelector("#main_picture_id");
let description = document.querySelector("#pic_description_id");
mainPicture.style.backgroundImage = `url('countrys_picturs/default.jpeg')`;
let israelGallery = document.querySelector("#israel_gallery");
let austriaGallery = document.querySelector("#austria_gallery");
let czechGallery = document.querySelector("#czech_gallery");
let italyGallery = document.querySelector("#italy_gallery");
let japanGallery = document.querySelector("#japan_gallery");
let thailandGallery = document.querySelector("#thailand_gallery");

israelGallery.style.display = "none";
austriaGallery.style.display = "none";
czechGallery.style.display = "none";
italyGallery.style.display = "none";
japanGallery.style.display = "none";
thailandGallery.style.display = "none";

const selectCountriesFunc = () => {
  switch (selectCountries.value) {
    case "thailand":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "none";
      italyGallery.style.display = "none";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "flex";
      break;
    case "japan":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "none";
      italyGallery.style.display = "none";
      japanGallery.style.display = "flex";
      thailandGallery.style.display = "none";
      break;
    case "italy":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "none";
      italyGallery.style.display = "flex";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "none";
      break;
    case "czech":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "flex";
      italyGallery.style.display = "none";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "none";
      break;
    case "austria":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "flex";
      czechGallery.style.display = "none";
      italyGallery.style.display = "none";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "none";
      break;
    case "israel":
      israelGallery.style.display = "flex";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "none";
      italyGallery.style.display = "none";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "none";
      break;
    case "defaule":
      israelGallery.style.display = "none";
      austriaGallery.style.display = "none";
      czechGallery.style.display = "none";
      italyGallery.style.display = "none";
      japanGallery.style.display = "none";
      thailandGallery.style.display = "none";
      break;
  }
};

let picJerusalem = [
  "countrys_picturs/israel_jerusalem/jerusalem1.jpg",
  "countrys_picturs/israel_jerusalem/jerusalem2.jpg",
  "countrys_picturs/israel_jerusalem/jerusalem3.jpg",
  "countrys_picturs/israel_jerusalem/jerusalem4.jpg",
  "countrys_picturs/israel_jerusalem/jerusalem5.jpg",
  "countrys_picturs/israel_jerusalem/jerusalem6.jpg"
];

let picJerusalemDscription = [
  "Montefiore Windmill, a notable historical landmark in Jerusalem.",
  "This blend of old and new is characteristic of Jerusalem, where historical view",
  "migdal david - located near the Jaffa Gate entrance to the Old City - Mamluk and Ottoman pray tower",
  "“The Monster” or “Mifletzet.” created by the french-american artist niki de Saint phalle.",
  ' israeli parlamet building the "knesset" ',
  "damascus gate, one of the main entrances to the old city of jerusalem"
];

let picAaustria = [
  "countrys_picturs/austria_vienna/vienna1.jpg",
  "countrys_picturs/austria_vienna/vienna2.jpg",
  "countrys_picturs/austria_vienna/vienna3.jpg",
  "countrys_picturs/austria_vienna/vienna4.jpg",
  "countrys_picturs/austria_vienna/vienna5.jpg",
  "countrys_picturs/austria_vienna/vienna6.jpg"
];

let picAaustriaDscription = [
  "Part of Hofburg Palace - Saint Michael Wing seen from Saint Michael Square in Vienna city, capital of Austria.",
  "Neue Burg or New castle as part of the famous Hofburg Palace in Heldenplatz, Vienna, Austria.",
  "Vienna, Austria, April, 30, 2018. Royal Palace Schoenbrunn in Vienna, Austria. This palace was the summer residence of the Austrian Emperor.",
  "St. Stephen's Cathedral is the mother church of the Roman Catholic Archdiocese of Vienna and the seat of the Archbishop of Vienna, Austria.",
  "Photo front view on upper belvedere palace, vienna, Austria.",
  "Vienna, Austria, Pond Castel."
];

let picCzech = [
  "countrys_picturs/czech_republic_prague/prague1.jpg",
  "countrys_picturs/czech_republic_prague/prague2.jpg",
  "countrys_picturs/czech_republic_prague/prague3.jpg",
  "countrys_picturs/czech_republic_prague/prague4.jpg",
  "countrys_picturs/czech_republic_prague/prague5.jpg",
  "countrys_picturs/czech_republic_prague/prague6.jpg"
];

let picCzechDscription = [
  "Prague old town and Vltava river.",
  "Old Town City Square with Gothic Tyn Cathedral.",
  "Charles bridge, view from river Vltava.",
  "Prague astronomical clock.",
  "Aeral view of the Tyn Church and Old Town Square in Prague.",
  "Palace, hosts the 19th century Czech."
];

let picItaly = [
  "countrys_picturs/italy_rome/rome1.jpg",
  "countrys_picturs/italy_rome/rome2.jpg",
  "countrys_picturs/italy_rome/rome3.jpg",
  "countrys_picturs/italy_rome/rome4.jpg",
  "countrys_picturs/italy_rome/rome5.jpg",
  "countrys_picturs/italy_rome/rome6.jpg"
];

let picItalyDscription = [
  "Old town water tower in Prague.",
  "Italy, Rome, Colosseum at night image.",
  "The Famous Tre vi Fountain, rome, Italy.",
  "Arch of Constantine Rome Italy IT EU Europe.",
  "The Vatican Rome.",
  "Eternal City, Rome."
];

let picJapan = [
  "countrys_picturs/japan_tokyo/tokyo1.jpg",
  "countrys_picturs/japan_tokyo/tokyo2.jpg",
  "countrys_picturs/japan_tokyo/tokyo3.jpg",
  "countrys_picturs/japan_tokyo/tokyo4.jpg",
  "countrys_picturs/japan_tokyo/tokyo5.jpg",
  "countrys_picturs/japan_tokyo/tokyo6.jpg"
];

let picJapanDscription = [
  "Tokyo, cosa visitare.",
  "beautiful billboards of Tokyo Japan.",
  "Kabuki theater, Theatre, Japan image.",
  "Todai-ji Temple in Nara Prefecture, Japan.",
  "Tokyo streets, Japan.",
  "Asakusa Dera Senso-ji Buddhist temple in Tokyo."
];

let picThailand = [
  "countrys_picturs/thailand_bangkok/bangkok1.jpg",
  "countrys_picturs/thailand_bangkok/bangkok2.jpg",
  "countrys_picturs/thailand_bangkok/bangkok3.jpg",
  "countrys_picturs/thailand_bangkok/bangkok4.jpg",
  "countrys_picturs/thailand_bangkok/bangkok5.jpg",
  "countrys_picturs/thailand_bangkok/bangkok6.jpg"
];

let picThailandDscription = [
  "Chakri Maha Prasat.",
  "Khon is traditional dance drama art of Thai classical masked.",
  "Wat phra kaew in Thailand.",
  "Grand Palace,tample Backpacker Khao San Road.",
  "Bangkok market.",
  "Wat Benchamabophit is a Buddhist temple in Bangkok Thailand."
];

let counter = 0;

const nextJpics = () =>{ 
    counter++
    if(selectCountries.value === "israel"){
        if(counter >= picJerusalem.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picJerusalem[counter]}')`;
        description.textContent = picJerusalemDscription[counter];
    } else 
    if(selectCountries.value === "austria"){
        if(counter >= picAaustria.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picAaustria[counter]}')`;
        description.textContent = picAaustriaDscription[counter];
    } else 
    if(selectCountries.value === "czech"){
        if(counter >= picCzech.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picCzech[counter]}')`;
        description.textContent = picCzechDscription[counter];
    } else 
    if(selectCountries.value === "italy"){
        if(counter >= picItaly.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picItaly[counter]}')`;
        description.textContent = picItalyDscription[counter];
    } else 
    if(selectCountries.value === "japan"){
        if(counter >= picJapan.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picJapan[counter]}')`;
        description.textContent = picJapanDscription[counter];
    } else 
    if(selectCountries.value === "thailand"){
        if(counter >= picThailand.length) counter = 0;
        mainPicture.style.backgroundImage = `url('${picThailand[counter]}')`;
        description.textContent = picThailandDscription[counter];
    } 

    console.log(counter);
}

const backJpics = () =>{
    counter--
    if(selectCountries.value === "israel"){
        if(counter < 0) counter = picJerusalem.length-1;
        mainPicture.style.backgroundImage = `url('${picJerusalem[counter]}')`;
        description.textContent = picJerusalemDscription[counter];
    } else 
    if(selectCountries.value === "austria"){
        if(counter < 0) counter = picAaustria.length-1;
        mainPicture.style.backgroundImage = `url('${picAaustria[counter]}')`;
        description.textContent = picAaustriaDscription[counter];
    } else 
    if(selectCountries.value === "czech"){
        if(counter < 0) counter = picCzech.length-1;
        mainPicture.style.backgroundImage = `url('${picCzech[counter]}')`;
        description.textContent = picCzechDscription[counter];
    } else 
    if(selectCountries.value === "italy"){
        if(counter < 0) counter = picItaly.length-1;
        mainPicture.style.backgroundImage = `url('${picItaly[counter]}')`;
        description.textContent = picItalyDscription[counter];
    } else 
    if(selectCountries.value === "japan"){
        if(counter < 0) counter = picJapan.length-1;
        mainPicture.style.backgroundImage = `url('${picJapan[counter]}')`;
        description.textContent = picJapanDscription[counter];
    } else 
    if(selectCountries.value === "thailand"){
        if(counter < 0) counter = picThailand.length-1;
        mainPicture.style.backgroundImage = `url('${picThailand[counter]}')`;
        description.textContent = picThailandDscription[counter];
    } 
    console.log(counter);
}

const chosePic = (arrayIndexPic) => {
    if(selectCountries.value === "israel"){
        mainPicture.style.backgroundImage = `url('${picJerusalem[arrayIndexPic]}')`;
        description.textContent = picJerusalemDscription[arrayIndexPic];
    } else 
    if(selectCountries.value === "austria"){
        mainPicture.style.backgroundImage = `url('${picAaustria[arrayIndexPic]}')`;
        description.textContent = picAaustriaDscription[arrayIndexPic];
    } else 
    if(selectCountries.value === "czech"){
        mainPicture.style.backgroundImage = `url('${picCzech[arrayIndexPic]}')`;
        description.textContent = picCzechDscription[arrayIndexPic];
    } else 
    if(selectCountries.value === "italy"){
        mainPicture.style.backgroundImage = `url('${picItaly[arrayIndexPic]}')`;
        description.textContent = picItalyDscription[arrayIndexPic];
    } else 
    if(selectCountries.value === "japan"){
        mainPicture.style.backgroundImage = `url('${picJapan[arrayIndexPic]}')`;
        description.textContent = picJapanDscription[arrayIndexPic];
    } else 
    if(selectCountries.value === "thailand"){
        mainPicture.style.backgroundImage = `url('${picThailand[arrayIndexPic]}')`;
        description.textContent = picThailandDscription[arrayIndexPic];
    } 
}
