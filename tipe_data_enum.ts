


//TIPE DATA ENUM TYPESCRIPT
enum Gender { Male, Female, Other }

let genderMale: Gender = Gender.Male;
let genderFemale: Gender = Gender.Female;

console.log(genderFemale);
console.log(genderMale);

// MERUBAH NILAI ENUM
enum statusPernikahan { Pria = 9, Wanita = 90, Lainya = 900 }

let anton: statusPernikahan = statusPernikahan.Pria;
let budi: statusPernikahan = statusPernikahan.Wanita;

console.log(anton);
console.log(budi);

//ENUM STRING

enum statusPekerjaan {
    Magang = "Magang",
    KaryawanKontrak = "Karyawan Kontrak",
    KaryawanTetap = "Karyawan Tetap"

}

let marsudi: statusPekerjaan = statusPekerjaan.KaryawanKontrak;
let udi:statusPekerjaan = statusPekerjaan.KaryawanTetap;

console.log(marsudi);
console.log(udi);
