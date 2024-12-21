fetch("https://dummyjson.com/posts").then(response=>response.json()).then(data=>{    
    data.posts.forEach(element=>{

        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add("col-lg-12")
        col.innerHTML=`
                    <div class="card" style="width:400px; margin-top:20px";>
                <div class="card-body">
                <h4 class="card-title"> ${element.title}</h4>
                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <i class="fa-regular fa-thumbs-up fa-bounce"></i>
                </div>
        `
        row.appendChild(col)

    })
})
