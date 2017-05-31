// import User from 'user'

class Es6Test{
	constructor(){
		this.name="ranjit"
	}
    dispName(){
        console.log(`my name is ${this.name}`);
    }
    dispCity(){
        console.log('my city is patna');
    }    
}

var et = new Es6Test();
et.dispName();
et.dispCity();

class User extends Es6Test {
	dispContry(){
		console.log(`contry is india`);
	}
}
var u = new User();
u.dispCity();
u.dispContry();