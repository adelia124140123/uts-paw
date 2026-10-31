import { useEffect, useState } from "react";

export default function useLocalStorage(kunci, nilaiAwal) {
    const [nilai, setNilai] = useState(nilaiAwal);

    return [nilai, setNilai];
}
