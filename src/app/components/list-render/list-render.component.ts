import { Component } from '@angular/core';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

 animals :Animal[]= [
    {name : "Boi", size: "Médio", age:10 },
    {name : "Cachorro", size: "Pequeno", age:6 },
    {name : "Gato", size: "Pequeno", age:8 },
    {name : "Tubarão", size: "Grande", age:30 },

  ]


animalDetails = '';

constructor(private listService: ListService) { }

  showAge(animal:Animal){
    this.animalDetails = `O ${animal.name} tem ${animal.age} anos`;

  }

  removeAnimal(animal:Animal){
    console.log('Removendo');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
