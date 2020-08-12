var fs = require('fs');
var txt = process.argv[2];
var txtNumber = fs.readFileSync(txt, 'utf8').split('+').join('').split('-').join('').split('|').join('').split('\n').join('').split(',,').join().split('');
var principal = [];
var miss = [];
var tabResult;
var tabFull;



// Séparation en plusieurs array

var temp = [];
for(i = 0; i < txtNumber.length; i++){
	
	if(i % 9 == 0 && i !=0 ){
		principal.push(temp);
		temp = [];

	};
	if(txtNumber[i] == '_'){
		temp.push('0');

	};
	if(Number(txtNumber[i]) < 10){
		temp.push(txtNumber[i]);

	};
	if(i == 80){
		principal.push(temp);
	};
};



//Trouve les chiffres manquant//

 var miss = [];

function caseVide(){

    for(y = 0; y < 9; y++){
		for(x = 0; x < 9; x++){
			if(principal[y][x] == "0"){
				miss.push(y + "," + x);
			};
		};
    };
    ifFull();
}

//Si la table est rempli

function ifFull(){

    if(miss.length == 0){
        tabFull = true;
    };
    if(miss.length > 0)
    {
        tabFull = false;
    };

}
//Remplir les numéros manquant 

function foundNmb(){

	for(i = 0; i < miss.length; i++){
		var solution = [];
		var tempSolu = [];
		for(y = 0; y < 9; y++){
			tempSolu.push(principal[y][miss[i].slice(2)])
		};
		for(j = 0; j <	10; j++){	
			if(principal[miss[i].slice(0,1)].indexOf(j.toString()) == -1 && tempSolu.indexOf(j.toString())== -1){
				solution.push(j)
			};
		};
		if(principal.length == 1){
			principal[miss[i].slice(0,1)][miss[i].slice(2)] = solution[0].toString();
		};
    };
};

//Création d'un fichier txt avec la solution

function createTab(){
	
	for(y = 0; y < 9; y++){
		
		principal[y][2] += '|';
        principal[y][5] += '|';
		principal[y][8] += '\n';
		
		if(y == 2 || y == 5){
			principal[y][8] += '---+---+---\n';
		
		};
	};

	tabResult = principal.join('').split(',').join('');
    fs.writeFileSync('sudoku_result.txt',tabResult);
    return tabResult
};

// Systeme de fin 

foundNmb();
while(tabFull != true){
	caseVide();
	foundNmb();
};
createTab();
console.log(tabResult);
