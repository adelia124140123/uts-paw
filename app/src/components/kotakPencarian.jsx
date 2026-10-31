export default function KotakPencarian({nilai, onUbah}) {
    return (
        <input
            type='search'
            placeholder="Cari nama alat..."
            aria-label="Cari nama alat"
            value={nilai}
            onChange={(e) => onUbah(e.target.value)}
        />
    )
}