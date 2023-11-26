import { Component } from '@angular/core';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

 animals :Animal[]= []


animalDetails = '';


constructor(private listService: ListService) { 
  this.getAnimals()
}

  showAge(animal:Animal){
    this.animalDetails = `O ${animal.name} tem ${animal.age} anos`;

  }

  removeAnimal(animal:Animal){
    console.log('Removendo');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=>(this.animals=animals))
  }
}
