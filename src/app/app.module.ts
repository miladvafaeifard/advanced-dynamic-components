import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerDirective } from './tooltip-container.directive';
import { TooltipDetailsComponent } from './tooltip-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipDirective,
    TooltipContainerDirective,
    TooltipDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
