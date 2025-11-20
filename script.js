// Globale Variablen
let articlesIndex = [];
let allArticlesContent = {};
let currentSearchResults = [];

// DOM-Elemente
const searchInput = document.getElementById('searchInput');
const searchArea = document.getElementById('searchArea');
const startView = document.getElementById('startView');
const resultsView = document.getElementById('resultsView');
const articleView = document.getElementById('articleView');
const resultsTitle = document.getElementById('resultsTitle');
const resultsList = document.getElementById('resultsList');
const articleContent = document.getElementById('articleContent');
const backButton = document.getElementById('backButton');

// Base Path für GitHub Pages
const BASE_PATH = '/Wissen';

console.log('🚀 Script gestartet!');
console.log('📍 Base Path:', BASE_PATH);

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', async () => {
    console.log('📄 Seite geladen, starte Initialisierung...');
    await loadArticlesIndex();
    setupEventListeners();
    console.log('✅ Initialisierung abgeschlossen!');
});

// Artikel-Index laden
async function loadArticlesIndex() {
    console.log('📂 Versuche articles-index.json zu laden...');
    
    try {
        const url = `${BASE_PATH}/data/articles-index.json`;
        console.log('   URL:', url);
        
        const response = await fetch(url);
        console.log('   Status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        articlesIndex = await response.json();
        console.log(`✅ ${articlesIndex.length} Artikel geladen:`, articlesIndex);
        
    } catch (error) {
        console.error('❌ Fehler beim Laden:', error);
        console.error('🔍 Prüfe: https://jonaderunechte.github.io/Wissen/data/articles-index.json');
        articlesIndex = [];
    }
}

// Event Listeners einrichten
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    backButton.addEventListener('click', () => {
        showResults();
    });
}

// Such-Handler
function handleSearch(searchTerm) {
    const trimmedTerm = searchTerm.trim();
    
    if (trimmedTerm === '') {
        showStartView();
        return;
    }
    
    if (articlesIndex.length === 0) {
        console.error('❌ Artikel-Index ist leer!');
        resultsView.style.display = 'block';
        startView.style.display = 'none';
        articleView.style.display = 'none';
        resultsTitle.textContent = 'Fehler beim Laden der Artikel';
        resultsList.innerHTML = '<p class="intro-text">❌ Artikel konnten nicht geladen werden. Öffne die Konsole (F12) für Details.</p>';
        return;
    }
    
    // Suchbereich nach oben animieren
    searchArea.classList.add('active');
    
    // Suche durchführen
    performSearch(trimmedTerm);
}

// Volltext-Suche durchführen
async function performSearch(searchTerm) {
    console.log(`🔍 Suche nach: "${searchTerm}"`);
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    const results = [];
    
    for (const article of articlesIndex) {
        let score = 0;
        let matchedIn = [];
        
        // Titel-Match (höchste Priorität)
        if (article.title.toLowerCase().includes(lowerSearchTerm)) {
            score += 10;
            matchedIn.push('title');
        }
        
        // Tags-Match (mittlere Priorität)
        const tagMatch = article.tags.some(tag => 
            tag.toLowerCase().includes(lowerSearchTerm)
        );
        if (tagMatch) {
            score += 5;
            matchedIn.push('tags');
        }
        
        // Beschreibungs-Match
        if (article.description && article.description.toLowerCase().includes(lowerSearchTerm)) {
            score += 3;
            matchedIn.push('description');
        }
        
        // Volltext-Suche im Artikel-Inhalt
        if (!allArticlesContent[article.filename]) {
            await loadArticleContent(article.filename);
        }
        
        const content = allArticlesContent[article.filename];
        if (content && content.toLowerCase().includes(lowerSearchTerm)) {
            score += 1;
            matchedIn.push('content');
        }
        
        // Ergebnis hinzufügen, wenn mindestens ein Match
        if (score > 0) {
            console.log(`   ✓ Match: ${article.title} (Score: ${score})`);
            results.push({
                ...article,
                score: score,
                matchedIn: matchedIn
            });
        }
    }
    
    // Nach Relevanz sortieren
    results.sort((a, b) => b.score - a.score);
    
    console.log(`📊 ${results.length} Ergebnisse gefunden`);
    
    currentSearchResults = results;
    displayResults(results);
}

// Artikel-Inhalt laden
async function loadArticleContent(filename) {
    try {
        const url = `${BASE_PATH}/articles/${filename}`;
        console.log(`📄 Lade: ${url}`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const content = await response.text();
        allArticlesContent[filename] = content;
        console.log(`   ✅ Geladen (${content.length} Zeichen)`);
        return content;
        
    } catch (error) {
        console.error(`❌ Fehler bei ${filename}:`, error);
        return '';
    }
}

// Suchergebnisse anzeigen
function displayResults(results) {
    startView.style.display = 'none';
    articleView.style.display = 'none';
    resultsView.style.display = 'block';
    
    // Titel aktualisieren
    const count = results.length;
    resultsTitle.textContent = `${count} Ergebnis${count !== 1 ? 'se' : ''} gefunden`;
    
    // Ergebnisliste leeren
    resultsList.innerHTML = '';
    
    // Keine Ergebnisse
    if (results.length === 0) {
        resultsList.innerHTML = '<p class="intro-text">Keine passenden Artikel gefunden.</p>';
        return;
    }
    
    // Ergebnisse anzeigen
    results.forEach(article => {
        const card = createResultCard(article);
        resultsList.appendChild(card);
    });
}

// Ergebnis-Karte erstellen
function createResultCard(article) {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.onclick = () => showArticle(article);
    
    // Titel
    const title = document.createElement('h3');
    title.innerHTML = `${article.title} <span style="font-size: 1rem;">›</span>`;
    card.appendChild(title);
    
    // Tags
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'result-tags';
    article.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
    });
    card.appendChild(tagsDiv);
    
    // Vorschau
    const preview = document.createElement('p');
    preview.className = 'result-preview';
    preview.textContent = article.description || 'Klicken, um den Artikel zu lesen...';
    card.appendChild(preview);
    
    return card;
}

// Artikel anzeigen
async function showArticle(article) {
    console.log(`📖 Öffne: ${article.title}`);
    
    resultsView.style.display = 'none';
    articleView.style.display = 'block';
    
    // Artikel-Inhalt laden
    let content = allArticlesContent[article.filename];
    if (!content) {
        content = await loadArticleContent(article.filename);
    }
    
    // Artikel rendern
    articleContent.innerHTML = renderMarkdown(article, content);
    
    // Nach oben scrollen
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Markdown zu HTML konvertieren
function renderMarkdown(article, content) {
    let html = '<div class="article-tags">';
    article.tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    html += '</div><div class="article-body">';
    
    const lines = content.split('\n');
    let inList = false;
    
    lines.forEach(line => {
        // Überschriften
        if (line.startsWith('# ')) {
            html += `<h1>${line.substring(2)}</h1>`;
        } else if (line.startsWith('## ')) {
            html += `<h2>${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
            html += `<h3>${line.substring(4)}</h3>`;
        }
        // Bilder: ![Alt-Text](pfad)
        else if (line.includes('![') && line.includes('](')) {
            const match = line.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
                const altText = match[1];
                let imagePath = match[2];
                
                // Wenn relativer Pfad, BASE_PATH hinzufügen
                if (!imagePath.startsWith('http') && !imagePath.startsWith('/')) {
                    imagePath = `${BASE_PATH}/${imagePath}`;
                }
                
                html += `<div class="article-image">
                    <img src="${imagePath}" alt="${altText}" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'>[Bild: ${altText}]</div>'">
                </div>`;
            }
        }
        // Links/Videos: [Text](url)
        else if (line.includes('[') && line.includes('](')) {
            const match = line.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                const linkText = match[1];
                const url = match[2];
                
                // YouTube-Videos einbetten
                if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    let videoId = '';
                    
                    // Extrahiere Video-ID aus verschiedenen YouTube-URL-Formaten
                    if (url.includes('youtube.com/watch?v=')) {
                        videoId = url.split('v=')[1].split('&')[0];
                    } else if (url.includes('youtu.be/')) {
                        videoId = url.split('youtu.be/')[1].split('?')[0];
                    } else if (url.includes('youtube.com/embed/')) {
                        videoId = url.split('embed/')[1].split('?')[0];
                    }
                    
                    if (videoId) {
                        html += `<div class="article-video-embed">
                            <h4 class="video-title">🎥 ${linkText}</h4>
                            <div class="video-wrapper">
                                <iframe 
                                    src="https://www.youtube.com/embed/${videoId}" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>`;
                    } else {
                        // Fallback wenn Video-ID nicht extrahiert werden kann
                        html += `<div class="article-video">
                            🎥 <a href="${url}" target="_blank" rel="noopener">${linkText}</a>
                        </div>`;
                    }
                } else {
                    html += `<p><a href="${url}" target="_blank" rel="noopener">${linkText}</a></p>`;
                }
            }
        }
        // Listen
        else if (line.startsWith('- ')) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += `<li>${line.substring(2)}</li>`;
        } else {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            // Normaler Text
            if (line.trim() !== '') {
                html += `<p>${line}</p>`;
            }
        }
    });
    
    if (inList) {
        html += '</ul>';
    }
    
    html += '</div>';
    return html;
}

// Zurück zu Ergebnissen
function showResults() {
    articleView.style.display = 'none';
    resultsView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Start-Ansicht anzeigen
function showStartView() {
    searchArea.classList.remove('active');
    resultsView.style.display = 'none';
    articleView.style.display = 'none';
    startView.style.display = 'block';
}

console.log('✅ Script vollständig geladen!');
