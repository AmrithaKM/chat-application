import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

/**
 * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
 *
 * Planning on joining Medium? Membership is $5/month and gives unlimited access
 * to all stories on Medium. Use my referral link:
 * https://vkagklis.medium.com/membership
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule],
  templateUrl: './app.component.html',

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppComponent {}
