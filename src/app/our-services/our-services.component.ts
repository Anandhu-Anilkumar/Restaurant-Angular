import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  ngOnInit(): void {
    let services = Array.from(document.getElementsByClassName('re-service')) as HTMLElement[];

    services.forEach((element, index) => {
      if (index %2 == 1) {
        element.classList.add('re-service--alt');
        element.querySelector('.re-btn')?.classList.add('re-btn--alt');
      }
    });

  }

}
