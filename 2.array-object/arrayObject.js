// Ini penting, karena biasanya data yang diambil
// di simpan dalam bentuk object di dalam array

const miya = {
  name: "Miya",
  role: "Marksman",
  damage: 2000,
};

const layla = {
  name: "Layla",
  role: "Marksman",
  damage: 1900,
};

const alucard = {
  name: "Alucard",
  role: "Fighter",
  damage: 2300,
};

const akai = {
  name: "Akai",
  role: "Tank",
  damage: 1200,
};

// Kita memiliki 4 object yang terpisah

const heroes = [
  miya,
  layla,
  alucard,
  akai,
  { name: "Aurora", role: "Mage", damage: "1000" },
];
console.log(heroes);

console.log("\n------- FOR EACH ARRAY OBJECT -------");
/* 
1.
Nama Hero : Miya
Role Hero : Marksman
Damage : 2000
*/
heroes.forEach((hero, index) => {
  console.log(`
    ${index + 1}.
    Nama Hero : ${hero.name}
    Role Hero : ${hero.role}
    Damage    : ${hero.damage}\n`);
});

console.log("\n------- FOR BIASA ARRAY OBJECT -------");
for (let i = 0; i < heroes.length; i++) {
  console.log(`
    ${i + 1}.
    Nama Hero : ${heroes[i].name}
    Role Hero : ${heroes[i].role}
    Damage    : ${heroes[i].damage}\n`);
}

// Kasih challenge ke trainee
// Membuat sebuah object yang di dalamnya ada propertie object.
// Dan di dalam properties object memiliki array
// Kemudian akses arraynya

// Contoh Challenge
// Buat sebuah object yang memiliki nama dan no telp,
// kemudian si object memiliki daftar contacts (nama, telp, dan address)
// Addres memiliki isi jalan, region, provinsi, dan kode pos

// Object User di dalamnya ada properties nama, no telp, dan object contacts
// di dalam contacts terdapat array yang berisi nama, no telp, dan address
// di dalam address ada nama jalan, region, provinsi, dan kodepos

const filteredHero = heroes.filter((hero) => hero.damage >= 2000);
console.log("------ FILTER DAMAGE HERO ---------");
filteredHero.forEach((hero, index) => {
  console.log(`
    ${index + 1}.
    Nama Hero : ${hero.name}
    Role Hero : ${hero.role}
    Damage    : ${hero.damage}\n`);
});

console.log("------ FIND HERO ---------");

const findHero = heroes.find((hero) => hero.name === "Layla");
console.log(`
Nama Hero : ${findHero.name}
Role Hero : ${findHero.role}
Damage    : ${findHero.damage}\n`);
