//TODO: ========================================== Additional Practice 8 ==========================================
// У вас є масив об'єктів з довільною структурою. Створіть функцію pluck, яка приймає цей масив та ключ, і повертає масив значень за цим ключем. Типізуйте функцію за допомогою Generics та keyof.

const pluck = <ArrData, Key extends keyof ArrData>(
  arr: ArrData[],
  key: Key
): ArrData[Key][] => {
  const result: ArrData[Key][] = [];

  arr.forEach((element: ArrData) => {
    result.push(element[key]);
  });

  return result;
};

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const names = pluck(users, "name");
const ages = pluck(users, "age");

console.log(names);
console.log(ages);
//TODO: ========================================== /Additional Practice 8 ==========================================
