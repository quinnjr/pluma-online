// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

import { Person } from './person';
import { Roles } from './roles';

@Component({
  selector: 'pluma-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  public people: List<Person> = List();
  public faculty: List<Person> = List();
  public graduateStudents: List<Person> = List();
  public undergraduateStudents: List<Person> = List();
  public volunteers: List<Person> = List();
  public alumni: List<Person> = List();
  public collaborators: List<Person> = List();

  // TODO: make people list generation a call to a database
  constructor() {
    // this.peopleService.getPeople()
    //   .subscribe((people: Person[]) => {
    //     this.people = List(people);
    //     this.faculty = List(people.filter(person => person.role_id == Roles.Faculty));
    //     this.graduateStudents = List(people.filter(person => person.role_id == Roles.GraduateStudent));
    //     this.undergraduateStudents = List(people.filter(person => person.role_id == Roles.UndergraduateStudent));
    //     this.volunteers = List(people.filter(person => person.role_id == Roles.Volunteer));
    //     this.alumni = List(people.filter(person => person.role_id == Roles.Alumni));
    //     this.collaborators = List(people.filter(person => person.role_id == Roles.Collaborator));
    //   });
  }

  public ngOnInit() {

  }

  public getByRole(id: Roles): List<Person> {
    return this.people.filter(person => person.role_id == id);
  }
}
