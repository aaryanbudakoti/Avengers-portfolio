/* ============================================
   AVENGERS INITIATIVE — interactions
   ============================================ */
(() => {
  // ---------- DATA ----------
  const HEROES = [
    {id:'h1',name:'Iron Man',tag:'Genius · Billionaire · Philanthropist',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9d/Iron_Man_Infobox.jpg/revision/latest?cb=20240802142023',
      desc:"Tony Stark transformed himself from a weapons manufacturer into the armored avenger. His self-engineered arc-reactor suits became the cornerstone of Earth's defense.",
      powers:['Mark-LXXXV powered armor','Repulsor & unibeam weaponry','Genius-level intellect','Flight & supersonic combat'],
      ach:['Founded the Avengers Initiative','Defeated Obadiah Stane & Aldrich Killian','Sacrificed himself to wield the Infinity Stones'],
      quote:'“I am Iron Man.”'},
    {id:'h2',name:'Captain America',tag:'The First Avenger',img:'peakpx.jpg',
      desc:"Steve Rogers, super-soldier from a different era, leads with conviction. His vibranium shield and unbreakable moral compass make him the team's heart.",
      powers:['Peak human strength & agility','Vibranium shield mastery','Tactical leadership','Worthiness to wield Mjolnir'],
      ach:['Defeated HYDRA in WWII','Led the Battle of Wakanda','Became the rightful wielder of Mjolnir'],
      quote:'“I can do this all day.”'},
    {id:'h3',name:'Thor',tag:'God of Thunder',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg/revision/latest?cb=20231021012616',
      desc:"The Asgardian prince commands lightning itself. Through loss and exile he became a king, then a guardian — wielding Stormbreaker against cosmic threats.",
      powers:['Control of lightning & storms','Stormbreaker & Mjolnir','Asgardian invulnerability','Bifrost travel'],
      ach:['Defeated Hela & saved the Asgardians','Forged Stormbreaker on Nidavellir','Struck Thanos at the Battle of Earth'],
      quote:'“Bring me Thanos.”'},
    {id:'h4',name:'Hulk',tag:'The Strongest Avenger',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg/revision/latest?cb=20231020212314',
      desc:"When Bruce Banner's pulse rises, the Hulk emerges — a being of unmeasured fury. In time, mind and monster merged into something magnificent.",
      powers:['Unlimited gamma-fueled strength','Regenerative healing','Shockwave-creating thunderclap','Genius scientific intellect (Banner)'],
      ach:['Smashed the Chitauri invasion','Defeated the Abomination','Snapped half the universe back into existence'],
      quote:'“Hulk… smash.”'},
    {id:'h5',name:'Black Widow',tag:'Master Spy · Avenger Forever',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3f/Black_Widow_Infobox.jpg/revision/latest?cb=20231025163748',
      desc:"Natasha Romanoff traded a ledger of red for a family worth dying for. Trained in the Red Room, she became the team's quiet, lethal conscience.",
      powers:['Master of espionage & combat','Expert marksmanship','Bioenhanced reflexes','Stinger gauntlets'],
      ach:['Infiltrated and dismantled HYDRA','Reformed the Avengers post-Snap','Sacrificed her life on Vormir'],
      quote:'“I’m always picking up after you boys.”'},
    {id:'h6',name:'Hawkeye',tag:"World's Greatest Marksman",img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5b/Hawkeye_Infobox.jpg/revision/latest?cb=20240222145717',
      desc:'Clint Barton never misses. Behind the bow is a husband, father and unsung anchor of the team — the human standard the gods are measured against.',
      powers:['Olympian-level archery','Trick & explosive arrows','Master hand-to-hand combatant','Unmatched tactical sight'],
      ach:['Liberated NYC at the Battle of New York','Trained Yelena & Kate Bishop','Battled Ronin\'s shadow and won'],
      quote:'“The city is flying. We’re fighting an army of robots. And I have a bow and arrow.”'},
    {id:'h7',name:'Spider-Man',tag:'Friendly Neighborhood Hero',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/41/Spider-Man_Infobox.jpg/revision/latest?cb=20260318185226',
      desc:'Peter Parker climbs walls and carries the weight of legends on his teenage shoulders. With great power, he chose great responsibility.',
      powers:['Proportional spider-strength & agility','Web-shooters of his own design','Spider-sense precognition','Iron Spider nanotech suit'],
      ach:['Stopped the Vulture','Joined the Battle of Titan','Held the Infinity Gauntlet through a multiversal storm'],
      quote:'“With great power, comes great responsibility.”'},
    {id:'h8',name:'Doctor Strange',tag:'Master of the Mystic Arts',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b2/Doctor_Strange_MoM_Profile.jpeg/revision/latest?cb=20231021153337',
      desc:'A surgeon broken into a sorcerer. Stephen Strange guards reality itself, glimpsing fourteen million futures to find the one where we win.',
      powers:['Mastery of mystic arts & the Eye of Agamotto','Sling Ring portals across dimensions','Astral projection','Manipulation of time itself'],
      ach:['Defeated Dormammu through bargain','Saw the only winning timeline against Thanos','Defended the multiverse from incursions'],
      quote:'“We’re in the endgame now.”'},
    {id:'h9',name:'Black Panther',tag:'King of Wakanda',img:'wp1869884.jpg',
      desc: "T'Challa wears the mantle of a nation. His vibranium suit, sharpened by tradition and technology, makes him as graceful as he is unstoppable.",
      powers:['Heart-shaped herb enhancement','Vibranium nanosuit with kinetic absorption','Mastery of multiple martial arts','Sovereign tactical genius'],
      ach:['Opened Wakanda to the world','Hosted the Battle of Wakanda','Led the charge against Thanos\' forces'],
      quote:'“Wakanda forever.”'},
  ];

  const VILLAINS = [
    {name:'Thanos',tag:'The Mad Titan',movie:'Infinity War / Endgame',threat:5,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/Thanos_Infobox.png/revision/latest?cb=20250119155740'},
    {name:'Loki',tag:'God of Mischief',movie:'The Avengers',threat:3,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b5/Loki_Infobox.png/revision/latest?cb=20250203204518'},
    {name:'Ultron',tag:'Synthetic Apocalypse',movie:'Age of Ultron',threat:4,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6a/Ultron_Infobox.jpg/revision/latest?cb=20231023015021'},
    {name:'Red Skull',tag:'HYDRA Architect',movie:'The First Avenger',threat:3,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6d/Red_Skull_Infobox.png/revision/latest?cb=20190808103105'},
    {name:'Hela',tag:'Goddess of Death',movie:'Ragnarok',threat:4,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/40/Hela_Profile.png/revision/latest?cb=20231021034457'},
    {name:'Killmonger',tag:'Pretender to the Throne',movie:'Black Panther',threat:3,img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9d/Black_Panther_Textless_Character_Poster_03.jpg/revision/latest?cb=20231024003905'},
    {name:'Doctor Doom',tag:'Ruler of Latveria',movie:'Avengers: Doomsday',threat:5,img:'https://cdn.marvel.com/content/2x/057drd_com_cut_dsk_01_1.jpg'},
  ];

  const TIMELINE = [
    {year:'2012',title:'The Avengers',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d0/Theavengersnewposter.jpg/revision/latest?cb=20140224212619',desc:'Earth\'s mightiest heroes assemble for the first time to repel the Chitauri invasion of New York.'},
    {year:'2015',title:'Age of Ultron',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c7/Avengers_Age_Of_Ultron-poster1.jpg/revision/latest?cb=20150224202250',desc:'A peacekeeping AI awakens to genocide — the team confronts the monster of their own making.'},
    {year:'2018',title:'Infinity War',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest?cb=20180316141550',desc:'Thanos hunts the Infinity Stones. Half the universe falls in a single, devastating snap.'},
    {year:'2019',title:'Endgame',img:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/91/Endgame_Poster_2.jpg/revision/latest?cb=20190314215527',desc:'Across time and space, the surviving heroes mount one impossible last stand. Whatever it takes.'},
    {year:'2026',title:'Doomsday',img:'https://image.tmdb.org/t/p/original/9x2jx7659eLUjFavs9t7QGsO1RS.jpg',desc:'Doctor Doom rises. The Avengers unite with the Fantastic Four, X-Men and Thunderbolts to face a multiversal threat.'},
  ];

  const GALLERY = ['https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/91/Endgame_Poster_2.jpg/revision/latest?cb=20190314215527','https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Avengers_Infinity_war_poster.jpeg/revision/latest?cb=20180316141550','https://image.tmdb.org/t/p/original/9x2jx7659eLUjFavs9t7QGsO1RS.jpg','https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d0/Theavengersnewposter.jpg/revision/latest?cb=20140224212619','https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c7/Avengers_Age_Of_Ultron-poster1.jpg/revision/latest?cb=20150224202250','https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5c/Civil_War_Final_Poster.jpg/revision/latest?cb=20160310172110','https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fa/Thor_Ragnarok_SDCC_Poster.jpg/revision/latest?cb=20170723020153'];

  // ---------- RENDER ----------
  const heroesGrid = document.getElementById('heroesGrid');
  HEROES.forEach((h,i)=>{
    const el = document.createElement('article');
    el.className='card reveal';
    el.style.transitionDelay=(i%4)*0.08+'s';
    el.innerHTML = `
      <img src="${h.img}" alt="${h.name}" loading="lazy"/>
      <div class="card-glow"></div>
      <div class="card-info">
        <span class="tag">${h.tag}</span>
        <h3>${h.name}</h3>
        <p>Click to view classified file</p>
      </div>`;
    el.addEventListener('click',()=>openHero(h));
    heroesGrid.appendChild(el);
  });

  const villainsGrid = document.getElementById('villainsGrid');
  VILLAINS.forEach((v,i)=>{
    const el = document.createElement('article');
    el.className='card reveal';
    el.style.transitionDelay=(i%4)*0.08+'s';
    const bars = Array.from({length:5},(_,k)=>`<i class="${k<v.threat?'on':''}"></i>`).join('');
    el.innerHTML = `
      <img src="${v.img}" alt="${v.name}" loading="lazy"/>
      <div class="card-glow"></div>
      <div class="card-info">
        <span class="tag">${v.tag}</span>
        <h3>${v.name}</h3>
        <p>${v.movie}</p>
        <div class="threat">Threat <span class="threat-bar">${bars}</span></div>
      </div>`;
    villainsGrid.appendChild(el);
  });

  const timelineEl = document.getElementById('timeline');
  TIMELINE.forEach(t=>{
    const el = document.createElement('article');
    el.className='tl-item reveal';
    el.innerHTML = `
      <img src="${t.img}" alt="${t.title} poster" loading="lazy"/>
      <div class="tl-body">
        <p class="tl-year">${t.year}</p>
        <h3 class="tl-title">${t.title}</h3>
        <p class="tl-desc">${t.desc}</p>
      </div>`;
    timelineEl.appendChild(el);
  });

  const galleryEl = document.getElementById('gallery-grid');
  GALLERY.forEach(src=>{
    const img = document.createElement('img');
    img.src=src;img.alt='Cinematic still';img.loading='lazy';img.className='reveal';
    img.addEventListener('click',()=>openLB(src));
    galleryEl.appendChild(img);
  });

  // ---------- HERO MODAL ----------
  const modal = document.getElementById('modal');
  function openHero(h){
    document.getElementById('m-img').src=h.img;
    document.getElementById('m-img').alt=h.name;
    document.getElementById('m-name').textContent=h.name;
    document.getElementById('m-tag').textContent=h.tag;
    document.getElementById('m-quote').textContent=h.quote;
    document.getElementById('m-desc').textContent=h.desc;
    document.getElementById('m-powers').innerHTML=h.powers.map(p=>`<li>${p}</li>`).join('');
    document.getElementById('m-ach').innerHTML=h.ach.map(p=>`<li>${p}</li>`).join('');
    modal.classList.add('open');document.body.style.overflow='hidden';
  }
  modal.addEventListener('click',e=>{if(e.target.dataset.close!==undefined){closeModal()}});
  function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}

  // ---------- LIGHTBOX ----------
  const lb=document.getElementById('lightbox');
  const lbImg=document.getElementById('lb-img');
  function openLB(src){lbImg.src=src;lb.classList.add('open');document.body.style.overflow='hidden'}
  lb.addEventListener('click',()=>{lb.classList.remove('open');document.body.style.overflow=''});

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      if(modal.classList.contains('open'))closeModal();
      if(lb.classList.contains('open')){lb.classList.remove('open');document.body.style.overflow=''}
    }
  });

  // ---------- NAV ----------
  const nav=document.getElementById('nav');
  const burger=document.getElementById('burger');
  const navLinks=document.getElementById('navLinks');
  window.addEventListener('scroll',()=>{
    nav.classList.toggle('scrolled',window.scrollY>40);
  });
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    burger.classList.remove('open');navLinks.classList.remove('open');
  }));

  // ---------- REVEAL ON SCROLL ----------
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}});
  },{threshold:.12,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // ---------- COUNTERS ----------
  const counterIO=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting)return;
      const el=en.target;
      const target=+el.dataset.target;
      const suffix=el.dataset.suffix||'';
      const dur=1800;
      const start=performance.now();
      function tick(t){
        const p=Math.min(1,(t-start)/dur);
        const eased=1-Math.pow(1-p,3);
        const val=target*eased;
        el.textContent = (target>=10 ? Math.round(val) : val.toFixed(1)) + suffix;
        if(p<1)requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  },{threshold:.4});
  document.querySelectorAll('.stat-num').forEach(el=>counterIO.observe(el));

  // ---------- FORM ----------
  const form=document.getElementById('joinForm');
  const msg=document.getElementById('formMsg');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=(data.get('name')||'').toString().trim();
    const email=(data.get('email')||'').toString().trim();
    const message=(data.get('message')||'').toString().trim();
    msg.classList.remove('err');
    if(!name||!email||!message){msg.textContent='All fields are required.';msg.classList.add('err');return}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.textContent='Provide a valid comm-link.';msg.classList.add('err');return}
    msg.textContent='Transmitting…';
    setTimeout(()=>{
      msg.textContent='Signal received, '+name+'. Stand by.';
      form.reset();
    },800);
  });

  // ---------- YEAR ----------
  document.getElementById('yr').textContent=new Date().getFullYear();

  // ---------- PARTICLES ----------
  const c=document.getElementById('particles');
  const ctx=c.getContext('2d');
  let parts=[];
  function resize(){c.width=innerWidth;c.height=innerHeight;}
  resize();addEventListener('resize',resize);
  function spawn(n){
    parts=Array.from({length:n},()=>({
      x:Math.random()*c.width,y:Math.random()*c.height,
      r:Math.random()*1.6+.4,
      vx:(Math.random()-.5)*.15,vy:-(Math.random()*.4+.1),
      a:Math.random()*.5+.2,
      hue:Math.random()<.7?40:0,
    }));
  }
  spawn(window.innerWidth<700?40:90);
  function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    for(const p of parts){
      p.x+=p.vx;p.y+=p.vy;
      if(p.y<-10){p.y=c.height+10;p.x=Math.random()*c.width}
      ctx.beginPath();
      ctx.fillStyle=p.hue===40?`rgba(212,165,68,${p.a})`:`rgba(255,80,80,${p.a})`;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(loop);
  }
  loop();
})();
