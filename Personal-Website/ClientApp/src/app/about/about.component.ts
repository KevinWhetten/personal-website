import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  age: number = this.getAge();

  getAge() {
    let currentDate = new Date();
    let birthDate = new Date(1993, 12, 16)
    let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() - 1) {
      calculatedAge--;
    }
    if (birthDate.getMonth() - 1 == currentDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
      calculatedAge--;
    }
    return calculatedAge;
  }
}
