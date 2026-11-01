import {Link, useNavigate} from 'react-router-dom'

export default function KartuItem({alat}) {
    const navigate = useNavigate()
    const {id, judul, kategori, kodeAlat, jumlah, kondisi} = alat
    return (
        <tr className='baris-alat' onClick={() => navigate(`/koleksi/${id}`)}>
            <td>
                <Link to={`/koleksi/${id}`} onClick={(e) => e.stopPropogation()}>
                {judul}</Link>
            </td>
            <td>{kategori}</td>
            <td>{kodeAlat}</td>
            <td>{jumlah}</td>
            <td>{kondisi}</td>
        </tr>
    )
}