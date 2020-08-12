let arg = process.argv[2]

var space;
var stair;
var esc;

function escalier(x){

for (var i = 1; i <= x; i++){
	
	space = x - i; 
	stair = i;
	esc = " ".repeat(space) + "#".repeat(stair);

	console.log(esc);
	}
}

escalier(arg);
