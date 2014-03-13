db contient la couche d'acces aux données,  
de même que la définition des modèles utilisés par l'application.  
Certains préféreront peut-être appeler ce répertoire models.  
Personnellement j'utilise souvent MongoDB et la librairie node mongoose,  
donc je structure db sous la forme d'un répertoire avec index.js pour  
gérer la connexion à la base de données, et un fichier distinct par modèle,  
chacun des modèles étant exposé via index.js.
