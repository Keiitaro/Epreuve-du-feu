let arg = process.argv[2];

var fact = 1;

    for (var i=arg ; i>0 ; i--){

       fact *= i;

    }

console.log(fact.toLocaleString());

// fonctionne aussi 

// console.log(fact);
