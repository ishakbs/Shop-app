export type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  img: string;
};

export type CardProps = {
  title: string;
  description: string;
  price?: string;
  img: string;
};
