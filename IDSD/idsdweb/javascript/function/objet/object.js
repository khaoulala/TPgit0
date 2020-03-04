var etudiant={
    nom:"park",
    prenon:"jimin",
    notes:[18,17,20]
};
etudiant.age=25;
console.log(etudiant.nom);
console.log(etudiant["prenon"]);
var p="prenom";
console.log(etudiant[p]);
for(var key in etudiant){
    console.log(etudiant[key]);
}
var tab1=[42,4,8,5,9];
var tab2=[7,'purple',14,'bleu'];
alert(tab1[0]);
var tab3=new Array('un','deux','trois');
tab3.push('cinq',"six");
tab3.shift();
tab3.pop();
tab3.unshift("un");
var s="un deux";
tab=s.split("");
s=tab.join(" ");

