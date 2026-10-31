import { useEffect, useState } from 'react';
import { KoleksiContext} from './koleksiContext.js'
import useLocalStorage from '../hooks/useLocalStorage.js';

export function KoleksiProvider({children}) {
    const [koleksi, setKoleksi] = useLocalStorage('inventaris-lab-koleksi', null)
    const [loading, setLoading] = useState(koleksi === null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (koleksi !== null) return
        async function muat() {
            try {
                const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`)
                if (!res.ok) throw new Error(`Gagal memuat data (status ${res.status})`)
                setKoleksi(await res.json())
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        muat()
    }, [koleksi, setKoleksi])

    const tambahAlat = (alat) =>
        setKoleksi((lama) => [...(lama ?? []), {...alat, id: String(Date.now()) }])

    const hapusAlat = (id) => 
        setKoleksi((lama) => (lama ?? []).filter((alat) => alat.id !== id))

    return (
        <KoleksiContext.Provider value={{koleksi: koleksi ?? [], loading, error, tambahAlat, hapusAlat}}>
            {children}
        </KoleksiContext.Provider>   
    )
}