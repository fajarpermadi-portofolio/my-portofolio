import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import emailjs from "emailjs-com";

// Single-file React component for a modern portfolio website
// Uses Tailwind CSS for styling (assumes Tailwind is configured in the project)
// Imports used: framer-motion, lucide-react. Replace images/text with your own.

export default function PortfolioWebsite() {
  const [isOpen, setIsOpen] = useState(false);
  const projects = [
    {
      title: "PROGRAM PARKIR QR",
      desc: "Program parkir berbasis C++ yang dapat mencetak tiket dan struk secara otomatis dan dibangun dengan framework Qt",
      tags: ["C++", "Open CV", "Qt"],
      img: "/fotoparkir.jpg",
      link: "#",
    },
    {
      title: "WEB ABSENSI QR",
      desc: "Web absensi yang berjalan dengan memasukkan data peserta yang sudah ada di spreadsheet dan mengscan QR-Code static dengan text tertentu yang bisa disesuaikan.",
      tags: ["Apps Script", "Google Sheets"],
      img: "/fotowebabsen.png",
      link: "https://script.google.com/macros/s/AKfycbwTVjfC8BJlmm72tV6qdiCGtnCRZcnoOmg0gygbPHJJpmfbuCBfflA2aGKJFgjLYkhW/exec",
    },
    {
      title: "WEB MONITORING KINERJA",
      desc: "Web yang dibangun di Apps Script yang digunakan untuk menilai kinerja panitia yang datanya sudah dibuat di spreadsheet",
      tags: ["Apps Script", "Google Sheets"],
      img: "/fotointeraksi.jpg",
      link: "https://script.google.com/macros/s/AKfycbwACkE5Vu6SvVByUYg4wYu_rQODpVtgGcly5A28aTWGl9zuSuY_RxNr5TtXg1DJQRfmCg/exec",
    },
  ];

  // ✅ Handler untuk EmailJS
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3u1or54",   // ganti dengan Service ID dari EmailJS
        "template_nwfacyd",  // ganti dengan Template ID
        e.target,       // otomatis ambil data form
        "3835aoeneKLPF7dTU"    // ganti dengan Public Key dari EmailJS
      )
      .then(
        () => {
          alert("✅ Pesan berhasil terkirim!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Gagal mengirim pesan.");
        }
      );

    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-lg font-semibold">AHMAD FAJAR PERMADI</h1>
            <p className="text-xs text-slate-500">IT Enthusiast - Mahasiswa</p>
          </div>
        </div>

      {/* Menu untuk desktop */}
      <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
        <a href="#projects" className="hover:text-slate-900">Project</a>
        <a href="#about" className="hover:text-slate-900">Tentang</a>
        <a href="#skills" className="hover:text-slate-900">Kemampuan</a>
        <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:bg-indigo-700">
          Kontak
        </a>
      </nav>

      {/* Tombol menu untuk mobile */}
      <div className="md:hidden">
        <button
          aria-label="open menu"
          className="p-2 rounded-md border"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      {/* Menu dropdown untuk mobile */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">
          <a href="#projects" className="hover:text-slate-900">Project</a>
          <a href="#about" className="hover:text-slate-900">Tentang</a>
          <a href="#skills" className="hover:text-slate-900">Kemampuan</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:bg-indigo-700">
            Contact
          </a>
        </nav>
      )}
    </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Saya mencintai dunia teknologi dan komputer.</h2>
          <p className="mt-4 text-slate-600">Saya mendalami bidang hardware, jaringan, dan beberapa bahasa coding untuk membuat program maupun web dengan memanfaatkan AI.</p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium shadow-lg">Lihat Hasil Kerja Saya</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border">Hubungi Saya</a>
          </div>

          <div className="mt-6 flex gap-4 items-center text-slate-600">
            <a href="https://github.com/fajarpermadi-portofolio" aria-label="github" className="inline-flex items-center gap-2"> <Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/in/ahmad-fajar-permadi-a54758270/" aria-label="linkedin" className="inline-flex items-center gap-2"> <Linkedin size={18}/> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-full h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-200">
            <img src="/foto2.JPG" alt="hero" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -bottom-8 left-11 bg-white rounded-xl p-3 shadow-lg w-[78%] ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <img src="/foto.jpg" alt="avatar" className="w-20 h-20 rounded-full object-cover"/>
              <div>
              <div className="text-lg font-semibold">Bersedia untuk Bekerja</div>
              <div className="text-base text-slate-500">Terbuka untuk magang dan part-time.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto p-6 mt-16">
        <h3 className="text-2xl font-semibold">Project</h3>
        <p className="text-slate-600 mt-2">Hasil project yang telah saya buat (belum layak industri). Saya sedang belajar agar kemampuan saya siap membuat project kelas industri.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={i} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-slate-100">
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                  </div>
                  <a href={p.link} aria-label="open project" className="p-2 rounded-md hover:bg-slate-50"><ExternalLink size={16}/></a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mt-12">
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-xl font-semibold">Tentang Saya</h3>
          <p className="text-slate-600 mt-3">Saya adalah mahasiswa semester awal dengan latar belakang pendidikan Teknik Komputer dan Jaringan, dan saya memiliki ketertarikan pada dunia teknologi. Saya sudah terbiasa mengoperasikan komputer sejak umur saya masih 6 tahun.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium">Pengalaman</h5>
              <p className="text-xs text-slate-500 mt-1">Magang - 5 Bulan di Trans Computer, IT Staff SMK AL-IKHLAS TAROKAN.</p>
              <p className="text-xs text-slate-500 mt-1">Organisasi - Ketua Divisi Internal Hima Prodi Sistem Informasi Universitas Nusantara PGRI Kediri.</p>
            </div>
            <div>
              <h5 className="text-sm font-medium">Pendidikan</h5>
              <p className="text-xs text-slate-500 mt-1">Program Studi Sistem Informasi (ongoing) — Universitas Nusantara PGRI Kediri</p>
            </div>
          </div>
        </div>

        <aside id="skills" className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100">
          <h4 className="text-lg font-semibold">Kemampuan</h4>
          <div className="mt-4 space-y-3">
            <SkillBar name="Pengetahuan Hardware" value={90} />
            <SkillBar name="Troubleshooting" value={90} />
            <SkillBar name="Programming with AI" value={97} />
            <SkillBar name="Minat Belajar" value={85} />
          </div>
        </aside>
      </section>

{/* Contact */}
<section id="contact" className="max-w-6xl mx-auto p-6 mt-12">
  <div className="bg-white rounded-2xl shadow-md ring-1 ring-slate-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Info Kontak */}
    <div>
      <h3 className="text-xl font-semibold">Ayo buat project bersama</h3>
      <p className="text-slate-600 mt-2">
        Saya terbuka untuk part-time dan magang. Atau pekerjaan apapun yang bisa saya lakukan sambil kuliah. Kontak saya dan akan saya balas segera.
      </p>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3">
          <Mail size={25} />
          <div>
            <div className="text-sm font-medium">Email</div>
            <div className="text-xs text-slate-500">fajarpermadi2713@gmail.com</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Github size={25} />
          <div>
            <div className="text-sm font-medium">GitHub</div>
            <a href="https://github.com/fajarpermadi-portofolio" className="text-xs text-slate-500">github.com/fajarpermadi-portofolio</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/tel-icon.svg" width={25} height={25} alt="WhatsApp" />
          <div>
            <div className="text-sm font-medium">WhatsApp</div>
            <a href="https://api.whatsapp.com/send/?phone=6288989983993&text&type=phone_number&app_absent=0" className="text-xs text-slate-500">088989983993-klik disini</a>
          </div>
        </div>
      </div>
    </div>
          {/* Form Kontak */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Nama"
                name="nama" // ✅ penting untuk EmailJS
                className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <input
                required
                placeholder="Email"
                type="email"
                name="email" // ✅ penting untuk EmailJS
                className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <input
              placeholder="Subjek"
              name="subjek" // ✅ penting untuk EmailJS
              className="p-3 rounded-md border w-full"
            />
            <textarea
              placeholder="Pesan singkat"
              name="pesan" // ✅ penting untuk EmailJS
              rows={5}
              className="p-3 rounded-md border w-full"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Kirim pesan
            </button>
          </form>
  </div>
</section>


      <footer className="max-w-6xl mx-auto p-6 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>© {new Date().getFullYear()} Ahmad Fajar Permadi</div>
        </div>
      </footer>
    </div>
  );
}

function SkillBar({ name, value }) {
  return (
    <div>
      <div className="flex justify-between text-xs">
        <div className="font-medium">{name}</div>
        <div className="text-slate-500">{value}%</div>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: 'linear-gradient(90deg, #6366f1, #ec4899)' }}></div>
      </div>
    </div>
  );
}
