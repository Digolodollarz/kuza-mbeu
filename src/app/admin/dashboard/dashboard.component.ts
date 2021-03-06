
import {of as observableOf} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {AngularFirestore} from 'angularfire2/firestore';
import {House, MealItem} from '../../app-services/models';
import {MealService} from '../../app-services/meal.service';
import {Observable} from 'rxjs/Rx';
import {AccommodationService} from '../../app-services/accommodation.service';

declare const $: any;

export enum OderStatus {
    Incomplete,
    Pending,
    Processing,
    Processed,
    Shipping,
    Shipped,
    Returned,
    Cancelling,
    Canceleled
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    latestUsers: UserProfile[];
    // dataDailySalesChart
    mainMeals: Observable<MealItem[]> = observableOf([]);
    relishMeals: Observable<MealItem[]> = observableOf([]);
    vegetableMeals: Observable<MealItem[]> = observableOf([]);
    bundleMeals: Observable<MealItem[]> = observableOf([]);
    extrasMeals: Observable<MealItem[]> = observableOf([]);
    newMeal = new MealItem();
    iType = 'main';

    houses: Observable<House[]> = observableOf([]);
    eHouse = new House();

    constructor(private afStore: AngularFirestore,
                private meals: MealService,
                private accomodation: AccommodationService) {
    }

    startAnimationForLineChart(chart) {
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;

        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    };

    startAnimationForBarChart(chart) {
        let seq2: any, delays2: any, durations2: any;

        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq2 = 0;
    };

    ngOnInit() {
        this.mainMeals = this.meals.getMainItems();
        this.relishMeals = this.meals.getRelishItems();
        this.vegetableMeals = this.meals.getVegetableItems();
        this.extrasMeals = this.meals.getExtrasItems();

        this.houses = this.accomodation.getHouses();

        this.afStore.collection<UserProfile>('profiles')
            .valueChanges().subscribe(users => {
            this.latestUsers = users;
        });

        const pending = 'orders/' + OderStatus.Pending;
        this.afStore.collection('orders/')
            .valueChanges().subscribe(orders => {

        });

        this.afStore.collection<any>('orders/summary/completed')
            .valueChanges().subscribe(data => {
            console.log('Oder data: ', data);
        });

        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        const dataDailySalesChart: any = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38],
                [11, 34, 7, 26, 23, 18, 38],
            ]
        };

        const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        this.startAnimationForLineChart(dailySalesChart);


        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataCompletedTasksChart: any = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        const optionsCompletedTasksChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0}
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);


        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: {top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions: any[] = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    }

    editMealItem(item, iType) {
        this.newMeal = item;
        this.iType = iType;
        $('#addMealModal').modal('show');
        $('#addMealModal').on('hidden.bs.modal', () => {
            this.newMeal = new MealItem();
        });
        return true;
    }

    editHouse(item) {
        this.eHouse = item;
        $('#editHouseModal').modal('show');
        $('#editHouseModal').on('hidden.bs.modal', () => {
            this.eHouse = new House();
        });
        return true;
    }

    discontinueMealItem(item) {
        return true;
    }
}
