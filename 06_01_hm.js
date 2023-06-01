console.clear();

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console
// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

// 1
const a = 7;
const b = 8;
const c = 9;

console.log(a);
console.log(b);
console.log(c);


// 2

console.clear();

const word1 = 'Jonas';
const word2 = 'Antanas';
const word3 = 'Maryte';

// 3

console.clear();

const array1 = [1, 2, 3, 4, 5];
const array2 = [12, 25, 35, 41, 5];
const array3 = [11, 12, 32, 48, 50];

console.log(array1);
console.log(array2);
console.log(array3);

// 4

console.clear();

const array4 = ['Vienas', 'Du', 'Trys', 'Keturi', 'Penki'];
const array5 = ['Antanas', 'Du', 'Maryte', 'Keturi', 'Penki'];
const array6 = ['Vienas', 'Zilvinas', 'Trys', 'Petras', 'Penki'];

console.log(array4);
console.log(array5);
console.log(array6);

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
// Rezultatą išvesti į console
// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios 
// taip, jog tarp jų būtų kablelis ir tarpas

// 5

console.clear();

const k = a + b + c;

console.log(k);

// 6 

console.clear();

const jungtinis = `${word1} ${word2} ${word3}`;

console.log(jungtinis);

// 7

console.clear();

const array11 = [1, 2, 3, 4, 5];
const array22 = [12, 25, 35, 41, 5];
const array33 = [11, 12, 32, 48, 50];

const apskaiciuoti = array11[0] - array11[1] + array11[2] - array11[3] + array11[4];
const apskaiciuoti1 = array22[0] - array22[1] + array22[2] - array22[3] + array22[4];
const apskaiciuoti2 = array33[0] - array33[1] + array33[2] - array33[3] + array33[4];

console.log(apskaiciuoti);
console.log(apskaiciuoti1);
console.log(apskaiciuoti2);

// 8 

const array44 = ['Vienas', 'Du', 'Trys', 'Keturi', 'Penki'];
const array55 = ['Antanas', 'Du', 'Maryte', 'Keturi', 'Penki'];
const array66 = ['Vienas', 'Zilvinas', 'Trys', 'Petras', 'Penki'];

const jungtis = `${array44[4]} ${array44[3]} ${array44[2]} ${array44[1]} ${array44[0]}`;

console.log(jungtis);

const jungtis1 = `${array44[4]}, ${array44[3]}, ${array44[2]}, ${array44[1]}, ${array44[0]}.`;

console.log(jungtis1);

// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

// 9

console.clear();

function empty(){
    return ;
}

console.log(empty());

function empty1(){
    return false;
}

console.log(empty1());

// Funkcija pavadinimu “daugyba”:
// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

// 10

console.clear();

function multi(pirmas, antras){
    return pirmas * antras;
}

const a1 = 8;
const b1 = 10;

console.log(multi(a1, b1));

