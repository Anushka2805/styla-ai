// src/lib/products.ts
export type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: 2,
    name: "Mens Urban Jacket",
    price: "₹129",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80&auto=format&fit=crop",
    description:
      "A timeless urban jacket with a comfortable fit — perfect for layering and daily wear.",
    colors: ["Black", "Olive", "Denim"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Luxury Handbag",
    price: "₹249",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    description:
      "Elegant luxury handbag crafted with premium materials and polished hardware.",
    colors: ["Brown", "Tan"],
    sizes: [],
  },
  {
    id: 4,
    name: "Minimal Sneakers",
    price: "₹99",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&q=80&auto=format&fit=crop",
    description: "Clean minimal sneakers designed for comfort and style.",
    colors: ["White", "Black"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 5,
    name: "Oversized Hoodie",
    price: "₹79",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop",
    description: "Cozy oversized hoodie with soft fleece lining.",
    colors: ["Grey", "Navy"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Denim Streetwear Jacket",
    price: "₹139",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80&auto=format&fit=crop",
    description: "Rugged denim jacket with a contemporary streetwear cut.",
    colors: ["Blue"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 9,
    name: "Casual Shirt",
    price: "₹69",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&q=80&auto=format&fit=crop",
    description: "Breathable casual shirt for everyday comfort.",
    colors: ["White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
];
