fetch("https://dummyjson.com/products").then(response=>response.json()).then(data=>{
    data.products.forEach(element=>{

        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add("col-lg-4")
        col.innerHTML=`
                    <div class="card" style="width:400px">
                        <img class="card-img-top" src="${element.thumbnail}" alt="Card image" style="width:100%">
                        <div class="card-body">
                        <h4 class="card-title">${element.title}</h4>
                        <p class="card-text">${element.description}</p>
                        <a href="#" class="btn btn-primary">See Product</a>
                        </div>
                    </div>
        `
        row.appendChild(col)
    });
})