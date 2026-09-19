const root=document.getElementById('app');
let lang=new URLSearchParams(location.search).get('lang')==='ar'?'ar':'en';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.5"/></svg>';
const sectionIds=['top','about','vision','localization','capabilities','industrial','leadership','why-bmt','sectors','contract-support','partnerships','governance','contact'];
function render(){
const t=MBT_CONTENT[lang],s=MBT_SOURCE[lang],conf=MBT_CONFIG;
const number=n=>lang==='ar'?String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]):String(n);
const label=(n)=>`<p class="eyebrow">${number(n)}</p>`;
const heading=(n)=>`${label(n)}<h2>${esc(s.titles[n-1])}</h2>`;
const list=(items,cls='source-list')=>`<ul class="${cls}">${items.map((x,i)=>`<li><span>${esc(x)}</span></li>`).join('')}</ul>`;
const teamProfile=(p,i,featured=false)=>{
const name=p.name?.[lang]||'',role=p.role?.[lang]||'',bio=p.bio?.[lang]||'';
return `<article class="team-profile ${featured?'team-profile-featured':''} reveal"><div class="team-photo">${p.photo?`<img src="${esc(p.photo)}" alt="${esc(name||role)}" loading="lazy" width="640" height="760">`:`<div class="team-photo-empty"><span aria-hidden="true">MBT</span><span>${esc(t.portrait)}</span></div>`}</div><div class="team-profile-copy"><h3>${esc(name||role)}</h3>${name?`<p class="team-profile-role">${esc(role)}</p>`:''}${bio?`<div class="team-profile-bio">${bio.split(/\n\s*\n/).map(x=>`<p>${esc(x)}</p>`).join('')}</div>`:''}<span class="team-profile-rule" aria-hidden="true"></span></div></article>`;
};
const heroTitle=lang==='ar'?'شريكك الاستراتيجي<br><span>في سوق الدفاع السعودي.</span>':'Your strategic partner<br><span>in the Saudi defense market.</span>';
document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
document.title=lang==='ar'?'MBT — شراكات الدفاع والأمن في السعودية':'MBT — Saudi Defense & Security Partnerships';
document.querySelector('meta[name="description"]').content=s.intro;
document.querySelector('.skip').textContent=t.skip;
root.innerHTML=`
<header class="header" id="top"><div class="nav-wrap"><a href="#top" class="brand" aria-label="MBT — Modern Business Technologies"><img src="assets/mbt-social.png" alt="MBT" width="1738" height="905"></a><div class="nav-actions"><button class="language" type="button" lang="${lang==='en'?'ar':'en'}">${t.language}</button><a class="nav-cta" href="#contact">${t.contact}${arrow}</a><span class="menu-caption">${t.menu}</span><button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="${t.menu}"><span></span><span></span></button></div></div><nav id="mobile-nav" class="mobile-nav" hidden aria-label="${t.menu}">${s.titles.slice(1).map((x,i)=>`<a href="#${sectionIds[i+1]}"><span class="menu-num">${number(i+2)}</span>${esc(x)}</a>`).join('')}</nav></header>
<main id="main">
<section class="hero" data-section="1"><img class="hero-image" src="assets/hero.png" alt="" width="1672" height="941" fetchpriority="high"><div class="hero-shade"></div><div class="container hero-inner"><p class="eyebrow light">${t.heroLabel}</p><h1>${heroTitle}</h1><p class="hero-description">${esc(s.intro)}</p><a class="button button-light" href="#contact">${t.contact}${arrow}</a><a class="hero-secondary" href="#about">${lang==='ar'?'عن MBT':'About MBT'}</a><div class="hero-bottom"><a href="#about" class="scroll-link"><span class="scroll-line"></span>${t.scroll}</a><span>MODERN BUSINESS TECHNOLOGIES</span></div></div></section>
<div class="pillar-bar"><div class="container">${t.pillars.map((x,i)=>`<span>${x}</span>`).join('')}</div></div>
<section class="section about container" id="about" data-section="2"><div class="about-heading reveal">${heading(2)}<div class="editorial-line"></div><span class="small-label">MODERN BUSINESS TECHNOLOGIES</span></div><div class="about-copy reveal">${list(s.about,'about-points')}<div class="about-roles">${conf.team.map(p=>`<span>${esc(p.role[lang])}</span>`).join('')}</div></div></section>
<section class="vision-section" id="vision" data-section="3"><div class="container section">${heading(3)}<div class="vision-grid"><div class="reveal"><span class="vision-label">${s.visionLabel}</span><h3 class="vision-statement">${esc(s.vision)}</h3></div><div class="reveal"><span class="vision-label">${s.missionLabel}</span><p>${esc(s.mission)}</p></div></div></div></section>
<section class="localization" id="localization" data-section="4"><div class="container section local-grid"><div class="local-copy reveal">${heading(4)}${list(s.localization,'local-original')}</div><div class="local-visual reveal"><div class="local-visual-top"><span>${lang==='ar'?'المملكة العربية السعودية':'SAUDI ARABIA'}</span><span>2030</span></div><div class="local-visual-photo"></div><div class="local-visual-bottom"><p>${lang==='ar'?'نقل التقنية<br>والمعرفة.':'Technology and<br>knowledge transfer.'}</p><span class="cross" aria-hidden="true">+</span></div></div></div></section>
<section class="cap-section" id="capabilities" data-section="5"><div class="container section"><div class="section-heading reveal"><div>${heading(5)}</div></div>${list(s.representation,'cap-original reveal')}</div></section>
<section class="industrial-section" id="industrial" data-section="6"><div class="container section industrial-grid"><div class="reveal">${heading(6)}<p class="industrial-note">${esc(s.industrialNote)}</p></div><div class="reveal">${list(s.industrial)}</div></div></section>
<section class="section container leadership" id="leadership" data-section="7"><div class="section-heading reveal"><div>${heading(7)}</div></div><div class="team-profiles">${conf.team.length?teamProfile(conf.team[0],0,true):''}<div class="team-profile-grid">${conf.team.slice(1).map((p,i)=>teamProfile(p,i+1)).join('')}</div></div></section>
<section class="why-section" id="why-bmt" data-section="8"><div class="container section"><div class="section-heading reveal"><div>${heading(8)}</div></div><div class="why-grid">${s.why.map((x,i)=>`<div class="why-item reveal"><h3>${esc(x)}</h3></div>`).join('')}</div><p class="foundation-note reveal">${esc(s.foundationNote)}</p></div></section>
<section class="section sectors container" id="sectors" data-section="9"><div class="section-heading reveal"><div>${heading(9)}</div></div><div class="sector-grid">${s.sectors.map((x,i)=>`<div class="sector reveal"><div><h3>${esc(x)}</h3></div></div>`).join('')}</div></section>
<section class="support-section" id="contract-support" data-section="10"><div class="container section industrial-grid"><div class="reveal">${heading(10)}</div><div class="reveal">${list(s.support)}</div></div></section>
<section class="partnership-section" id="partnerships" data-section="11"><div class="container section"><div class="partnership-inner reveal">${heading(11)}<p>${esc(s.partnership)}</p><a class="text-link" href="#contact">${t.contact}${arrow}</a></div></div></section>
<section class="governance" id="governance" data-section="12"><div class="container governance-grid"><div class="reveal">${heading(12)}</div><div class="reveal">${list(s.governance)}</div></div></section>
<section class="contact-section" id="contact" data-section="13"><div class="container section contact-grid"><div class="contact-heading reveal">${heading(13)}<div class="location"><span class="location-symbol" aria-hidden="true">↗</span><span>${t.location}</span></div></div><form id="inquiry-form" class="contact-form reveal"><h3>${t.formTitle}</h3><div class="form-grid"><label>${t.fields[0]}<input name="name" autocomplete="name" required maxlength="120"></label><label>${t.fields[1]}<input name="email" type="email" dir="ltr" autocomplete="email" required maxlength="200"></label><label>${t.fields[2]}<input name="company" autocomplete="organization" required maxlength="200"></label><label>${t.fields[3]}<select name="interest" required>${t.interest.map((x,i)=>`<option value="${i===0?'':esc(x)}">${esc(x)}</option>`).join('')}</select></label><label class="full-field">${t.fields[4]}<textarea name="message" required rows="3" maxlength="3000"></textarea></label></div><button class="button button-green" type="submit">${t.submit}${arrow}</button><p id="form-status" role="status" aria-live="polite"></p></form></div></section>
</main><footer class="footer"><div class="container"><div class="footer-top"><div><a class="brand footer-logo" href="#top" aria-label="MBT"><img src="assets/mbt-social.png" alt="MBT" width="1738" height="905"></a><p class="footer-name">MODERN BUSINESS TECHNOLOGIES</p></div><a href="#top" class="back-top">${t.back}<span aria-hidden="true">↑</span></a></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} MBT. ${t.rights}</span><span>${t.location}</span></div></div></footer>`;
if(lang==='ar'){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let node;while(node=walker.nextNode())node.nodeValue=node.nodeValue.replace(/\b\d+\b/g,n=>n.replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]));
}
bind(t);
}
function bind(t){
document.querySelector('.language').onclick=()=>{
 const form=document.getElementById('inquiry-form');
 const draft=new FormData(form);
 const interestIndex=form.elements.interest.selectedIndex;
 const headerHeight=document.querySelector('.nav-wrap').offsetHeight;
 const sections=[...document.querySelectorAll('[data-section]')];
 const current=sections.find(el=>el.getBoundingClientRect().bottom>headerHeight)||sections[sections.length-1];
 const sectionNumber=current.dataset.section;
 const progress=Math.max(0,Math.min(1,(headerHeight-current.getBoundingClientRect().top)/Math.max(1,current.offsetHeight)));
 lang=lang==='en'?'ar':'en';const u=new URL(location);u.searchParams.set('lang',lang);history.replaceState(null,'',u);render();
 const translatedForm=document.getElementById('inquiry-form');
 for(const name of ['name','email','company','message'])translatedForm.elements[name].value=draft.get(name)||'';
 translatedForm.elements.interest.selectedIndex=interestIndex;
 requestAnimationFrame(()=>{const target=document.querySelector('[data-section="'+sectionNumber+'"]');const h=document.querySelector('.nav-wrap').offsetHeight;window.scrollTo({top:Math.max(0,scrollY+target.getBoundingClientRect().top+progress*target.offsetHeight-h),behavior:'instant'});document.querySelector('.language').focus({preventScroll:true});});
};
const menu=document.querySelector('.menu-btn'),nav=document.getElementById('mobile-nav');
function closeMenu(){nav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',t.menu);}
menu.onclick=()=>{const opened=menu.getAttribute('aria-expanded')==='true';nav.hidden=opened;menu.setAttribute('aria-expanded',String(!opened));menu.setAttribute('aria-label',opened?t.menu:t.close);};
nav.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);
root.onkeydown=e=>{if(e.key==='Escape'&&!nav.hidden){closeMenu();menu.focus();}};
root.onclick=e=>{if(!e.target.closest('.header')&&!nav.hidden)closeMenu();};
document.getElementById('inquiry-form').onsubmit=async e=>{
 e.preventDefault();
 const form=e.currentTarget, status=document.getElementById('form-status'), button=form.querySelector('button[type="submit"]');
 const d=new FormData(form);
 const payload={name:d.get('name'),email:d.get('email'),company:d.get('company'),interest:d.get('interest'),message:d.get('message'),language:lang};
 status.textContent='';
 if(!MBT_CONFIG.inquiryEndpoint){
  if(MBT_CONFIG.contactEmail){
   const text=`${t.inquiryTitle}\n\n${t.fields[0]}: ${payload.name}\n${t.fields[1]}: ${payload.email}\n${t.fields[2]}: ${payload.company}\n${t.fields[3]}: ${payload.interest}\n\n${payload.message}`;
   location.href=`mailto:${encodeURIComponent(MBT_CONFIG.contactEmail)}?subject=${encodeURIComponent(t.inquiryTitle)}&body=${encodeURIComponent(text)}`;
   status.textContent=t.emailPrepared;
  }else status.textContent=t.sendUnavailable;
  return;
 }
 button.disabled=true; button.setAttribute('aria-busy','true'); status.textContent=t.sending;
 try{
  const response=await fetch(MBT_CONFIG.inquiryEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
  const result=await response.json();
  if(!response.ok || result.success!==true)throw Error('Inquiry not accepted');
  status.textContent=t.sent; form.reset();
 }catch{status.textContent=t.sendUnavailable;}
 finally{button.disabled=false;button.removeAttribute('aria-busy');}
};
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});}
}
render();
