import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: "[myhighlight]",
    host: {
        '(mouseleave)': 'OnMouseLeave()' // 1st way to attach event
    }
})

export class HighlightDirective {

    @Input() highlightColor: string;
    constructor(private _el: ElementRef, private renderer: Renderer) {
        //this._el.nativeElement.style.backgroundColor = "red";
    }

    @HostListener('mouseenter') OnMouseEnter() { // 2nd way to attach event
        this._el.nativeElement.style.backgroundColor = (this.highlightColor != null ? this.highlightColor: "red");
    }
    OnMouseLeave() {
        this._el.nativeElement.style.backgroundColor = "";
    }
}