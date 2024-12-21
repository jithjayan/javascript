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
                          <button type="button" class="btn btn-primary see_more" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#myModal">
                           view details
                          </button>
                        </div>
                    </div>
        `
        row.appendChild(col)
    });

    document.querySelectorAll(".see_more").forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            // console.log(e.target);
            const proid=e.target.getAttribute("data-id")
            // console.log(proid);
            const Product= data.products.find((pro)=>pro.id==proid)
            console.log(Product);
            document.querySelector(".modal-title").innerHTML=Product.title
            document.getElementById("modal-img").src=Product.thumbnail
            document.querySelector(".model_dtls").innerHTML=Product.description
        })
    })



})

