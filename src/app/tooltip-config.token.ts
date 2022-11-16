import { InjectionToken } from "@angular/core";

export interface TooltipConfig {
    host: HTMLElement;
} 

export const TOOLTIP_CONFIG = new InjectionToken<TooltipConfig>('TooltipConfig');
