import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  show: boolean = false;

  ngOnInit(): void {

  }
 
  // for model Popup 
  openPopUp() {
    this.show = true;
  }
  closePopUp() {
    this.show = false;
  }

  closeOverlay(event: any) {
    if (event.target.classList.contains('overlay')) {
      this.show = false;
    }
  }
}
