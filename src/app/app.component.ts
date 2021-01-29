import {Component, Input} from '@angular/core';

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
  image = 'https://e7.pngegg.com/pngimages/599/417/png-clipart-react-angularjs-javascript-library-node-js-github-symmetry-web-application.png';
  inputValue = '';
  @Input() data: string;
  tittle = 'Initial';
  backGroundToggle = false;

  constructor() {
    /*   setTimeout(() => {
         this.image = 'https://e7.pngegg.com/pngimages/269/178/png-clipart-angularjs-computer-icons-javascript-graphics-javascript-icon-trademark-logo-thumbnail.png'
       }, 5000);*/

  }

  onInput(event: any): void {
    this.tittle = event.target.value;
  }


  /*  onInput(event?): void {
      console.log(event);
      this.inputValue = event.target.value;
    }*/
  /*  onInput(event?: KeyboardEvent): void {
      console.log(event);
      this.inputValue = (<HTMLInputElement> event.target).value;
    }

    onBlur(str: string): void {
      this.inputValue = str;
    }

    onClick(): void {
      console.log('Was click');
    }*/

}
