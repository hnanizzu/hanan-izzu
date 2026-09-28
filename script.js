/* =====================================================
   DATA WEBSITE — EDIT BAGIAN INI UNTUK MENGGANTI ISI
   ===================================================== */

const portfolio = {
  about: `Saya adalah mahasiswa Seni Intermedia yang mengeksplorasi hubungan antara objek, ruang, tubuh, pengalaman, dan teknologi. Praktik berkarya saya berkembang melalui eksperimen material, instalasi, video, serta berbagai bentuk interaksi dengan ruang dan penonton.`,

  contact: [
    { label: 'Instagram', url: 'https://instagram.com/usernamekamu' },
    { label: 'Email', url: 'mailto:emailkamu@example.com' },
    { label: 'GitHub', url: 'https://github.com/usernamekamu' }
  ],

  works: [
    {
      title: 'Perkara Pulang',
      year: '2026',
      medium: 'Instalasi',
      image: 'images/perkara-pulang.jpg',
      description: 'Karya yang membicarakan pengalaman merantau, jarak, keluarga, ingatan, dan keinginan untuk kembali bertemu.',
      details: {
        'Medium': 'Instalasi',
        'Tahun': '2026',
        'Lokasi': 'ISI Surakarta'
      }
    },
    {
      title: 'Sangu',
      year: '2026',
      medium: 'Instalasi',
      image: 'images/sangu.jpg',
      description: 'Eksplorasi tentang bekal, perjalanan, pengalaman merantau, dan kemungkinan kepulangan.',
      details: {
        'Medium': 'Instalasi',
        'Tahun': '2026'
      }
    },
    {
      title: 'Terlihat dan Tak Terlihat',
      year: '2026',
      medium: 'Video Mapping + Found Objects',
      image: 'images/terlihat-tak-terlihat.jpg',
      description: 'Eksperimen video mapping yang mempertemukan benda sehari-hari dengan sisi ingatan dan pengalaman yang tidak terlihat.',
      details: {
        'Medium': 'Video mapping, found objects',
        'Tahun': '2026'
      }
    },
    {
      title: 'Judul Karya Berikutnya',
      year: '2026',
      medium: 'Seni Intermedia',
      image: 'images/karya-04.jpg',
      description: 'Ganti bagian ini dengan deskripsi karya berikutnya.',
      details: {
        'Medium': 'Ganti di script.js',
        'Tahun': '2026'
      }
    }
  ]
};

/* =====================================================
   JANGAN PERLU EDIT BAGIAN DI BAWAH INI
   ===================================================== */

const workGrid = document.querySelector('#work-grid');
const modal = document.querySelector('#modal');
const modalImage = document.querySelector('#modal-image');
const modalMeta = document.querySelector('#modal-meta');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalDetails = document.querySelector('#modal-details');

function renderWorks() {
  workGrid.innerHTML = portfolio.works.map((work, index) => `
    <article class="work-card" data-index="${index}">
      <div class="work-image">
        <img src="${work.image}" alt="${work.title}" loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="placeholder" style="display:none">Tambahkan foto karya</div>
      </div>
      <div class="work-info">
        <div>
          <div class="work-title">${work.title}</div>
          <div class="work-medium">${work.medium}</div>
        </div>
        <div class="work-year">${work.year}</div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.index)));
  });
}

function openModal(index) {
  const work = portfolio.works[index];
  modalImage.src = work.image;
  modalImage.alt = work.title;
  modalMeta.textContent = `${work.year} · ${work.medium}`;
  modalTitle.textContent = work.title;
  modalDescription.textContent = work.description;
  modalDetails.innerHTML = Object.entries(work.details)
    .map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

document.querySelector('#about-text').textContent = portfolio.about;
document.querySelector('#contact-list').innerHTML = portfolio.contact
  .map(item => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label} ↗</a>`)
  .join('');
document.querySelector('#year').textContent = new Date().getFullYear();
renderWorks();

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('open');
});
