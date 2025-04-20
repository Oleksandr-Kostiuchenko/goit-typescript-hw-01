//TODO: ========================================== Additional Practice 13 ==========================================
// You have a list of product objects. For a product preview card, you only want to show a limited set of fields: id, name, and price.
// Write a function getPreviewCards that takes an array of ProductData and returns an array of product preview objects, using the Pick utility type.

type ProductData = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  stock: number;
};

const laptop: ProductData = {
  id: 10,
  name: "Acer Nitro",
  category: "laptop",
  price: 1000,
  description: "Gaming and powerful laptop",
  stock: 2,
};

type ProductPreview = Pick<ProductData, "name" | "category" | "price">;

const getPreviewCards = (data: ProductData): ProductPreview => {
  return {
    name: data.name,
    category: data.category,
    price: data.price,
  };
};

console.log(getPreviewCards(laptop));
//TODO: ========================================== /Additional Practice 13 ==========================================
