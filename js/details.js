 async function getdetails(){

    const urlparms=new URLSearchParams(window.location.search);
    const id = urlparms.get('id');


    const resposnse = await axios.get(`https://dummyjson.com/products/${id}`);
const data=resposnse.data;
const ps=data.products;


    const{rating,thumbnail,brand,description,price}=resposnse.data;

    document.querySelector(".rating").textContent=rating;
    document.querySelector(".price").textContent=price;

    document.querySelector(".brand").textContent=brand;

    document.querySelector("img").src=thumbnail;

 

 document.querySelector(".details").innerHTML=res;

}

getdetails();