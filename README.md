# Le juste prix

Le juste prix ? C'est un divertissement fantastique !

_Lance son micro_ :microphone: :boom: :man_facepalming:

On va créer un programme pour demander à l'utilisateur d'identifier un nombre aléatoire, tant qu'il n'a pas trouvé on lui redemandera. Pour l'aider on lui dira si c'est plus ou si c'est moins.

## On doit déjà générer le nombre

- Pour cela j'utiliserai `Math.random()`  
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random  
- On pourrait s'en servir pour générer un nombre décimal entre 0 et 1
- Et si on le multipliait ensuite pour obtenir un nombre plus grand, disons par 500 ?
- Et enfin on pourrait faire en sorte de l'arrondir pour garder un nombre entier, pour cela il y a `Math.round()`  
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round

## On doit maintenant le faire trouver à l'utilisateur

- On demande à l'utilisateur de saisir un nombre
- On pense à transformer sa saisie en nombre
- Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
- Si la saisie est trop petite on pourrait l'indiquer
- Sinon on pourrait dire que c'est trop grand

## C'est gagné

Dès que l'utilisateur trouve, on affiche un message de victoire :tada: