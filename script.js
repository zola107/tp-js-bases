const nom = "camille"
let age = 18
console.log(nom)
console.log(age)

if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}

let tabl7 =11
for (let i = 0; i < tabl7;i++) {
    console.log("7x" + (i) + ": " +  i*7);
}

const prenom = "camille"
function saluer (prenom) {
console.log("bonjour " + prenom + " comment va tu?")
}
saluer(prenom)


let phrase = "salut je m'appelle camille et je suis moche";
let compteur = 0
console.log ("la phrase est " + phrase)
let voyelles = " aeioyu"
for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])){
}
     compteur++;
}
console.log("cette phrase comporte " + compteur + " voyelles")




