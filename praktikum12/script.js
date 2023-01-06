fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tabel = "";
    objectData.map((values)=>{
        tabel += `<tr>
            <td>${values.title}</td>
            <td>${values.price}</td>
            <td>${values.description}</td>
            <td>${values.category}</td>
            <td><img src="${values.image}"></td>
            <td>${values.rating.rate}</td>
        </tr>`
    });

    document.getElementById("tabel_body").innerHTML=tabel;
})