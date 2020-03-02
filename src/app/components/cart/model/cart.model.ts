import {Product} from '../../item-row/product';

export class CartModel {
  products: ProductInCart[];
}

export class ProductInCart {
  amount: number;
  product: Product;
  note?: string;
}
