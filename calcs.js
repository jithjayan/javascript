function add(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
    let h3=document.getElementById("h3")
    h3.innerHTML=a+b
}

function sub(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
    let h3=document.getElementById("h3")
    h3.innerHTML=a-b
}
function mul(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
    let h3=document.getElementById("h3")
    h3.innerHTML=a*b
}
function div(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
    let h3=document.getElementById("h3")
    h3.innerHTML=a/b
}
function mod(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
    let h3=document.getElementById("h3")
    h3.innerHTML=a%b
}