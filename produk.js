const produkList = [
    {
        id: 1,
        gambar: "https://i.pinimg.com/736x/55/54/13/5554134c0559a80e7e35590529c2e2ab.jpg",
        title: "Gantungan Kunci Anime (SxF)",
        deskripsi: "Gelang eksklusif dengan tema Spy x Family, cocok untuk penggemar anime.",
        hargaAsli: 25000,
        hargaDiskon: 20000,
        isDiskon: true
    },
    {
        id: 2,
        gambar: "https://i.pinimg.com/1200x/81/ba/0f/81ba0f2bb908df6c83a9ca9d98ac6f85.jpg",
        title: "Boneka Rubah (limited edition)",
        deskripsi: "Boneka rubah edisi terbatas yang sangat lembut dan cocok dijadikan hadiah.",
        hargaAsli: 150000,
        hargaDiskon: 0,
        isDiskon: false
    },
    {
        id: 3,
        gambar: "https://i.pinimg.com/736x/60/24/cd/6024cd061797e8379c654b4b77c774e1.jpg",
        title: "Boneka Kucing",
        deskripsi: "Boneka kucing lucu dan empuk dengan bahan berkualitas tinggi.",
        hargaAsli: 150000,
        hargaDiskon: 130000,
        isDiskon: true
    },
    {
        id: 4,
        gambar: "https://i.pinimg.com/1200x/e5/07/7b/e5077bd4a50bfddcc7e40ac27a9bdee7.jpg",
        title: "Action Figure Nezuko",
        deskripsi: "Action figure Nezuko dari Demon Slayer dengan detail pengerjaan tinggi.",
        hargaAsli: 800000,
        hargaDiskon: 0,
        isDiskon: false
    }
];

function formatRupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}