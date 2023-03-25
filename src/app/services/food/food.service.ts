import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Food[]{
    return [
      {id: 1,
      name: 'Pizza ',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '/assets/images/5.png',
      tags: ['FastFood', 'Pizza', 'Lunch'],},
      {
        id: 2,
        name: 'pasta',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east'],
        stars: 4.7,
        imageUrl: '/assets/images/6.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/1.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Cesar salad',
        price: 8,
        cookTime: '9-15',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/4.png',
        tags: ['salad', 'healthy'],
      },
      {
        id: 5,
        name: 'sushi',
        price: 26,
        cookTime: '30-40',
        favorite: false,
        origins: ['japan', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/3.png',
        tags: ['seafoof', 'sushi'],
      },
      {
        id: 6,
        name: 'Steak',
        price: 31,
        cookTime: '20-30',
        favorite: false,
        origins: ['USA', 'France'],
        stars: 3.0,
        imageUrl: '/assets/images/2.png',
        tags: ['SlowFood', 'Steak '],
      },

    ]
  }
}
