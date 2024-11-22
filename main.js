//tasks
// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun
// getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
// faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
//  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
// 1 den cox Car dan istifade ederek masinlar yaradin
// SportsCar  adindan class yaradin ve car dan extend etsin
// sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
// toSpeed(masinin sureti)
// daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
// goturun elave olaraq maksimum suretinide qeyd edin
// daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin 
// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s 
// Sual olduqda pls qrupa yazin , ugurlar :)


// class Car {
//     constructor(brand, model, year, price, color, percent) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.price = price
//         this.color = color
//         this.percent = percent
//     }
//     getCarInfo() {
//         return `Masin melumatlari markasi : ${this.brand} modeli : ${this.model} ili : ${this.year} rengi : ${this.color} qiymeti: ${this.price} $ `
//     }
//     calculatePerecent() {
//         console.log("endirim tetbiq olundu !");
//         this.price *= (100 - this.percent) / 100;
//     }
// }

// class SportsCar extends Car {
//     constructor(brand, model, year, price, color, percent, toSpeed, speedPercent) {
//         super(brand, model, year, price, color, percent)
//         this.toSpeed = toSpeed;
//         this.speedPercent = speedPercent
//     }
//     getCarInfo() {
//         console.log(super.getCarInfo(), "sureti " + this.toSpeed);
//     }
//     incrementSpeed() {
//         this.toSpeed += (this.toSpeed*this.speedPercent/100)
//     }
// }

// const sport1 = new SportsCar("Ferrari", "M123", 2020, 200000, "black", 10, 300, 15);
// const car = new Car();
// console.log(car.brand);

// sport1.getCarInfo();
// sport1.incrementSpeed();
// sport1.getCarInfo();



// const mercedes = new Car("Mercedes", "Cesqa", "2000", 12000, "black", 20);
// const bmw = new Car("Bmw", "M5", "2020", 42000, "black", 25);
// console.log(mercedes.getCarInfo());

// mercedes.calculatePerecent();
// mercedes.getCarInfo()
// console.log(bmw.getCarInfo());
// bmw.calculatePerecent()

// console.log(bmw.getCarInfo());

// Market Task

// OOP  example Market
// endririm karti 
// mehsullar 
// faiz

let netice = confirm("sizin endirim kartiniz varmi ?");
// true ve ya false
let mehsullar = [
    {
        name: "doner",
        price: 2
    }, {
        name: "sud",
        price: 1.8
    }, {
        name: "saqqiz",
        price: 1
    }, {
        name: "winston",
        price: 4
    }
]


if (netice) {
    let name = prompt("zehmet olmasa adinizi daxil  edin ! ");
    let surname = prompt("zehmet olmasa soyadi daxil  edin ! ");
    const person = new Person(name, surname, mehsullar, netice)
    console.log(`${name} ${surname}
            Endirim tetbiq olundu
             odenilecek mebleg:  ${person.hesabla()}
            Geldiyiniz ucun tesekkurler
        `);

} else {
    const person = new Person(null, null, mehsullar, netice)
    console.log(`
         odenilecek mebleg:  ${person.hesabla()}
        Geldiyiniz ucun tesekkurler
    `);
}




// class Person {
//     #surname ="Eliyev";
//     age = 20;
//     #name ="Ayxan"
//     getter(){
//         return this.#name
//     }
//     setter(name){
//         this.#name = name;
//     }
// }

// const person = new Person();
// console.log(person.age);
// console.log(person.getter());
// person.setter("Eltun")
// console.log(person.getter());



























