function hitung() {
    // Ambil nilai dari input dan parse menjadi float
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);

    // Cek apakah input valid (bilangan)
    if (!isNaN(bil1) && !isNaN(bil2)) {
        const hasil = bil1 + bil2;
        document.getElementById('hasil').textContent = hasil;
    } else {
        document.getElementById('hasil').textContent = 'Input tidak valid';
    }
}

function reset() {
    // Set nilai input menjadi kosong
    document.getElementById('bil1').value = '';
    document.getElementById('bil2').value = '';
    document.getElementById('hasil').textContent = '0';
}
