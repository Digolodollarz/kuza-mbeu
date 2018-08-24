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
    main?: MealItem;
    relish?: MealItem;
    vegetable?: MealItem;
    extras?: MealItem[];
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
    imageRef?: string;
    description?: string;
    available?: boolean;
    discontinued?: boolean;
    type?: string;
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
    imageRef: string;
    tv = false;
    contactPhone?: string;
    contactPhone2?: string;
    contactEmail?: string;
    owner?: string;
}

