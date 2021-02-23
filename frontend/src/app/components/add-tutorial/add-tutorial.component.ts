import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    name: '',
    provider: '',
    photo: '',
    idIndex: '',
    sex: '',
    age: 0,
    phone: '',
    order: 0,
    processByName: '',
    processByEmail: '',
    date: '',
    subtotal: 0,
    covered: 0,
    published: false,
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      provider: this.tutorial.provider,
      photo: this.tutorial.photo,
      idIndex: this.tutorial.idIndex,
      sex: this.tutorial.sex,
      age: this.tutorial.age,
      phone: this.tutorial.phone,
      order: this.tutorial.order,
      processByName: this.tutorial.processByName,
      processByEmail: this.tutorial.processByEmail,
      date: this.tutorial.date,
      subtotal: this.tutorial.subtotal,
      covered: this.tutorial.covered,
      published: true,
    };
    this.tutorialService.create(data).subscribe(
      (response) => {
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      provider: '',
      photo: '',
      idIndex: '',
      sex: '',
      age: 0,
      phone: '',
      order: 0,
      processByName: '',
      processByEmail: '',
      date: '',
      subtotal: 0,
      covered: 0,
      published: false,
    };
  }
}
