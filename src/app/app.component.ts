import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = {a: 1, b: {c: 2}};
  image = 'https://e7.pngegg.com/pngimages/599/417/png-clipart-react-angularjs-javascript-library-node-js-github-symmetry-web-application.png'

  constructor() {
    setTimeout(() => {
      this.image = 'https://e7.pngegg.com/pngimages/269/178/png-clipart-angularjs-computer-icons-javascript-graphics-javascript-icon-trademark-logo-thumbnail.png'
    }, 5000);
  }

}
