function somme(t){
    s=0
    console.log(t);
   for(let i=0;i<t.length;i++){
        s=s+t[i];}
    return s;
}
var t =new Array();

do{
    var v=prompt("donner un nombre ; ");
    v=parseInt(v);
    console.log(v);
    if(!(isNaN(v)))  t.push(v);
       
}while (!(isNaN(v)));
s=somme(t);
console.log("la somme est",s);