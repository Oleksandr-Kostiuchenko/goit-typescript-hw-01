//TODO: ========================================== Additional Practice 9 ==========================================
// Створіть тип ReadonlyForm<T>, який робить усі поля типу T доступними лише для читання. Застосуйте цей тип до типу FormData.

type FormData = {
  email: string;
  password: string;
};

const formDataConstructor = <T extends FormData>(data: T): Readonly<T> => {
  return data;
};

const newUser = formDataConstructor({
  email: "test@gmail.com",
  password: "12345",
});

console.log(newUser);

//TODO: ========================================== /Additional Practice 9 ==========================================
