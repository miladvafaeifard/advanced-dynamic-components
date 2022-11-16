import { Component } from '@angular/core';
import { TooltipDetailsComponent } from './tooltip-details.component';

// https://netbasal.com/create-advanced-components-in-angular-e0655df5dde6

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  component = TooltipDetailsComponent;
}
