export interface Product {
  identifier: string;
  description: string;
  price_small?: number;
  price_big: number;
  type: ProductType;
}

type ProductType = 'pizza' | 'pasta' | 'schnitzel' | 'snacks';
