function Etudiant(a,b,c){
    this.nom=a;
    this.prenom=b;
    this.notes=[];
    this.dirbnj=function(){
    console.log("hi i m",a,"this is my note",c);
}
this.ajouterNote=function(n){
    this.notes.push(n);

}
this.moy=function(){
    var s=0;
    for (var i = 0; i <this.notes.lenght; i++){
        s+=this.notes[i];
    return this.notes.lenght===0?0:s/this.notes.lenght
   }
}
var e1=new Etudiant("park","jimin");
var e2=new Etudiant("kim","soekjin");
e1.dirbnj();
e2.dirbnj();
e1.ajouterNote(14);
e2.ajouterNote(12);
console.log(e1,note);
e1.ajouterNote(14);
e2.ajouterNote(12);
console.log(e1,note);
e1.moy
e2.moy