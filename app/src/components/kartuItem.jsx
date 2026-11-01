import {Link} from 'react-router-dom'

export default function KartuItem({alat}) {
    const {id, judul, kategori, kodeAlat, jumlah, kondisi} = alat
    return (
        <tr>
            <td>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </td>
            <td>{kategori}</td>
            <td>{kodeAlat}</td>
            <td>{jumlah}</td>
            <td>{kondisi}</td>
        </tr>
    )
}