import {Component, Input, OnInit} from '@angular/core';
import {Meal, MealItem} from '../../app-services/models';
import {MealService} from '../../app-services/meal.service';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Rx';

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
    uploadProgress: Observable<number>;

    constructor(private meals: MealService,
                private afStorage: AngularFireStorage) {
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

    upload(event, name) {
        // const randomId = Math.random().toString(36).substring(2);
        const refPath = 'meals/' + name; //  + '/' + randomId;
        const ref = this.afStorage.ref(refPath);
        const task = ref.put(event.target.files[0]);
        this.uploadProgress = task.percentageChanges();
        task.then(() => {
            ref.getDownloadURL().subscribe(url => {
                this.meal.imageUrl = url;
                this.meal.imageRef = refPath;
            });
        });
    }
}
