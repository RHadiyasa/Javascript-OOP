const user = {
  firstName: "Rafi",
  lastName: "Hadiyasa",
  age: 25,
  address: {
    region: "Pesanggrahan",
    province: "Jakarta",
    country: "Indonesia",
    postalCode: 12320,
    street: {
      name: "Jalan Meteo",
      number: 32,
    },
  },

  nickname: ["Apih", "Apii", "Rapi", "Presiden"],

  // Bisa nambahin function, biasanya disebut dengan method
  greeting: () => "Hello gaizzz",

  // Array function gabisa pake this, karena ga ada akses ke dalam object
  introduction: function greet() {
    // ini bisa ga dikasih nama(greetnya dihapsus), jadi anonymous function.
    return `Halo nama saya adalah ${this.firstName} ${this.lastName}`;
    // this menunjuk pada attribute yang ada di dalam object. Sama kaya java
  },
};

console.log(user);
// Mengakses yang ada di dalamnya
console.log(
  "Nama Jalan : " +
    user.address.street.name +
    " Nomor " +
    user.address.street.number
);

console.log(user.nickname);
console.log(user.nickname[2]);

// Warnanya beda karena ini function. Di detect sama vscode
console.log(user.greeting());
console.log(user.introduction());

// untuk melihat attribtue yang ada di dalam object, kita tidak bisa menggunakan map atau foreach
// kita menggunakan keys
console.log("\n------- PROPERTIES DI DALAM OBJECT -------");
console.log(Object.keys(user));
console.log(Object.keys(user.address));
console.log(Object.keys(user.address.street));

// Kita juga bisa mengecek values yang ada di dalam object
console.log("\n------- VALUES DI DALAM OBJECT -------");
console.log(Object.values(user));

// Persilahkan trainee untuk explore method yang lainnya di dalam Object.

// Delete object
console.log("\n------- DELETE PROPERTY DI DALAM OBJECT -------");

delete user.address;
console.log(user);
console.log("\n------- DELETE GREETING AND INTRODUCTION  FUNCTION -------");
delete user.greeting;
delete user.introduction;
console.log(user);
