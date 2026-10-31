import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KotakPencarian from "../components/kotakPencarian.jsx";
import KartuItem from "../components/kartuItem.jsx";

export default function Koleksi() {
    const {koleksi, loading, error} = useKoleksi()
    const [cari, setCari] = useState('')
    const [kategori, setKategori] = useState('Semua')

    if (loading) return <p>Memuat data...</p>
    if (error) return <p role='alert'>Gagal memuat: {error}</p>

    const daftarKategori = ['Semua', ...new Set(koleksi.map((alat) => alat.kategori))]
    const tampil = koleksi.filter(
        (alat) =>
            alat.judul.toLowerCase().includes(cari.toLowerCase()) &&
            (kategori === 'Semua' || alat.kategori === kategori),
    )

    return (
        <section>
        <h1>Daftar Inventaris Alat Laboratorium</h1>
        <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <select aria-label='Kategori' value={kategori} onChange={(e) => setKategori(e.target.value)}>
            {daftarKategori.map((k) => (
                <option key={k}>{k}</option>
            ))}
            </select>
        </div>
        {tampil.length === 0 ? (
            <p>Tidak ada alat yang cocok.</p>
        ) : (
            <div className="daftar-kartu">
                {tampil.map((alat) => (
                    <KartuItem key={alat.id} alat={alat} />
                ))}
            </div>
        )}
        </section>

    )
}