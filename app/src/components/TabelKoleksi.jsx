import KartuItem from "./kartuItem.jsx";

export default function TabelKoleksi({daftar}) {
    return (
        <div className="gulir-alat">
            <table id='tabel-koleksi' className="tabel-alat">
                <thead>
                    <tr>
                        <th>Nama Alat</th>
                        <th>Kategori</th>
                        <th>Kode Alat</th>
                        <th>Jumlah</th>
                        <th>Kondisi</th>
                    </tr>
                </thead>
                <tbody>
                    {daftar.map((alat) => (
                        <KartuItem key={alat.id} alat={alat} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}