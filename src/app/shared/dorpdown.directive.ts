import { Directive, HostListener, HostBinding } from '@angular/core';

//decorator to turn the file as directive
@Directive({
  //selector to use the directive
  selector: '[appDropdown]',
})

//dont forget to add it to module so that can be use
export class DropdownDirective {
  //HostBinding to make it dynamiclly attach/detach a css class. ('class.open) means bind to the all array of class and open class
  @HostBinding('class.open') isOpen = false;

  //to make it listen use decorator HostListener
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
