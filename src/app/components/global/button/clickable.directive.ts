import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appClickable]'
})
export class ClickableDirective {
  @Input() appClickable: Function | string = "";

  constructor(private router: Router) { }

  @HostListener('click') onClick() {
    if (typeof this.appClickable === 'function') {
      this.appClickable();
    } else if (typeof this.appClickable === 'string') {
      this.router.navigateByUrl(this.appClickable);
    }
  }
}
