import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  //property to emit the onSelect(click) event
  //use output decorator so it can be listenable by app component(parent component)
  @Output() featureSelected = new EventEmitter<string>();

  //click listener method for header
  onSelect(feature: string) {
    //use the event with emit
    this.featureSelected.emit(feature);
  }
}
