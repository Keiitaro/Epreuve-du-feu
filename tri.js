//Affichage de tous les arguments rentré dans Node 
var arg = [];

for(let i = 2; process.argv[i]; i++ ){

	arg[i-2] = Number(process.argv[i]); // Prend en compte que les Number

}

console.log(arg); // 4 5 2 3 1

for(i = arg.length-1; i > 0; i--){
	for(j = 0; j < arg.length-1; j++){
		if(arg[j]>arg[j-1]){

			let a = arg[j-1];
			arg[j-1] = arg[j];
			arg[j] = a;
		}
	}
}

console.log(arg); // 5 4 3 2 1