import { Component, Directive, HostBinding, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[firstDirective]'
})
export class FirstDirective{

    @Input() MouseEnterColor: string;
    @Input() MouseExitColor: string;

    constructor(private element: ElementRef){

    }

    @HostBinding() innerText = "This is the sample directive"

    @HostListener('mouseenter') onmouseenter(){
        this.element.nativeElement.style.backgroundColor = this.MouseEnterColor;
    }

    @HostListener('mouseleave') onmouseleave(){
        this.element.nativeElement.style.backgroundColor = this.MouseExitColor;
    }
}