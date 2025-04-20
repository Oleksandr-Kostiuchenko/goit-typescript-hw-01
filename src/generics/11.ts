//TODO: ========================================== Additional Practice 11 ==========================================
//Використовуючи умовні типи, створіть тип IsString<T>, який буде true, якщо T — це рядок, інакше false. Продемонструйте використання типу з кількома прикладами.

const IsString = <T>(random: T): boolean => {
  if (typeof random === "string") {
    return true;
  } else {
    return false;
  }
};

console.log(IsString(7));
console.log(IsString("Typescript"));
//TODO: ========================================== /Additional Practice 11 ==========================================
