export class Meal {
    main: MealItemMain;
    relish: MealItemRelish;
    vegetable: MealItemBundle;
    extras: MealItemExtra[];
    discount: number;
}

export class MealItemMain {
    name: string;
    name_sn: string;
    name_nd: string;
    price: number;
    price_standalone: number;
    standalone: boolean;
}

export class MealItemBundle {
    name: string;
    name_sn: string;
    name_nd: string;
    price: number;
    standalone: boolean;
}

export class MealItemRelish {
    name: string;
    name_sn: string;
    name_nd: string;
    price: number;
    standalone: boolean;
}

export class MealItemExtra {
    name: string;
    name_sn: string;
    name_nd: string;
    price: number;
    standalone: boolean;
}

