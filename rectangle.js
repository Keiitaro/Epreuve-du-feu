var fs = require('fs'); //Recup du fichier system
var data1 = fs.readFileSync("./" + process.argv[2], "utf8").split("\n");
var data2 = fs.readFileSync("./" + process.argv[3], "utf8").split("\n");

// Lecture des 2 fichiers txt with \n pour le saut de ligne 
function filtre(arr1, arr2){

	//On parcours les 2 array
	for(var i = 0;i < arr2.length; i++){
		for(var j = 0; j < arr2[i].length; j++){
			//Determine les positions dans les tableaux 
			if(arr2[i][j] == arr1[0][0] && arr2[i][j+1] == arr1[0][1]  && arr2[i][j+2] == arr1[0][2]){
				if(arr2[i+1][j] == arr1[1][0] && arr2[i+1][j+1] == arr1[1][1] && arr2[i+1][j+2] == arr1[1][2]){
					if(arr2[i+2][j] == arr1[2][0] && arr2[i+2][j+1] == arr1[2][1] && arr2[i+2][j+2] == arr1[2][2]){
						//Indique les les lignes + colonnes
						console.log("Les lignes se trouvent en ligne " + (i+1) + "," + (i+2) + "," + (1+3) + " et colonne " + (j+1) + "," + (j+2) + "," + (j+3));
					}
				}
			}
		}
	}
}

filtre(data1, data2);