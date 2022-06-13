import { Component } from '@angular/core';

@Component({
  selector: 'pluma-online-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  public faculty = [
    {
      name: 'Giri Narasimhan',
      position: 'Faculty in Computer Science',
      expertise: 'Microbiomes and General Bioinformatics',
      portrait: 'https://biorg.cs.fiu.edu/images/photos/me.jpg'
    },
    {
      name: 'Trevor Cickovski',
      position: 'Faculty in Computer Science',
      expertise: 'Software Engineering',
      portrait: 'https://biorg.cs.fiu.edu/images/photos/trevor.jpg'
    },
    {
      name: 'Kalai Mathee',
      position: 'Professor, College of Medicine; ASM Fellow',
      expertise: 'Transcription & Antibiotic Resistance',
      portrait: 'https://biorg.cs.fiu.edu/images/photos/kalai2.jpg'
    },
    {
      name: 'Ananda Mondal',
      position: 'Faculty in Computer Science',
      expertise: 'Epigenetics & Cancer Genomics',
      portrait:
        'https://i0.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/08/ananda-mondal.jpg?zoom=2&fit=128%2C128&ssl=1'
    }
  ];

  public currentStudents = [
    {
      name: 'A Student',
      year: 'Graduate Student',
      expertise: 'Bioinformatics',
      portrait: '/assets/images/blank-profile-picture.webp'
    }
  ];

  constructor() {}
}
