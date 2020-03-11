a=Math.floor(Math.random() * 100);
console.log(a);
let x=prompt("donner un bombre :");
x=parseInt(x);
let i=1;
while(i<=5){
    if(x>a){
        alert("le nombre est grand ");
        x=prompt("donner un bombre :");
        x=parseInt(x);
        i=i+1;
    }
    else{
        if(x<a){
            alert("le nombre est petit ");
            x=prompt("donner un bombre :");
            x=parseInt(x);
            i=i+1;
        }
        else{
            alert("Bravou");
            console.log("le nbr de tentation est :",i);
            break;
        }
    }
}
