let secret_nomber= Math.round(Math.random() * 501); //math random pour un chiffre aléatoire >1, math round pour arrondir et x500 pour que se soit un entier > à 1 jusqu'à 500
let otherNumber = null; // initialisation de la variable


while(secret_nomber != otherNumber ) {
      otherNumber = prompt(`Devine le nombre secret? (de 1 à 500)`);       
    if (otherNumber < secret_nomber){
      alert(`Dommage, essai encore, tu es trop bas.`);
  } else if (otherNumber > secret_nomber){
      alert(`Dommage, essai encore, tu es trop haut.`);
  }
}
alert(`C'est gagné !!!`)