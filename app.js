const careHierarchy = {
  Dentistry: [
    { id:'general-dentistry', label:{he:'רפואת שיניים כללית',ar:'طب الأسنان العام',en:'General dentistry'} },
    { id:'oral-surgery', label:{he:'כירורגיית פה ולסתות',ar:'جراحة الفم والفكين',en:'Oral & maxillofacial surgery'} },
    { id:'orthodontics', label:{he:'אורתודונטיה (יישור שיניים ולסתות)',ar:'تقويم الأسنان والفكين',en:'Orthodontics (teeth and jaw alignment)'} },
    { id:'pediatric-dentistry', label:{he:'רפואת שיניים לילדים (פדודונטיה)',ar:'طب أسنان الأطفال',en:'Pediatric dentistry (pedodontics)'} }
  ],
  'General Medicine': [
    { id:'ophthalmology', label:{he:'רפואת עיניים',ar:'طب العيون',en:'Ophthalmology'} },
    { id:'dermatology-venereology', label:{he:'רפואת עור ומין',ar:'الأمراض الجلدية والتناسلية',en:'Dermatology and venereology'} },
    { id:'obstetrics-gynecology', label:{he:'רפואת נשים (יילוד וגינקולוגיה)',ar:'طب النساء والتوليد',en:'Obstetrics and gynecology'} },
    { id:'plastic-surgery', label:{he:'כירורגיה פלסטית ואסתטית',ar:'الجراحة التجميلية والترميمية',en:'Plastic and aesthetic surgery'} },
    { id:'neurology', label:{he:'נוירולוגיה',ar:'طب الأعصاب',en:'Neurology'}, subcategories:[['adult-neurology','נוירולוגיה — מבוגרים','طب الأعصاب للبالغين','Adult neurology'],['pediatric-neurology','נוירולוגיית ילדים והתפתחות הילד','أعصاب الأطفال وتطور الطفل','Pediatric neurology and child development']] },
    { id:'psychiatry', label:{he:'פסיכיאטריה',ar:'الطب النفسي',en:'Psychiatry'}, subcategories:[['adult-psychiatry','פסיכיאטריה — מבוגרים','الطب النفسي للبالغين','Adult psychiatry'],['child-psychiatry','פסיכיאטריה של הילד והמתבגר','الطب النفسي للأطفال والمراهقين','Child and adolescent psychiatry']] }
  ]
};

const doctors = [
  {
    id:1,
    initials:'KS',
    real:true,
    sampleProfile:true,
    city:'tira',
    field:'Dentistry',
    branch:'general-dentistry',
    cardSpecialties:[
      {he:'טיפולים משקמים',ar:'علاجات ترميم الأسنان',en:'Restorative treatments'},
      {he:'טיפולים אסתטיים',ar:'علاجات الأسنان التجميلية',en:'Aesthetic treatments'},
      {he:'רפואת שיניים מונעת',ar:'طب الأسنان الوقائي',en:'Preventive dentistry'}
    ],
    services:[
      {he:'בדיקות וייעוץ',ar:'فحوصات واستشارة',en:'Exams and consultation'},
      {he:'סתימות ושחזורים',ar:'حشوات وترميم الأسنان',en:'Fillings and restorations'},
      {he:'טיפולי שורש',ar:'علاج جذور الأسنان',en:'Root-canal treatment'},
      {he:'כתרים וגשרים',ar:'تيجان وجسور',en:'Crowns and bridges'},
      {he:'רפואה מונעת וניקוי שיניים',ar:'وقاية وتنظيف الأسنان',en:'Preventive care and cleaning'},
      {he:'הלבנת שיניים',ar:'تبييض الأسنان',en:'Teeth whitening'}
    ],
    education:[
      {he:'תואר ברפואת שיניים (D.M.D.)',ar:'دكتور في طب الأسنان (D.M.D.)',en:'Doctor of Dental Medicine (D.M.D.)'},
      {he:'השתלמויות ברפואת שיניים משקמת ואסתטית',ar:'دورات في ترميم وتجميل الأسنان',en:'Continuing education in restorative and aesthetic dentistry'}
    ],
    credentials:[
      {he:'רפואת שיניים כללית',ar:'طب الأسنان العام',en:'General dentistry'},
      {he:'רישיון מקצועי — פרטים לאימות',ar:'ترخيص مهني — بانتظار التحقق',en:'Professional license — verification pending'}
    ],
    languages:[
      {he:'ערבית',ar:'العربية',en:'Arabic'},
      {he:'עברית',ar:'العبرية',en:'Hebrew'},
      {he:'אנגלית',ar:'الإنجليزية',en:'English'}
    ],
    insurance:[
      {he:'טיפול פרטי',ar:'علاج خاص',en:'Private care'},
      {he:'החזרים מחברות ביטוח — בתיאום מראש',ar:'تعويض من شركات التأمين — بالتنسيق المسبق',en:'Insurance reimbursement — by prior arrangement'}
    ],
    accessibility:[
      {he:'כניסה נגישה',ar:'مدخل متاح',en:'Accessible entrance'},
      {he:'חניה בקרבת המרפאה',ar:'موقف سيارات قريب',en:'Nearby parking'}
    ],
    openingHours:[
      {day:{he:'ראשון',ar:'الأحد',en:'Sunday'},hours:{he:'סגור',ar:'مغلق',en:'Closed'}},
      {day:{he:'שני',ar:'الاثنين',en:'Monday'},hours:{he:'סגור',ar:'مغلق',en:'Closed'}},
      {day:{he:'שלישי',ar:'الثلاثاء',en:'Tuesday'},hours:'10:00–19:00'},
      {day:{he:'רביעי',ar:'الأربعاء',en:'Wednesday'},hours:{he:'סגור',ar:'مغلق',en:'Closed'}},
      {day:{he:'חמישי',ar:'الخميس',en:'Thursday'},hours:'10:00–19:00'},
      {day:{he:'שישי',ar:'الجمعة',en:'Friday'},hours:'11:00–18:00'},
      {day:{he:'שבת',ar:'السبت',en:'Saturday'},hours:'09:00–20:00'}
    ],
    hoursVerified:false,
    overview:{he:'מרפאת שיניים קהילתית בטירה המציעה טיפול אישי למבוגרים ולמשפחות, עם דגש על הסבר ברור, תכנון טיפול מסודר ומעקב לאורך זמן.',ar:'عيادة أسنان مجتمعية في الطيرة تقدم رعاية شخصية للبالغين والعائلات، مع التركيز على الشرح الواضح وخطة علاج منظمة والمتابعة.',en:'A community dental clinic in Tira offering personal care for adults and families, with an emphasis on clear explanations, structured treatment planning, and follow-up.'},
    website:'https://www.d.co.il/80291692/46230/',
    bookingUrl:null,
    name:{he:'ד״ר כרם סמארה',ar:'د. كرم سمارة',en:'Dr. Karam Samara'},
    detail:{he:'רפואת שיניים כללית',ar:'طب أسنان عام',en:'General dentistry'},
    address:{he:'אל זהרא, טירה',ar:'الزهراء، الطيرة',en:'Al Zahra, Tira'},
    phone:'053-222-1748',
    maps:'https://www.google.com/maps/search/?api=1&query=Dr+Karam+Samara+Dental+Clinic+Tira'
  }
];

const ui = {
  he:{navCare:'מציאת טיפול',navHow:'איך זה עובד',navDoctors:'לרופאים',listClinic:'הוספת המרפאה',cityLabel:'בחרו עיר',finderTitle:'מצאו רופא בשלושה צעדים',fieldLabel:'בחרו תחום',fieldDental:'רפואת שיניים',fieldGeneral:'רפואה כללית',branchLabel:'בחרו קטגוריה',showResults:'הצגת תוצאות',eyebrow:'רפואה שמתחילה באנשים',heroTitle:'הטיפול הנכון.',heroAccent:'ממש קרוב לבית.',heroCopy:'מצאו רופאים ומרפאות לפי העיר והתחום שאתם צריכים.',needLabel:'חיפוש חופשי',searchPlaceholder:'רופא או התמחות',findCare:'חיפוש',popular:'חיפושים נפוצים:',dentist:'רופא שיניים',dermatologist:'רופא עור',eyeDoctor:'רופא עיניים',psychiatrist:'פסיכיאטר',resultsKicker:'מרפאות ורופאים',resultsHelp:'לחצו על שורה כדי לראות את כל פרטי המרפאה.',clinic:'מרפאה',public:'מידע ציבורי',demo:'דוגמה בלבד',noReviews:'עדיין אין חוות דעת',more:'פרטים נוספים',less:'סגירה',call:'התקשרו',navigate:'ניווט',source:'מקור המידע',servicesTitle:'שירותי המרפאה',empty:'עדיין לא נוספו מרפאות לבחירה הזאת.',result:'תוצאה',results:'תוצאות',cities:['טירה','טייבה']},
  ar:{navCare:'ابحث عن علاج',navHow:'كيف يعمل',navDoctors:'للأطباء',listClinic:'أضف عيادتك',cityLabel:'اختر المدينة',finderTitle:'ابحث عن طبيب في ثلاث خطوات',fieldLabel:'اختر المجال',fieldDental:'طب الأسنان',fieldGeneral:'الطب العام',branchLabel:'اختر الفئة',showResults:'عرض النتائج',eyebrow:'رعاية صحية تبدأ بالإنسان',heroTitle:'الرعاية المناسبة.',heroAccent:'بالقرب من بيتك.',heroCopy:'ابحث عن الأطباء والعيادات حسب المدينة والمجال.',needLabel:'بحث حر',searchPlaceholder:'طبيب أو تخصص',findCare:'بحث',popular:'الأكثر بحثًا:',dentist:'طبيب أسنان',dermatologist:'طبيب جلدية',eyeDoctor:'طبيب عيون',psychiatrist:'طبيب نفسي',resultsKicker:'عيادات وأطباء',resultsHelp:'اضغط على السطر لعرض جميع تفاصيل العيادة.',clinic:'عيادة',public:'معلومات عامة',demo:'مثال فقط',noReviews:'لا توجد مراجعات بعد',more:'تفاصيل إضافية',less:'إغلاق',call:'اتصال',navigate:'الموقع',source:'مصدر المعلومات',servicesTitle:'خدمات العيادة',empty:'لم تتم إضافة عيادات لهذا الاختيار بعد.',result:'نتيجة',results:'نتائج',cities:['الطيرة','الطيبة']},
  en:{navCare:'Find care',navHow:'How it works',navDoctors:'For doctors',listClinic:'List your clinic',cityLabel:'Choose city',finderTitle:'Find a doctor in 3 steps',fieldLabel:'Choose a field',fieldDental:'Dentistry',fieldGeneral:'General medicine',branchLabel:'Choose a category',showResults:'Show results',eyebrow:'Healthcare, made human',heroTitle:'The right care.',heroAccent:'Right around the corner.',heroCopy:'Find doctors and clinics by city and field.',needLabel:'Free search',searchPlaceholder:'Doctor or specialty',findCare:'Search',popular:'Popular:',dentist:'Dentist',dermatologist:'Dermatologist',eyeDoctor:'Eye doctor',psychiatrist:'Psychiatrist',resultsKicker:'Clinics and doctors',resultsHelp:'Press a row to see all clinic details.',clinic:'Clinic',public:'Public information',demo:'Example only',noReviews:'No reviews yet',more:'More details',less:'Close',call:'Call',navigate:'Directions',source:'Information source',servicesTitle:'Clinic services',empty:'No clinics have been added for this selection yet.',result:'result',results:'results',cities:['Tira','Tayibe']}
};

ui.he.fieldGeneral='רפואה';
ui.ar.fieldGeneral='الطب';
ui.en.fieldGeneral='Medicine';
ui.he.finderTitle='מצאו רופא או מרפאה';
ui.ar.finderTitle='ابحث عن طبيب أو عيادة';
ui.en.finderTitle='Find a doctor or clinic';
ui.he.subcategoryLabel='בחרו תת־קטגוריה';
ui.ar.subcategoryLabel='اختر الفئة الفرعية';
ui.en.subcategoryLabel='Choose a subcategory';
ui.he.focusLabel='תחומי טיפול';
ui.ar.focusLabel='مجالات العلاج';
ui.en.focusLabel='Treatment areas';
const profileCopy={
  he:{basic:'פרופיל בסיסי ממידע ציבורי',pending:'פרטי הפרופיל יושלמו לאחר אימות מול המרפאה.',overview:'אודות הרופא',education:'לימודים והכשרה',credentials:'התמחות ותעודות',services:'שירותי המרפאה',practical:'מידע שימושי',languages:'שפות',insurance:'הסדרים וביטוחים',hours:'שעות פעילות',accessibility:'נגישות',missing:'המידע טרם נוסף',website:'אתר המרפאה',booking:'קביעת תור'},
  ar:{basic:'ملف أساسي من معلومات عامة',pending:'سيتم استكمال الملف بعد التحقق مع العيادة.',overview:'نبذة عن الطبيب',education:'الدراسة والتدريب',credentials:'التخصص والشهادات',services:'خدمات العيادة',practical:'معلومات مفيدة',languages:'اللغات',insurance:'التأمين والترتيبات',hours:'ساعات العمل',accessibility:'إمكانية الوصول',missing:'لم تتم إضافة المعلومات بعد',website:'موقع العيادة',booking:'حجز موعد'},
  en:{basic:'Basic profile from public information',pending:'Profile details will be completed after verification with the clinic.',overview:'About the doctor',education:'Education and training',credentials:'Specialty and credentials',services:'Clinic services',practical:'Practical information',languages:'Languages',insurance:'Insurance',hours:'Opening hours',accessibility:'Accessibility',missing:'Information not added yet',website:'Clinic website',booking:'Book appointment'}
};
const modalCopy={
  he:{close:'סגירה',verified:'מידע מאומת',public:'פרופיל לדוגמה',sample:'פרופיל לדוגמה',hoursNote:'השעות ממקור ציבורי וטרם אומתו מול המרפאה',contact:'יצירת קשר',location:'מיקום המרפאה',missingTitle:'תוכן להמחשה בלבד',missingBody:'האודות, הלימודים, השירותים, השפות, ההסדרים והנגישות הומצאו לצורך עיצוב ואינם מידע מאומת על ד״ר כרם סמארה.',sampleTitle:'תוכן להמחשה בלבד',sampleBody:'האודות, הלימודים, השירותים, השפות, ההסדרים והנגישות הומצאו לצורך עיצוב ואינם מידע מאומת על ד״ר כרם סמארה.',noWebsite:'לא פורסם אתר רשמי'},
  ar:{close:'إغلاق',verified:'معلومات موثقة',public:'ملف تجريبي',sample:'ملف تجريبي',hoursNote:'الساعات من مصدر عام ولم يتم التحقق منها مع العيادة',contact:'تواصل',location:'موقع العيادة',missingTitle:'محتوى توضيحي فقط',missingBody:'النبذة والدراسة والخدمات واللغات والتأمين وإمكانية الوصول مختلقة لأغراض التصميم وليست معلومات موثقة عن د. كرم سمارة.',sampleTitle:'محتوى توضيحي فقط',sampleBody:'النبذة والدراسة والخدمات واللغات والتأمين وإمكانية الوصول مختلقة لأغراض التصميم وليست معلومات موثقة عن د. كرم سمارة.',noWebsite:'لم يُنشر موقع رسمي'},
  en:{close:'Close',verified:'Verified information',public:'Sample profile',sample:'Sample profile',hoursNote:'Hours are from a public source and have not been verified with the clinic',contact:'Contact',location:'Clinic location',missingTitle:'Demonstration content only',missingBody:'The overview, education, services, languages, insurance, and accessibility were invented for design purposes and are not verified information about Dr. Karam Samara.',sampleTitle:'Demonstration content only',sampleBody:'The overview, education, services, languages, insurance, and accessibility were invented for design purposes and are not verified information about Dr. Karam Samara.',noWebsite:'No official website published'}
};
const state = { city:'tira', field:'Dentistry', branch:'general-dentistry', subcategory:null, language:localStorage.getItem('findmed-language') || 'he' };
const branchBox = document.querySelector('#branch-options');
const subcategoryBox = document.querySelector('#subcategory-options');
const clinicList = document.querySelector('#clinic-list');
const profileModal = document.querySelector('#profile-modal');
const profileModalContent = document.querySelector('#profile-modal-content');

function label(value){ return value?.[state.language] ?? value ?? ''; }
function selectedBranch(){ return careHierarchy[state.field].find(item => item.id === state.branch) || careHierarchy[state.field][0]; }

function renderBranches(){
  branchBox.innerHTML='';
  careHierarchy[state.field].forEach(branch => {
    const button=document.createElement('button'); button.className=`branch-option${branch.id===state.branch?' active':''}`; button.textContent=label(branch.label);
    button.addEventListener('click',()=>{state.branch=branch.id;state.subcategory=branch.subcategories?.[0]?.[0]||null;renderBranches();renderSubcategories();renderClinics();}); branchBox.appendChild(button);
  });
}

function renderSubcategories(){
  const options=selectedBranch().subcategories||[];
  document.querySelector('.subcategory-step').hidden=!options.length;
  subcategoryBox.innerHTML='';
  options.forEach(option=>{
    const button=document.createElement('button');
    button.className=`subcategory-option${option[0]===state.subcategory?' active':''}`;
    button.textContent=option[state.language==='he'?1:state.language==='ar'?2:3];
    button.addEventListener('click',()=>{state.subcategory=option[0];renderSubcategories();renderClinics();});
    subcategoryBox.appendChild(button);
  });
}

function renderClinics(){
  const copy=ui[state.language];
  const requiresSubcategory=(selectedBranch().subcategories||[]).length>0;
  const matches=doctors.filter(doctor=>doctor.city===state.city&&doctor.field===state.field&&doctor.branch===state.branch&&(!requiresSubcategory||doctor.subcategories?.includes(state.subcategory)));
  document.querySelector('#result-count').textContent=`${matches.length} ${matches.length===1?copy.result:copy.results}`;
  clinicList.innerHTML='';
  if(!matches.length){clinicList.innerHTML=`<div class="empty-results"><span>⌕</span><strong>${copy.empty}</strong></div>`;return;}
  matches.forEach(doctor=>{
    const entry=document.createElement('article'); entry.className='clinic-entry';
    const badge=doctor.sampleProfile?copy.demo:doctor.real?copy.public:copy.demo;
    const specialties=doctor.cardSpecialties?.map(item=>label(item)).join(' · ');
    entry.innerHTML=`<button class="clinic-row"><span class="clinic-row-avatar">${doctor.initials}</span><span class="clinic-row-main"><small>${badge}</small><strong>${label(doctor.name)}</strong><span class="clinic-row-field">${label(doctor.detail)}</span>${specialties?`<span class="clinic-row-focus"><b>${copy.focusLabel}:</b> ${specialties}</span>`:''}</span><span class="row-arrow">←</span></button>`;
    entry.querySelector('.clinic-row').addEventListener('click',()=>openProfile(doctor));clinicList.appendChild(entry);
  });
}

function openProfile(doctor){
  const copy=ui[state.language];
  const profile=profileCopy[state.language];
  const modal=modalCopy[state.language];
  const chips=items=>items?.length?`<div class="profile-tags">${items.map(item=>`<span>${label(item)}</span>`).join('')}</div>`:`<p class="section-empty">${profile.missing}</p>`;
  const schedule=doctor.openingHours?.map(item=>`<div class="hours-row"><span>${label(item.day)}</span><strong class="${label(item.hours)==='סגור'||label(item.hours)==='مغلق'||label(item.hours)==='Closed'?'closed':''}">${label(item.hours)}</strong></div>`).join('')||`<p class="section-empty">${profile.missing}</p>`;
  profileModalContent.innerHTML=`<header class="modal-hero"><div class="modal-avatar">${doctor.initials}</div><div class="modal-identity"><span>${doctor.real?modal.public:modal.verified}</span><h2 id="profile-modal-title">${label(doctor.name)}</h2><p>${label(doctor.detail)}</p><small>⌖ ${label(doctor.address)}</small></div><div class="modal-actions">${doctor.phone?`<a class="action-primary" href="tel:${doctor.phone.replaceAll('-','')}">☎ ${copy.call}</a>`:''}${doctor.maps?`<a href="${doctor.maps}" target="_blank" rel="noopener">⌖ ${copy.navigate}</a>`:''}${doctor.website?`<a href="${doctor.website}" target="_blank" rel="noopener">↗ ${profile.website}</a>`:''}</div></header><div class="modal-body"><main class="profile-main-column"><section class="profile-details-card"><div class="profile-detail-row"><div class="section-icon">◌</div><div><h3>${profile.overview}</h3>${doctor.overview?`<p>${label(doctor.overview)}</p>`:`<p class="section-empty">${profile.missing}</p>`}</div></div><div class="profile-detail-row"><div class="section-icon">◇</div><div><h3>${profile.education}</h3>${chips(doctor.education)}</div></div><div class="profile-detail-row"><div class="section-icon">✓</div><div><h3>${profile.credentials}</h3>${chips(doctor.credentials)}</div></div></section><section class="modern-section service-section"><div class="section-icon">+</div><div><h3>${profile.services}</h3>${chips(doctor.services)}</div></section></main><aside class="profile-side-column"><section class="side-card hours-card"><div class="side-card-title"><div><span>◷</span><h3>${profile.hours}</h3></div>${doctor.hoursVerified?'':`<small>${modal.public}</small>`}</div><div class="weekly-hours">${schedule}</div>${doctor.hoursVerified?'':`<p class="hours-note">${modal.hoursNote}</p>`}</section><section class="side-card"><h3>${modal.contact}</h3>${doctor.phone?`<a class="contact-line" href="tel:${doctor.phone.replaceAll('-','')}"><span>☎</span><div><small>${copy.call}</small><strong>${doctor.phone}</strong></div></a>`:''}<a class="contact-line" href="${doctor.maps}" target="_blank" rel="noopener"><span>⌖</span><div><small>${modal.location}</small><strong>${label(doctor.address)}</strong></div></a>${doctor.website?`<a class="contact-line" href="${doctor.website}" target="_blank" rel="noopener"><span>↗</span><div><small>${profile.website}</small><strong>${doctor.website}</strong></div></a>`:`<div class="website-empty">${modal.noWebsite}</div>`}</section></aside></div>`;
  const practicalItems=[
    [profile.languages,doctor.languages],
    [profile.insurance,doctor.insurance],
    [profile.accessibility,doctor.accessibility]
  ].filter(([,items])=>items?.length);
  if(practicalItems.length){
    profileModalContent.querySelector('.profile-side-column').insertAdjacentHTML('beforeend',`<section class="side-card practical-card"><h3>${profile.practical}</h3>${practicalItems.map(([title,items])=>`<div class="practical-item"><b>${title}</b>${chips(items)}</div>`).join('')}</section>`);
  }
  profileModal.hidden=false;document.body.classList.add('modal-open');profileModal.querySelector('.profile-close').focus();
}

function closeProfile(){profileModal.hidden=true;document.body.classList.remove('modal-open');}
document.querySelectorAll('[data-close-profile]').forEach(button=>button.addEventListener('click',closeProfile));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!profileModal.hidden)closeProfile();});

function setField(field){
  state.field=field; state.branch=careHierarchy[field][0].id;
  state.subcategory=careHierarchy[field][0].subcategories?.[0]?.[0]||null;
  document.querySelectorAll('.field-option').forEach(button=>button.classList.toggle('active',button.dataset.field===field)); renderBranches();renderSubcategories();renderClinics();
}

function setLanguage(language){
  state.language=language;const copy=ui[language];document.documentElement.lang=language;document.documentElement.dir=language==='en'?'ltr':'rtl';
  document.querySelectorAll('[data-i18n]').forEach(el=>{if(copy[el.dataset.i18n])el.textContent=copy[el.dataset.i18n];});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=copy[el.dataset.i18nPlaceholder]);document.querySelectorAll('[data-lang]').forEach(el=>el.classList.toggle('active',el.dataset.lang===language));document.querySelectorAll('.city-option').forEach((el,i)=>el.querySelector('b').textContent=copy.cities[i]);
  renderBranches();renderSubcategories();renderClinics();localStorage.setItem('findmed-language',language);
}

document.querySelectorAll('.city-option').forEach(button=>button.addEventListener('click',()=>{state.city=button.dataset.city;document.querySelectorAll('.city-option').forEach(el=>el.classList.toggle('active',el===button));renderClinics();}));
document.querySelectorAll('.field-option').forEach(button=>button.addEventListener('click',()=>setField(button.dataset.field)));
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
setLanguage(state.language);
