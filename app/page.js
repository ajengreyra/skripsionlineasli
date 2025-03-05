'use client';

// pages/page.js
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>Skripsi Online</title>
        <meta name="description" content="Skripsi Online dengan Sticky Heading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="navbar">
        <h1>Skripsi Online</h1>
      </header>

      <main className="main-content">
        <div className="content">
          <section className="section">
            <h2 className="sticky-heading">Bab 1 - Pendahuluan</h2>
            <p>
              Pada bab ini, penulis akan menjelaskan latar belakang penelitian yang melatarbelakangi
              topik ini. Perkembangan teknologi informasi telah membawa dampak besar terhadap berbagai aspek kehidupan,
              termasuk dunia pendidikan. Transformasi digital telah mengubah cara siswa belajar, guru mengajar, dan bagaimana
              institusi pendidikan mengelola sumber daya. Dalam beberapa dekade terakhir, penggunaan teknologi dalam pendidikan
              semakin meningkat dengan adopsi e-learning, platform pembelajaran online, serta penggunaan perangkat digital
              dalam proses belajar mengajar.
            </p>
            <p>
              <strong>Rumusan Masalah:</strong> Bagaimana pengaruh teknologi informasi terhadap kualitas
              pendidikan di Indonesia? Apa saja tantangan dan peluang yang dihadapi oleh sekolah-sekolah dalam
              mengimplementasikan teknologi ini? Bagaimana kesiapan sekolah-sekolah di Indonesia dalam mengadopsi teknologi
              untuk mendukung pembelajaran?
            </p>
            <p>
              <strong>Tujuan Penelitian:</strong> Mengetahui dampak teknologi informasi pada pendidikan, serta
              untuk memberikan rekomendasi kepada pihak terkait. Penelitian ini juga bertujuan untuk menganalisis faktor-faktor
              yang mempengaruhi adopsi teknologi dalam dunia pendidikan dan sejauh mana efektivitasnya dalam meningkatkan
              hasil belajar siswa.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 2 - Tinjauan Pustaka</h2>
            <p>
              Bab ini mengulas berbagai penelitian dan teori yang relevan dengan topik yang dibahas dalam
              skripsi ini. Salah satu teori utama yang menjadi dasar penelitian ini adalah teori pembelajaran berbasis teknologi,
              yang menekankan bagaimana teknologi dapat meningkatkan efektivitas proses belajar mengajar. Beberapa penelitian terdahulu
              menunjukkan bahwa penggunaan media digital dalam pembelajaran dapat meningkatkan keterlibatan siswa, memperbaiki akses ke
              materi pembelajaran, dan memberikan fleksibilitas dalam proses belajar.
            </p>
            <p>
              Beberapa studi juga menemukan bahwa meskipun teknologi memberikan manfaat besar, terdapat berbagai tantangan yang harus
              diatasi, seperti kurangnya infrastruktur teknologi di daerah terpencil, kesenjangan digital antara sekolah perkotaan dan
              pedesaan, serta kurangnya pelatihan bagi tenaga pendidik untuk mengoptimalkan penggunaan teknologi.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 3 - Metodologi Penelitian</h2>
            <p>
              Metodologi penelitian ini menjelaskan pendekatan yang digunakan dalam mengumpulkan dan menganalisis data.
              Penelitian ini menggunakan metode kuantitatif dengan pendekatan survei untuk mendapatkan data yang relevan dengan topik penelitian.
            </p>
            <p>
              <strong>Populasi dan Sampel:</strong> Populasi penelitian ini mencakup sekolah dasar dan menengah di Indonesia,
              dengan fokus pada sekolah-sekolah yang telah mengadopsi teknologi informasi dalam pembelajaran mereka. Sampel yang digunakan adalah
              10 sekolah dari berbagai daerah, termasuk kota besar dan daerah terpencil, untuk memperoleh gambaran yang lebih luas mengenai
              implementasi teknologi dalam pendidikan.
            </p>
            <p>
              <strong>Instrumen Penelitian:</strong> Instrumen yang digunakan dalam penelitian ini meliputi kuesioner dan wawancara
              dengan kepala sekolah, guru, serta siswa. Data yang dikumpulkan mencakup tingkat penggunaan teknologi dalam kelas, efektivitasnya
              dalam meningkatkan pemahaman siswa, serta hambatan yang dihadapi dalam implementasi teknologi.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 4 - Hasil dan Pembahasan</h2>
            <p>
              Bab ini menyajikan hasil dari penelitian yang telah dilakukan, serta analisis terhadap data yang diperoleh.
              Dari hasil survei, ditemukan bahwa mayoritas sekolah yang telah mengadopsi teknologi informasi mengalami peningkatan
              kualitas pembelajaran. Guru dan siswa lebih mudah mengakses materi pembelajaran, sementara metode pengajaran interaktif
              seperti video pembelajaran dan kuis digital membantu meningkatkan keterlibatan siswa.
            </p>
            <p>
              Namun, beberapa hambatan masih ditemukan, seperti kurangnya fasilitas di sekolah-sekolah tertentu, konektivitas internet yang
              tidak stabil di daerah pedesaan, serta kurangnya pemahaman tenaga pendidik dalam mengoptimalkan teknologi dalam proses belajar-mengajar.
              Oleh karena itu, diperlukan upaya lebih lanjut untuk meningkatkan infrastruktur dan memberikan pelatihan bagi tenaga pendidik agar teknologi
              dapat digunakan secara optimal.
            </p>
          </section>

          <section className="section">
            <h2 className="sticky-heading">Bab 5 - Kesimpulan</h2>
            <p>
              Berdasarkan hasil penelitian, dapat disimpulkan bahwa teknologi informasi memiliki potensi besar untuk
              meningkatkan kualitas pendidikan di Indonesia. Namun, terdapat tantangan yang perlu diatasi agar teknologi ini dapat diimplementasikan
              secara lebih efektif dan merata di seluruh wilayah.
            </p>
            <p>
              <strong>Rekomendasi:</strong> Pemerintah dan lembaga pendidikan perlu bekerja sama dalam meningkatkan infrastruktur teknologi,
              khususnya di daerah yang masih tertinggal. Selain itu, diperlukan program pelatihan untuk guru agar mereka lebih siap dalam
              mengadopsi teknologi dalam pembelajaran. Dukungan dari semua pihak, termasuk orang tua dan komunitas pendidikan, juga penting
              untuk memastikan bahwa teknologi benar-benar memberikan manfaat maksimal bagi dunia pendidikan.
            </p>
          </section>
        </div>
      </main>

      <style jsx>{`
        .navbar {
          background-color: #ffb6c1; /* Warna pink pastel */
          padding: 20px;
          color: white;
          text-align: center;
        }

        .main-content {
          padding: 20px;
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
        }

        .section {
          margin-bottom: 40px;
        }

        .sticky-heading {
          position: -webkit-sticky;
          position: sticky;
          top: 60px;
          background-color: #fff;
          padding: 10px 0;
          font-size: 24px;
          font-weight: bold;
          z-index: 10;
          border-bottom: 2px solid #ddd;
        }
      `}</style>
    </>
  );
};

export default Page;
