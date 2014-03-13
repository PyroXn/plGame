handler contient la logique applicative à appliquer lors de requêtes sur les routes supportées.  
Je découpe habituellement les implémentations en différents fichiers,  
par exemple un fichier distinct pour les handlers des routes REST de chaque modèle.  
Ces implémentations sont indépendantes des routes, la définition de celles-ci étant l'affaire du router.