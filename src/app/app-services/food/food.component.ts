import {Component, OnInit} from '@angular/core';
import {Meal,MealItem} from '../models';
import {NotificationService} from '../../notifications/notification.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {MealService} from '../meal.service';
import {Observable} from 'rxjs/Rx';
import {take} from 'rxjs/internal/operators';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    relishItems: Observable<MealItem[]>;
    mainItems: Observable<MealItem[]>;
    extrasItems: Observable<MealItem[]>;
    vegetableItems: Observable<MealItem[]>;
    meal = new Meal();

    constructor(public afAuth: AngularFireAuth,
                private afStore: AngularFirestore,
                private meals: MealService) {
    }

    ngOnInit() {
        this.meal.extras = [];
        this.mainItems = this.meals.getMainItems();
        this.relishItems = this.meals.getRelishItems();
        this.vegetableItems = this.meals.getVegetableItems();
        this.extrasItems = this.meals.getExtrasItems();
        this.afAuth.user.pipe(take(1)).subscribe(user => {
            if (user) {
                if (!this.meal.main && !this.meal.relish) {
                    this.loadOrder();
                }
            }
        });
    }

    addMain(item: MealItem) {
        this.meal.main = item;
        this.saveOrder();
    }

    addRelish(item: MealItem) {
        this.meal.relish = item;
        this.saveOrder();
    }

    addVegetables(item: MealItem) {
        this.meal.vegetable = item;
        this.saveOrder();
    }

    addExtra(item: MealItem) {
        if (!this.meal.extras) {
            this.meal.extras = [];
        }
        this.meal.extras.push(item);
        this.saveOrder();
    }

    removeExtra(item: MealItem) {
        const index = this.meal.extras.findIndex(extra => extra.name === item.name);
        if (index < 0) {
            return;
        }
        this.meal.extras.splice(index, 1);
        this.saveOrder();
    }

    calculateTotal() {
        let total = 0;
        if (this.meal.main) {
            total += this.meal.main.price;
        }
        if (this.meal.relish) {
            total += this.meal.relish.price;
        }
        if (this.meal.vegetable) {
            total += this.meal.vegetable.price;
        }
        if (this.meal.extras.length > 0) {
            for (const extra of this.meal.extras) {
                total += extra.price;
            }
        }
        this.meal.price = total;
        return total;
    }

    loadOrder() {
        this.afStore.doc<Meal>('orders/' + this.afAuth.auth.currentUser.uid + '/saved/meal')
            .valueChanges().pipe(take(1)).subscribe(meal => {
            if (meal) {
                this.meal = meal;
                NotificationService.showNotification('Previous meal loaded.')
            }
        });
    }

    saveOrder() {
        if (this.afAuth.auth.currentUser) {
            const _meal = Object.assign({}, this.meal);
            const meal_url = 'orders/' + this.afAuth.auth.currentUser.uid + '/saved/meal';
            this.afStore.doc<Meal>(meal_url)
                .set(_meal)
        }
    }

    placeOrder() {
        NotificationService.showNotification('Oder Placed', 'cart', 'success')
    }

}
