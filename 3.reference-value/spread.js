// Spread operator

const layla = {
  username: "Layla",
  damage: 2300,
};

const lord = {
  title: "Lord",
  ...layla, // Operator Spread... membuat object baru yang mirip dengan object layla
};

layla.damage = 2500; // apapun yang terjadi dengan layla, tidak akan mempengaruhi lord

console.log(layla);
console.log(lord);

const miya = {
  ...layla,
};

miya.username = "Miya";
miya.damage = 3000;

console.log(miya);
