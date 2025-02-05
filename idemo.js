let data=[{id:'1',name:'ak',age:'22'},{id:'2',name:'cathey',age:'24'},{id:'3',name:'evy',age:'23'}]
function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach(element=>{
        let tr=document.createElement("tr")

        let id_td=document.createElement("td")
        id_td.innerHTML=element.id
        tr.appendChild(id_td)

        let name_td=document.createElement("td")
        name_td.innerHTML=element.name
        tr.appendChild(name_td)

        let age_td=document.createElement("td")
        age_td.innerHTML=element.age
        tr.appendChild(age_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.innerHTML='Edit'
        edit_btn.onclick=function(){

            edit_form(element.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        tbody.appendChild(tr)



        let del_td=document.createElement("td")
        let del_btn=document.createElement("button")
        del_btn.innerHTML='delete'
        del_btn.onclick=function(){

            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        tr.appendChild(del_td)

        tbody.appendChild(tr)

})
}

function delete_data(id){
    data=data.filter((user)=>{
        if(user.id!=id){
            return user
        }
    })
    Display()
}




document.getElementById("add_form").addEventListener('submit',function(event){
event.preventDefault()
let id=document.getElementById("id").value
let name=document.getElementById("name").value
let age=document.getElementById("age").value
data.push({id:id,name:name,age:age})
Display()

})

let edit_var
function edit_form(id){
    document.getElementById("add_form").style.display='none'
    document.getElementById("edit_form").style.display='block'
    console.log(id);
    let edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById("e_id").value=edit_data.id
    document.getElementById("e_name").value=edit_data.name
    document.getElementById("e_age").value=edit_data.age
    edit_var=id

}

document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id=document.getElementById("e_id").value
    let name=document.getElementById("e_name").value
    let age=document.getElementById("e_age").value
    data=data.map((user)=>{
        if(user.id==edit_var){
            return{...user,id:id,name:name,age:age}
        }
        return user
    })
    document.getElementById("add_form").style.display='block'
    document.getElementById("edit_form").style.display='none'
    Display()
})
Display()