// class adalah bentuk cetakan dari object.
// cara membuat class

class Users {
  // pembuatan nama class biasanya diawali huruf kapital -> PascalCase
  username; // bisa tidak dituliskan
  age;
  #nik = "317102329123123"; // pakai pager supaya tidak bisa dipanggil
  // # digunakan untuk menyembunyikan properti yang hanya bisa di akses di dalam object itu sendiri (private field)

  constructor(inputUsername, inputAge) {
    this.username = inputUsername + " " + this.#nik; // NIK bisa dipanggil disini tapi tidak diluar object
    this.age = inputAge;
    this.job = "Anak Bunda"; // tidak dituliskan
    console.log("Constructor dipanggil!"); // Constructor dipanggil atau tidak
  }
}

const user1 = new Users("Rafi", 24); // sama yah kaya java
const user2 = new Users("Rani", 22); // sama yah kaya java
const user3 = new Users("Rahma", 18);

console.log(user1.nik); // Bisa dipanggil dari luar kalo tanpa #

console.log(user1);
console.log(user2);
console.log(user3);
