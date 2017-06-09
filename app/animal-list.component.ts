import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="matureAnimals">Animals over the age of 2 years</option>
    <option value="immatureAnimals" selected="selected">Animals 2 years or younger</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | matureness:filterByMatureness">{{currentAnimal.name}} is a {{currentAnimal.age}} year old {{currentAnimal.sex}} {{currentAnimal.species}} that enjoys {{currentAnimal.likes}}, and does not like {{currentAnimal.dislikes}}. {{currentAnimal.name}} eats {{currentAnimal.diet}}. You can find {{currentAnimal.name}} in the {{currentAnimal.location}} exhibit.<button (click)="editButtonHasbeenClicked(currentAnimal)">
    Edit</button>
    <hr>
    </li>
  </ul>


  `

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender =new EventEmitter();

  filterByMatureness: string = "allAnimals";

  editButtonHasbeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  onChange(optionFromMenu) {
  this.filterByMatureness = optionFromMenu;
  }
}
