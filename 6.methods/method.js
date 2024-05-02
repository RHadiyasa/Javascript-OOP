// class adalah bentuk cetakan dari object.
// cara membuat class

class Users {
  // pembuatan nama class biasanya diawali huruf kapital -> PascalCase
  firstName;
  lastName;
  username; // bisa tidak dituliskan
  age;

  constructor(inputUsername, inputAge, inputFirstName, inputLastName) {
    this.username = inputUsername;
    this.age = inputAge;
    this.firstName = inputFirstName;
    this.lastName = inputLastName;
  }

  #getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  introduction() {
    return `Halo! Nama saya ${this.#getFullName()}, umur saya ${
      this.age
    } saya biasa dipanggil ${this.username}`;
  }
}

const user1 = new Users("Heisenberg", 24, "Rafi", "Hadiyasa");
const user2 = new Users("Ami", 19, "Rahma", "Haifah");

console.log(user1.introduction());
console.log(user2.introduction());
