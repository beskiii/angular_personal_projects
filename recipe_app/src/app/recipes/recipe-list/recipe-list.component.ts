import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png'
    ),
    new Recipe(
      'Second test Recipe',
      'This is another a test',
      'https://storage.needpix.com/rsynced_images/recipe-575434_1280.png'
    ),
  ];
}
