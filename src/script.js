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

var et = new Es6Test();
et.dispName();
et.dispCity();

class User extends Es6Test {
	getUser(){
		fetch('https://raw.githubusercontent.com/theranjitkumar/jsonData/master/jsonData.json')
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