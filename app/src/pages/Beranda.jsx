import {Link} from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
    const {koleksi, loading} = useKoleksi()
    const jumlahKategori = new Set(koleksi.map((alat) => alat.kategori)).size

    return (
        <section>
            <h1>Inventaris Laboratorium</h1>
            <p>Tema: {mahasiswa.tema}</p>
            {loading ? (
                <p>Memuat data...</p>
            ) : (
                <p>
                    Ada {koleksi.length} alat dalam {jumlahKategori} kategori.
                </p>
            )}
            <Link to='/koleksi'>Lihat semua alat</Link>
        </section>
    )
}