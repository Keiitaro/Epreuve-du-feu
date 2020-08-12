var fs = require('fs');
var mot = process.argv[2];
var txt = process.argv[3];
var elem = fs.readFileSync(txt, 'utf8').split('\n');

var test = mot.split('').sort().join('');
var elemTest = [];
var result = [];

for(i = 0; elem[i].length > 2; i++){

	elemTest[i] = elem[i].split('').sort().join('');

	        if(elemTest == elemTest[i]){
	
		        result.push(elem[i]); 

	        };
};

console.log(result);