// script.js

document.addEventListener('DOMContentLoaded', function() {
    const novelContainer = document.getElementById('novel-container');

    if (novelContainer && typeof novels !== 'undefined') {
        novels.forEach(novel => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'card h-100 shadow-sm bg-secondary text-white';

            cardDiv.innerHTML = `
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${novel.title}</h5>
                    <p class="card-text text-dark small">Genre: ${novel.genre}</p>
                    <p class="card-text text-dark small">Status: ${novel.status}</p>
                    <p class="card-text">${novel.description}</p>
                    <div class="mt-auto pt-3">
                        ${generateNovelPlatformButtons(novel.platforms)}
                    </div>
                </div>
            `;
            colDiv.appendChild(cardDiv);
            novelContainer.appendChild(colDiv);
        });
    } else {
        console.error("Novel container not found or 'novels' data is missing.");
    }

    // Fungsi untuk mengisi emoji bendera ke dalam elemen span
    function populateFlagIcons() {
        const flagIcons = document.querySelectorAll('.flag-icon');
        flagIcons.forEach(span => {
            const countryCode = span.dataset.country;
            let emoji = '';
            switch (countryCode) {
                case 'us':
                    emoji = '🇺🇸'; // Bendera Amerika Serikat (untuk Inggris)
                    break;
                case 'jp':
                    emoji = '🇯🇵'; // Bendera Jepang
                    break;
                case 'kr':
                    emoji = '🇰🇷'; // Bendera Korea Selatan
                    break;
                case 'id':
                    emoji = '🇮🇩'; // Bendera Indonesia
                    break;
                default:
                    emoji = '🌐'; // Global icon sebagai fallback
            }
            span.textContent = emoji;
        });
    }

    populateFlagIcons(); // Panggil fungsi saat DOM selesai dimuat
});

// Fungsi untuk membuat tombol platform novel (dari novel.js)
function generateNovelPlatformButtons(platforms) {
    let buttonsHtml = '';
    for (const platformName in platforms) {
        const url = platforms[platformName];
        if (url) {
            let buttonText = '';
            let platformIcon = ''; // Untuk ikon Font Awesome di tombol novel, jika masih ingin
            switch (platformName) {
                case 'webnovel':
                    buttonText = 'Webnovel (EN)';
                    platformIcon = '<i class="fas fa-globe"></i> ';
                    break;
                case 'syosetu':
                    buttonText = 'Syosetu (JP)';
                    platformIcon = '<i class="fas fa-book-open"></i> ';
                    break;
                case 'munpia':
                    buttonText = 'Munpia (KR)';
                    platformIcon = '<i class="fas fa-comments"></i> ';
                    break;
                case 'wattpad':
                    buttonText = 'Wattpad (ID)';
                    platformIcon = '<i class="fab fa-wattpad"></i> ';
                    break;
                default:
                    buttonText = 'Visit';
            }
            buttonsHtml += `<a href="${url}" target="_blank" class="btn btn-outline-primary btn-sm me-2 mb-2">${platformIcon}${buttonText}</a>`;
        }
    }
    return buttonsHtml || '<p class="text-muted small">Novel ini belum tersedia di platform publik.</p>';
}