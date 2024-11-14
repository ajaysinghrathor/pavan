import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  position: number;
  tab: string;
  instruction: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, tab: 'Profile', instruction: 'To be filled by assessor. Please note that this page is mandatory for the assessment.'},
  {position: 2, tab: 'Multi Cloud Assessment', instruction: 'M4C Tab - Consists of the assessment of the "Attributes" for the M4C. Please fill column "Current State"  & "Additional Comments" to justify the ratings you will be providing in Column "Current State"'},
  {position: 3, tab: 'General', instruction: 'Note: It is mandatory to provide Additional Comments for all ratings except NA'},
];

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [
    MatTableModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css',
})
export class InstructionsComponent {
  displayedColumns: string[] = ['tab', 'instruction'];
  dataSource = ELEMENT_DATA;

}
