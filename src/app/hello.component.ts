import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ getName() }}!</h1>
    <input [(ngModel)]="color" [ngModelOptions]="{updateOn: 'change'}">
    {{ getColor() }}
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  color: string;
  
  getColor(): string {
    console.log('getColor', this.color)
    return this.color;
  }

  getName(): string {
    console.log('getName', this.name)
    return this.name;
  }
}
