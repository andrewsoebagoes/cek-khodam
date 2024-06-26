document.getElementById('khodamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullname').value;
    const khodam = generateKhodam(name);
    document.getElementById('result').innerHTML = `<p>Khodam untuk <strong>${name}</strong>: <strong>${khodam}</strong></p>`;
});

function generateKhodam(name) {
    // Daftar khodam lucu
    const khodams = [
        'Singa Senyum',
        'Naga Guling',
        'Macan Tersenyum',
        'Elang Ganteng',
        'Kuda Bersemangat',
        'Kelinci Gemas',
        'Tikus Imut',
        'Gajah Gembira',
        'Kucing Menggemaskan',
        'Anjing Setia',
        'Katak Ceria',
        'Kura-Kura Tangguh',
        'Bebek Lucu',
        'Ikan Terbang',
        'Ular Kocak',
        'Burung Hantu Bijak',
        'Domba Lucu',
        'Kupu-Kupu Cerah',
        'Kuda Laut Aneh',
        'Semut Rajin',
        'Lumba-Lumba Riang',
        'Kadal Misterius',
        'Tupai Lincah',
        'Belalang Gesit',
        'Lebah Bekerja Keras',
        'Cacing Ajaib',
        'Laba-Laba Kreatif',
        'Tikus Tanah Pendiam',
        'Berang-Berang Ceria',
        'Kepiting Pemalu',
        'Kanguru Melompat',
        'Panda Mengantuk',
        'Zebra Bergaris',
        'Koala Menggemaskan',
        'Babi Hutan Lucu',
        'Burung Pelikan Aneh',
        'Platipus Kocak',
        'Flamingo Anggun',
        'Kuda Nil Gembira',
        'Cheetah Cepat',
        'Rusa Santai',
        'Lemur Bermata Lebar',
        'Armadillo Pemalu',
        'Kuda Poni Ceria',
        'Tapir Unik',
        'Trenggiling Misterius',
        'Buaya Kocak',
        'Kangkung Lezat',
        'Semangka Segar',
        'Nanas Manis'
    ];
    // Menggunakan hash sederhana dari nama untuk memilih khodam
    const index = name.length % khodams.length;
    return khodams[index];
}
