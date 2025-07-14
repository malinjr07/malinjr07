// Types for product related utilities
export interface Product {
    id: string | number;
    sale?: boolean;
    price: number;
    qty?: number;
    title: string;
    category: string;
    colors?: string[];
    size?: string[];
    [key: string]: any; // For any additional properties
}

export interface WishListItem {
    id: string | number;
    [key: string]: any;
}

export interface CartItem extends Product {
    qty: number;
}

export interface SearchFilterParams {
    row: { title: string; [key: string]: any };
    search: string;
}

export interface FilterProductParams {
    product: Product;
    selected_category?: string;
    price?: [number, number];
    color?: string;
    size?: string;
}
