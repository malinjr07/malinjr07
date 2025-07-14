import { 
    Product, 
    WishListItem, 
    CartItem
} from '../types/utils';

/**
 * Get flash sale products (on sale products)
 * @param products - Array of products
 * @returns Array of products that are on sale (max 8)
 */
function getFlashProducts(products: Product[]): Product[] {
    return products.filter(item => item.sale === true).slice(0, 8);
}

/**
 * Get featured products (on sale products)
 * @param products - Array of products
 * @returns Array of featured products (max 12)
 */
function getFeaturedProducts(products: Product[]): Product[] {
    return products.filter(item => item.sale === true).slice(0, 12);
}

/**
 * Calculate total price of items in cart
 * @param items - Array of cart items with price and quantity
 * @returns Total price
 */
function totalPrice(items: CartItem[]): number {
    return items.reduce((itemAcc, item) => {
        return itemAcc + (item.price * (item.qty || 1));
    }, 0);
}

/**
 * Check if a product is in wishlist
 * @param productId - ID of the product to check
 * @param wishList - Array of wishlisted items
 * @returns boolean indicating if product is in wishlist
 */
function isWishListed(productId: string | number, wishList: WishListItem[]): boolean {
    return wishList.findIndex(product => product.id === productId) !== -1;
}

/**
 * Get limited number of items for comparison
 * @param items - Array of items to compare
 * @returns First 4 items from the array
 */
function getCompareList<T>(items: T[]): T[] {
    return items.slice(0, 4);
}

/**
 * Search filter function for product titles
 * @param row - Object containing title to search in
 * @param search - Search term
 * @returns boolean indicating if title includes search term (case insensitive)
 */
function searchFilter(row: { title: string }, search: string): boolean {
    return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

/**
 * Check if data is not null/undefined and has length > 0
 * @param data - Data to check (string, array, or null/undefined)
 * @returns boolean indicating if data has length > 0
 */
function checkLengNull(data: string | any[] | null | undefined): boolean {
    if (data == null) {
        return false;
    }
    return data.length > 0;
}

/**
 * Case-insensitive string comparison
 * @param a - First string
 * @param b - Second string
 * @returns boolean indicating if strings are equal (case insensitive)
 */
function isEquals(a: string | null, b: string | null): boolean {
    if (a !== null && b !== null) {
        return a.toLowerCase() === b.toLowerCase();
    }
    return a === b;
}

/**
 * Ensure quantity is at least 1
 * @param qty - Quantity to check
 * @returns The quantity, or 1 if less than 1
 */
function minValueOne(qty: number): number {
    if (qty < 1) {
        return 1;
    }
    return qty;
}

/**
 * Filter product by category
 * @param product - Product to check
 * @param selected_category - Category to filter by (optional)
 * @returns boolean indicating if product matches category
 */
function filterProductByCategory(product: Product, selected_category?: string): boolean {
    if (selected_category && selected_category.length > 0) {
        return product.category.toLowerCase() === selected_category.toLowerCase();
    }
    return true;
}

/**
 * Filter product by price range
 * @param product - Product to check
 * @param price - Tuple of [min, max] price or undefined
 * @returns boolean indicating if product price is within range
 */
function filterProductByPrice(product: Product, price?: [number, number]): boolean {
    if (price && price.length === 2) {
        return product.price >= price[0] && product.price <= price[1];
    }
    return true;
}

/**
 * Filter product by color
 * @param product - Product to check
 * @param color - Color to filter by
 * @returns boolean indicating if product is available in the specified color
 */
function filterProductByColor(product: Product, color?: string): boolean {
    if (color && color.length > 0 && product.colors && product.colors.length > 0) {
        const colorLower = color.toLowerCase();
        return product.colors.some(c => c.toLowerCase() === colorLower);
    }
    return true;
}

/**
 * Filter product by size
 * @param product - Product to check
 * @param size - Size to filter by
 * @returns boolean indicating if product is available in the specified size
 */
function filterProductBySize(product: Product, size?: string): boolean {
    if (size && size.length > 0 && product.size && product.size.length > 0) {
        const sizeLower = size.toLowerCase();
        return product.size.some(s => s.toLowerCase() === sizeLower);
    }
    return true;
}

export {
    getFlashProducts,
    getFeaturedProducts,
    totalPrice,
    isWishListed,
    filterProductByCategory,
    filterProductByPrice,
    filterProductByColor,
    filterProductBySize,
    isEquals,
    minValueOne,
    getCompareList,
    searchFilter
};

// Export types for easier access
export type { Product, WishListItem, CartItem };
