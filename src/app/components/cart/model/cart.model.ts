import {Product} from '../../item-row/product';
import {SizeType} from '../../products';

export class CartModel {
  products: ProductInCart[];
}

export class ProductInCart {
  amount: number;
  size: SizeType;
  product: Product;
  note?: string;
}
