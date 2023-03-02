import { Component } from '@angular/core';
import { services } from '../../lib/services';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = services;

  total = 0;

  clickService(pickedTitle: string) {
    let service = this.services.find(
      (service) => service.title == pickedTitle
    )!;

    const price = service.price;
    this.total += !service.picked ? price : -price;
    service.picked = !service.picked;
  }

  setTotal() {}
}
