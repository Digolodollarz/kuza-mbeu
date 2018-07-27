export interface CartItem {
    name: string;
    price?: number;
}

export class Meal implements CartItem {
    main?: MealItemMain;
    relish?: MealItemRelish;
    vegetable?: MealItemBundle;
    extras?: MealItemExtra[];
    discount?: number;
    price?: number;
    name: string;
}

export class MealItemMain {
    name: string;
    name_sn?: string;
    name_nd?: string;
    price: number;
    price_standalone?: number;
    standalone?: boolean;
    imageUrl?: string;
    description?: string;
}

export class MealItemBundle {
    name?: string;
    name_sn?: string;
    name_nd?: string;
    price?: number;
    standalone?: boolean;
    min_offer?: number;
    imageUrl?: string;
    description?: string;
}

export class MealItemRelish {
    name?: string;
    name_sn?: string;
    name_nd?: string;
    price: number;
    standalone?: boolean;
    imageUrl?: string;
    description?: string;
}

export class MealItemExtra {
    name?: string;
    name_sn?: string;
    name_nd?: string;
    price?: number;
    standalone?: boolean;
    imageUrl?: string;
    description?: string;
}

export class House {
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

