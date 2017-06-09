import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit</h3>
      <label>name of this animal</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.name">
      <label>age of this animal: </label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age">
      <label>Number of Caretakers this animal requires:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.caretakers">

      <button (click)="finishedEditing()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  finishedEditing(){
    this.finishedEditingSender.emit();
  }

}
