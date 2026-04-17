const BASE = new URL("./", window.location.href);

const BUNDLED_DOCS = [
  {
    key: "2025-2027",
    label: "Class of 2025 to 2027 Dolan majors and core reference",
    path: new URL("./assets/docs/class-2025-2027-dolan-majors-core.pdf", BASE).href,
    filename: "class-2025-2027-dolan-majors-core.pdf",
    type: "pdf",
  },
  {
    key: "2028+",
    label: "Class of 2028 and beyond Dolan majors and core reference",
    path: new URL("./assets/docs/class-2028-beyond-dolan-majors-core.pdf", BASE).href,
    filename: "class-2028-beyond-dolan-majors-core.pdf",
    type: "pdf",
  },
  {
    key: "study-abroad",
    label: "Dolan study abroad advising sheet",
    path: new URL("./assets/docs/dolan-study-abroad-advising-sheet.pdf", BASE).href,
    filename: "dolan-study-abroad-advising-sheet.pdf",
    type: "pdf",
  },
  {
    key: "magis",
    label: "Magis course reference",
    path: new URL("./assets/docs/magis-courses.pdf", BASE).href,
    filename: "magis-courses.pdf",
    type: "pdf",
  },
  {
    key: "internships",
    label: "Internship guidance memo",
    path: new URL("./assets/docs/details-on-internships.docx", BASE).href,
    filename: "details-on-internships.docx",
    type: "docx",
  },
];

const CATALOG_LINK_GROUPS = [
  {
    title: "Core and Policies",
    links: [
      ["Magis Core", "https://catalog.fairfield.edu/undergraduate/curricula/magis-core/"],
      ["Business Core", "https://catalog.fairfield.edu/undergraduate/business/core/"],
      ["Business Degrees", "https://catalog.fairfield.edu/undergraduate/business/#degreestext"],
      ["Catalog Addendum", "https://catalog.fairfield.edu/addendum/"],
      ["Global Fairfield", "https://catalog.fairfield.edu/undergraduate/global-fairfield/#programstext"],
    ],
  },
  {
    title: "Programs and Course Lists",
    links: [
      ["Accounting", "https://catalog.fairfield.edu/undergraduate/business/accounting/#coursestext"],
      ["Business Analytics", "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/#coursestext"],
      ["Applied Ethics", "https://catalog.fairfield.edu/undergraduate/business/applied-ethics/"],
      ["Economics", "https://catalog.fairfield.edu/undergraduate/business/economics/#coursestext"],
      ["Finance", "https://catalog.fairfield.edu/undergraduate/business/finance/#coursestext"],
      ["International Business", "https://catalog.fairfield.edu/undergraduate/business/international-business/#coursestext"],
      ["Management", "https://catalog.fairfield.edu/undergraduate/business/management/#coursestext"],
      ["Marketing", "https://catalog.fairfield.edu/undergraduate/business/marketing/#coursestext"],
    ],
  },
];

const PROGRAM_LINK_SOURCE = "provided catalog link list";
const PROGRAM_PAGE_URLS = {
  "accounting": "https://catalog.fairfield.edu/undergraduate/business/accounting/accounting-major/#requirementstext",
  "accounting major": "https://catalog.fairfield.edu/undergraduate/business/accounting/accounting-major/#requirementstext",
  "accounting minor": "https://catalog.fairfield.edu/undergraduate/business/accounting/accounting-minor/",
  "accounting analytics minor": "https://catalog.fairfield.edu/undergraduate/business/accounting/accounting-analytics-minor/",
  "taxation minor": "https://catalog.fairfield.edu/undergraduate/business/accounting/taxation-minor/",
  "business analytics": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-major/",
  "analytics": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-major/",
  "business analytics major": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-major/",
  "analytics major": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-major/",
  "business analytics minor": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-minor/",
  "analytics minor": "https://catalog.fairfield.edu/undergraduate/business/information-systems-operations-management/business-analytics-minor/",
  "applied ethics minor": "https://catalog.fairfield.edu/undergraduate/business/applied-ethics-minor/index.html",
  "diversity equity and inclusion minor": "https://catalog.fairfield.edu/undergraduate/business/dei-minor/#requirementstext",
  "diversity, equity, and inclusion minor": "https://catalog.fairfield.edu/undergraduate/business/dei-minor/#requirementstext",
  "dei minor": "https://catalog.fairfield.edu/undergraduate/business/dei-minor/#requirementstext",
  "economics": "https://catalog.fairfield.edu/undergraduate/business/economics/bs-economics-dsb/",
  "economics major": "https://catalog.fairfield.edu/undergraduate/business/economics/bs-economics-dsb/",
  "economics minor": "https://catalog.fairfield.edu/undergraduate/arts-sciences/economics/economics-minor/",
  "finance": "https://catalog.fairfield.edu/undergraduate/business/finance/finance-major/#requirementstext",
  "finance major": "https://catalog.fairfield.edu/undergraduate/business/finance/finance-major/#requirementstext",
  "finance minor": "https://catalog.fairfield.edu/undergraduate/business/finance/finance-minor/",
  "dual major in finance and computer science": "https://catalog.fairfield.edu/undergraduate/business/finance/finance-computer-science-dualmajor/#requirementstext",
  "major in integrated business and engineering": "https://catalog.fairfield.edu/undergraduate/business/integrated-business-engineering-major/",
  "integrated business and engineering": "https://catalog.fairfield.edu/undergraduate/business/integrated-business-engineering-major/",
  "international business": "https://catalog.fairfield.edu/undergraduate/business/international-business/international-business-major/#requirementstext",
  "international business major": "https://catalog.fairfield.edu/undergraduate/business/international-business/international-business-major/#requirementstext",
  "international business minor": "https://catalog.fairfield.edu/undergraduate/business/international-business/international-business-minor/",
  "management": "https://catalog.fairfield.edu/undergraduate/business/management/management-major/#requirementstext",
  "management major": "https://catalog.fairfield.edu/undergraduate/business/management/management-major/#requirementstext",
  "management minor": "https://catalog.fairfield.edu/undergraduate/business/management/management-minor/",
  "business law and ethics minor": "https://catalog.fairfield.edu/undergraduate/business/management/business-law-ethics-minor/",
  "entrepreneurship minor": "https://catalog.fairfield.edu/undergraduate/business/management/entrepreneurship-minor/",
  "sports leadership and management minor": "https://catalog.fairfield.edu/undergraduate/business/management/sports-leadership-management-minor/",
  "marketing": "https://catalog.fairfield.edu/undergraduate/business/marketing/marketing-major/#requirementstext",
  "marketing major": "https://catalog.fairfield.edu/undergraduate/business/marketing/marketing-major/#requirementstext",
  "marketing minor": "https://catalog.fairfield.edu/undergraduate/business/marketing/marketing-minor/",
  "sports business": "https://catalog.fairfield.edu/undergraduate/business/sports-business/sports-business-major/",
  "sports business major": "https://catalog.fairfield.edu/undergraduate/business/sports-business/sports-business-major/",
  "post baccalaureate certificate": "https://catalog.fairfield.edu/undergraduate/business/certificates/",
  "post-baccalaureate certificate": "https://catalog.fairfield.edu/undergraduate/business/certificates/",
};

const WORD_TO_NUMBER = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };
const ACCOUNTING_ELECTIVE_EXCLUSIONS = ["ACCT 1011", "ACCT 1012", "ACCT 2203", "ACCT 2204", "ACCT 2265", "ACCT 3255", "ACCT 3330", "ACCT 3343", "ACCT 4310"];
const FINANCE_REQUIRED_SET = ["FNCE 2101", "FNCE 3210", "FNCE 3215", "FNCE 4330", "FNCE 4305", "FNCE 4320", "FNCE 4390"];
const DATA_REQUIRED_SET = ["DATA 1101", "DATA 3210", "DATA 3260", "DATA 4310", "DATA 4315", "DATA 4999"];
const ECON_REQUIRED_SET = ["ECON 1011", "ECON 1012", "ECON 2114", "ECON 3204", "ECON 3205"];
const MGMT_REQUIRED_SET = ["MGMT 2101", "MGMT 3235", "MGMT 3240", "MGMT 4375", "MGMT 4385", "MGMT 4390", "MGMT 4335"];
const MKTG_REQUIRED_SET = ["MKTG 1101", "MKTG 2212", "MKTG 2311", "MKTG 4312", "MKTG 2261"];

const PROGRAM_REQUIREMENTS = {
  "accounting major": {
    title: "Accounting Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 2204", title: "Intermediate Accounting II" },
      { type: "course", code: "ACCT 3255", title: "Accounting Information Systems" },
      { type: "course", code: "ACCT 3330", title: "Auditing" },
      { type: "course", code: "ACCT 3343", title: "Federal Income Taxation I" },
      { type: "course", code: "ACCT 4310", title: "Advanced Accounting" },
    ],
  },
  "accounting minor": {
    title: "Accounting Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "ACCT 1011", title: "Introduction to Financial Accounting" },
      { type: "course", code: "ACCT 1012", title: "Introduction to Management Accounting" },
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 2204", title: "Intermediate Accounting II" },
      { type: "choose_any", count: 1, label: "Choose one: ACCT 2265 Standalone Accounting Systems: Development and Use or a 3000/4000-level accounting elective", options: ["ACCT 2265"], pool: { prefix: "ACCT", minLevel: 3000, exclude: ["ACCT 2203", "ACCT 2204"] } },
    ],
  },
  "accounting analytics minor": {
    title: "Accounting Analytics Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "ACCT 1011", title: "Introduction to Financial Accounting" },
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 2265", title: "Standalone Accounting Systems: Development and Use" },
      { type: "course", code: "ACCT 3265", title: "Enterprise-wide Accounting Systems: Design and Control" },
      { type: "course", code: "ACCT 3275", title: "Data Analytics in Accounting and Taxation" },
    ],
  },
  "taxation minor": {
    title: "Taxation Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 3343", title: "Federal Income Taxation I" },
      { type: "course", code: "ACCT 3345", title: "Federal Income Taxation II" },
      { type: "choose_list", count: 2, label: "Choose two approved taxation electives", options: [
        { code: "ACCT 2250", title: "Role of Money and Accounting in Society" },
        { code: "ACCT 3275", title: "Data Analytics in Accounting and Taxation" },
        { code: "ACCT 3344", title: "Individual Taxation: Socioeconomic Applications" },
        { code: "FNCE 2190", title: "Personal Finance" },
      ] },
    ],
  },
  "business analytics major": {
    title: "Business Analytics Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "DATA 3210", title: "Business Analytics Methods" },
      { type: "course", code: "DATA 3260", title: "Database Systems" },
      { type: "course", code: "DATA 4310", title: "Business Intelligence" },
      { type: "course", code: "DATA 4315", title: "Data Mining and Applications" },
      { type: "course", code: "DATA 4999", title: "Business Analytics Capstone" },
      { type: "pool", count: 1, label: "One DATA elective", pool: { prefix: "DATA", minLevel: 2000, exclude: DATA_REQUIRED_SET } },
    ],
  },
  "business analytics minor": {
    title: "Business Analytics Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "DATA 1101", title: "Business Analytics" },
      { type: "course", code: "DATA 3210", title: "Business Analytics Methods" },
      { type: "course", code: "DATA 3260", title: "Database Systems" },
      { type: "choose_list", count: 1, label: "Choose one: DATA 4310 or DATA 4315", options: [
        { code: "DATA 4310", title: "Business Intelligence" },
        { code: "DATA 4315", title: "Data Mining and Applications" },
      ] },
      { type: "pool", count: 1, label: "One DATA elective", pool: { prefix: "DATA", minLevel: 2000, exclude: DATA_REQUIRED_SET } },
    ],
  },
  "applied ethics minor": {
    title: "Applied Ethics Minor",
    totalCredits: 15,
    rules: [
      { type: "category", label: "2-3 Intermediate Applied Ethics courses", count: 2, pool: { prefix: "AETH", minLevel: 2000, maxLevel: 2999 } },
      { type: "category", label: "2-3 Advanced Applied Ethics seminars", count: 2, pool: { prefix: "AETH", minLevel: 3000 } },
    ],
  },
  "diversity equity and inclusion minor": {
    title: "Diversity, Equity, and Inclusion Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "ECON 2114", title: "Economics of Race, Class, and Gender in the American Workplace" },
      { type: "course", code: "MGMT 4320", title: "Diversity in the Workplace" },
      { type: "choose_list", count: 3, label: "Choose three DEI electives from the approved list", options: [
        { code: "MGMT 4321", title: "Inclusive Leadership" },
        { code: "SOCI 2245", title: "Race and Ethnicity" },
        { code: "SOCI 2270", title: "Social Inequality" },
        { code: "ANTH 2260", title: "Cultural Anthropology" },
        { code: "POLI 2265", title: "Identity Politics" },
        { code: "ENGL 2240", title: "Literature of Diversity" },
        { code: "HIST 2260", title: "African American History" },
        { code: "HIST 2265", title: "Civil Rights Movement" },
        { code: "PSYC 2230", title: "Social Psychology" },
      ] },
    ],
  },
  "economics major": {
    title: "Economics Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "ECON 3204", title: "Intermediate Microeconomic Theory" },
      { type: "course", code: "ECON 3205", title: "Intermediate Macroeconomic Theory" },
      { type: "pool", count: 4, label: "Four economics electives", pool: { prefix: "ECON", minLevel: 2000, exclude: ECON_REQUIRED_SET } },
    ],
  },
  "economics minor": {
    title: "Economics Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "ECON 1011", title: "Introduction to Microeconomics" },
      { type: "course", code: "ECON 1012", title: "Introduction to Macroeconomics" },
      { type: "pool", count: 3, label: "Three economics electives", pool: { prefix: "ECON", minLevel: 2000, exclude: ["ECON 1011", "ECON 1012"] } },
    ],
  },
  "finance major": {
    title: "Finance Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "FNCE 3210", title: "Principles of Investment" },
      { type: "course", code: "FNCE 3215", title: "Financial Management" },
      { type: "course", code: "FNCE 4330", title: "Case Studies in Finance" },
      { type: "pool", count: 3, label: "Three approved finance electives", pool: { prefix: "FNCE", minLevel: 3000, exclude: FINANCE_REQUIRED_SET.concat(["FNCE 3980", "FNCE 2980"]) } },
    ],
  },
  "finance minor": {
    title: "Finance Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "FNCE 2101", title: "Introduction to Finance" },
      { type: "course", code: "FNCE 3210", title: "Principles of Investment" },
      { type: "course", code: "FNCE 3215", title: "Financial Management" },
      { type: "pool", count: 2, label: "Two approved finance electives", pool: { prefix: "FNCE", minLevel: 3000, exclude: ["FNCE 2101", "FNCE 3210", "FNCE 3215"] } },
    ],
  },
  "dual major in finance and computer science": {
    title: "Dual Major in Finance and Computer Science",
    totalCredits: 128,
    rules: [
      { type: "dual_summary", label: "Magis Core (45 credits), Business Core (33 credits), Finance Major (18 credits), Computer Science Major (32 credits)" },
      { type: "course", code: "FNCE 3210", title: "Principles of Investment" },
      { type: "course", code: "FNCE 3215", title: "Financial Management" },
      { type: "course", code: "FNCE 4305", title: "Finance Elective Required in Dual Major" },
      { type: "course", code: "FNCE 4320", title: "Finance Elective Required in Dual Major" },
      { type: "course", code: "FNCE 4330", title: "Case Studies in Finance" },
      { type: "course", code: "FNCE 4390", title: "Finance Elective Required in Dual Major" },
    ],
  },
  "major in integrated business and engineering": {
    title: "Integrated Business and Engineering Major",
    totalCredits: 125,
    rules: [
      { type: "fixed_group", label: "Business Core for IBE", options: [
        "ACCT 1011","ACCT 1012","AETH 2291","BUSN 1101","BUSN 3211","DATA 1101","FNCE 2101","INTL 2101","MATH 2217","MGMT 2101","MKTG 1101","MGMT 4300"
      ] },
      { type: "course", code: "ENGR 1031", title: "Engineering requirement" },
      { type: "course", code: "CPSC 1101", title: "Engineering requirement" },
      { type: "course", code: "ENGR 2145", title: "Engineering requirement" },
      { type: "course", code: "ENGR 4360", title: "Engineering requirement" },
      { type: "course", code: "ENGR 4310", title: "Engineering requirement" },
      { type: "choose_list", count: 1, label: "Choose one engineering lab sequence", options: [
        { code: "ELEG 2213", title: "Electrical Engineering option" },
        { code: "MEEG 2201", title: "Mechanical Engineering option" },
      ] },
      { type: "pool", count: 2, label: "Two engineering electives", pool: { prefixes: ["ENGR", "ELEG", "MEEG"], minLevel: 2000, exclude: ["ENGR 1031","ENGR 2145","ENGR 4360","ENGR 4310","ELEG 2213","MEEG 2201","CPSC 1101"] } },
    ],
  },
  "international business major": {
    title: "International Business Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "INTL 1050", title: "People, Places, and Global Issues" },
      { type: "course", code: "INTL 1051", title: "Introduction to International Relations" },
      { type: "course", code: "INTL 1052", title: "Culture and the Political Economy" },
      { type: "course", code: "INTL 4999", title: "Senior Capstone Seminar" },
      { type: "pool", count: 2, label: "Two approved international business electives", pool: { prefix: "INTL", minLevel: 3000, exclude: ["INTL 1050","INTL 1051","INTL 1052","INTL 4999","INTL 2101"] } },
    ],
  },
  "international business minor": {
    title: "International Business Minor",
    totalCredits: 18,
    rules: [
      { type: "course", code: "INTL 1050", title: "People, Places, and Global Issues" },
      { type: "course", code: "INTL 1051", title: "Introduction to International Relations" },
      { type: "course", code: "INTL 1052", title: "Culture and the Political Economy" },
      { type: "choose_list", count: 1, label: "Choose one: ECON 1011, ECON 1012, or INTL 1053", options: [
        { code: "ECON 1011", title: "Introduction to Microeconomics" },
        { code: "ECON 1012", title: "Introduction to Macroeconomics" },
        { code: "INTL 1053", title: "Approved International Business option" },
      ] },
      { type: "course", code: "INTL 2101", title: "Introduction to International Business" },
      { type: "pool", count: 1, label: "One approved international business elective", pool: { prefix: "INTL", minLevel: 3000, exclude: ["INTL 1050","INTL 1051","INTL 1052","INTL 2101"] } },
    ],
  },
  "management major": {
    title: "Management Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "MGMT 3235", title: "Managing Human Resources" },
      { type: "course", code: "MGMT 3240", title: "Leading and Managing People" },
      { type: "choose_list", count: 1, label: "Choose one global management course", options: [
        { code: "MGMT 4385", title: "Managing People for Global Business" },
        { code: "MGMT 4390", title: "Cross-Cultural Management" },
      ] },
      { type: "choose_list", count: 3, label: "Three approved management electives", options: [
        { code: "MGMT 3230", title: "Negotiations" },
        { code: "MGMT 3245", title: "Organizational Behavior" },
        { code: "MGMT 3250", title: "Leadership Development" },
        { code: "MGMT 3260", title: "Talent Management" },
        { code: "MGMT 3270", title: "Teams and Collaboration" },
        { code: "MGMT 4380", title: "Strategic Management" },
        { code: "MGMT 4395", title: "Special Topics in Management" },
      ] },
    ],
  },
  "business law and ethics minor": {
    title: "Business Law and Ethics Minor",
    totalCredits: 18,
    rules: [
      { type: "course", code: "AETH 2291", title: "Business Ethics" },
      { type: "course", code: "AETH 3391", title: "Seminar in Business Law, Regulation, and Ethics" },
      { type: "course", code: "BUSN 3211", title: "Legal Environment of Business" },
      { type: "group_mix", count: 3, label: "Choose three courses total, with no more than two from each group", groups: [
        { label: "Group 1", options: [
          { code: "BUSN 3212", title: "Employment Law" },
          { code: "BUSN 3213", title: "Business Law II" },
          { code: "BUSN 3215", title: "Corporate Governance" },
          { code: "BUSN 3220", title: "International Business Law" },
        ] },
        { label: "Group 2", options: [
          { code: "AETH 3301", title: "Ethical Decision Making" },
          { code: "AETH 3310", title: "Social Responsibility" },
          { code: "AETH 3320", title: "Environmental Ethics" },
          { code: "AETH 3395", title: "Special Topics" },
        ] },
      ] },
    ],
  },
  "entrepreneurship minor": {
    title: "Entrepreneurship Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "BUSN 3211", title: "Legal Environment of Business" },
      { type: "course", code: "MGMT 4335", title: "Entrepreneurship: Ideation and Validation" },
      { type: "choose_list", count: 3, label: "Approved entrepreneurship electives", options: [
        { code: "MGMT 2101", title: "Introduction to Management" },
        { code: "MKTG 1101", title: "Principles of Marketing" },
        { code: "FNCE 2101", title: "Introduction to Finance" },
        { code: "MGMT 4336", title: "New Venture Planning" },
        { code: "MGMT 4337", title: "Entrepreneurial Finance" },
        { code: "MGMT 4338", title: "Innovation Strategy" },
        { code: "MGMT 4339", title: "Family Business" },
        { code: "MGMT 4340", title: "Social Entrepreneurship" },
      ] },
    ],
  },
  "management minor": {
    title: "Management Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "MGMT 2101", title: "Introduction to Management" },
      { type: "course", code: "MGMT 3235", title: "Managing Human Resources" },
      { type: "course", code: "MGMT 3240", title: "Leading and Managing People" },
      { type: "choose_list", count: 2, label: "Two approved management electives", options: [
        { code: "MGMT 3230", title: "Negotiations" },
        { code: "MGMT 3245", title: "Organizational Behavior" },
        { code: "MGMT 3250", title: "Leadership Development" },
        { code: "MGMT 3260", title: "Talent Management" },
        { code: "MGMT 3270", title: "Teams" },
      ] },
    ],
  },
  "sports leadership and management minor": {
    title: "Sports Leadership and Management Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "MGMT 3240", title: "Leading and Managing People" },
      { type: "course", code: "MGMT 4375", title: "Sports Management" },
      { type: "choose_list", count: 3, label: "Three approved sports leadership and management electives", options: [
        { code: "MGMT 4376", title: "Sports Marketing" },
        { code: "MGMT 4377", title: "Sports Media" },
        { code: "MGMT 4378", title: "Sports Finance" },
        { code: "MGMT 4379", title: "Sports Analytics" },
        { code: "COMM 3350", title: "Sports Communication" },
      ] },
    ],
  },
  "marketing major": {
    title: "Marketing Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "MKTG 2212", title: "Consumer Behavior" },
      { type: "course", code: "MKTG 2311", title: "Marketing Research" },
      { type: "course", code: "MKTG 4312", title: "Global Marketing Strategy" },
      { type: "choose_list", count: 3, label: "Three approved marketing electives", options: [
        { code: "MKTG 3310", title: "Digital Marketing" },
        { code: "MKTG 3315", title: "Social Media Marketing" },
        { code: "MKTG 3320", title: "Advertising" },
        { code: "MKTG 3325", title: "Brand Management" },
        { code: "MKTG 3330", title: "Retailing" },
        { code: "MKTG 3335", title: "Sales Management" },
        { code: "MKTG 3340", title: "Marketing Analytics" },
        { code: "MKTG 3345", title: "Global Marketing" },
      ] },
    ],
  },
  "marketing minor": {
    title: "Marketing Minor",
    totalCredits: 15,
    rules: [
      { type: "course", code: "MKTG 1101", title: "Principles of Marketing" },
      { type: "course", code: "MKTG 2212", title: "Consumer Behavior" },
      { type: "course", code: "MKTG 2311", title: "Marketing Research" },
      { type: "choose_list", count: 2, label: "Two approved marketing electives", options: [
        { code: "MKTG 3310", title: "Digital Marketing" },
        { code: "MKTG 3315", title: "Social Media Marketing" },
        { code: "MKTG 3320", title: "Advertising" },
        { code: "MKTG 3325", title: "Brand Management" },
        { code: "MKTG 3330", title: "Retailing" },
        { code: "MKTG 3335", title: "Sales Management" },
        { code: "MKTG 3340", title: "Marketing Analytics" },
        { code: "MKTG 3345", title: "Global Marketing" },
      ] },
    ],
  },
  "sports business major": {
    title: "Sports Business Major",
    totalCredits: 51,
    rules: [
      { type: "business_core", label: "Business Core Requirements (33 credits)" },
      { type: "course", code: "DATA 3335", title: "Sports Analytics" },
      { type: "course", code: "MGMT 4375", title: "Sports Management" },
      { type: "course", code: "MKTG 2261", title: "Sports Marketing" },
      { type: "choose_list", count: 3, label: "Three approved sports business electives", options: [
        { code: "MGMT 4376", title: "Sports Marketing" },
        { code: "MGMT 4377", title: "Sports Media" },
        { code: "MGMT 4378", title: "Sports Finance" },
        { code: "MGMT 4379", title: "Sports Analytics" },
        { code: "BUSN 3395", title: "Special Topics in Sports Business" },
      ] },
    ],
  },
  "post baccalaureate certificate": {
    title: "Post-Baccalaureate Certificate in Accounting",
    totalCredits: 18,
    rules: [
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 2204", title: "Intermediate Accounting II" },
      { type: "course", code: "ACCT 3320", title: "Cost Management" },
      { type: "course", code: "ACCT 3330", title: "Auditing" },
      { type: "course", code: "ACCT 3343", title: "Federal Income Taxation I" },
      { type: "course", code: "ACCT 4310", title: "Advanced Accounting" },
    ],
  },
  "post-baccalaureate certificate": {
    title: "Post-Baccalaureate Certificate in Accounting",
    totalCredits: 18,
    rules: [
      { type: "course", code: "ACCT 2203", title: "Intermediate Accounting I" },
      { type: "course", code: "ACCT 2204", title: "Intermediate Accounting II" },
      { type: "course", code: "ACCT 3320", title: "Cost Management" },
      { type: "course", code: "ACCT 3330", title: "Auditing" },
      { type: "course", code: "ACCT 3343", title: "Federal Income Taxation I" },
      { type: "course", code: "ACCT 4310", title: "Advanced Accounting" },
    ],
  },
};

const BUSINESS_CORE = [
  { code: "ACCT 1011", title: "Introduction to Financial Accounting", credits: 3 },
  { code: "ACCT 1012", title: "Introduction to Management Accounting", credits: 3, prereqs: ["ACCT 1011"] },
  { code: "AETH 2291", title: "Business Ethics", credits: 3 },
  { code: "BUSN 1101", title: "Messaging and Persuasion: Effective Business Communication", credits: 3 },
  { code: "BUSN 3211", title: "Legal Environment of Business", credits: 3 },
  { code: "DATA 1101", title: "Business Analytics", credits: 3 },
  { code: "DATA 1101L", title: "Excel Certification Lab", credits: 0, corequisite: ["DATA 1101"] },
  { code: "FNCE 2101", title: "Introduction to Finance", credits: 3, prereqs: ["ACCT 1011"] },
  { code: "INTL 2101", title: "Introduction to International Business", credits: 3 },
  { code: "MGMT 2101", title: "Introduction to Management", credits: 3 },
  { code: "MGMT 4300", title: "Business Strategies in the Global Environment", credits: 3, seniorOnly: true },
  { code: "MKTG 1101", title: "Principles of Marketing", credits: 3 },
];

const MAGIS_KNOWN = [
  { label: "One calculus course based on placement", codes: ["MATH 1121", "MATH 1122", "MATH 1141", "MATH 1142", "MATH 1171", "MATH 1172"] },
  { label: "MATH 2217 Statistics I", codes: ["MATH 2217"] },
  { label: "ENGL 1001", codes: ["ENGL 1001"] },
  { label: "ECON 1011 Introduction to Microeconomics", codes: ["ECON 1011"] },
  { label: "ECON 1012 Introduction to Macroeconomics", codes: ["ECON 1012"] },
  { label: "First-Year Experience / FYEX", codes: ["FYEX", "FYE"] },
];

const NATURAL_SCIENCE_PREFIXES = ["BIOL", "CHEM", "PHYS", "ENVI", "ENVL", "EASC"];
const LANGUAGE_PREFIXES = ["ARBC", "CHIN", "FREN", "GERM", "ITAL", "JAPN", "LATN", "SPAN"];
const CREDIT_OVERRIDES = {
  "DATA 1101L": 0,
  "ACCT 2980": 1,
  "BUSN 2980": 1,
  "DATA 2980": 1,
  "ECON 2980": 1,
  "FNCE 2980": 1,
  "INTL 2980": 1,
  "MGMT 2980": 1,
  "MKTG 2980": 1,
  "ACCT 3980": 3,
  "BUSN 3980": 3,
  "DATA 3980": 3,
  "ECON 3980": 3,
  "FNCE 3980": 3,
  "INTL 3980": 3,
  "MGMT 3980": 3,
  "MKTG 3980": 3,
};

const state = {
  bundledText: {},
  lastPlanText: "",
  lastAnalysis: null,
};

const catalogTrackInput = document.getElementById("catalogTrackInput");
const studentNameInput = document.getElementById("studentNameInput");
const primaryMajorInput = document.getElementById("primaryMajorInput");
const primaryConcentrationInput = document.getElementById("primaryConcentrationInput");
const additionalProgramsInput = document.getElementById("additionalProgramsInput");
const coursesInput = document.getElementById("coursesInput");
const studentFilesInput = document.getElementById("studentFilesInput");
const termStatus = document.getElementById("termStatus");
const parseStatus = document.getElementById("parseStatus");
const bundledSourceList = document.getElementById("bundledSourceList");
const studentUploadList = document.getElementById("studentUploadList");
const catalogLinkGroups = document.getElementById("catalogLinkGroups");
const summaryBar = document.getElementById("summaryBar");
const upcomingSemesterOutput = document.getElementById("upcomingSemesterOutput");
const parsedCoursesOutput = document.getElementById("parsedCoursesOutput");
const analysisOutput = document.getElementById("analysisOutput");
const fullPlanOutput = document.getElementById("fullPlanOutput");
const sequencingOutput = document.getElementById("sequencingOutput");
const scenarioOutput = document.getElementById("scenarioOutput");
const analyzeButton = document.getElementById("analyzeButton");
const downloadPlanButton = document.getElementById("downloadPlanButton");
const chatHistory = document.getElementById("chatHistory");
const followupInput = document.getElementById("followupInput");
const askFollowupButton = document.getElementById("askFollowupButton");

function isFileProtocol() {
  return window.location.protocol === "file:";
}

function renderCatalogLinks() {
  catalogLinkGroups.innerHTML = "";
  CATALOG_LINK_GROUPS.forEach((group) => {
    const wrapper = document.createElement("article");
    wrapper.className = "link-group";
    wrapper.innerHTML = `<h3>${group.title}</h3>`;

    const list = document.createElement("ul");
    group.links.forEach(([label, url]) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
      list.appendChild(li);
    });
    wrapper.appendChild(list);
    catalogLinkGroups.appendChild(wrapper);
  });
}

function renderBundledSources() {
  bundledSourceList.innerHTML = "";
  BUNDLED_DOCS.forEach((doc) => {
    const li = document.createElement("li");
    const loaded = Boolean(state.bundledText[doc.key]);
    li.textContent = `${doc.label} • ${loaded ? "loaded locally" : "available"}`;
    bundledSourceList.appendChild(li);
  });
}

function renderStudentFiles() {
  const files = [...studentFilesInput.files];
  studentUploadList.innerHTML = files.length
    ? files.map((file) => `<li>${file.name} • ${(file.size / 1024 / 1024).toFixed(2)} MB</li>`).join("")
    : "<li>No files selected yet.</li>";
}

function setFollowupStarter(text) {
  chatHistory.innerHTML = "";
  const article = document.createElement("article");
  article.className = "followup-message assistant";
  article.textContent = text;
  chatHistory.appendChild(article);
}

function addFollowupMessage(role, text) {
  const article = document.createElement("article");
  article.className = `followup-message ${role}`;
  article.textContent = text;
  chatHistory.appendChild(article);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function normalizeCourseCode(value) {
  const match = value.toUpperCase().replace(/[^A-Z0-9 ]/g, " ").match(/\b([A-Z]{4})\s*(\d{4}[A-Z]?)\b/);
  return match ? `${match[1]} ${match[2]}` : "";
}

function extractCourseCodes(text) {
  const matches = text.toUpperCase().match(/\b[A-Z]{4}\s*\d{4}[A-Z]?\b/g) || [];
  return [...new Set(matches.map(normalizeCourseCode).filter(Boolean))];
}

function inferCredits(code) {
  if (code in CREDIT_OVERRIDES) {
    return CREDIT_OVERRIDES[code];
  }
  const core = BUSINESS_CORE.find((course) => course.code === code);
  return core ? core.credits : 3;
}

function termInfo(date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  if ((month > 9 || (month === 9 && day >= 1)) && (month < 12 || (month === 12 && day <= 20))) {
    return { current: `Fall ${year}`, next: `Spring ${year + 1}` };
  }
  if ((month > 1 || (month === 1 && day >= 20)) && (month < 5 || (month === 5 && day <= 10))) {
    return { current: `Spring ${year}`, next: `Fall ${year}` };
  }
  if (month === 12 || month === 1) {
    return { current: `Winter ${year}`, next: `Spring ${month === 12 ? year + 1 : year}` };
  }
  return { current: `Summer ${year}`, next: `Fall ${year}` };
}

function parseTypedCourses(rawText) {
  const lines = rawText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const completed = new Set();
  const inProgress = new Set();
  let bucket = "completed";

  lines.forEach((line) => {
    const lower = line.toLowerCase();
    if (lower.startsWith("completed")) {
      bucket = "completed";
      return;
    }
    if (lower.startsWith("in progress")) {
      bucket = "inProgress";
      return;
    }

    const isIp = lower.startsWith("ip:");
    extractCourseCodes(line).forEach((code) => {
      if (bucket === "inProgress" || isIp) {
        inProgress.add(code);
      } else {
        completed.add(code);
      }
    });
  });

  return { completed: [...completed], inProgress: [...inProgress] };
}

async function extractPdfText(fileOrUrl) {
  if (!window.pdfjsLib) {
    throw new Error("PDF parser library did not load.");
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const task = typeof fileOrUrl === "string"
    ? window.pdfjsLib.getDocument(fileOrUrl)
    : window.pdfjsLib.getDocument({ data: await fileOrUrl.arrayBuffer() });
  const pdf = await task.promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const text = await page.getTextContent();
    pages.push(text.items.map((item) => item.str).join(" "));
  }

  return pages.join("\n");
}

async function extractDocxText(file) {
  if (!window.mammoth) {
    throw new Error("DOCX parser library did not load.");
  }
  const result = await window.mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
  return result.value || "";
}

async function extractFileText(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) {
    return extractPdfText(file);
  }
  if (name.endsWith(".docx")) {
    return extractDocxText(file);
  }
  return file.text();
}

function classifyUploadedCourses(text) {
  const completed = new Set();
  const inProgress = new Set();

  text.split(/\r?\n/).forEach((line) => {
    const isIp = /(in progress|current enrollment|registered|rgip|\bip\b)/i.test(line);
    extractCourseCodes(line).forEach((code) => {
      if (isIp) {
        inProgress.add(code);
      } else {
        completed.add(code);
      }
    });
  });

  return { completed: [...completed], inProgress: [...inProgress] };
}

async function loadBundledTexts() {
  if (Object.keys(state.bundledText).length) {
    return state.bundledText;
  }

  if (isFileProtocol()) {
    throw new Error("Open Mr. Advisor from a hosted web URL such as GitHub Pages or from a local server like http://127.0.0.1:3000. Bundled PDFs cannot be loaded reliably from file:// mode.");
  }

  summaryBar.textContent = "Loading bundled Fairfield reference documents locally...";

  for (const doc of BUNDLED_DOCS) {
    if (doc.type === "pdf") {
      const response = await fetch(doc.path);
      if (!response.ok) {
        throw new Error(`Could not load bundled PDF ${doc.filename}.`);
      }
      const blob = await response.blob();
      state.bundledText[doc.key] = await extractPdfText(new File([blob], doc.filename, { type: "application/pdf" }));
    } else {
      const response = await fetch(doc.path);
      if (!response.ok) {
        throw new Error(`Could not load bundled DOCX ${doc.filename}.`);
      }
      const blob = await response.blob();
      state.bundledText[doc.key] = await extractDocxText(new File([blob], doc.filename));
    }
  }

  renderBundledSources();
  return state.bundledText;
}

function buildKnownMagisStatus(allCourses) {
  const set = new Set(allCourses);
  const fulfilled = [];
  const remaining = [];

  MAGIS_KNOWN.forEach((item) => {
    const hit = item.codes.find((code) => set.has(code));
    if (hit) {
      fulfilled.push(`✅ ${item.label}: ${hit}`);
    } else {
      remaining.push(`• ${item.label}`);
    }
  });

  const scienceCourses = allCourses.filter((code) => NATURAL_SCIENCE_PREFIXES.some((prefix) => code.startsWith(prefix)));
  if (scienceCourses.length >= 2) {
    fulfilled.push(`✅ Natural sciences: ${scienceCourses.slice(0, 2).join(", ")}`);
  } else {
    remaining.push(`• Natural sciences: ${Math.max(0, 2 - scienceCourses.length)} more needed`);
  }

  const language = allCourses.find((code) => LANGUAGE_PREFIXES.some((prefix) => code.startsWith(prefix)));
  if (language) {
    fulfilled.push(`✅ Language course: ${language}`);
  } else {
    remaining.push("• One language course based on placement");
  }

  remaining.push("• Remaining Magis Core areas should be confirmed with the catalog and MAGIS PDF");
  return { fulfilled, remaining };
}

function buildBusinessCoreStatus(allCourses) {
  const set = new Set(allCourses);
  const completed = [];
  const remaining = [];

  BUSINESS_CORE.forEach((course) => {
    if (set.has(course.code)) {
      completed.push(`✅ ${course.code} ${course.title} (${course.credits} cr)`);
      return;
    }

    const notes = [];
    if (course.prereqs) {
      notes.push(`prereq: ${course.prereqs.join(", ")}`);
    }
    if (course.corequisite) {
      notes.push(`take with ${course.corequisite.join(", ")}`);
    }
    if (course.seniorOnly) {
      notes.push("senior year only");
    }
    remaining.push(`• ${course.code} ${course.title} (${course.credits} cr)${notes.length ? ` — ${notes.join("; ")}` : ""}`);
  });

  return { completed, remaining };
}

function splitAdditionalPrograms(value) {
  return value
    .split(/\r?\n|,|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildProgramNames(primaryMajor, concentration, additionalProgramsValue) {
  const programs = [];

  if (primaryMajor) {
    programs.push({
      label: primaryMajor,
      type: "primary major",
      searchText: concentration ? `${primaryMajor} ${concentration}` : primaryMajor,
    });
  }

  splitAdditionalPrograms(additionalProgramsValue).forEach((item) => {
      const lower = item.toLowerCase();
      programs.push({
        label: item,
        type: lower.includes("minor") ? "minor" : lower.includes("certificate") ? "certificate" : "additional program",
        searchText: item,
      });
  });

  return programs;
}

function parseProgramNames() {
  return buildProgramNames(
    primaryMajorInput.value.trim(),
    primaryConcentrationInput.value.trim(),
    additionalProgramsInput.value,
  );
}

function normalizeProgramLabel(label) {
  return label
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveProgramUrl(program) {
  const normalized = normalizeProgramLabel(program.label);
  const direct = PROGRAM_PAGE_URLS[normalized];
  if (direct) {
    return direct;
  }

  if (program.type === "primary major" || program.type === "additional program") {
    const majorGuess = PROGRAM_PAGE_URLS[`${normalized} major`];
    if (majorGuess) {
      return majorGuess;
    }
  }

  if (program.type === "minor") {
    const minorGuess = PROGRAM_PAGE_URLS[`${normalized} minor`];
    if (minorGuess) {
      return minorGuess;
    }
  }

  const match = Object.entries(PROGRAM_PAGE_URLS).find(([key]) =>
    normalized.includes(key) || key.includes(normalized),
  );
  return match ? match[1] : "";
}

async function fetchCatalogRequirementText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load catalog page ${url}`);
  }

  const html = await response.text();
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const boundedMatch =
    stripped.match(/For a .*? Total Credits/gi)?.join(" ") ||
    stripped.match(/Requirements .*? Total Credits/gi)?.join(" ") ||
    stripped;

  return boundedMatch;
}

function extractRequirementCodesFromCatalogText(text) {
  return [...new Set(extractCourseCodes(text))];
}

function cleanCellText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function parseRequirementGroupsFromHtml(html, sourceLabel) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const tables = [...doc.querySelectorAll("table")];
  const groups = [];
  let currentSection = "Requirements";

  tables.forEach((table) => {
    const heading = table.previousElementSibling?.textContent?.trim();
    if (heading) {
      currentSection = heading;
    }

    const rows = [...table.querySelectorAll("tr")];
    let currentGroup = null;

    rows.forEach((row) => {
      const cells = [...row.querySelectorAll("th, td")].map((cell) => cleanCellText(cell.textContent || ""));
      if (!cells.length) {
        return;
      }

      const combined = cells.join(" ").trim();
      if (!combined || /^code\s+title\s+credits$/i.test(combined)) {
        return;
      }

      const selectionMatch = combined.match(/Select\s+(at least\s+)?(one|two|three|four|five|six|\d+)\s+courses?\s+from\s+the\s+following/i);
      if (selectionMatch) {
        const countLabel = selectionMatch[2].toLowerCase();
        const countMap = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };
        const chooseCount = countMap[countLabel] || Number.parseInt(countLabel, 10) || 1;
        currentGroup = {
          type: "choice",
          label: combined,
          section: currentSection,
          chooseCount,
          options: [],
          sourceLabel,
        };
        groups.push(currentGroup);
        return;
      }

      if (/^Business Core Requirements/i.test(combined) || /^Total Credits/i.test(combined) || /^Course List/i.test(combined)) {
        currentGroup = null;
        return;
      }

      const code = normalizeCourseCode(cells[0] || combined);
      if (code) {
        const title = cells[1] || combined.replace(code, "").trim();
        const creditsCell = cells[cells.length - 1] || "";
        const parsedCredits = Number.parseInt(creditsCell, 10);
        const credits = Number.isNaN(parsedCredits) ? inferCredits(code) : parsedCredits;

        if (currentGroup?.type === "choice") {
          currentGroup.options.push({ code, title, credits });
        } else {
          groups.push({
            type: "required",
            label: `${code} ${title}`.trim(),
            section: currentSection,
            courses: [{ code, title, credits }],
            sourceLabel,
          });
        }
      } else {
        currentGroup = null;
      }
    });
  });

  return groups;
}

async function fetchCatalogRequirementData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load catalog page ${url}`);
  }

  const html = await response.text();
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    html,
    text,
    groups: parseRequirementGroupsFromHtml(html, url),
  };
}

function resolveProgramRequirementKey(program) {
  const normalized = normalizeProgramLabel(program.label);
  if (PROGRAM_REQUIREMENTS[normalized]) {
    return normalized;
  }
  if (program.type === "primary major" || program.type === "additional program") {
    const majorKey = `${normalized} major`;
    if (PROGRAM_REQUIREMENTS[majorKey]) {
      return majorKey;
    }
  }
  if (program.type === "minor") {
    const minorKey = `${normalized} minor`;
    if (PROGRAM_REQUIREMENTS[minorKey]) {
      return minorKey;
    }
  }
  if (program.type === "certificate") {
    const certificateKey = `${normalized} certificate`;
    if (PROGRAM_REQUIREMENTS[certificateKey]) {
      return certificateKey;
    }
  }
  return Object.keys(PROGRAM_REQUIREMENTS).find((key) => normalized.includes(key) || key.includes(normalized)) || "";
}

function uniquePush(lines, value) {
  if (value && !lines.includes(value)) {
    lines.push(value);
  }
}

function parseCourseLevel(code) {
  const match = code.match(/\b[A-Z]{4}\s*(\d{4})/);
  return match ? Number.parseInt(match[1], 10) : 0;
}

function findKnownCourseTitle(code) {
  const businessCoreCourse = BUSINESS_CORE.find((course) => course.code === code);
  if (businessCoreCourse) {
    return businessCoreCourse.title;
  }

  for (const definition of Object.values(PROGRAM_REQUIREMENTS)) {
    for (const rule of definition.rules) {
      if (rule.type === "course" && rule.code === code) {
        return rule.title;
      }
      if (rule.type === "choose_list") {
        const option = rule.options.find((item) => item.code === code);
        if (option) {
          return option.title;
        }
      }
      if (rule.type === "group_mix") {
        for (const group of rule.groups) {
          const option = group.options.find((item) => item.code === code);
          if (option) {
            return option.title;
          }
        }
      }
    }
  }

  return "";
}

function formatCourseLine(prefix, code, title = "", credits = inferCredits(code), suffix = "") {
  return `${prefix} ${code}${title ? ` ${title}` : ""} (${credits} cr)${suffix ? ` — ${suffix}` : ""}`;
}

function matchesPool(code, pool) {
  if (!code || !pool) {
    return false;
  }

  const prefixes = pool.prefixes || (pool.prefix ? [pool.prefix] : []);
  if (prefixes.length && !prefixes.some((prefix) => code.startsWith(prefix))) {
    return false;
  }

  const level = parseCourseLevel(code);
  if (pool.minLevel && level < pool.minLevel) {
    return false;
  }
  if (pool.maxLevel && level > pool.maxLevel) {
    return false;
  }
  if (pool.exclude?.includes(code)) {
    return false;
  }

  return true;
}

function evaluateProgramRule(rule, completedSet, inProgressSet, allCourses) {
  const result = { completed: [], inProgress: [], remaining: [], missingCodes: [] };

  if (rule.type === "business_core") {
    const completedCount = BUSINESS_CORE.filter((course) => completedSet.has(course.code)).length;
    const inProgressCount = BUSINESS_CORE.filter((course) => !completedSet.has(course.code) && inProgressSet.has(course.code)).length;
    const remainingCount = BUSINESS_CORE.filter((course) => !completedSet.has(course.code) && !inProgressSet.has(course.code)).length;

    if (!remainingCount && !inProgressCount) {
      uniquePush(result.completed, `✅ ${rule.label}`);
    } else {
      if (completedCount) {
        uniquePush(result.completed, `✅ ${rule.label}: ${completedCount} of ${BUSINESS_CORE.length} courses complete`);
      }
      if (inProgressCount) {
        uniquePush(result.inProgress, `⏳ ${rule.label}: ${inProgressCount} of ${BUSINESS_CORE.length} courses in progress`);
      }
      if (remainingCount) {
        uniquePush(result.remaining, `• ${rule.label}: ${remainingCount} of ${BUSINESS_CORE.length} courses still remaining`);
      }
    }
    return result;
  }

  if (rule.type === "course") {
    if (completedSet.has(rule.code)) {
      uniquePush(result.completed, formatCourseLine("✅", rule.code, rule.title));
    } else if (inProgressSet.has(rule.code)) {
      uniquePush(result.inProgress, formatCourseLine("⏳", rule.code, rule.title));
    } else {
      uniquePush(result.remaining, formatCourseLine("•", rule.code, rule.title));
      result.missingCodes.push(rule.code);
    }
    return result;
  }

  if (rule.type === "fixed_group") {
    rule.options.forEach((code) => {
      const title = findKnownCourseTitle(code);
      if (completedSet.has(code)) {
        uniquePush(result.completed, formatCourseLine("✅", code, title));
      } else if (inProgressSet.has(code)) {
        uniquePush(result.inProgress, formatCourseLine("⏳", code, title));
      } else {
        uniquePush(result.remaining, formatCourseLine("•", code, title));
        result.missingCodes.push(code);
      }
    });
    return result;
  }

  if (rule.type === "dual_summary") {
    uniquePush(result.remaining, `• ${rule.label}`);
    return result;
  }

  if (rule.type === "choose_list") {
    const completedChoices = rule.options.filter((option) => completedSet.has(option.code));
    const inProgressChoices = rule.options.filter((option) => !completedSet.has(option.code) && inProgressSet.has(option.code));
    const selectedCount = completedChoices.length + inProgressChoices.length;

    completedChoices.forEach((option) => {
      uniquePush(result.completed, formatCourseLine("✅", option.code, option.title, inferCredits(option.code), `counts toward ${rule.label}`));
    });
    inProgressChoices.forEach((option) => {
      uniquePush(result.inProgress, formatCourseLine("⏳", option.code, option.title, inferCredits(option.code), `counts toward ${rule.label}`));
    });

    if (selectedCount < rule.count) {
      const remainingNeeded = rule.count - selectedCount;
      const remainingOptions = rule.options.filter((option) => !allCourses.includes(option.code));
      const optionList = (remainingOptions.length ? remainingOptions : rule.options).map((option) => `${option.code} ${option.title}`).join(", ");
      uniquePush(result.remaining, `• ${rule.label} — still need ${remainingNeeded}. Options: ${optionList}`);
      result.missingCodes.push(...remainingOptions.slice(0, remainingNeeded).map((option) => option.code));
    } else {
      uniquePush(result.completed, `✅ ${rule.label}`);
    }
    return result;
  }

  if (rule.type === "choose_any") {
    const explicitCodes = rule.options || [];
    const completedChoices = explicitCodes.filter((code) => completedSet.has(code))
      .concat(allCourses.filter((code) => completedSet.has(code) && matchesPool(code, rule.pool) && !explicitCodes.includes(code)));
    const inProgressChoices = explicitCodes.filter((code) => !completedSet.has(code) && inProgressSet.has(code))
      .concat(allCourses.filter((code) => !completedSet.has(code) && inProgressSet.has(code) && matchesPool(code, rule.pool) && !explicitCodes.includes(code)));
    const selectedCount = completedChoices.length + inProgressChoices.length;

    completedChoices.forEach((code) => {
      uniquePush(result.completed, formatCourseLine("✅", code, findKnownCourseTitle(code), inferCredits(code), `counts toward ${rule.label}`));
    });
    inProgressChoices.forEach((code) => {
      uniquePush(result.inProgress, formatCourseLine("⏳", code, findKnownCourseTitle(code), inferCredits(code), `counts toward ${rule.label}`));
    });

    if (selectedCount < rule.count) {
      uniquePush(result.remaining, `• ${rule.label}`);
      if (explicitCodes.length) {
        result.missingCodes.push(explicitCodes[0]);
      }
    } else {
      uniquePush(result.completed, `✅ ${rule.label}`);
    }
    return result;
  }

  if (rule.type === "pool" || rule.type === "category") {
    const matches = allCourses.filter((code) => matchesPool(code, rule.pool));
    const completedMatches = matches.filter((code) => completedSet.has(code));
    const inProgressMatches = matches.filter((code) => !completedSet.has(code) && inProgressSet.has(code));
    const selectedCount = completedMatches.length + inProgressMatches.length;

    completedMatches.forEach((code) => {
      uniquePush(result.completed, formatCourseLine("✅", code, findKnownCourseTitle(code), inferCredits(code), `counts toward ${rule.label}`));
    });
    inProgressMatches.forEach((code) => {
      uniquePush(result.inProgress, formatCourseLine("⏳", code, findKnownCourseTitle(code), inferCredits(code), `counts toward ${rule.label}`));
    });

    if (selectedCount < rule.count) {
      uniquePush(result.remaining, `• ${rule.label} — still need ${rule.count - selectedCount}`);
    } else {
      uniquePush(result.completed, `✅ ${rule.label}`);
    }
    return result;
  }

  if (rule.type === "group_mix") {
    let completedCount = 0;
    let inProgressCount = 0;

    rule.groups.forEach((group) => {
      group.options.forEach((option) => {
        if (completedSet.has(option.code)) {
          completedCount += 1;
          uniquePush(result.completed, formatCourseLine("✅", option.code, option.title, inferCredits(option.code), `counts toward ${group.label}`));
        } else if (inProgressSet.has(option.code)) {
          inProgressCount += 1;
          uniquePush(result.inProgress, formatCourseLine("⏳", option.code, option.title, inferCredits(option.code), `counts toward ${group.label}`));
        }
      });
    });

    if (completedCount + inProgressCount < rule.count) {
      const remainingNeeded = rule.count - completedCount - inProgressCount;
      const groupText = rule.groups
        .map((group) => `${group.label}: ${group.options.filter((option) => !completedSet.has(option.code) && !inProgressSet.has(option.code)).map((option) => `${option.code} ${option.title}`).join(", ")}`)
        .join(" | ");
      uniquePush(result.remaining, `• ${rule.label} — still need ${remainingNeeded}. ${groupText}`);
    } else {
      uniquePush(result.completed, `✅ ${rule.label}`);
    }
    return result;
  }

  return result;
}

async function buildProgramRequirementStatus(completedCourses, inProgressCourses, programs = parseProgramNames()) {
  const completedSet = new Set(completedCourses);
  const inProgressSet = new Set(inProgressCourses);
  const allCourses = [...new Set([...completedCourses, ...inProgressCourses])];
  const sections = [];
  const missingCodes = new Set();
  const programSummaries = [];

  for (const program of programs) {
    const requirementKey = resolveProgramRequirementKey(program);
    const definition = requirementKey ? PROGRAM_REQUIREMENTS[requirementKey] : null;
    const url = resolveProgramUrl(program);
    const sourceLabel = url ? `${PROGRAM_LINK_SOURCE} -> ${url}` : PROGRAM_LINK_SOURCE;

    if (!definition) {
      sections.push(`${program.label} (${program.type})`);
      sections.push(`Source used: ${sourceLabel}`);
      sections.push("Completed:");
      sections.push("✅ No specific program-only requirement codes were detected automatically.");
      sections.push("In Progress:");
      sections.push("• None detected.");
      sections.push("Remaining:");
      sections.push("• No local requirement set is available for this program yet.");
      sections.push("");
      programSummaries.push({
        label: program.label,
        type: program.type,
        completed: [],
        inProgress: [],
        remaining: [],
        completedCredits: 0,
        inProgressCredits: 0,
        remainingCredits: 0,
        sourceLabel,
      });
      continue;
    }

    const completedLines = [];
    const inProgressLines = [];
    const remainingLines = [];
    const completedCodes = new Set();
    const inProgressCodes = new Set();
    const remainingCodes = new Set();

    definition.rules.forEach((rule) => {
      const evaluation = evaluateProgramRule(rule, completedSet, inProgressSet, allCourses);
      evaluation.completed.forEach((line) => uniquePush(completedLines, line));
      evaluation.inProgress.forEach((line) => uniquePush(inProgressLines, line));
      evaluation.remaining.forEach((line) => uniquePush(remainingLines, line));
      evaluation.missingCodes.forEach((code) => {
        if (code && !BUSINESS_CORE.some((course) => course.code === code)) {
          missingCodes.add(code);
          remainingCodes.add(code);
        }
      });

      if (rule.type === "course") {
        if (completedSet.has(rule.code)) {
          completedCodes.add(rule.code);
        } else if (inProgressSet.has(rule.code)) {
          inProgressCodes.add(rule.code);
        } else {
          remainingCodes.add(rule.code);
        }
      }

      if (rule.type === "fixed_group") {
        rule.options.forEach((code) => {
          if (completedSet.has(code)) {
            completedCodes.add(code);
          } else if (inProgressSet.has(code)) {
            inProgressCodes.add(code);
          } else if (!BUSINESS_CORE.some((course) => course.code === code)) {
            remainingCodes.add(code);
          }
        });
      }
    });

    const completed = [...completedCodes];
    const inProgress = [...inProgressCodes];
    const remaining = [...remainingCodes];
    const completedCredits = completed.reduce((sum, code) => sum + inferCredits(code), 0);
    const inProgressCredits = inProgress.reduce((sum, code) => sum + inferCredits(code), 0);
    const remainingCredits = remaining.reduce((sum, code) => sum + inferCredits(code), 0);

    sections.push(`${program.label} (${program.type})`);
    sections.push(`Source used: ${sourceLabel}`);
    sections.push("Completed:");
    sections.push(...(completedLines.length ? completedLines : ["✅ No detected program-specific courses are complete yet"]));
    sections.push("In Progress:");
    sections.push(...(inProgressLines.length ? inProgressLines : ["• None detected."]));
    sections.push("Remaining:");
    sections.push(...(remainingLines.length ? remainingLines : ["✅ No extra remaining program-specific requirements were detected"]));

    sections.push(
      `Credit summary: completed detected ${completedCredits} cr, in progress detected ${inProgressCredits} cr, remaining detected ${remainingCredits} cr, program total ${definition.totalCredits} cr.`,
    );
    sections.push("");

    programSummaries.push({
      label: definition.title || program.label,
      type: program.type,
      completed,
      inProgress,
      remaining,
      completedCredits,
      inProgressCredits,
      remainingCredits,
      sourceLabel,
    });
  }

  return {
    text: sections.join("\n").trim(),
    missingCodes: [...missingCodes],
    programs: programSummaries,
  };
}

function countCredits(courses) {
  return courses.reduce((sum, code) => sum + inferCredits(code), 0);
}

function countQualifyingCourses(courses) {
  return courses.filter((code) => inferCredits(code) >= 3).length;
}

function buildUpcomingSemester(remainingBusinessCore, missingProgramCodes, nextTerm, totalCredits) {
  const isSeniorYear = totalCredits >= 90;
  const remainingCreditsToGraduate = Math.max(0, 120 - totalCredits);
  const targetCredits = isSeniorYear && remainingCreditsToGraduate < 15 ? remainingCreditsToGraduate : 15;
  const picks = [];
  let pickedCredits = 0;

  remainingBusinessCore.forEach((item) => {
    if (pickedCredits >= targetCredits) {
      return;
    }
    const match = item.match(/\(([0-9]+) cr\)/i);
    const credits = match ? Number.parseInt(match[1], 10) : 3;
    picks.push(item.replace(/^•\s*/, ""));
    pickedCredits += credits;
  });

  missingProgramCodes.forEach((code) => {
    if (pickedCredits >= targetCredits) {
      return;
    }
    const title = findKnownCourseTitle(code);
    picks.push(title ? `${code} ${title}` : `${code} (program-specific requirement)`);
    pickedCredits += inferCredits(code);
  });

  return [
    `Recommended upcoming semester: ${nextTerm}`,
    `Planned semester load: ${targetCredits || 0} credits${isSeniorYear && remainingCreditsToGraduate < 15 ? " because this appears to be the senior year and fewer credits are needed to finish" : " as the standard target load"}`,
    ...picks.map((item) => `• ${item}`),
  ].join("\n");
}

function buildSequencingNotes(allCourses, remainingBusinessCore, missingProgramCodes) {
  const notes = [];
  const set = new Set(allCourses);

  if (!set.has("ACCT 1011")) {
    notes.push("⚠️ Take ACCT 1011 early because it supports ACCT 1012 and FNCE 2101 sequencing.");
  }
  if (!set.has("DATA 1101")) {
    notes.push("⚠️ Schedule DATA 1101 and DATA 1101L together.");
  }
  if (remainingBusinessCore.some((item) => item.includes("MGMT 4300"))) {
    notes.push("⚠️ Leave space for MGMT 4300 in the senior year.");
  }
  if (missingProgramCodes.length) {
    notes.push(`Program-specific bottleneck watch: ${missingProgramCodes.slice(0, 6).join(", ")}.`);
  }

  notes.push("Use winter or summer courses if the credit math suggests you need help staying on an eight-semester timeline.");
  notes.push("If study abroad is still a goal, freshman or sophomore planning is the workable window noted in the study abroad advising sheet.");
  notes.push("Download this plan and bring it to your advisor meeting for registration hold removal.");
  return notes.join("\n");
}

function nextRegularTermLabel(termLabel) {
  const [season, yearText] = termLabel.split(" ");
  const year = Number.parseInt(yearText, 10);
  if (season === "Fall") {
    return `Spring ${year + 1}`;
  }
  return `Fall ${year}`;
}

function buildFullRemainingPlan(remainingBusinessCore, missingProgramCodes, term, totalCredits, remainingTo120) {
  const planItems = [];

  remainingBusinessCore.forEach((item) => {
    const cleaned = item.replace(/^•\s*/, "");
    const match = cleaned.match(/^([A-Z]{4}\s\d{4}[A-Z]?).*?\(([0-9]+) cr\)/i);
    if (match) {
      planItems.push({ label: cleaned, credits: Number.parseInt(match[2], 10) || 3 });
    } else {
      planItems.push({ label: cleaned, credits: 3 });
    }
  });

  missingProgramCodes.forEach((code) => {
    const title = findKnownCourseTitle(code);
    planItems.push({
      label: title ? `${code} ${title}` : `${code} program requirement`,
      credits: inferCredits(code),
    });
  });

  let neededCredits = remainingTo120;
  let termLabel = term.next;
  const semesters = [];

  while (neededCredits > 0) {
    const isFinalTerm = neededCredits < 15;
    const targetCredits = isFinalTerm ? neededCredits : 15;
    let termCredits = 0;
    const picks = [];

    while (planItems.length && termCredits < targetCredits) {
      const nextItem = planItems.shift();
      picks.push(nextItem.label);
      termCredits += nextItem.credits;
    }

    while (termCredits < targetCredits) {
      const remainingGap = targetCredits - termCredits;
      const fillerCredits = remainingGap >= 3 ? 3 : remainingGap;
      picks.push(fillerCredits >= 3 ? "Free elective / Magis Core / approved overlap course" : `${fillerCredits}-credit remaining requirement`);
      termCredits += fillerCredits;
    }

    semesters.push([
      `${termLabel} (${targetCredits} credits)`,
      ...picks.map((item) => `• ${item}`),
    ].join("\n"));

    neededCredits = Math.max(0, neededCredits - targetCredits);
    termLabel = nextRegularTermLabel(termLabel);
  }

  return [
    "Full remaining-semester plan through degree completion",
    ...semesters,
  ].join("\n\n");
}

function getProgramInputSnapshot() {
  return {
    primaryMajor: primaryMajorInput.value.trim(),
    primaryConcentration: primaryConcentrationInput.value.trim(),
    additionalPrograms: splitAdditionalPrograms(additionalProgramsInput.value),
  };
}

function parseScenarioChanges(question) {
  const changes = [];
  const regex = /\b(add|adding|drop|dropping|remove|removing)\s+([^.;\n]+?)(?=(?:\s+(?:and|then)\s+(?:add|adding|drop|dropping|remove|removing)\b)|[.;\n]|$)/gi;
  let match = regex.exec(question);
  while (match) {
    changes.push({
      action: /add/i.test(match[1]) ? "add" : "drop",
      label: match[2].trim().replace(/^a\s+|^an\s+|^the\s+/i, ""),
    });
    match = regex.exec(question);
  }
  return changes;
}

function applyScenarioChanges(baseInputs, changes) {
  const updated = {
    primaryMajor: baseInputs.primaryMajor,
    primaryConcentration: baseInputs.primaryConcentration,
    additionalPrograms: [...baseInputs.additionalPrograms],
  };

  changes.forEach((change) => {
    const normalizedLabel = normalizeProgramLabel(change.label);
    const matchesPrimary = normalizeProgramLabel(updated.primaryMajor) === normalizedLabel
      || normalizeProgramLabel(`${updated.primaryMajor} major`) === normalizedLabel;

    if (change.action === "drop") {
      if (matchesPrimary) {
        updated.primaryMajor = "";
        updated.primaryConcentration = "";
      } else {
        updated.additionalPrograms = updated.additionalPrograms.filter((program) => {
          const normalizedProgram = normalizeProgramLabel(program);
          return normalizedProgram !== normalizedLabel
            && normalizeProgramLabel(`${program} major`) !== normalizedLabel
            && normalizeProgramLabel(`${program} minor`) !== normalizedLabel;
        });
      }
      return;
    }

    if (change.action === "add") {
      const alreadyListed = matchesPrimary || updated.additionalPrograms.some((program) => {
        const normalizedProgram = normalizeProgramLabel(program);
        return normalizedProgram === normalizedLabel
          || normalizeProgramLabel(`${program} major`) === normalizedLabel
          || normalizeProgramLabel(`${program} minor`) === normalizedLabel;
      });

      if (!alreadyListed) {
        updated.additionalPrograms.push(change.label);
      }
    }
  });

  return updated;
}

function buildPlanText(data) {
  return [
    "# Mr. Advisor Local Academic Plan",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    `Current term window: ${data.term.current}`,
    `Upcoming regular semester: ${data.term.next}`,
    "",
    "## Student Profile",
    `- Student name: ${studentNameInput.value.trim() || "Not provided (fake name is acceptable)"}`,
    `- Catalog track: ${catalogTrackInput.value}`,
    `- Primary major: ${primaryMajorInput.value.trim() || "Not provided"}`,
    `- Primary concentration: ${primaryConcentrationInput.value.trim() || "Not provided"}`,
    `- Additional programs: ${additionalProgramsInput.value.trim() || "None listed"}`,
    "",
    "## Upcoming Semester",
    data.upcoming,
    "",
    "## Parsed Courses",
    `Completed: ${data.completed.join(", ") || "None detected"}`,
    `In progress: ${data.inProgress.join(", ") || "None detected"}`,
    "",
    "## Requirement Analysis",
    data.analysis,
    "",
    "## Sequencing Notes",
    data.sequencing,
    "",
    "## Sources Used",
    "- Class of 2025 to 2027 Dolan majors/core PDF or Class of 2028 and beyond Dolan majors/core PDF",
    "- MAGIS COURSES 2.2.26.pdf",
    "- Dolan Study Abroad Advising Sheet - 2.12.24 VF.pdf",
    "- Details_on_Internships.docx",
    "- Fairfield catalog links shown in the app",
  ].join("\n");
}

function answerFollowup(question) {
  const analysis = state.lastAnalysis;
  if (!analysis) {
    return "Generate a plan first so I have your parsed courses, requirement checks, and semester recommendation to answer from.";
  }

  const q = question.toLowerCase();

  if (q.includes("15 credit") || q.includes("15 credits") || q.includes("load")) {
    return analysis.loadExplanation;
  }

  if (q.includes("major") || q.includes("minor") || q.includes("certificate")) {
    return [
      "Here is the local major/minor requirement check in completed/remaining format:",
      analysis.programRequirementText || "No program-specific requirement codes were detected automatically.",
    ].join("\n");
  }

  if (q.includes("business core")) {
    return [
      "Business core status:",
      analysis.businessCoreCompleted.length ? `Completed: ${analysis.businessCoreCompleted.join(", ")}` : "Completed: none detected yet",
      analysis.businessCoreRemaining.length ? `Remaining: ${analysis.businessCoreRemaining.join(", ")}` : "Remaining: none detected",
    ].join("\n");
  }

  if (q.includes("magis") || q.includes("core")) {
    return [
      "Known Magis and core checks:",
      ...analysis.magisFulfilled,
      ...analysis.magisRemaining,
    ].join("\n");
  }

  if (q.includes("next semester") || q.includes("upcoming semester") || q.includes("recommend")) {
    return analysis.upcoming;
  }

  if (q.includes("all remaining semesters") || q.includes("full plan") || q.includes("degree completion")) {
    return analysis.fullPlan;
  }

  if (q.includes("credit")) {
    return [
      `Completed credits counted locally: ${analysis.completedCredits}`,
      `In-progress credits counted locally: ${analysis.inProgressCredits}`,
      `Combined counted credits: ${analysis.totalCredits}`,
      `Credits still needed to reach 120: ${analysis.remainingTo120}`,
      `Remaining 3- or 4-credit courses needed to reach 40: ${analysis.qualifyingCoursesRemaining}`,
    ].join("\n");
  }

  if (q.includes("senior")) {
    return analysis.totalCredits >= 90
      ? "Based on the local credit count, this student appears to be in the senior-year range, so the planner allows a lighter than 15-credit load only if fewer credits are needed to finish."
      : "Based on the local credit count, this student does not yet appear to be in the senior-year range, so the planner targets a 15-credit semester load.";
  }

  if (q.includes("taken") || q.includes("completed") || q.includes("in progress")) {
    return [
      `Completed: ${analysis.completed.join(", ") || "None detected"}`,
      `In progress: ${analysis.inProgress.join(", ") || "None detected"}`,
    ].join("\n");
  }

  return [
    "I can answer follow-ups from the local plan data.",
    "You can also enter an add/drop major-or-minor scenario such as 'Add marketing minor' or 'Drop finance minor' to see a revised plan below.",
  ].join("\n");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderAnalysisLines(lines) {
  return `<div class="analysis-lines">${lines.map((line) => `<div class="analysis-line">${escapeHtml(line)}</div>`).join("")}</div>`;
}

function renderProgramRequirementHtml(text) {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const title = lines.shift() || "Program Requirements";
    let html = `<section class="analysis-section"><h4 class="analysis-heading">${escapeHtml(title)}</h4>`;

    let currentLabel = "";
    let bucket = [];

    const flush = () => {
      if (!currentLabel) {
        return;
      }
      html += `<div class="analysis-subheading">${escapeHtml(currentLabel)}</div>`;
      html += renderAnalysisLines(bucket.length ? bucket : ["None"]);
      currentLabel = "";
      bucket = [];
    };

    lines.forEach((line) => {
      if (/^(Source used|Completed|In Progress|Remaining|Credit summary):?/.test(line)) {
        flush();
        if (line.startsWith("Source used:") || line.startsWith("Credit summary:")) {
          currentLabel = line.replace(/:$/, "");
          bucket = [];
        } else {
          currentLabel = line.replace(/:$/, "");
        }
        if (line.startsWith("Source used:")) {
          bucket = [line.replace(/^Source used:\s*/, "")];
        }
        if (line.startsWith("Credit summary:")) {
          bucket = [line.replace(/^Credit summary:\s*/, "")];
        }
      } else {
        bucket.push(line);
      }
    });

    flush();
    html += "</section>";
    return html;
  }).join("");
}

function renderAnalysisHtml(data) {
  return [
    `<section class="analysis-section"><h4 class="analysis-heading">Credit Math</h4>${renderAnalysisLines(data.creditMath)}</section>`,
    `<section class="analysis-section"><h4 class="analysis-heading">Magis Core</h4>${renderAnalysisLines([...data.magisFulfilled, ...data.magisRemaining])}</section>`,
    `<section class="analysis-section"><h4 class="analysis-heading">Business Core</h4><div class="analysis-subheading">Completed</div>${renderAnalysisLines(data.businessCoreCompleted.length ? data.businessCoreCompleted : ["• None detected yet"])}<div class="analysis-subheading">Remaining</div>${renderAnalysisLines(data.businessCoreRemaining.length ? data.businessCoreRemaining : ["✅ Business core appears complete locally"])}</section>`,
    `<section class="analysis-section"><h4 class="analysis-heading">Major / Minor Requirements</h4>${data.programRequirementText ? renderProgramRequirementHtml(data.programRequirementText) : renderAnalysisLines(["• No automatic major or minor requirement matches were detected."])}</section>`,
    `<section class="analysis-section"><h4 class="analysis-heading">Planner Note</h4>${renderAnalysisLines([data.plannerNote])}</section>`,
  ].join("");
}

async function buildPlannerSnapshot(completed, inProgress, programs = parseProgramNames()) {
  const allCourses = dedupeCourseLists(completed, inProgress);
  const term = termInfo();
  const magisStatus = buildKnownMagisStatus(allCourses);
  const businessCoreStatus = buildBusinessCoreStatus(allCourses);
  const programRequirementStatus = await buildProgramRequirementStatus(completed, inProgress, programs);
  const missingProgramCodes = programRequirementStatus.missingCodes.filter(
    (code) => !allCourses.includes(code) && !BUSINESS_CORE.some((course) => course.code === code),
  );
  const completedCredits = countCredits(completed);
  const inProgressCredits = countCredits(inProgress);
  const totalCredits = completedCredits + inProgressCredits;
  const remainingTo120 = Math.max(0, 120 - totalCredits);
  const qualifyingCoursesRemaining = Math.max(0, 40 - countQualifyingCourses(allCourses));
  const upcoming = buildUpcomingSemester(businessCoreStatus.remaining, missingProgramCodes, term.next, totalCredits);
  const fullPlan = buildFullRemainingPlan(businessCoreStatus.remaining, missingProgramCodes, term, totalCredits, remainingTo120);
  const loadExplanation =
    totalCredits >= 90 && remainingTo120 < 15
      ? `This planner recommended fewer than 15 credits because the student appears to be in the senior-year range with only ${remainingTo120} credits left to reach 120.`
      : "This planner recommends a 15-credit semester load by default because that is the standard pace unless the student is in the senior year and needs fewer credits to finish.";
  const creditMathLines = [
    `✅ Completed credits counted locally: ${completedCredits}`,
    `✅ In-progress credits counted locally: ${inProgressCredits}`,
    `✅ Combined counted credits: ${totalCredits}`,
    `⚠️ Credits still needed to reach 120: ${remainingTo120}`,
    `⚠️ Remaining 3- or 4-credit courses needed to reach 40: ${qualifyingCoursesRemaining}`,
  ];
  const plannerNote =
    "• This no-credit version checks Magis Core, business core, and the local major/minor requirement set entered for this tool. Confirm final registration choices with your advisor.";
  const analysis = [
    "Credit Math",
    ...creditMathLines,
    "",
    "Magis Core",
    ...magisStatus.fulfilled,
    ...magisStatus.remaining,
    "",
    "Business Core Completed",
    ...(businessCoreStatus.completed.length ? businessCoreStatus.completed : ["• None detected yet"]),
    "",
    "Business Core Remaining",
    ...(businessCoreStatus.remaining.length ? businessCoreStatus.remaining : ["✅ Business core appears complete locally"]),
    "",
    "Major / Minor Requirements",
    ...(programRequirementStatus.text ? programRequirementStatus.text.split("\n") : ["• No automatic major or minor requirement matches were detected."]),
    "",
    "Planner Note",
    plannerNote,
  ].join("\n");
  const sequencing = buildSequencingNotes(allCourses, businessCoreStatus.remaining, missingProgramCodes);

  return {
    completed,
    inProgress,
    allCourses,
    term,
    magisStatus,
    businessCoreStatus,
    programRequirementStatus,
    missingProgramCodes,
    completedCredits,
    inProgressCredits,
    totalCredits,
    remainingTo120,
    qualifyingCoursesRemaining,
    upcoming,
    fullPlan,
    loadExplanation,
    creditMathLines,
    plannerNote,
    analysis,
    sequencing,
    programs,
  };
}

function downloadPlan() {
  if (!state.lastPlanText) {
    summaryBar.textContent = "Generate a plan first, then download it.";
    return;
  }
  const blob = new Blob([state.lastPlanText], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `mr-advisor-local-plan-${new Date().toISOString().slice(0, 10)}.md`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function renderScenarioPlan(snapshot, updatedInputs, changes) {
  return [
    `Scenario tested: ${changes.map((change) => `${change.action.toUpperCase()} ${change.label}`).join("; ")}`,
    `Updated primary major: ${updatedInputs.primaryMajor || "Not provided"}`,
    `Updated additional programs: ${updatedInputs.additionalPrograms.join(", ") || "None listed"}`,
    "",
    "Revised upcoming semester",
    snapshot.upcoming,
    "",
    "Revised full remaining-semester plan",
    snapshot.fullPlan,
    "",
    "Revised requirement analysis",
    snapshot.analysis,
  ].join("\n");
}

async function handleFollowup() {
  const question = followupInput.value.trim();
  if (!question) {
    return;
  }

  addFollowupMessage("user", question);
  const changes = parseScenarioChanges(question);

  if (!state.lastAnalysis) {
    addFollowupMessage("assistant", "Generate a plan first so I can compare your current plan with the revised scenario.");
    followupInput.value = "";
    return;
  }

  if (changes.length) {
    const baseInputs = state.lastAnalysis.programInputs || getProgramInputSnapshot();
    const updatedInputs = applyScenarioChanges(baseInputs, changes);
    const scenarioPrograms = buildProgramNames(
      updatedInputs.primaryMajor,
      updatedInputs.primaryConcentration,
      updatedInputs.additionalPrograms.join("\n"),
    );
    const snapshot = await buildPlannerSnapshot(state.lastAnalysis.completed, state.lastAnalysis.inProgress, scenarioPrograms);
    const response = [
      `I tested this scenario: ${changes.map((change) => `${change.action} ${change.label}`).join("; ")}.`,
      `Updated programs: ${[updatedInputs.primaryMajor, ...updatedInputs.additionalPrograms].filter(Boolean).join(", ") || "None listed"}.`,
      `Revised next semester: ${snapshot.term.next}.`,
      `Revised credits still needed to reach 120: ${snapshot.remainingTo120}.`,
      "The revised plan appears below the original plan.",
    ].join("\n");
    addFollowupMessage("assistant", response);
    scenarioOutput.textContent = renderScenarioPlan(snapshot, updatedInputs, changes);
    followupInput.value = "";
    return;
  }

  addFollowupMessage("assistant", answerFollowup(question));
  followupInput.value = "";
}

function dedupeCourseLists(...lists) {
  return [...new Set(lists.flat().map(normalizeCourseCode).filter(Boolean))];
}

async function analyze() {
  analyzeButton.disabled = true;
  parseStatus.textContent = "Analyzing";
  parseStatus.classList.remove("muted");
  summaryBar.textContent = "Parsing uploaded files and building the no-credit advising worksheet...";

  try {
    const bundledTexts = await loadBundledTexts();
    const uploadedFiles = [...studentFilesInput.files];
    const typed = parseTypedCourses(coursesInput.value);
    const uploaded = [];

    for (const file of uploadedFiles) {
      uploaded.push(classifyUploadedCourses(await extractFileText(file)));
    }

    const completed = dedupeCourseLists(typed.completed, ...uploaded.map((item) => item.completed));
    const inProgress = dedupeCourseLists(typed.inProgress, ...uploaded.map((item) => item.inProgress)).filter((code) => !completed.includes(code));
    const snapshot = await buildPlannerSnapshot(completed, inProgress);

    termStatus.textContent = snapshot.term.current;
    upcomingSemesterOutput.textContent = snapshot.upcoming;
    parsedCoursesOutput.textContent = [
      `Completed (${completed.length}): ${completed.join(", ") || "None detected"}`,
      "",
      `In progress (${inProgress.length}): ${inProgress.join(", ") || "None detected"}`,
    ].join("\n");
    analysisOutput.classList.add("analysis-rich");
    analysisOutput.innerHTML = renderAnalysisHtml({
      creditMath: snapshot.creditMathLines,
      magisFulfilled: snapshot.magisStatus.fulfilled,
      magisRemaining: snapshot.magisStatus.remaining,
      businessCoreCompleted: snapshot.businessCoreStatus.completed,
      businessCoreRemaining: snapshot.businessCoreStatus.remaining,
      programRequirementText: snapshot.programRequirementStatus.text,
      plannerNote: snapshot.plannerNote,
    });
    fullPlanOutput.textContent = snapshot.fullPlan;
    sequencingOutput.textContent = snapshot.sequencing;
    scenarioOutput.textContent = "Use Ask Mr. Advisor to test adding or dropping a major or minor. The original plan stays above and the revised plan will appear here.";
    setFollowupStarter("Plan generated. You can now ask what changes if you add or drop a major or minor, and Mr. Advisor will show a revised plan below.");

    state.lastPlanText = buildPlanText({
      term: snapshot.term,
      completed,
      inProgress,
      upcoming: snapshot.upcoming,
      analysis: snapshot.analysis,
      sequencing: `${snapshot.fullPlan}\n\n${snapshot.sequencing}`,
    });
    state.lastAnalysis = {
      ...snapshot,
      completed,
      inProgress,
      programInputs: getProgramInputSnapshot(),
    };

    parseStatus.textContent = "Plan ready";
    summaryBar.textContent = "Local plan generated. Download it and bring it to your advisor meeting for registration hold removal.";
  } catch (error) {
    parseStatus.textContent = "Error";
    summaryBar.textContent = `Local analysis failed: ${error.message}`;
  } finally {
    analyzeButton.disabled = false;
  }
}

studentFilesInput.addEventListener("change", renderStudentFiles);
analyzeButton.addEventListener("click", analyze);
downloadPlanButton.addEventListener("click", downloadPlan);
askFollowupButton.addEventListener("click", handleFollowup);
followupInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    handleFollowup();
  }
});

renderCatalogLinks();
renderBundledSources();
renderStudentFiles();
termStatus.textContent = termInfo().current;
setFollowupStarter("Generate a plan first, then ask a follow-up question here.");

if (isFileProtocol()) {
  summaryBar.textContent =
    "Open Mr. Advisor from GitHub Pages or through a local server, not by double-clicking the HTML file. For local use, start node server.mjs and open http://127.0.0.1:3000.";
}
