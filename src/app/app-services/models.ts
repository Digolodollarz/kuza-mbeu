export interface CartItem {
    name: string;
    price: number;
    discontinued?: boolean;
}

export class Doc {
    id?: string;
    modified?: string;
}


export class Meal extends Doc implements CartItem {
    main?: MealItemMain;
    relish?: MealItemRelish;
    vegetable?: MealItemBundle;
    extras?: MealItemExtra[];
    discount?: number;
    price: number;
    name: string;
    available?: boolean;
}

export class MealItem extends Doc implements CartItem {
    name: string;
    nameSn?: string;
    nameNd?: string;
    price: number;
    priceStandalone?: number;
    standalone?: boolean;
    imageUrl?: string;
    description?: string;
    available?: boolean;
    discontinued?: boolean;
}

export class MealItemMain extends MealItem {
}

export class MealItemBundle extends MealItem {
}

export class MealItemRelish extends MealItem {
}

export class MealItemExtra extends MealItem {
}

export class House {
    id?: number;
    location: string;
    street: string;
    address: string;
    rooms: number;
    perRoom: number;
    price: number;
    wifi: boolean;
    distance: number;
    tiles: boolean;
    imageUrl: string;
    tv = false;
}

