import { Component } from '@angular/core';

@Component({
  selector: 'pluma-online-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  public publications: {
    year: number;
    publications: {
      authors: string;
      publishedYear: number;
      title: string;
      journal: string;
      journalVolume?: number;
      journalIssue?: number;
      pageRange?: string;
      url?: string;
      doi?: string;
      isNew: boolean;
    }[];
  }[] = [
    {
      year: 2022,
      publications: [
        {
          authors: 'Valdes, Stebliankin, Ruiz-Perez, Park, Lee, Narasimhan',
          publishedYear: 2022,
          title:
            'Microbiome Maps: Hilbert Curve Visualizations of Metagenomic Profiles',
          journal: 'BioVis COSI at ISMB 2022',
          isNew: true
        },
        {
          authors: 'Cai, Narasimhan, Skums',
          publishedYear: 2021,
          title:
            'Guest Editors’ Introduction to the Special Section on Bioinformatics Research and Applications',
          journal: 'IEEE Trans Comput Biol and Bioinf',
          journalVolume: 19,
          journalIssue: 1,
          pageRange: '207-208',
          doi: '10.1109/TCBB.2021.3121736',
          isNew: true
        }
      ]
    }
  ];

  constructor() {}
}
