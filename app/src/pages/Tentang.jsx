import mahasiswa from '../../mahasiswa.json'

const REPO = 'https://github.com/adelia124140123/uts-paw'

export default function Tentang() {
    const {nama, nim, kelas, tema} = mahasiswa
    return (
        <section>
            <h1>Tentang Pembuat</h1>
            <dl>
                <dt>Nama</dt>
                <dd>{nama}</dd>
                <dt>NIM</dt>
                <dd>{nim}</dd>
                <dt>Kelas</dt>
                <dd>{kelas}</dd>
                <dt>Tema</dt>
                <dd>{tema}</dd>
            </dl>
            <p>
                Kode sumber: <a href={REPO}>Kunjungi Repositori Github Saya</a>
            </p>
        </section>
    )
}