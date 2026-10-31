import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import './Tambah.css'

const AWAL = {
    judul: '',
    kategori: 'Mekanika',
    kodeAlat: '',
    jumlah: 1,
    kondisi: 'Baik',
}

export default function Tambah() {
    const {tambahAlat} = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim() === '') {
            setGalat('Judul wajib diisi')
            return
        }

        tambahAlat({
            ...form,
            judul: form.judul.trim(),
            kodeAlat: form.kodeAlat.trim(),
            jumlah: Number(form.jumlah),
        })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Inventaris Baru</h1>

            <label htmlFor='judul'>Judul</label>
            <input id='judul' name='judul' placeholder="Masukkan nama alat" value={form.judul} onChange={ubah} />
            {galat && <p role='alert'>{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id='kategori' name="kategori" value={form.kategori} onChange={ubah}>
                <option>Mekanika</option>
                <option>Listrik dan Magnet</option>
                <option>Termodinamika</option>
                <option>Gelombang dan Optik</option>
            </select>

            <label htmlFor="kodeAlat">Kode Alat</label>
            <input id='kodeAlat' name='kodeAlat' placeholder="Misalnya: MEK-001" value={form.kodeAlat} onChange={ubah} />

            <label htmlFor="jumlah">Jumlah</label>
            <input id="jumlah" name="jumlah" type="number" min={1} value={form.jumlah} onChange={ubah} />

            <label htmlFor="kondisi">Kondisi</label>
            <select id="kondisi" name="kondisi" value={form.kondisi} onChange={ubah}>
                <option>Baik</option>
                <option>Rusak Ringan</option>
                <option>Perlu Kalibrasi</option>
            </select>

            <button type="submit">Simpan</button>
        </form>
    )
}