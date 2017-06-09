import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} is a {{currentAnimal.age}} year old {{currentAnimal.sex}} {{currentAnimal.species}} that enjoys {{currentAnimal.likes}}, and does not like {{currentAnimal.dislikes}}. {{currentAnimal.name}} eats {{currentAnimal.diet}}. You can find {{currentAnimal.name}} in the {{currentAnimal.location}} exhibit.<button (click)="editButtonHasbeenClicked(currentAnimal)">
    Edit</button>
    <hr>
    </li>
  </ul>


  `

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender =new EventEmitter();

  editButtonHasbeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
