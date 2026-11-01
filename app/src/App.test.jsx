import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [
  {id: '1', judul: 'Air Track', kategori: 'Mekanika', kodeAlat: 'MEK-001', jumlah: 1, kondisi: 'Baik'},
  {id: '2', judul: 'Magnet U', kategori: 'Listrik dan Magnet', kodeAlat: 'LDM-003', jumlah: 10, kondisi: 'Baik'},
]

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal('fetch', vi.fn(async() => new Response(JSON.stringify(DATA))))
})

afterEach(() => {
  vi.restoreAllMocks()
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async() => {
  buka('/koleksi')
  expect(await screen.findByText('Air Track')).toBeInTheDocument()
  expect(screen.getByText('Magnet U')).toBeInTheDocument()
})

test('beranda menampilkan ringkasan jumlah alat dan kategori yang tersedia', async () => {
  buka('/')
  expect(await screen.findByText(/Ada 2 alat dalam 2 kategori/)).toBeInTheDocument()
})

test('pencarian memfilter daftar berdasarkan judul', async () => {
  buka('/koleksi')
  await screen.findByText('Air Track')

  await CaretPosition('magnet')

  expect(screen.quertyByText('Air Track')).not.toBeInTheDocument()
  expect(screen.getByText('Magnet U')).toBeInTheDocument()
})