"use client";

import { useEffect, useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88",
  living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  pool: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85",
  evening: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
};

const navItems = [
  ["Beranda", "home"],
  ["Tentang", "about"],
  ["Galeri", "gallery"],
  ["Fasilitas", "amenities"],
  ["Ulasan", "reviews"],
  ["Lokasi", "location"],
];

const amenities = [
  ["◯", "Infinity Pool", "Kolam renang privat menghadap alam"],
  ["⌁", "Wi-Fi Cepat", "Koneksi internet fiber optic"],
  ["◇", "Sarapan Pagi", "Menu lokal & internasional"],
  ["✧", "Layanan Spa", "Pijat tradisional Bali on-call"],
];

const reviews = [
  ["B", "Budi Santoso", "Tamu dari Jakarta", "Vila yang luar biasa! Kolam renangnya bersih banget dan viewnya luar biasa. Desain interiornya sangat estetik, cocok untuk liburan romantis.", "bg-[#8b5a33]"],
  ["S", "Sarah Wijaya", "Tamu dari Surabaya", "Pengalaman menginap yang sangat menenangkan. Bangun pagi langsung disambut pemandangan hijau dan suara burung. Pelayanannya ramah dan profesional.", "bg-[#2c6e6f]"],
  ["A", "Andi Pratama", "Tamu dari Bandung", "Fasilitas lengkap, kebersihan terjaga. Proses booking juga sangat mudah melalui aplikasi. Pasti akan kembali lagi ke sini!", "bg-[#8b5a33]"],
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function Photo({ src, alt, className = "" }) {
  return (
    <div
      className={`bg-cover bg-center ${className}`}
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full px-6 text-white transition-all duration-300 md:px-12 ${scrolled || menuOpen ? "bg-[#1a1a1a] py-3 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-bold tracking-[0.16em]" onClick={closeMenu}>VILLA AURA</a>

        <nav className="hidden items-center space-x-8 text-sm font-medium uppercase tracking-wider md:flex" aria-label="Navigasi utama">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="transition hover:text-[#8b5a33]">{label}</a>)}
        </nav>

        <a href="#book" className="hidden rounded-full bg-[#8b5a33] px-6 py-2 text-sm font-semibold tracking-wide shadow-lg transition hover:bg-[#2c6e6f] md:block">Pesan Sekarang</a>
        <button
          type="button"
          className="relative z-50 flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-px w-6 bg-white transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>

      <nav id="mobile-navigation" className={`${menuOpen ? "flex" : "hidden"} mx-auto max-w-7xl flex-col gap-5 pb-5 pt-8 text-xl uppercase tracking-wider md:hidden`} aria-label="Navigasi mobile">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a href="#book" className="mt-2 w-fit rounded-full bg-[#8b5a33] px-5 py-3 text-sm font-semibold" onClick={closeMenu}>Pesan Sekarang</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <header id="home" className="relative flex min-h-[680px] h-screen items-center justify-center">
      <Photo src={images.hero} alt="Pemandangan eksterior Villa Aura dengan kolam renang" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="relative mt-16 max-w-4xl px-4 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d1a06f]">Escape to Paradise</p>
        <h1 className="mb-6 font-serif text-5xl leading-tight drop-shadow-lg md:text-7xl">Kemewahan Tropis dalam Setiap Detail</h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light opacity-90 drop-shadow-md md:text-xl">Rasakan pengalaman menginap tak terlupakan di vila privat eksklusif kami, dikelilingi oleh alam yang asri dan pemandangan menakjubkan.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#book" className="flex items-center justify-center gap-2 rounded-full bg-[#8b5a33] px-8 py-4 text-sm font-semibold uppercase tracking-wider shadow-xl transition hover:-translate-y-1 hover:bg-[#2c6e6f]">Booking Sekarang <ArrowIcon /></a>
          <a href="#gallery" className="rounded-full border border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-wider transition hover:bg-white hover:text-[#1a1a1a]">Lihat Galeri</a>
        </div>
      </div>
    </header>
  );
}

function QuickInfo() {
  return (
    <div className="relative z-10 -mt-8 mx-4 flex max-w-4xl flex-wrap justify-center gap-6 rounded-xl bg-[#8b5a33] px-6 py-4 text-sm text-white shadow-2xl md:mx-auto md:gap-12 md:text-base">
      <span className="flex items-center gap-2"><span className="text-yellow-300">★</span><strong>4.9/5</strong> (120+ Ulasan)</span>
      <span className="flex items-center gap-2"><span className="text-[#e5e0d8]">⌖</span> Ubud, Bali</span>
      <span className="flex items-center gap-2"><span className="text-[#e5e0d8]">◯</span> Private Infinity Pool</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8b5a33]">Tentang Villa</p>
          <h2 className="mb-6 font-serif text-4xl leading-tight text-[#1a1a1a] md:text-5xl">Konsep Indoor-Outdoor yang Seamless</h2>
          <p className="mb-6 font-light leading-relaxed text-gray-600">Villa Aura dirancang untuk menyatukan Anda dengan alam. Dengan pintu geser kaca besar yang membuka ke arah kolam renang, Anda dapat menikmati semilir angin tropis dan pemandangan hijau dari dalam ruangan.</p>
          <ul className="mb-8 space-y-3 text-gray-700">
            {["Desain arsitektur kayu dan batu alam", "Kolam renang privat dengan air jernih", "Teras luas untuk bersantai", "Pemandangan alam yang menenangkan"].map((item) => <li key={item} className="flex items-center gap-3"><span className="text-[#2c6e6f]">✓</span>{item}</li>)}
          </ul>
          <a href="#book" className="inline-flex items-center gap-2 border-b-2 border-[#8b5a33] pb-1 font-semibold text-[#8b5a33] transition hover:border-[#2c6e6f] hover:text-[#2c6e6f]">Pelajari Lebih Lanjut <ArrowIcon /></a>
        </div>
        <div className="relative">
          <Photo src={images.living} alt="Ruang tamu Villa Aura" className="h-[500px] w-full rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[#8b5a33] p-6 text-white shadow-xl md:block"><p className="mb-1 font-serif text-2xl">100%</p><p className="text-xs uppercase tracking-widest">Private & Nyaman</p></div>
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8b5a33]">Fasilitas</p>
        <h2 className="mb-16 font-serif text-4xl text-[#1a1a1a]">Fasilitas Unggulan</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {amenities.map(([icon, title, text]) => <article key={title} className="rounded-2xl bg-[#fdfbf7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"><span className="mb-4 block text-4xl text-[#8b5a33]" aria-hidden="true">{icon}</span><h3 className="mb-2 text-lg font-semibold">{title}</h3><p className="text-sm text-gray-500">{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryItems = [[images.pool, "Pool Side"], [images.evening, "Evening View"], [images.bedroom, "Bedroom"], [images.hero, "Villa View"]];

  return (
    <section id="gallery" className="bg-[#fdfbf7] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8b5a33]">Galeri</p><h2 className="font-serif text-4xl text-[#1a1a1a]">Momen di Villa Aura</h2></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(([src, alt], index) => <div key={alt} className={`group relative h-64 overflow-hidden rounded-2xl shadow-md ${index === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}><Photo src={src} alt={alt} className="h-full w-full transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" /></div>)}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-[#1a1a1a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center"><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8b5a33]">Testimoni</p><h2 className="mb-4 font-serif text-4xl">Apa Kata Tamu Kami</h2><div className="flex items-center justify-center gap-2 text-xl text-yellow-400">★★★★★ <span className="ml-2 text-base text-white">4.9 dari 5 (120+ ulasan)</span></div></div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map(([initial, name, detail, quote, color]) => <article key={name} className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm"><div className="mb-4 text-yellow-400">★★★★★</div><p className="mb-6 italic text-gray-300">&quot;{quote}&quot;</p><div className="flex items-center gap-4"><span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${color}`}>{initial}</span><div><p className="mb-1 font-semibold">{name}</p><p className="text-xs text-gray-400">{detail}</p></div></div></article>)}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8b5a33]">Lokasi</p>
          <h2 className="mb-6 font-serif text-4xl text-[#1a1a1a]">Temukan Kami di Ubud</h2>
          <p className="mb-8 font-light leading-relaxed text-gray-600">Terletak di jantung Ubud, Villa Aura menawarkan ketenangan yang jauh dari keramaian, namun tetap dekat dengan berbagai atraksi budaya dan kuliner lokal.</p>
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4"><span className="mt-1 text-xl text-[#8b5a33]">⌖</span><div><h4 className="font-semibold">Alamat</h4><p className="text-sm text-gray-500">Jl. Raya Tegallalang, Ubud, Gianyar, Bali 80571</p></div></div>
            <div className="flex items-start gap-4"><span className="mt-1 text-xl text-[#8b5a33]">◷</span><div><h4 className="font-semibold">Check-in / Check-out</h4><p className="text-sm text-gray-500">Check-in: 14:00 WITA | Check-out: 12:00 WITA</p></div></div>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Villa+Aura+Ubud+Bali" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#8b5a33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2c6e6f]">Buka Google Maps <ArrowIcon /></a>
        </div>
        <div className="h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <iframe title="Lokasi Villa Aura di Ubud" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.63234068369!2d115.21469004999999!3d-8.506853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d5c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sUbud%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" className="h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="book" className="relative overflow-hidden bg-[#8b5a33] py-24">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 font-serif text-4xl text-white md:text-5xl">Siap untuk Liburan Impian Anda?</h2>
        <p className="mb-10 text-lg font-light text-white/80">Jangan lewatkan kesempatan untuk menginap di Villa Aura. Pesan sekarang dan dapatkan penawaran khusus untuk pemesanan awal.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row"><a href="mailto:info@villaaura.com?subject=Booking Villa Aura" className="flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 font-semibold uppercase tracking-wider text-[#8b5a33] shadow-xl transition hover:-translate-y-1 hover:bg-[#1a1a1a] hover:text-white">Pesan via Aplikasi <ArrowIcon /></a><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-10 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#8b5a33]">Hubungi Kami <ArrowIcon /></a></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-12 text-white md:px-12">
      <div className="mx-auto mb-12 grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="md:col-span-2"><a href="#home" className="mb-4 block font-serif text-2xl font-bold tracking-widest">VILLA AURA</a><p className="mb-6 max-w-sm text-sm text-gray-400">Vila privat mewah dengan konsep tropis modern di Ubud, Bali. Nikmati pengalaman menginap yang tak terlupakan bersama orang tersayang.</p><div className="flex gap-4"><a href="#gallery" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#8b5a33]">◎</a><a href="#gallery" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#8b5a33]">f</a><a href="#reviews" aria-label="Tripadvisor" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#8b5a33]">★</a></div></div>
        <div><h4 className="mb-4 text-lg font-semibold">Tautan Cepat</h4><ul className="space-y-2 text-sm text-gray-400">{[["Beranda", "home"], ["Tentang Kami", "about"], ["Galeri", "gallery"], ["Ulasan", "reviews"]].map(([label, id]) => <li key={id}><a href={`#${id}`} className="transition hover:text-[#8b5a33]">{label}</a></li>)}</ul></div>
        <div><h4 className="mb-4 text-lg font-semibold">Kontak</h4><ul className="space-y-3 text-sm text-gray-400"><li>⌖ Jl. Raya Tegallalang, Ubud, Bali</li><li>◷ +62 812 3456 7890</li><li>✉ info@villaaura.com</li></ul></div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500"><p>© 2026 Villa Aura. All rights reserved. Designed for Tropical Getaways.</p></div>
    </footer>
  );
}

export default function VillaLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <div className="min-h-screen bg-[#fdfbf7] font-sans text-[#1a1a1a]"><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><QuickInfo /><About /><Amenities /><Gallery /><Reviews /><Location /><Booking /></main><Footer /></div>;
}
