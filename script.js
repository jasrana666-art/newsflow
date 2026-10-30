// reading progress + header scroll
const progress = document.getElementById('progress');
const header = document.getElementById('header');
addEventListener('scroll', () => {
  const h = scrollHeight() - document.innerHeight;
  progress.style.width = (h > 0 ? (scrollY / h * 100) : 0) + '%';
  header.classList.toggle('scrolled', scrollY > 40);
});
function scrollHeight(){ return document.documentElement.scrollHeight }

// mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ticker data
const headlines = [
  ['Markets','Global indices surge as rate cuts loom'],
  ['Tech','New chip architecture shatters performance records'],
  ['World','Historic climate accord signed by 40 nations'],
  ['Science','Web telescope captures earliest galaxy yet'],
  ['Sport','Underdogs clinch title in stunning final'],
  ['AI','Open-source model rivals frontier labs'],
  ['Culture','Indie film sweeps the festival circuit'],
  ['Health','Breakthrough therapy enters final trials']
];
const track = document.getElementById('tickerTrack');
const html = headlines.map(([c, t]) => '<span><b>' + c + '</b>' + t + '</span>').join('');
track.innerHTML = html + html; // duplicate for seamless loop

// article cards
const articles = [
  { cat:'Technology', c:'c1', t:'The quiet death of the smartphone, one subscription at a time', d:'Devices are dissolving into services. What gets lost when the hardware disappears?', time:'6 min', date:'Today' },
  { cat:'Markets', c:'c2', t:'Bitcoin crosses a milestone as institutions double down', d:'A new wave of institutional money is rewriting the rules of digital assets overnight.', time:'4 min', date:'2h ago' },
  { cat:'Science', c:'c3', t:'Scientists map the brain in unprecedented 3D detail', d:'The most complete connectome yet could unlock secrets of memory and disease.', time:'9 min', date:'5h ago' },
  { cat:'World', c:'c4', t:'A generation rediscovers public transit — and redesigns cities', d:'Car-free districts are booming. Urban planners call it the biggest shift in a century.', time:'7 min', date:'Today' },
  { cat:'Culture', c:'c5', t:'How a 90s synth sound took over modern pop music', d:'Nostalgia is big business — but this revival runs deeper than a trend.', time:'5 min', date:'Yesterday' },
  { cat:'Gaming', c:'c6', t:'The indie studio of six people just outsold a AAA blockbuster', d:'No marketing budget, no franchise — just a relentless focus on the craft.', time:'8 min', date:'3h ago' }
];

// ============ CATEGORIES FILTER (categories.html) ============
const catCards = document.querySelectorAll('.cat[data-cat]');
const articleGrid = document.getElementById('grid');

function renderArticles(filter) {
  const filtered = filter ? articles.filter(a => a.cat === filter) : articles;
  let html = '';
  filtered.forEach(a => {
    html += '<article class="card ' + a.c + ' reveal">';
    html += '<div class="thumb"><span class="cat">' + a.cat + '</span><span class="dur">' + a.time + '</span></div>';
    html += '<div class="content">';
    html += '<h4>' + a.t + '</h4>';
    html += '<p>' + a.d + '</p>';
    html += '<div class="foot"><span>' + a.date + '</span><span class="read">Read &rarr;</span></div>';
    html += '</div></div>';
  });
  articleGrid.innerHTML = html;
}

if (catCards.length > 0) {
  catCards.forEach(card => {
    card.addEventListener('click', () => {
      catCards.forEach(c => c.style.borderColor = 'var(--line)');
      card.style.borderColor = 'var(--accent)';
      renderArticles(card.dataset.cat);
    });
  });
}

// ============ TEAM GRID (about.html) ============
const teamMembers = [
  { name:'Aria Chen', role:'Chief Correspondent', blurb:'12 years covering technology and AI' },
  { name:'Marcus Reddy', role:'Markets Editor', blurb:'Former hedge fund trader turned journalist' },
  { name:'Priya Nair', role:'World Desk Lead', blurb:'30+ countries reported on since 2014' },
  { name:'Tomás Herrera', role:'Science Writer', blurb:'PhD in molecular biology' },
  { name:'Yuki Sato', role:'Culture Critic', blurb:'Film and music from Tokyo and NYC' },
  { name:'Fatima Al-Rashid', role:'Politics Correspondent', blurb:'International relations and policy' }
];
const teamGrid = document.getElementById('teamGrid');
if (teamGrid) {
  let html = '';
  teamMembers.forEach(m => {
    html += '<div class="card c1 reveal" style="cursor:default">';
    html += '<div class="thumb"><span class="cat" style="background:rgba(5,6,10,.7);top:14px;left:14px">' + m.role + '</span></div>';
    html += '<div class="content">';
    html += '<div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.8rem">';
    html += '<div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ff3b5c,#4d7cff)"></div>';
    html += '<div style="flex:1"><div class="n" style="font-weight:600;font-size:.9rem">' + m.name + '</div><div class="d" style="color:var(--muted);font-size:.78rem">' + m.role + '</div></div>';
    html += '</div>';
    html += '<p>' + m.blurb + '</p>';
    html += '</div></div>';
  });
  teamGrid.innerHTML = html;
}

// ============ INFO CARDS (contact.html) ============
const contacts = [
  { title:'news@newsflow.media', desc:'Story tips and pitches' },
  { title:'join@newsflow.media', desc:'Newsletter signup' },
  { title:'37 Market Street, London', desc:'HQ office' },
  { title:'+44 20 7946 0958', desc:'Newsroom line' }
];
const infoGrid = document.getElementById('infoGrid');
if (infoGrid) {
  let html = '';
  contacts.forEach(c => {
    html += '<div class="card c2 reveal" style="cursor:default">';
    html += '<div class="content">';
    html += '<h4>' + c.title + '</h4>';
    html += '<p>' + c.desc + '</p>';
    html += '</div></div>';
  });
  infoGrid.innerHTML = html;
}

// ============ NEWSLETTER BRIEF (newsletter.html) ============
const briefs = [
  { cat:'Technology', c:'c1', t:'The quiet death of the smartphone, one subscription at a time', d:'Devices are dissolving into services. What gets lost when the hardware disappears?', time:'6 min' },
  { cat:'Markets', c:'c2', t:'Bitcoin crosses a milestone as institutions double down', d:'A new wave of institutional money is rewriting the rules of digital assets overnight.', time:'4 min' },
  { cat:'Science', c:'c3', t:'Scientists map the brain in unprecedented 3D detail', d:'The most complete connectome yet could unlock secrets of memory and disease.', time:'9 min' },
  { cat:'World', c:'c4', t:'A generation rediscovers public transit — and redesigns cities', d:'Car-free districts are booming. Urban planners call it the biggest shift in a century.', time:'7 min' }
];
const briefGrid = document.getElementById('briefGrid');
if (briefGrid) {
  let html = '';
  briefs.forEach(b => {
    html += '<article class="card ' + b.c + ' reveal">';
    html += '<div class="thumb"><span class="cat">' + b.cat + '</span><span class="dur">' + b.time + '</span></div>';
    html += '<div class="content">';
    html += '<h4>' + b.t + '</h4>';
    html += '<p>' + b.d + '</p>';
    html += '<div class="foot"><span>Today</span><span class="read">Read &rarr;</span></div>';
    html += '</div></article>';
  });
  briefGrid.innerHTML = html;
}

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold:.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// animated counters
const counters = document.querySelectorAll('[data-count]');
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, target = +el.dataset.count, n = 0;
  const step = Math.max(1, target / 80);
  const t = setInterval(() => {
    n += step;
    if (n >= target) { n = target; clearInterval(t); }
    el.textContent = Math.floor(n).toLocaleString() + (target >= 1000 ? '+' : '');
  }, 18);
  cio.unobserve(el);
}), { threshold:.5 });
counters.forEach(c => cio.observe(c));

// newsletter
const subForm = document.getElementById('subForm');
if (subForm) {
  subForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Submitted!';
    btn.style.background = 'var(--accent-3)';
    e.target.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'Join Free'; btn.style.background = ''; }, 2600);
  });
}
