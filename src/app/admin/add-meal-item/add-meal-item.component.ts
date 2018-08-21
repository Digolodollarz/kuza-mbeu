import {Component, Input, OnInit} from '@angular/core';
import {Meal, MealItem} from '../../app-services/models';
import {MealService} from '../../app-services/meal.service';

declare const $: any;

@Component({
    selector: 'app-add-meal-item',
    templateUrl: './add-meal-item.component.html',
    styleUrls: ['./add-meal-item.component.scss']
})
export class AddMealItemComponent implements OnInit {

    @Input() meal: MealItem;
    updating = false;
    @Input() mealType: string;

    constructor(private meals: MealService) {
    }

    ngOnInit() {
        if (!this.meal) {
            this.meal = new MealItem();
        } else {
            this.updating = true;
        }
    }

    save(item) {
        this.meals.saveMealItem(item);
        console.log(item);
        $('#addMealModal').modal('hide');
    }
}
