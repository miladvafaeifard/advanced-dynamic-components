import {
  ComponentRef,
  createComponent,
  Directive,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { TOOLTIP_CONFIG } from './tooltip-config.token';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input('tooltip') content: string | TemplateRef<any> | Type<any> = '';

  private componentRef: ComponentRef<TooltipComponent> | null = null;

  private comp?: ComponentRef<any>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private injector: EnvironmentInjector
  ) {}

  @HostListener('mouseenter')
  mouseenter() {
    if (this.componentRef) return;

    const injector = Injector.create({
      providers: [
        {
          provide: TOOLTIP_CONFIG,
          useValue: {
            host: this.element.nativeElement,
          },
        },
      ],
    });
    this.componentRef = this.vcr.createComponent(TooltipComponent, {
      index: 0,
      injector,
      projectableNodes: this.generateContent(),
    });
  }

  private generateContent() {
    if (typeof this.content === 'string') {
      const element = this.renderer.createText(this.content);
      return [[element]];
    }

    if (this.content instanceof TemplateRef) {
      const viewRef = this.content.createEmbeddedView({});
      return [viewRef.rootNodes];
    }

    const componentRef = createComponent(this.content, {
      environmentInjector: this.injector
    });
    return [[componentRef.location.nativeElement]];
  }

  @HostListener('mouseout')
  mouseout() {
    this.destroy();
  }

  destroy() {
    if(!!this.comp) this.comp.destroy();
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }
}
