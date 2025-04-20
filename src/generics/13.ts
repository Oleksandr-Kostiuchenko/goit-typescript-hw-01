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

// Your task:
// - Define a type ProductPreview using Pick.
// - Write a function getPreviewCards that returns an array of ProductPreview objects.
//TODO: ========================================== /Additional Practice 13 ==========================================
