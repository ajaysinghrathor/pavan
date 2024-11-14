import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


export interface PeriodicElement {
  id: number;
  attributes: string;
  question: string;
  basic: string;
  developing: string; 
  emerging: string; 
  differentiating: string;
  bestinclass: string;
  rating: string;
	comments: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    attributes: 'Factory Model Shared SME',
    question: 'Is the SME team structured within account teams and shared between AD AM  or does it follow a Factory model with SMEs shared across accounts using partial FTEs eg DBA services mainly on Offshore with right Knowledge management framework',
    basic: 'No  Core Flex Delivery modelNo share SME exists within the Offshore Remote Delivery Center',
    developing: 'Standard processes are in place to manage AM AD work with SMEs available ondemand from Competencies subject to an agreed lead time', 
    emerging: 'There is limited use of assets and accelerators to enhance productivity with a shared pool of SMEs available within the account based on specific skills technical expertise and roles',
    differentiating: 'Asset usage is optimized with ongoing evaluation of new automation opportunities and a shared pool of Subject Matter Experts is available aligned by technology competency and niche skills for business critical applications',
    bestinclass: 'There is consistent usage across multiple offshore and remote locations with a shared pool of Subject Matter Experts aligned by technology competency and niche skills for business critical applications Certain services are fully managed from offshore with productivity and continuous improvement gains tracked and reported',
    rating: '',
    comments: ''
  },
  {
    id: 2,
    attributes: 'Resiliency and Adaption - Cost Pressure',
    question: 'Is the SME team structured within account teams and shared between ADAM or does it follow a Factory model with SMEs shared across accounts using partial FTEs eg DBA services mainly on Offshore with right Knowledge management frameworkHow are knowledge and talent management including application portfolio assessment resource consumption trends location strategies demand forecasting and futureniche skill development being handled',
    basic: 'The company doesnt assess its application portfolio and relies on onpremises monolithic applications It uses traditional methods and depends heavily on senior SMEs being onsite',
    developing: 'Application portfolio assessment covers less than 25 of the portfolio The company relies on onpremises monolithic applications with limited data on labor consumption and costs Traditional workflows are used with no automation and there is a high dependency on SMEs being physically present for critical applications', 
    emerging: 'Application portfolio assessment covers 50 of the portfolio with a mix of onprem and hybrid cloud environments Consumption patterns and labor cost outlook are defined A DevOps Automation plan exists though implemented to a limited extent There is a continuity and knowledge management plan to support from alternate locations', 
    differentiating: 'Application portfolio assessment covers all critical business areas The environment includes both onprem and hybrid cloud A continuity and knowledge management plan is in place supported by ChatOps for alternate location support A DevOps Automation plan is implemented at the portfolio level',
    bestinclass: 'Application portfolio assessment is conducted at the enterprise level for all applications with a mix of onprem and hybrid cloud environments A contactless delivery plan is in place and a DevOps Extreme Automation plan is implemented across the enterprise ',
    rating: '',
    comments: '',
  }
];

@Component({
  selector: 'app-m4c',
  standalone: true,
  imports: [
    MatTableModule,
    MatRadioModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './m4c.component.html',
  styleUrl: './m4c.component.css'
})
export class M4cComponent {

  displayedColumns: string[] = ['id', 'attributes','question','basic','developing','emerging', 'differentiating','bestinclass','rating','comments'];
  dataSource = ELEMENT_DATA;

  selectedRating: any;

  onRatingSelected(row: any){
    console.log('selectedRating: %d', this.selectedRating);
  }
  

}
