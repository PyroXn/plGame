handler contient la logique applicative � appliquer lors de requ�tes sur les routes support�es.  
Je d�coupe habituellement les impl�mentations en diff�rents fichiers,  
par exemple un fichier distinct pour les handlers des routes REST de chaque mod�le.  
Ces impl�mentations sont ind�pendantes des routes, la d�finition de celles-ci �tant l'affaire du router.