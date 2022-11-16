import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { TooltipConfig, TOOLTIP_CONFIG } from '../tooltip-config.token';
import { TooltipContainerDirective } from '../tooltip-container.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {
  top = '';

  @ViewChild(TooltipContainerDirective, { read: ElementRef, static: true }) private tooltipContainer?: ElementRef<HTMLElement>;

  constructor(@Inject(TOOLTIP_CONFIG) private config: TooltipConfig) {}

  ngOnInit() {
    const { top } = this.config.host.getBoundingClientRect();
    const { height } = this.tooltipContainer!.nativeElement.getBoundingClientRect();
    this.top = `${top - height}px`;
  }
}
