//TODO: ========================================== Additional Practice 12 ==========================================
// You are building a filtering utility for a product listing page.

// Write a generic function filterByProperty that takes an array of objects and a key-value pair. It should return only those objects where the specified property matches the given value. Use Generics and keyof to type the function properly.

type ProductData = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const filterByProperty = <
  ArrData extends object[],
  Key extends keyof ProductData,
  KeyValue extends string | number
>(
  arr: ArrData,
  key: Key,
  keyContent: KeyValue
): ArrData[] => {
  const result: ArrData[] = [];

  if (key === "price") {
    arr.forEach((element) => {
      if (element[key] <= keyContent) {
        result.push(element);
      }
    });
  } else {
    arr.forEach((element) => {
      if (element[key] === keyContent) {
        result.push(element);
      }
    });
  }

  return result;
};

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1200 },
  { id: 2, name: "Shirt", category: "clothing", price: 30 },
  { id: 3, name: "Phone", category: "electronics", price: 800 },
  { id: 4, name: "Tablet", category: "electronics", price: 500 },
  { id: 5, name: "Shoes", category: "clothing", price: 60 },
  { id: 6, name: "Headphones", category: "electronics", price: 150 },
  { id: 7, name: "Jacket", category: "clothing", price: 100 },
  { id: 8, name: "Camera", category: "electronics", price: 700 },
  { id: 9, name: "Watch", category: "accessories", price: 200 },
  { id: 10, name: "Sunglasses", category: "accessories", price: 120 },
  { id: 11, name: "Keyboard", category: "electronics", price: 80 },
  { id: 12, name: "Mouse", category: "electronics", price: 40 },
  { id: 13, name: "T-shirt", category: "clothing", price: 25 },
  { id: 14, name: "Blender", category: "home appliances", price: 150 },
  { id: 15, name: "Microwave", category: "home appliances", price: 300 },
  { id: 16, name: "Fridge", category: "home appliances", price: 1000 },
  { id: 17, name: "Oven", category: "home appliances", price: 800 },
  { id: 18, name: "Desk", category: "furniture", price: 250 },
  { id: 19, name: "Chair", category: "furniture", price: 100 },
  { id: 20, name: "Bookshelf", category: "furniture", price: 150 },
];

const electronics = filterByProperty(products, "category", "electronics");
const clothes = filterByProperty(products, "category", "clothing");
const accessories = filterByProperty(products, "category", "accessories");

const electronicsU500 = filterByProperty(electronics, "price", 500);

console.log(electronics);
console.log(clothes);
console.log(accessories);
console.log(electronicsU500);

//TODO: ========================================== /Additional Practice 12 ==========================================
