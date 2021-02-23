import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})
export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[];
  allTutorials?: Tutorial[];
  startDate?: NgbDateStruct;
  endDate?: NgbDateStruct;
  initialDropdown = 'Select...';
  providers: string[] = [this.initialDropdown];
  users: string[] = [this.initialDropdown];
  selectedProvider: string = this.initialDropdown;
  selectedUser: string = this.initialDropdown;

  page = 1;
  pageSize = 4;
  collectionSize = 1;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshTransactions() {
    this.tutorials = this.allTutorials
      ?.map((transaction, i) => ({
        id: i + 1,
        ...transaction,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe(
      (data) => {
        this.allTutorials = data;
        this.collectionSize = data.length;
        this.refreshTransactions();
        data.forEach((transaction, i) => {
          this.providers.push(transaction.provider!);
          this.users.push(transaction.name!);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clickProvider(provider: string): void {
    this.selectedProvider = provider;
    this.filter();
  }

  clickUser(user: string): void {
    this.selectedUser = user;
    this.filter();
  }

  filter(): void {
    const data = {
      provider:
        this.selectedProvider === this.initialDropdown
          ? ''
          : this.selectedProvider,
      name: this.selectedUser === this.initialDropdown ? '' : this.selectedUser,
      startDate: this.startDate
        ? new Date(
            this.startDate.year,
            this.startDate.month - 1,
            this.startDate.day + 1
          )
        : new Date(2000, 0, 1),
      endDate: this.endDate
        ? new Date(
            this.endDate.year,
            this.endDate.month - 1,
            this.endDate.day + 1
          )
        : new Date(2050, 0, 1),
    };
    this.tutorialService.filter(data).subscribe(
      (response) => {
        this.tutorials = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
