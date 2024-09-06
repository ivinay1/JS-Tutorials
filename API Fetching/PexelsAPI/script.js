let url = "https://picsum.photos/200/300"

var img = document.querySelector(".image");
var btn = document.querySelector("button");
var imageObjectURL;

const getImage = async()=>{

    let response = await fetch(url);

    let imageBlob = await response.blob();  // here we have not used .json as data is not coming in the format of json it is in the form of binary object 
    // point to be learn yaha galti hui thi

    // Create an object URL from the Blob
    imageObjectURL = URL.createObjectURL(imageBlob);
    // point to be learn yaha galti hui thi

    console.log(imageObjectURL);

    img.style.backgroundImage = `url('${imageObjectURL}')`;
}

btn.addEventListener("click",function(){

    getImage();


})

