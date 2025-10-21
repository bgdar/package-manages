<h1 align="center"> Package Manager</h1>

<p align="center">Aplikasi untuk menampilkan daftar package manager pada setiap sistem operasi (Windows, Linux, macOS).</p>

## Tech Stack
<p align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=bun,svelte,sqlite&perline=5" />
  </a><br>
</p>

- **Runtime**: `Bun`
- **Framework**: `Svelte` & `SvelteKit` (Fullstack Web)
- **Database**: `Turso (SQLite modern)`
> database name : `db-name-user.db` 
- **Icons**: `phosphor-svelte` → [Phosphoricons](https://phosphoricons.com/)

## Routes

1. `/` → Halaman utama, menampilkan info sistem: **Windows**, **Linux**, atau **macOS**.
2. `/[systemName]/package/` → Halaman daftar package untuk sistem tertentu:
   - **Windows** → daftar package (contoh: `Scoop`, `Winget`)
   - **Linux** → daftar package manager sesuai distro (`apt`, `pacman`, `dnf`, dll.)
   - **macOS** → daftar package manager (contoh: `brew`)
3. `/[systemName]/package/[typepackage]` → Sub-halaman spesifik, contoh:
   - `/windows/package/scoop`
   - `/linux/package/apt`
   - `/mac/package/brew`

## script

```bash
bun run dev
```
create database with **turso** di root project , jika belum ada 
```bash 
turso db create package-manager
```
