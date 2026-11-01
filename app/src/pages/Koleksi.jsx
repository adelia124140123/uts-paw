import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KotakPencarian from "../components/kotakPencarian.jsx";
import KartuItem from "../components/kartuItem.jsx";
import FilterKategori from "../components/filterKategori.jsx";
import TabelKoleksi from "../components/tabelKoleksi.jsx";
import './Koleksi.css'

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
        <section id="halaman-koleksi">
        <h1>Daftar Inventaris Alat Laboratorium</h1>
        <div id="bilah-alat">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <FilterKategori nilai={kategori} onUbah={setKategori} daftar={daftarKategori} />
        </div>
        {tampil.length === 0 ? (
            <p>Tidak ada alat yang cocok.</p>
        ) : (
            <TabelKoleksi daftar={tampil} />
        )}
        </section>

    )
}