import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse4.mm.bing.net/th?id=OIP.1SnwUZukEnoCqTQG3FlV9QHaGd&pid=Api&P=0&h=220'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://webstockreview.net/images/cookbook-clipart-appetizer-1.jpg'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
