/**
 * Single source of truth for all site copy and contact details.
 * Edit this file to update text without changing layout components.
 */

/** Neutral professional title (Australian advertising compliance). */
export const PROFESSIONAL_TITLE = 'Doctor · Obstetrics & Gynaecology';

/** Set to display AHPRA registration in the footer; leave empty to hide. */
export const AHPRA_REGISTRATION_NO = '';

/** Formspree form ID (e.g. "xyzabc"). Leave empty to use mailto fallback only. */
export const FORMSPREE_FORM_ID = '';

/** Set to true to show the Get in touch section and Contact nav link. */
export const SHOW_CONTACT_SECTION = false;

export const siteMeta = {
  title: 'Dr. Nasreen A. Sial | Obstetrics & Gynaecology',
  description:
    'Dr. Nasreen A. Sial — experienced doctor in obstetrics and gynaecology. Compassionate women\'s health care. Based in South Australia. Enquire via WhatsApp or email.',
  logoPath: '/images/logo.png',
  logoAlt: 'Dr. Nasreen A. Sial logo',
  profileImagePath: '/images/dr-sial-profile.png',
  profileImageAlt: 'Portrait of Dr. Nasreen A. Sial',
};

export const contact = {
  whatsappNumber: '+61 414 777 264',
  whatsappLink:
    'https://wa.me/61414777264?text=Hello%20Dr.%20Sial%2C%20I%27d%20like%20to%20enquire%20about%20a%20consultation.',
  email: 'drnasreensial@gmail.com',
  location: '📍 - South Australia 🇦🇺',
};

export const hero = {
  name: 'Dr. Nasreen A. Sial',
  credentials: 'MBBS · Fellowship in Obstetrics & Gynaecology (College of Physicians and Surgeons Pakistan)',
  tagline: 'Compassionate, experienced care in women\'s health.',
  ctaWhatsApp: 'Message on WhatsApp',
  ctaEmail: 'Send an Email',
};

export const highlights = [
  { value: '~2,000', label: 'surgeries performed' },
  { value: '3 years', label: 'Consultant & Senior Specialist, Saudi Arabia' },
  { value: '6 years', label: 'Assistant Professor & Senior Registrar, Pakistan' },
  { value: 'Author', label: 'of the book "Learn CTG"' },
];

export const about = {
  paragraphs: [
    'Dr. Nasreen A. Sial is a doctor with extensive clinical, surgical and teaching experience in obstetrics and gynaecology across Pakistan and Saudi Arabia. She completed her Fellowship in Obstetrics & Gynaecology with the College of Physicians and Surgeons Pakistan in 2007 and has served as Senior Registrar, Assistant Professor, Consultant and Senior Specialist, performing approximately 2,000 surgeries, including complex and high-risk cases.',
    'Alongside her clinical work, Dr. Sial has taught medical students, including bedside teaching and lectures, presented monthly statistics and led perinatal meetings. She is the first author of the book \'Learn CTG\' and has contributed to published research. She is now based in Australia and has passed AMC Part 1, and is preparing for the AMC Clinical Examination.',
  ],
  beyondMedicine: 'Debating · Poetry · Reading',
};

export const areasOfCare = {
  heading: 'Areas of Care',
  intro: 'Patient-focused support across common women\'s health concerns.',
  items: [
    {
      title: 'Abnormal Uterine Bleeding',
      description:
        'Assessment and management of heavy, prolonged, irregular or unexpected bleeding.',
      icon: 'droplet',
    },
    {
      title: 'Perimenopause & Menopause Management',
      description:
        'Support through hormonal changes, symptom relief and long-term health.',
      icon: 'sun',
    },
    {
      title: 'Hormone Replacement Therapy (HRT) Management',
      description: 'Individualised assessment and review of HRT options.',
      icon: 'heart-pulse',
    },
    {
      title: 'Polycystic Ovarian Disease (PCOS)',
      description:
        'Assessment and management of irregular cycles and hormonal symptoms.',
      icon: 'circle',
    },
    {
      title: 'Post-Menopausal Bleeding',
      description: 'Prompt evaluation of any bleeding after menopause.',
      icon: 'alert',
    },
    {
      title: 'Contraception',
      description: 'Personalised counselling on contraceptive options.',
      icon: 'shield',
    },
    {
      title: 'Atrophic Vaginitis',
      description:
        'Management of dryness, discomfort and related symptoms after menopause.',
      icon: 'leaf',
    },
    {
      title: 'Pelvic Pain Management',
      description: 'Assessment and management of acute and chronic pelvic pain.',
      icon: 'activity',
    },
  ],
  footnote:
    'Dr. Sial also has extensive obstetric and gynaecological surgical experience. See Experience below.',
};

export type ExperienceEntry = {
  role: string;
  organisation: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Specialist',
    organisation: 'Imam Abdur Rehman Al Faisal Hospital (Ministry of Health)',
    location: 'Riyadh, Saudi Arabia',
    period: 'Sept 2014 – Dec 2016',
    bullets: [
      'Supervised and supported doctors and medical staff for the most acutely unwell and/or complex patients',
      'Performed diagnostic ultrasound for out-patient and in-patient wards and carried out gynaecology and obstetrics clinical procedures',
      'Attended inter-departmental calls for emergency and indoor patients',
      'Led hand-over processes for patients, wards and related activities',
      'Took an active role in training junior doctors',
    ],
  },
  {
    role: 'Consultant, Obstetrics & Gynaecology',
    organisation: 'Women & Children Hospital (Ministry of Health)',
    location: 'Hafar Al Batin, Saudi Arabia',
    period: 'Jun 2013 – Sept 2014',
    bullets: [
      'Determined admission, discharge and treatment plans for the entire gynaecology and obstetrics department',
      'Performed high-risk surgeries',
      'Performed diagnostic ultrasound daily and did daily ward rounds',
    ],
  },
  {
    role: 'Assistant Professor, Gynaecology & Obstetrics',
    organisation: 'Allama Iqbal Medical College & Jinnah Hospital',
    location: 'Lahore, Pakistan',
    period: 'Feb 2013 – Jun 2014',
    bullets: [
      'Taught medical students through lectures (class of about 300 students) and taught ultrasound',
      'Supervised the elective operation list and handled all complications',
      'Managed complicated cases, including cancer surgeries and staging laparotomies, plus emergency exploratory laparotomies, peri-partum hysterectomies and vaginal hysterectomies',
      'Daily ward rounds and out-patient clinics twice a week',
      'Presented monthly statistics and conducted perinatal meetings',
    ],
  },
  {
    role: 'Senior Registrar, Gynaecology & Obstetrics',
    organisation: 'Allama Iqbal Medical College & Jinnah Hospital',
    location: 'Lahore, Pakistan',
    period: 'Nov 2009 – Feb 2013',
    bullets: [
      'Supervised the elective operation list and handled all complications',
      'Managed complicated cases (cancer surgeries, staging laparotomies) and emergency surgeries (exploratory laparotomies, peri-partum hysterectomies, vaginal hysterectomies)',
      'Taught ultrasound to medical students; presented monthly statistics and conducted perinatal meetings',
    ],
  },
  {
    role: 'Senior Registrar, Gynaecology & Obstetrics',
    organisation: 'Postgraduate Medical Institute / Lahore General Hospital',
    location: 'Lahore, Pakistan',
    period: 'Apr 2008 – Nov 2009',
    bullets: [
      'Same scope of responsibilities as above (elective operation list, complicated and emergency surgeries, ultrasound teaching, monthly statistics and perinatal meetings)',
    ],
  },
];

export const clinicalSkills = [
  'Advanced skills in placenta praevia (advanced degree)',
  'Management of eclampsia (APH & PPH)',
  'Laparotomy for ruptured uterus',
  'Ruptured ectopic pregnancy',
  'Low and mid-cavity forceps delivery',
  'Diagnostic dilatation & curettage',
  'Perineal repair (3rd and 4th degree)',
  'Repeat Caesarean sections (including multiple previous caesareans)',
  'Staging laparotomy',
  'Operations for cancer of the vulva (as first assistant)',
  "Wertheim's hysterectomy, radical and modified radical hysterectomy (as first assistant)",
  'Basic laparoscopy (2 courses in Dubai and Sydney, plus self-practice)',
  'Diagnostic ultrasound: gynaecology, obstetrics and abdomen',
];

export const education = [
  {
    title: 'AMC Part 1',
    detail: 'Passed. Clinical Examination: in preparation (Australian Medical Council)',
  },
  {
    title: 'Six Sigma Black Belt, Silver Certification',
    detail: 'Pyzdek Institute, Arizona, USA (online course accredited by IASSC) · May 2016 – Jan 2017',
  },
  {
    title: 'Fellowship in Obstetrics & Gynaecology',
    detail: 'College of Physicians and Surgeons Pakistan · Jan 2002 – Dec 2007',
  },
  {
    title: 'MBBS',
    detail: 'Fatima Jinnah Medical College, Lahore, Pakistan · May 1995 – Jun 2000',
  },
];

export const cpdCourses = [
  { date: 'Jun 2021 (5 weeks)', title: 'Clinical exam preparation, ARIMGSAS, Australia' },
  { date: 'Sept 2018', title: 'Birth Masterclass Workshop, RANZCOG, Australia' },
  { date: 'Jul 2018', title: 'Advanced Life Support in Obstetrics (ALSO), Adelaide, Australia' },
  {
    date: 'Jun 2018 (1 week)',
    title: 'Advanced Gynaecological Surgery, SWEC, St George Hospital, Sydney, Australia',
  },
  {
    date: 'May 2018 (1 week)',
    title: 'Fellow in Minimal Access Surgery, World Laparoscopic Hospital, Dubai',
  },
  { date: 'Jan 2017', title: 'Customised Sonography Training (theory and practice)' },
  {
    date: 'Jun – Jul 2011',
    title: 'Diagnostic Ultrasound in Gynaecology, Obstetrics & Abdomen (6 weeks, full-day)',
  },
  { date: '20 Dec 2008', title: 'Role of Endoscopic Surgery in Gynaecology (workshop)' },
  { date: '5–9 Apr 2004', title: 'Research Methodology, Biostatistics & Dissertation Writing' },
  { date: '27–29 Jan 2004', title: 'Primary Surgical Skills' },
  { date: '19–21 Jan 2004', title: 'Communication Skills' },
  { date: '13–17 Oct 2003', title: 'Introduction to Computer & Internet (workshop)' },
];

export const CPD_VISIBLE_COUNT = 6;

export const research = {
  published: [
    {
      type: 'Book (first author)',
      citation: 'Learn CTG, Azeem Publishers, 2012',
    },
    {
      type: 'Journal article',
      citation:
        'Teenage Pregnancy & Its Complications: Sial, Nasreen Akbar; Saeed, Muhammad. Pakistan Journal of Obstetrics & Gynaecology, Vol. 18, No. 1–4, pp. 25–31, 2010',
    },
  ],
  audits: [
    {
      title: 'Incidence of the Cord Around the Neck (CAN) and Its Implications on the Neonatal Outcome (2012)',
      body: '392 cases studied between 1 Dec 2010 and 28 Feb 2011 to assess the effect of a nuchal cord on delivery outcome. Concluded that CAN is steadily increasing and that a tight loop influences fetal birth weight, Apgar score and mode of delivery, whereas a loose loop does not.',
    },
    {
      title: 'Risk Assessment of Teenage Pregnancy, Its Complications & Suggested Strategies (2007)',
      body: '100 cases each of teenage, mid and late reproductive age groups studied between 1 Feb 2004 and 28 Feb 2005 to identify medical, social and obstetric complications, maternal outcome (especially mode of delivery) and fetal outcome. Concluded that anaemia, preterm delivery and low birth weight were the main complications.',
    },
  ],
};

export const contactSection = {
  heading: 'Get in touch',
  subheading:
    'For consultation enquiries, message Dr. Sial on WhatsApp or send an email.',
  emergencyNotice: 'Not for emergencies. Call 000.',
};

export const footerDisclaimer =
  'This website provides general information only and does not constitute medical advice. It is not for emergencies. In an emergency, call 000.';

const allNavLinks = [
  { label: 'About', href: '#about' },
  { label: 'Areas of Care', href: '#areas-of-care' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Training', href: '#training' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
] as const;

export const navLinks = SHOW_CONTACT_SECTION
  ? [...allNavLinks]
  : allNavLinks.filter((link) => link.href !== '#contact');
