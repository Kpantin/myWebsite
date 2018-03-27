import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user', //This is the name of the selector for this component
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string; // creates a variable and type
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');

   }

  ngOnInit() {
    console.log('ngOnInIt ran..');
    this.name = 'Bob Ross'; // this calls the variable 'name' and gives it an attribute
    this.age = 30;
    this.email = 'bobross@gmail.com'
    this.address = {
      street: '123 Main St.',
      city: 'Toronto',
      province: 'Ontario'
    };
    this.hobbies = ['Music', 'Sports', 'Coding'];


    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);// delete this after
      //this.posts = posts; <---- uncomment to turn posts back on
    });
  }

  onClick(){
    this.name='Kirk Pantin';
    this.age=33;
    this.email='kirkpantin@gmail.com';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }


  deleteHobby(hobby){
    for(let i = 0;i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }


  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: '123 Main St.',
  city: 'Toronto',
  province: 'Ontario'
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}



