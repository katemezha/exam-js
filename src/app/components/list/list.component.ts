import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persons, TypeDirection } from 'src/app/components/add/models/persons.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
searchStr: '';
searchStrGroup: string = '';
searchStrDirection: number = 3;
typePlaceholder: number = 3;
editPersonsForm!: FormGroup;
myDirectionType = TypeDirection; 
id: number = -1;
check: boolean = false;
persons: Persons[] = [];
name: string = '';
surname: string = '';
otch: string = '';
phone: number = 0;
email: string = '';
bth: number = 0;
type: number = 0;
group: any;

constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.editPersonsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null ),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      direction: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required])
    })
    this.getData();
  }
  getData(){
     this.http.get('http://localhost:3000/persons').toPromise().then(((data: any )=>{
      this.persons = data;
      console.log("persons " + this.persons)
      console.log("data "+ data)
    }))
  }
  async OnDelete(id: any){
    await this.http.delete(`http://localhost:3000/persons/`+id).subscribe(data => {
      console.log(data);
    });
    this.getData();
    console.log(id);
  }
   OnEdit(id: any){
    console.log('id for edit '+id);
    (!this.check)?(this.check = true):(this.check = false);
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.name)
        this.name = index.name
      }
    });
    });  
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('Фамил '+index.surname)
        this.surname = index.surname
      }
    });
    }); 
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.patronymic)
        this.otch = index.patronymic
      }
    });
    }); 
    this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.phone)
        this.phone = index.phone
      }
    });
    }); 
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.email)
        this.email = index.email
      }
    });
    }); 
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.birthday)
        this.bth = index.birthday
      }
    });
    }); 
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.direction)
        this.type = index.direction
      }
    });
    }); 
     this.persons.filter((index) =>{
       Object.entries(index).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      if( (`${key}` === "id") &&(`${value}` === id.toString()) ){
        console.log('совп '+ `${key}: ${value}`);
        console.log('имя '+index.group)
        this.group = index.group
      }
    });
    }); 
   
     this.id = id;
    console.log(this.name)
    
  }
  editCheck(){
    (!this.check)?(this.check = true):(this.check = false);
  }
  async saveChanges(){
    (!this.check)?(this.check = true):(this.check = false);
     await this.http.put('http://localhost:3000/persons/' + this.id, this.editPersonsForm.value).subscribe(data => {
      console.log(data);
    });
    this.getData();

  }
  async OnDeleteInEdit(){
    
    await this.http.delete(`http://localhost:3000/persons/`+this.id).subscribe(data => {
      console.log(data);
    });
    this.getData();
     console.log(this.id);
     (!this.check)?(this.check = true):(this.check = false);
  }
}

