// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const colors = ["Yellow", "Pink", "Whita", "Purple", "Blue", "Black", "Grey"];
const restorans = [
  "Bento", //0
  "Sushi", //1
  "Pancake", //2
  "Eggy", //3
  "Padang", //4
  "Tteok", //5
  "Tempura", //6
  "Katsu", //7
  "Padang", //8
  "Katsu", //9
  "Geprek", //10
];
//Set Monica Restoran tidak boleh duplikat
let monicaColors = new Set();
monicaColors.add(colors[1]);
monicaColors.add(colors[0]);
monicaColors.add(colors[2]);
monicaColors.add(colors[3]);

let wendyColors = new Set();
wendyColors.add(colors[4]);
wendyColors.add(colors[5]);
wendyColors.add(colors[6]);

//Set Monica Restoran tidak boleh duplikat
let monicaRestoran = new Set();
monicaRestoran.add(restorans[0]);
monicaRestoran.add(restorans[1]);
monicaRestoran.add(restorans[2]);
monicaRestoran.add(restorans[3]);
monicaRestoran.add(restorans[4]);
monicaRestoran.add(restorans[0]);
monicaRestoran.add(restorans[3]);
monicaRestoran.add(restorans[8]);
monicaRestoran.add(restorans[5]);
monicaRestoran.add(restorans[1]);
monicaRestoran.add(restorans[1]);

let wendyRestoran = new Set();
wendyRestoran.add(restorans[6]);
wendyRestoran.add(restorans[0]);
wendyRestoran.add(restorans[1]);
wendyRestoran.add(restorans[2]);
wendyRestoran.add(restorans[4]);
wendyRestoran.add(restorans[9]);
wendyRestoran.add(restorans[10]);
wendyRestoran.add(restorans[2]);
wendyRestoran.add(restorans[3]);

//untulMonica
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [...monicaColors],
  isHavePet: "Yes",
  education: [
    { name: "SD 01", city: "Jakarta", graduate: 2016 },
    { name: "SMP 02", city: "Jakarta", graduate: 2019 },
    { name: "SMA 02", city: "Tangerang" },
  ],
  favoriteRestaurant: [...monicaRestoran],
};

//untukWendy
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: [...wendyColors],
  isHavePet: "No",
  education: [
    { name: "SD 02", city: "Jakarta", graduate: 2010 },
    { name: "SMP 03", city: "Bogor", graduate: 2013 },
    { name: "SMA 01", city: "Surabaya", graduate: 2016 },
    { name: "Universitas Maju", city: "Tangerang" },
  ],
  favoriteRestaurant: [...wendyRestoran],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
