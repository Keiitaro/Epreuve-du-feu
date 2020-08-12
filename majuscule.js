var arg = process.argv[2]
var min = arg.toLowerCase();
var maj = arg.toUpperCase();

var text ='';

for (var i = 0; i <= (arg.length - 1); i++){

	if (i % 2 === 0) {
		
		text += min.slice(i,(i + 1));

	}
		else {

		text += maj.slice(i,(i + 1));

		}

	
};

console.log(text);
