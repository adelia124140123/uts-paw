import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import './Detail.css'


export default function Detail() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {koleksi, loading, hapusAlat} = useKoleksi()
    const alat = koleksi.find((a) => String(a.id) === id)

    if (loading) return <p>Memuat data...</p>
    if (!alat) {
        return (
            <section>
                <h1>Alat tidak ditemukan</h1>
                <Link to='/koleksi'>Kembali ke koleksi</Link>
            </section>
        )
    }

    const konfirmasiHapus = () => {
        if (window.confirm(`Hapus '${alat.judul}'?`)) {
            hapusAlat(alat.id)
            navigate('/koleksi')
        }
    }

    return (
        <section className="detail">
            <h1>{alat.judul}</h1>
            <dl>
                <dt>Kategori</dt>
                <dd>{alat.kategori}</dd>
                <dt>Kode Alat</dt>
                <dd>{alat.kodeAlat}</dd>
                <dt>Jumlah</dt>
                <dd>{alat.jumlah}</dd>
                <dt>Kondisi</dt>
                <dd>{alat.kondisi}</dd>
            </dl>
            <div className="aksi">
                <button type='button' onClick={konfirmasiHapus}>
                    Hapus
                </button>
                <Link to='/koleksi'>Kembali</Link>
            </div>
        </section>
    )
}