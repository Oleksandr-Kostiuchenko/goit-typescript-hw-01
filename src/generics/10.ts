//TODO: ========================================== Additional Practice 10 ==========================================
// Напишіть функцію getProperty, яка приймає об'єкт і ключ з цього об'єкта, і повертає значення цього ключа. Типізуйте її з використанням Generics та keyof.

const getProperty = <ObjData extends {}, Key extends keyof ObjData>(
  obj: ObjData,
  key: Key
): ObjData[Key] => {
  return obj[key];
};

const randomObj = {
  name: "Alex",
  age: 14,
  sport: "Judo",
  other: "Programming",
};

console.log(getProperty(randomObj, "name"));
//TODO: ========================================== /Additional Practice 10 ==========================================
