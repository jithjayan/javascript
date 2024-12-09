function odd(){
    console.clear()
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    for(a;a<=b;a++){
        if(a%2==1){
            console.log(a);
            
        }
    }
}

function even(){
    console.clear()
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    for(a;a<=b;a++){
        if(a%2==0){
            console.log(a);
            
        }
    }
    }

function mult(){
    let a=parseInt(document.getElementById("n1").value)
    for(b=1;b<=10;b++){
        console.log(b+"*"+a+"="+a*b);
        
    }
}

function srev(){
    let a=document.getElementById("str1").value
    let b=''
    c=a.length
    console.log(a);
    
    
}