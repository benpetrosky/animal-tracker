import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `


      <h3>New Animal</h3>
      <div>
        <label>Species:</label>
        <input type="text" #newSpecies>
        <label>Name:</label>
        <input type="text" #newName>
        <label>Age:</label>
        <input type="number" #newAge>
        <label>Diet:</label>
        <input type="text" #newDiet>
        <label>Location:</label>
        <input type="text" #newLocation>
        <label>Caretakers</label>
        <input type="text" #newCaretakers>
        <label>Sex</label>
        <input type="text" #newSex>
        <label>Likes</label>
        <input type="text" #newLikes>
        <label>Dislikes</label>
        <input type="text" #newDislikes>

        <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);

         newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Submit</button>
       </div>

  `

})

export class NewAnimalComponent {

  @Output() newAnimalSender =new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){

    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);

  }
}
