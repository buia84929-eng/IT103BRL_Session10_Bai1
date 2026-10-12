let khoSach = [
    {
        bookCode: "B01",
        title: "Lap trinh JavaScript",
        category: "Cong nghe",
        price: 100000,
        totalCopies: 5,
        availableCopies: 3,
        shelfLocation: "Ke A1"
    },
    {
        bookCode: "B02",
        title: "Co so du lieu",
        category: "Cong nghe",
        price: 150000,
        totalCopies: 4,
        availableCopies: 4,
        shelfLocation: "Ke A2"
    },
    {
        bookCode: "B03",
        title: "Toan cao cap",
        category: "Toan hoc",
        price: 120000,
        totalCopies: 2,
        availableCopies: 1,
        shelfLocation: "Ke B1"
    }
];

let sachMoi = {
    bookCode: "B04",
    title: "Tieng Anh co ban",
    category: "Ngoai ngu",
    price: 90000,
    totalCopies: 3,
    availableCopies: 3,
    shelfLocation: "Ke C1"
};

khoSach.push(sachMoi);
console.log("Da them sach moi!");

for (let i = 0; i < khoSach.length; i++) {
    if (khoSach[i].bookCode === "B01") {
        if (khoSach[i].availableCopies > 0) {
            khoSach[i].availableCopies--;
            console.log("Muon sach thanh cong!");
        } else {
            console.log("HET SACH TREN KE");
        }

        if (khoSach[i].availableCopies === 0) {
            khoSach[i].status = "HET SACH TREN KE";
        }
    }
}

for (let i = 0; i < khoSach.length; i++) {
    if (khoSach[i].bookCode === "B01") {
        if (khoSach[i].availableCopies < khoSach[i].totalCopies) {
            khoSach[i].availableCopies++;
            console.log("Tra sach thanh cong!");
        }
    }
}

for (let i = 0; i < khoSach.length; i++) {
    if (khoSach[i].bookCode === "B02") {
        khoSach[i].shelfLocation = "Ke D1";
    }
}

for (let i = 0; i < khoSach.length; i++) {
    if (khoSach[i].bookCode === "B03") {
        khoSach.splice(i, 1);
        console.log("Da thanh ly sach B03!");
        break;
    }
}

let tongSach = 0;
let sachCon = 0;
let tongTien = 0;

for (let i = 0; i < khoSach.length; i++) {
    tongSach += khoSach[i].totalCopies;
    sachCon += khoSach[i].availableCopies;
    tongTien += khoSach[i].totalCopies * khoSach[i].price;
}

console.log("======================================");
console.log("          BANG KIEM KE THU VIEN       ");
console.log("======================================");
console.table(khoSach);
console.log("======================================");
console.log("Tong so sach: " + tongSach);
console.log("Sach con tren ke: " + sachCon);
console.log("Sach dang duoc muon: " + (tongSach - sachCon));
console.log("Tong gia tri kho: " + tongTien + " VND");
console.log("======================================");
