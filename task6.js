var users = [
    {
      name: "Кирило",
      email: "kyrylo@gmail.com",
      age: 25,
    },
    {
      name: "Петро",
      email: "petro@gmail.com",
      age: 30,
    },
    {
      name: "Остап",
      email: "ostap@gmail.com",
      age: 35,
    },
  ];
  for (var user of users) {
    var { name, email, age } = user;
    console.log("Ім'я: " + name);
    console.log("Email: " + email);
    console.log("Вік: " + age);
  }  