import {Component, OnInit} from '@angular/core';
import {Meal, MealItemBundle, MealItemExtra, MealItemMain, MealItemRelish} from '../models';
import {NotificationService} from '../../notifications/notification.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    relishItems: MealItemRelish[];
    mainItems: MealItemMain[];
    extrasItems: MealItemExtra[];
    vegetableItems: MealItemBundle[];
    meal = new Meal();

    constructor(public afAuth: AngularFireAuth,
                private afStore: AngularFirestore) {
    }

    ngOnInit() {
        this.loadOrder();
        this.meal.extras = [];
        this.mainItems = [
            {name: 'Sadza', price: 0},
            {name: 'Rice', price: 0},
            {name: 'Chips', price: 1},
        ];

        this.relishItems = [
            {name: 'Chicken', price: 1},
            {name: 'Beef', price: 1},
            {name: 'T-Bone', price: 1.5},
            {name: 'Beans', price: 0.5},
            {name: 'Mince', price: 0.75},
        ];

        this.vegetableItems = [
            {name: 'Coleslaw', price: 0, standalone: false},
            {name: 'Greens', price: 0, standalone: false},
            {name: 'Salads', price: 0, standalone: false, min_offer: 1.5},
        ];

        this.extrasItems = [
            {name: 'Pepsi', price: 0.5},
            {name: 'Coke (bottle)', price: 0.5},
            {name: 'Coke (can)', price: 0.6},
        ];

    }

    addMain(item: MealItemMain) {
        this.meal.main = item;
    }

    addRelish(item: MealItemRelish) {
        this.meal.relish = item;
    }

    addVegetables(item: MealItemBundle) {
        this.meal.vegetable = item;
    }

    addExtra(item: MealItemExtra) {
        if (!this.meal.extras) {
            this.meal.extras = [];
        }
        this.meal.extras.push(item);
    }

    removeExtra(item: MealItemExtra) {
        const index = this.meal.extras.findIndex(extra => extra.name === item.name);
        if (index < 0) {
            return;
        }
        this.meal.extras.splice(index, 1);
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
        this.saveOrder();
        return total;
    }

    loadOrder() {
        if (this.afAuth.auth.currentUser) {
            this.afStore.doc<Meal>('orders/' + this.afAuth.auth.currentUser.uid + '/saved/meal')
                .valueChanges().take(1).subscribe(meal => {
                if (meal) {
                    this.meal = meal;
                    NotificationService.showNotification('Previous meal opened')
                }
            });
        }
    }

    saveOrder() {
        if (this.afAuth.auth.currentUser) {
            this.afStore.doc<Meal>('orders/' + this.afAuth.auth.currentUser.uid + '/saved/meal')
                .set(this.meal)
                .catch(error => console.error(error))
        }
    }

    placeOrder() {
        NotificationService.showNotification('Oder Placed', 'cart', 'success')
    }

}
