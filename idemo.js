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

})
}

document.getElementById("add_form").addEventListener('submit',function(event){
event.preventDefault()
let id=document.getElementById("id").value
let name=document.getElementById("name").value
let age=document.getElementById("age").value
data.push({id:id,name:name,age:age})
Display()

})

function edit_form(id){
    document.getElementById("add_form").style.display='none'
    document.getElementById("edit_form").style.display='block'
    console.log(id);
    let edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById("e_id").value=edit_data.id
    document.getElementById("e_name").value=edit_data.name
    document.getElementById("e_age").value=edit_data.age
    

}
Display()