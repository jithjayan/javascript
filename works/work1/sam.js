function div(){
    let a=parseInt(document.getElementById("num1").value)
    let dp=document.getElementById("dp")
    let b=a%10
    if (b%3==0){
   
        dp.innerHTML="divisible" 
    }
    else{
       
        dp.innerHTML="not divisible"
    }
}


function bonus(){
    let a=parseInt(document.getElementById("sal").value)
    let b=parseInt(document.getElementById("yrs").value)
    let dp=document.getElementById("dp")
    if (b>5){
        bns=a*5/100
        tslr=a+bns
        dp.innerHTML=tslr
    }
    else{
        dp.innerHTML="not eligible"
    }

}

function units(){
    let a=parseInt(document.getElementById("unit").value)
    let dp=document.getElementById("dp")
    if (a<100){
        dp.innerHTML="less than 100 units"
    }
    else if(a>100 && a<200){
        b=a%100
        bl=b*5
        dp.innerHTML=bl
    }
    else{
        b=a-200
        c=b*10
        bl=c+500
        dp.innerHTML=bl
    }

}