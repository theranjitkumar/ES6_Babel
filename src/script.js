// import {user} from 'user';

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

// var et = new Es6Test();
// et.dispName();
// et.dispCity();

class User extends Es6Test {
	getUser(){
		fetch('https://jsonplaceholder.typicode.com/todos')
		  .then((res)=>{
		  res.json().then((result)=>{
		    console.log(result)
		  })
		}).catch((err)=>{
		  console.log(err);
		}); 
	}

}
var u = new User();
u.dispName();
u.getUser();