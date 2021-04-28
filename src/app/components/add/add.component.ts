import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/persons.service';
import { TypeDirection } from 'src/app/components/add/models/persons.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addPerson = new EventEmitter<any>();
  
  myDirectionType = TypeDirection;
  type:number = 0;
  personsForm!: FormGroup;
  constructor(private personsService: PersonsService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.personsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      direction: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required])
    })
  }
  onAddPerson(){
    this.http.post('http://localhost:3000/persons', this.personsForm.value).subscribe(data => {
      console.log(data);
    });
    this.personsForm.reset();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/persons']);
  }

}

