import {Link} from 'react-router-dom'

export default function KartuItem({alat}) {
    const {id, judul, kategori, kodeAlat} = alat
    return (
        <article className='kartu'>
            <h3>
                <Link to = {`/koleksi/${id}`}>{judul}</Link>
            </h3>
            <p>
                {kategori} · kode {kodeAlat}
            </p>
        </article>
    )
}