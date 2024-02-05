async function phone (){
    const res = await axios.get("https://dummyjson.com/product");
    const pr=res.data;
    const post=pr.products;
    
    const object=post.map( function(ps){

    return `

    <tr>
    <td>${ps.id}</td>
    <td>${ps.title}</td>
    <td>${ps.price}</td>
    <td> <a href="details.html?id=${ps.id}"> details of mobile</a><td>

    

    </tr>`


    }).join("");
    document.querySelector(".Products").innerHTML=object;
    
}

phone();


//<td><img src=" ${ps.thumbnail}" class="image"/></td>