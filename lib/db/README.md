db contient la couche d'acces aux donn�es,  
de m�me que la d�finition des mod�les utilis�s par l'application.  
Certains pr�f�reront peut-�tre appeler ce r�pertoire models.  
Personnellement j'utilise souvent MongoDB et la librairie node mongoose,  
donc je structure db sous la forme d'un r�pertoire avec index.js pour  
g�rer la connexion � la base de donn�es, et un fichier distinct par mod�le,  
chacun des mod�les �tant expos� via index.js.