const greet = (person: string, date: Date) => {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};

greet('Lawrence', new Date());
