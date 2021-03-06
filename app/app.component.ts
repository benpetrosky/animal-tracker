import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [

    new Animal('Artic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),

    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),

    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 5, 'Female', 'Delicate roots and leaves', 'Loud noises'),
  ];
  selectedAnimal = null;

  editAnimal(currentAnimal){
    this.selectedAnimal = currentAnimal;
  }
  finishedEditing(){
    this.selectedAnimal = null;
  }
  addAnimal(newAnimal: Animal){
    this.masterAnimalList.push(newAnimal);
  }
}
