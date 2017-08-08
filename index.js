function receivesAFunction(callback) {
	callback()
}

function returnsANamedFunction(){
	return function dude(){}
}

function returnsAnAnonymousFunction(){
	return ()=>{}
}