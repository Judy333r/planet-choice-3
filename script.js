/* =========================================================
   PLANET CHOICES — game data & logic
   ========================================================= */

/* ---------- i18n ---------- */
const I18N = {
  en: {
    menu: {
      title: "PLANET CHOICES",
      subtitle: "Every decision shapes a world.",
      intro: "Welcome, Planet Manager. Your choices will shape the environment, economy, wildlife, and future of your planet. There is no perfect decision — only consequences.",
      choosePlanet: "🌍 Choose Planet",
      howToPlay: "📖 How to Play",
      lang: "🌐 EN | AR",
      soundOn: "🔊 Sound",
      soundOff: "🔇 Sound",
      settings: "⚙️ Settings"
    },
    nav: { back: "← Back" },
    planets: { title: "Choose your planet", start: "Start Game" },
    how: {
      title: "How to play",
      cta: "Let's begin 🌍",
      steps: [
        { t: "Start with a blank world", b: "Your planet begins in a neutral state. Its future has not been decided yet." },
        { t: "Make decisions", b: "Each round presents you with a situation and two possible choices." },
        { t: "Think beyond the present", b: "Some decisions may provide immediate benefits but create long-term problems." },
        { t: "Watch your planet change", b: "Your decisions affect pollution, biodiversity, quality of life, vegetation, cities, and wildlife." },
        { t: "Protect the ozone layer", b: "The atmosphere is part of your planet's health. Repeated harmful decisions can weaken its protective systems." },
        { t: "Build the future", b: "Your goal isn't simply to make the planet green. It's to create a world where people, nature, and resources can coexist." }
      ]
    },
    intro: {
      title: "Your planet. Your choices.",
      p1: "Your planet starts as a blank, fragile world.",
      p2: "Every decision you make will shape its future. Some choices will help your planet thrive. Others may create problems that won't appear until much later.",
      p3: "There won't always be an obvious answer. Think carefully. The future is in your hands.",
      cta: "Enter the World"
    },
    hud: { ozoneStable: "Ozone stable", didYouKnow: "Did you know?", continue: "Continue" },
    results: { headline: "Your planet's future", strongest: "Strongest area", attention: "Needs attention" },
    replay: {
      message: "Try again and make completely different decisions.",
      playAgain: "🌍 Play Again",
      chooseOther: "🪐 Choose Another Planet",
      mainMenu: "🏠 Main Menu"
    },
    settings: {
      language: "Language", sound: "Sound", animation: "Animation", textSize: "Text size",
      accessibility: "Accessibility", highContrast: "High contrast", reducedMotion: "Reduced motion"
    },
    ozoneStatus: { stable: "Ozone stable", weakening: "Ozone weakening", severe: "Ozone severely damaged" },
    statNames: { health: "Planet Health", ozone: "Ozone Layer", biodiversity: "Biodiversity", pollution: "Pollution", quality: "Quality of Life", pollutionControl: "Pollution Control" },
    endings: {
      high: { title: "🌍 A Thriving World", copy: "Your decisions helped create a healthier and more sustainable planet. Ecosystems are recovering, communities are developing, and environmental systems remain resilient." },
      mid: { title: "🌍 A World at a Crossroads", copy: "Your planet survived, but important challenges remain. Some systems are improving while others still require attention." },
      low: { title: "🌍 A Planet in Crisis", copy: "Your decisions placed significant pressure on the planet's ecosystems and environmental systems. The future will require major changes." }
    },
    scoreTitles: { steward: "🌱 Planet Steward", protector: "🌍 Planet Protector", balanced: "⚖️ Balanced Decision Maker", danger: "⚠️ Planet in Danger" }
  },
  ar: {
    menu: {
      title: "اختيارات الكوكب",
      subtitle: "كل قرار يصنع عالمًا.",
      intro: "أهلًا بك يا مدير الكوكب. قراراتك ستشكّل البيئة والاقتصاد والحياة البرية ومستقبل كوكبك. لا يوجد قرار مثالي — فقط نتائج.",
      choosePlanet: "🌍 اختر كوكبًا",
      howToPlay: "📖 كيفية اللعب",
      lang: "🌐 العربية | EN",
      soundOn: "🔊 الصوت",
      soundOff: "🔇 الصوت",
      settings: "⚙️ الإعدادات"
    },
    nav: { back: "→ رجوع" },
    planets: { title: "اختر كوكبك", start: "ابدأ اللعبة" },
    how: {
      title: "كيف تلعب؟",
      cta: "لنبدأ 🌍",
      steps: [
        { t: "ابدأ بعالمٍ فارغ", b: "يبدأ كوكبك بحالة محايدة، ولم يُحدَّد مستقبله بعد." },
        { t: "اتخذ القرارات", b: "في كل جولة سيظهر موقف يتطلب منك الاختيار بين قرارين." },
        { t: "فكّر في المستقبل", b: "قد تحقق بعض القرارات فوائد سريعة، لكنها قد تسبب مشكلات على المدى الطويل." },
        { t: "راقب تغيّر كوكبك", b: "ستؤثر قراراتك في التلوث والتنوع الحيوي وجودة الحياة والنباتات والحيوانات والمدن." },
        { t: "احمِ طبقة الأوزون", b: "الغلاف الجوي جزء أساسي من صحة كوكبك، وقد تتدهور حالته مع تكرار القرارات الضارة." },
        { t: "ابنِ المستقبل", b: "هدفك ليس جعل الكوكب أخضر فقط، بل إنشاء عالم يستطيع فيه الإنسان والطبيعة والموارد التعايش معًا." }
      ]
    },
    intro: {
      title: "كوكبك. قراراتك.",
      p1: "يبدأ كوكبك كعالمٍ فارغ وهشّ.",
      p2: "كل قرار تتخذه سيشكّل مستقبله. بعض القرارات ستساعد كوكبك على الازدهار، وأخرى قد تخلق مشكلات لا تظهر إلا لاحقًا.",
      p3: "لن تكون الإجابة واضحة دائمًا. فكّر جيدًا. المستقبل بين يديك.",
      cta: "ادخل إلى العالم"
    },
    hud: { ozoneStable: "الأوزون مستقر", didYouKnow: "هل تعلم؟", continue: "متابعة" },
    results: { headline: "مستقبل كوكبك", strongest: "أقوى مجال", attention: "يحتاج إلى اهتمام" },
    replay: {
      message: "حاول مجددًا واتخذ قرارات مختلفة تمامًا.",
      playAgain: "🌍 العب مجددًا",
      chooseOther: "🪐 اختر كوكبًا آخر",
      mainMenu: "🏠 القائمة الرئيسية"
    },
    settings: {
      language: "اللغة", sound: "الصوت", animation: "الحركة", textSize: "حجم النص",
      accessibility: "إمكانية الوصول", highContrast: "تباين عالٍ", reducedMotion: "حركة مخفّضة"
    },
    ozoneStatus: { stable: "الأوزون مستقر", weakening: "الأوزون يضعف", severe: "الأوزون متضرر بشدة" },
    statNames: { health: "صحة الكوكب", ozone: "طبقة الأوزون", biodiversity: "التنوع الحيوي", pollution: "التلوث", quality: "جودة الحياة", pollutionControl: "السيطرة على التلوث" },
    endings: {
      high: { title: "🌍 عالم مزدهر", copy: "ساعدت قراراتك على بناء كوكب أكثر صحة واستدامة. الأنظمة البيئية تتعافى، والمجتمعات تتطور، والأنظمة البيئية تبقى قوية." },
      mid: { title: "🌍 عالم عند مفترق طرق", copy: "نجا كوكبك، لكن تحديات مهمة ما زالت قائمة. بعض الأنظمة تتحسن بينما تحتاج أخرى إلى اهتمام." },
      low: { title: "🌍 كوكب في أزمة", copy: "وضعت قراراتك ضغطًا كبيرًا على النظم البيئية لكوكبك. سيتطلب المستقبل تغييرات جذرية." }
    },
    scoreTitles: { steward: "🌱 راعي الكوكب", protector: "🌍 حامي الكوكب", balanced: "⚖️ صانع قرار متوازن", danger: "⚠️ كوكب في خطر" }
  }
};

/* ---------- planets ---------- */
const PLANETS = [
  { id: "earth", symbol: "🌍", name: "Earth", desc: "A living world of oceans, forests, cities, and millions of species." },
  { id: "mars", symbol: "🔴", name: "Mars", desc: "A cold and barren world with enormous potential for transformation." },
  { id: "jupiter", symbol: "🟠", name: "Jupiter", desc: "A gigantic gas giant surrounded by powerful storms and endless atmosphere." },
  { id: "saturn", symbol: "🪐", name: "Saturn", desc: "A magnificent ringed world with a mysterious and extreme environment." },
  { id: "neptune", symbol: "🔵", name: "Neptune", desc: "A distant blue world shaped by powerful winds and extreme conditions." },
  { id: "venus", symbol: "🟡", name: "Venus", desc: "A scorching world where extreme atmospheric conditions make survival difficult." },
  { id: "uranus", symbol: "⚪", name: "Uranus", desc: "An icy giant with a strange atmosphere and a world of unanswered questions." },
  { id: "mercury", symbol: "☿", name: "Mercury", desc: "A small world of extreme temperatures, intense sunlight, and almost no atmosphere." }
];

/* ---------- 24 decision rounds ---------- */
/* delta keys: health, ozone, biodiversity, pollution, quality (pollution: higher = worse) */
const ROUNDS = [
  { category: "Energy", situation: "Your planet needs more electricity. Demand is rising rapidly.",
    a: { text: "Build renewable energy sources such as solar and wind farms.", title: "🌱 Energy Transition", text2: "Renewable energy can reduce greenhouse-gas emissions and air pollution, although building new infrastructure requires time and resources.", delta: { health: 4, ozone: 3, biodiversity: 1, pollution: -3, quality: -2 } },
    b: { text: "Build large fossil-fuel power plants because they can provide electricity quickly.", title: "⚠️ High-Emission Energy", text2: "Fossil fuels can provide reliable energy quickly, but burning them increases greenhouse-gas emissions and air pollution.", delta: { health: -3, ozone: -4, biodiversity: -1, pollution: 6, quality: 4 } },
    fact: { title: "Renewable Energy", text: "Solar and wind energy generate electricity without burning fossil fuels during operation." } },

  { category: "Food", situation: "Your population is growing. Your farms need to produce more food.",
    a: { text: "Expand farmland into nearby natural areas.", title: "🌾 Food Production Increased", text2: "More farmland can increase food production quickly, but converting natural habitats can reduce biodiversity.", delta: { health: -3, ozone: 0, biodiversity: -6, pollution: 2, quality: 3 } },
    b: { text: "Invest in efficient farming and reduce food waste, even though the changes will take time.", title: "🌱 Smarter Agriculture", text2: "Better efficiency and reduced waste can increase the amount of food available without requiring as much new farmland.", delta: { health: 2, ozone: 0, biodiversity: 3, pollution: -1, quality: 1 } } },

  { category: "Transportation", situation: "Your cities are becoming overcrowded. Traffic is getting worse.",
    a: { text: "Build more roads to make driving easier.", title: "🚗 More Road Capacity", text2: "Additional roads can improve traffic flow in some areas, but increased car dependence can raise emissions and land use.", delta: { health: -2, ozone: -1, biodiversity: -2, pollution: 5, quality: 3 } },
    b: { text: "Invest in public transportation, cycling infrastructure, and walkable neighborhoods.", title: "🚌 Connected Cities", text2: "Public transportation and walkable communities can reduce dependence on private cars, although building them requires major investment.", delta: { health: 3, ozone: 1, biodiversity: 1, pollution: -3, quality: -1 } } },

  { category: "Water", situation: "Your planet is experiencing a water shortage.",
    a: { text: "Build new water-intensive industries to create jobs and economic growth.", title: "🏭 Economic Growth", text2: "The new industries create jobs and economic activity, but they place additional pressure on limited water supplies.", delta: { health: -3, ozone: 0, biodiversity: -2, pollution: 3, quality: 5 } },
    b: { text: "Invest in water recycling, efficient irrigation, and conservation.", title: "💧 Water Security", text2: "Recycling and conservation reduce pressure on freshwater resources, although the systems require significant investment.", delta: { health: 3, ozone: 0, biodiversity: 2, pollution: -2, quality: -1 } },
    fact: { title: "Water", text: "Agriculture is one of the world's major users of freshwater." } },

  { category: "Forests", situation: "A large forest contains valuable resources.",
    a: { text: "Allow controlled development and resource extraction.", title: "🪵 Resource Development", text2: "Resource extraction can provide materials, jobs, and revenue, but even controlled development can disturb habitats.", delta: { health: -4, ozone: -1, biodiversity: -6, pollution: 4, quality: 4 } },
    b: { text: "Protect the forest and restrict most development.", title: "🌳 Forest Protection", text2: "Protecting the forest preserves habitats and ecosystem services, but limits some short-term economic opportunities.", delta: { health: 4, ozone: 1, biodiversity: 6, pollution: -1, quality: -2 } },
    fact: { title: "Forests", text: "Forests provide habitats for wildlife and influence water, soil, and carbon cycles." } },

  { category: "City Expansion", situation: "Your population needs more housing.",
    a: { text: "Expand the city outward into undeveloped land.", title: "🏘️ Outward Expansion", text2: "Expanding outward can create new housing quickly, but may consume natural habitats and increase travel distances.", delta: { health: -3, ozone: 0, biodiversity: -4, pollution: 3, quality: 2 } },
    b: { text: "Build more housing within existing urban areas.", title: "🏙️ Compact Development", text2: "Building within existing urban areas can reduce land consumption, but higher-density development requires careful planning.", delta: { health: 2, ozone: 0, biodiversity: 1, pollution: -1, quality: -1 } } },

  { category: "Waste", situation: "Your landfills are filling quickly.",
    a: { text: "Build a larger landfill outside the city.", title: "🗑️ More Landfill Space", text2: "The new landfill solves the immediate capacity problem, but creates long-term waste-management challenges.", delta: { health: -3, ozone: 0, biodiversity: -2, pollution: 5, quality: 2 } },
    b: { text: "Invest in recycling, composting, and waste reduction.", title: "♻️ Circular Waste System", text2: "Reducing and recovering waste can conserve resources, but requires infrastructure and changes in behavior.", delta: { health: 3, ozone: 0, biodiversity: 1, pollution: -3, quality: -1 } } },

  { category: "Oceans", situation: "Plastic waste is accumulating near your coast.",
    a: { text: "Clean the beaches regularly.", title: "🌊 Coastal Cleanup", text2: "Cleanup removes existing pollution and protects coastal areas, but does not solve the source of the waste.", delta: { health: 1, ozone: 0, biodiversity: 2, pollution: -1, quality: 1 } },
    b: { text: "Reduce plastic entering the environment at its source.", title: "♻️ Source Control", text2: "Preventing waste from entering the environment addresses the problem earlier, although changing production and consumption systems takes time.", delta: { health: 3, ozone: 0, biodiversity: 3, pollution: -4, quality: -1 } },
    fact: { title: "Oceans", text: "Oceans absorb a large amount of the heat and carbon dioxide associated with human activity." } },

  { category: "Transportation Fuels", situation: "Your country needs to reduce transportation emissions.",
    a: { text: "Rapidly replace older vehicles with electric vehicles.", title: "⚡ Electrification", text2: "Electric vehicles can reduce tailpipe emissions, but manufacturing vehicles and batteries still requires resources.", delta: { health: 2, ozone: -1, biodiversity: -1, pollution: -2, quality: 2 } },
    b: { text: "Improve public transportation while gradually changing the vehicle fleet.", title: "🚆 Transport Transformation", text2: "Better public transportation can reduce the number of vehicles needed, but infrastructure projects take years to complete.", delta: { health: 3, ozone: 1, biodiversity: 1, pollution: -3, quality: -2 } } },

  { category: "Agriculture", situation: "Farmers are facing declining soil quality.",
    a: { text: "Use more chemical inputs to maintain production.", title: "🌾 Short-Term Productivity", text2: "Additional inputs may protect production in the short term, but excessive use can create environmental pressures.", delta: { health: -3, ozone: 0, biodiversity: -3, pollution: 4, quality: 3 } },
    b: { text: "Invest in crop rotation, healthier soils, and precision agriculture.", title: "🌱 Healthier Soils", text2: "Improving soil management can strengthen long-term agricultural resilience, although benefits may take time to appear.", delta: { health: 3, ozone: 0, biodiversity: 3, pollution: -2, quality: -1 } } },

  { category: "Economy", situation: "Your economy is struggling. A large company offers thousands of jobs if you approve a new industrial zone.",
    a: { text: "Approve the project with limited environmental restrictions.", title: "🏭 Rapid Development", text2: "The project could create jobs and economic activity quickly, but weaker safeguards increase environmental risks.", delta: { health: -4, ozone: -1, biodiversity: -3, pollution: 5, quality: 6 } },
    b: { text: "Approve it only under strict environmental standards.", title: "⚖️ Balanced Development", text2: "Stronger standards can reduce environmental risks, but may increase costs and slow the project's development.", delta: { health: 2, ozone: 0, biodiversity: 1, pollution: -1, quality: 1 } } },

  { category: "Fishing", situation: "Fish populations are declining.",
    a: { text: "Increase fishing limits to support fishing communities.", title: "🐟 Immediate Income", text2: "Higher catches can support communities in the short term, but continued pressure may reduce future fish populations.", delta: { health: -2, ozone: 0, biodiversity: -5, pollution: 1, quality: 3 } },
    b: { text: "Temporarily reduce fishing limits to allow populations to recover.", title: "🐠 Population Recovery", text2: "Lower catches can help fish populations recover, but fishing communities may face short-term economic difficulties.", delta: { health: 2, ozone: 0, biodiversity: 4, pollution: -1, quality: -3 } },
    fact: { title: "Biodiversity", text: "Biodiversity includes the variety of living organisms, genes, and ecosystems on Earth." } },

  { category: "Energy Storage", situation: "Renewable energy production changes throughout the day.",
    a: { text: "Build large batteries to store excess energy.", title: "🔋 Energy Storage", text2: "Storage can help balance renewable energy, but batteries require materials, manufacturing, and responsible recycling.", delta: { health: 2, ozone: 1, biodiversity: -1, pollution: -2, quality: 1 } },
    b: { text: "Keep more conventional power plants available for periods of high demand.", title: "⚡ Backup Power", text2: "Conventional backup can provide reliability during shortages, but continued fossil-fuel use can increase emissions.", delta: { health: -2, ozone: -2, biodiversity: 0, pollution: 4, quality: 2 } } },

  { category: "Development", situation: "A new region could become a major economic center.",
    a: { text: "Develop it rapidly before competitors do.", title: "🏗️ Rapid Expansion", text2: "Rapid development can accelerate jobs and infrastructure, but environmental impacts may become difficult to reverse.", delta: { health: -3, ozone: 0, biodiversity: -4, pollution: 3, quality: 4 } },
    b: { text: "Develop it gradually while protecting important ecosystems.", title: "🌿 Planned Development", text2: "Gradual development allows more environmental planning, but economic growth may happen more slowly.", delta: { health: 3, ozone: 0, biodiversity: 2, pollution: -1, quality: -1 } } },

  { category: "Water for Farming", situation: "Farmers need more water during a drought.",
    a: { text: "Divert more water toward agriculture.", title: "🌾 Protecting Harvests", text2: "Additional water can protect crops in the short term but may place greater pressure on rivers and reservoirs.", delta: { health: -3, ozone: 0, biodiversity: -3, pollution: 1, quality: 3 } },
    b: { text: "Reduce water use through efficient irrigation and drought-resistant crops.", title: "💧 Adaptive Farming", text2: "Efficient irrigation and resilient crops can reduce future water demand, although changing farming practices takes time.", delta: { health: 3, ozone: 0, biodiversity: 2, pollution: -1, quality: -1 } } },

  { category: "Climate Adaptation", situation: "Your coastal city is increasingly vulnerable to flooding.",
    a: { text: "Build large seawalls around the most vulnerable areas.", title: "🌊 Coastal Defense", text2: "Seawalls can protect developed areas, but they are expensive and may alter coastal ecosystems.", delta: { health: -1, ozone: 0, biodiversity: -2, pollution: 1, quality: 3 } },
    b: { text: "Move some development away from high-risk areas and restore natural coastal barriers.", title: "🌿 Natural Defense", text2: "Wetlands and natural coastal systems can reduce some risks while supporting biodiversity, but relocation can be socially and economically difficult.", delta: { health: 3, ozone: 0, biodiversity: 4, pollution: -1, quality: -3 } } },

  { category: "Mining", situation: "Your planet has a valuable mineral needed for new technology.",
    a: { text: "Open the mine quickly to accelerate technological development.", title: "⛏️ Resource Boom", text2: "Faster mining can increase access to important materials and create jobs, but environmental impacts may be harder to control.", delta: { health: -4, ozone: -1, biodiversity: -4, pollution: 4, quality: 4 } },
    b: { text: "Require extensive environmental planning before mining begins.", title: "🔬 Careful Extraction", text2: "Stronger planning can reduce environmental risks, but delays may increase costs and slow access to the resource.", delta: { health: 1, ozone: 0, biodiversity: 1, pollution: 1, quality: -1 } } },

  { category: "Forest Fire", situation: "A massive forest fire has destroyed part of an ecosystem.",
    a: { text: "Clear the damaged area and rebuild it quickly.", title: "🌲 Rapid Rebuilding", text2: "Replanting can restore vegetation quickly, but ecosystems may recover differently depending on local conditions.", delta: { health: 1, ozone: 0, biodiversity: -2, pollution: 1, quality: 2 } },
    b: { text: "Allow parts of the ecosystem to recover naturally while restoring critical areas.", title: "🌱 Natural Recovery", text2: "Natural recovery can support ecological processes, while targeted restoration can help areas that struggle to recover.", delta: { health: 3, ozone: 0, biodiversity: 3, pollution: -1, quality: -1 } } },

  { category: "Technology", situation: "Your scientists develop a technology that could greatly reduce pollution. It is expensive.",
    a: { text: "Spend heavily to deploy it immediately.", title: "🔬 Rapid Innovation", text2: "Fast deployment could produce environmental benefits sooner, but large investments carry financial and technological risks.", delta: { health: 4, ozone: 2, biodiversity: 1, pollution: -4, quality: -2 } },
    b: { text: "Run smaller trials first and expand the technology gradually.", title: "🧪 Test and Scale", text2: "Testing reduces uncertainty and can improve the technology, but environmental benefits may take longer to reach a large scale.", delta: { health: 2, ozone: 1, biodiversity: 1, pollution: -1, quality: 1 } },
    fact: { title: "Climate", text: "Greenhouse gases trap heat in Earth's atmosphere, influencing the planet's climate." } },

  { category: "Population", situation: "Your cities are growing rapidly.",
    a: { text: "Build infrastructure as quickly as possible to keep up with population growth.", title: "🏙️ Fast Growth", text2: "Rapid infrastructure development can meet immediate needs, but poorly planned growth can create long-term environmental pressures.", delta: { health: -3, ozone: 0, biodiversity: -3, pollution: 4, quality: 4 } },
    b: { text: "Slow expansion and prioritize long-term urban planning.", title: "🗺️ Long-Term Planning", text2: "Careful planning can create more efficient cities, but current infrastructure shortages may take longer to solve.", delta: { health: 2, ozone: 0, biodiversity: 1, pollution: -1, quality: -2 } } },

  { category: "The Difficult Choice", situation: "Your planet faces an energy shortage. You can only fully fund one project.",
    a: { text: "Build a large clean-energy project that will take years to complete.", title: "☀️ Long-Term Investment", text2: "The project could provide cleaner energy for decades, but your planet must manage the short-term energy gap.", delta: { health: 4, ozone: 3, biodiversity: 1, pollution: -3, quality: -3 } },
    b: { text: "Build a smaller conventional power plant that can operate within months.", title: "⚡ Immediate Relief", text2: "The project solves the immediate shortage, but its environmental costs may continue for years.", delta: { health: -3, ozone: -2, biodiversity: -1, pollution: 5, quality: 4 } } },

  { category: "The Forest Decision", situation: "A forest sits beneath a region containing valuable minerals. Mining could provide thousands of jobs.",
    a: { text: "Allow mining with environmental safeguards and restoration requirements.", title: "⚖️ Controlled Mining", text2: "Strong safeguards can reduce some environmental damage while allowing economic benefits, but restoration cannot always replace an original ecosystem.", delta: { health: -2, ozone: 0, biodiversity: -3, pollution: 2, quality: 4 } },
    b: { text: "Protect the forest and search for alternative sources of the minerals.", title: "🌳 Protect the Ecosystem", text2: "Protecting the forest preserves biodiversity, but the planet may need to find another way to obtain the resources and jobs.", delta: { health: 3, ozone: 1, biodiversity: 5, pollution: -1, quality: -3 } },
    fact: { title: "Ozone", text: "The ozone layer absorbs much of the Sun's harmful ultraviolet radiation." } },

  { category: "The Future of Your Planet", situation: "Your planet has limited resources. You must choose where to invest for the next 20 years.",
    a: { text: "Prioritize rapid economic growth and infrastructure.", title: "📈 Growth First", text2: "Rapid development can improve living standards and expand economic opportunities, but resource consumption may increase.", delta: { health: -4, ozone: -1, biodiversity: -3, pollution: 5, quality: 5 } },
    b: { text: "Prioritize resilience, environmental protection, and sustainable infrastructure.", title: "🌱 Resilience First", text2: "Sustainable infrastructure can reduce future environmental pressures, but some benefits may take decades to appear.", delta: { health: 4, ozone: 2, biodiversity: 3, pollution: -3, quality: -2 } } },

  { category: "The Final Decision", situation: "Your planet has one final challenge. You have enough resources to make one major investment.",
    a: { text: "Create a massive global infrastructure program focused on economic expansion.", title: "🌎 A World of Growth", text2: "Economic expansion can create jobs, infrastructure, and new opportunities. Its long-term environmental impact depends on how that growth is managed.", delta: { health: -5, ozone: -2, biodiversity: -4, pollution: 6, quality: 6 } },
    b: { text: "Create a long-term planetary restoration and sustainability program.", title: "🌍 A World of Restoration", text2: "Restoration can strengthen ecosystems and resilience, but requires long-term commitment and significant resources.", delta: { health: 6, ozone: 3, biodiversity: 5, pollution: -4, quality: -2 } } }
];

/* =========================================================
   STATE
   ========================================================= */
const state = {
  lang: "en",
  sound: true,
  reducedMotion: false,
  highContrast: false,
  textScale: 1,
  selectedPlanet: null,
  round: 0,
  stats: {}
};

function freshStats(){
  return { health: 50, ozone: 75, biodiversity: 50, pollution: 25, quality: 50 };
}

/* =========================================================
   i18n helpers
   ========================================================= */
function t(path){
  const parts = path.split(".");
  let node = I18N[state.lang];
  for (const p of parts){ node = node?.[p]; }
  return node ?? path;
}

function applyI18n(){
  document.documentElement.lang = state.lang;
  document.documentElement.setAttribute("data-lang", state.lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  const soundBtn = document.getElementById("sound-toggle");
  soundBtn.textContent = state.sound ? t("menu.soundOn") : t("menu.soundOff");
  renderHowSteps();
  if (document.getElementById("screen-game").classList.contains("active")) renderRound();
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function goTo(screenName){
  document.querySelectorAll("[data-screen]").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + screenName).classList.add("active");
  window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });
}

document.querySelectorAll("[data-nav]").forEach(el => {
  el.addEventListener("click", () => goTo(el.dataset.nav));
});

/* =========================================================
   SOUND (tiny beep via WebAudio, no assets needed)
   ========================================================= */
let audioCtx = null;
function beep(freq = 440, duration = 0.08){
  if (!state.sound) return;
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }catch(e){ /* audio unavailable, fail silently */ }
}

/* =========================================================
   PLANET SELECTION
   ========================================================= */
function renderPlanets(){
  const grid = document.getElementById("planet-grid");
  grid.innerHTML = "";
  PLANETS.forEach(p => {
    const card = document.createElement("button");
    card.className = "planet-card";
    card.type = "button";
    card.innerHTML = `<div class="planet-symbol">${p.symbol}</div>
      <div class="planet-name">${p.name}</div>
      <div class="planet-desc">${p.desc}</div>`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".planet-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      state.selectedPlanet = p;
      document.getElementById("start-game-btn").disabled = false;
      beep(520, 0.05);
    });
    grid.appendChild(card);
  });
}

document.getElementById("start-game-btn").addEventListener("click", () => {
  if (!state.selectedPlanet) return;
  document.getElementById("intro-planet-name").textContent = `${state.selectedPlanet.symbol} ${state.selectedPlanet.name}`;
  goTo("intro");
});

document.getElementById("enter-world-btn").addEventListener("click", () => {
  state.round = 0;
  state.stats = freshStats();
  goTo("game");
  renderRound();
});

/* =========================================================
   HOW TO PLAY
   ========================================================= */
function renderHowSteps(){
  const list = document.getElementById("how-steps");
  list.innerHTML = "";
  t("how.steps").forEach(step => {
    const li = document.createElement("li");
    li.innerHTML = `<div><p class="step-title">${step.t}</p><p class="step-body">${step.b}</p></div>`;
    list.appendChild(li);
  });
}

/* =========================================================
   GAME RENDERING
   ========================================================= */
const STAT_META = [
  { key: "health", color: "var(--accent-health)" },
  { key: "ozone", color: "var(--accent-ozone)" },
  { key: "biodiversity", color: "var(--accent-bio)" },
  { key: "pollution", color: "var(--accent-pollution)" },
  { key: "quality", color: "var(--accent-quality)" }
];

function clamp(n){ return Math.max(0, Math.min(100, n)); }

function renderStatBars(){
  const wrap = document.getElementById("stat-bars");
  wrap.innerHTML = "";
  STAT_META.forEach(meta => {
    const val = clamp(state.stats[meta.key]);
    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `
      <span class="stat-label">${t("statNames." + meta.key)}</span>
      <span class="stat-track"><span class="stat-fill" style="width:${val}%;background:${meta.color}"></span></span>
      <span class="stat-value">${val}</span>`;
    wrap.appendChild(row);
  });

  const ozoneVal = clamp(state.stats.ozone);
  const statusEl = document.getElementById("ozone-status");
  if (ozoneVal >= 65){ statusEl.innerHTML = `🟢 ${t("ozoneStatus.stable")}`; }
  else if (ozoneVal >= 35){ statusEl.innerHTML = `🟡 ${t("ozoneStatus.weakening")}`; }
  else { statusEl.innerHTML = `🔴 ${t("ozoneStatus.severe")}`; }
}

function renderRound(){
  const r = ROUNDS[state.round];
  document.getElementById("round-current").textContent = state.round + 1;
  document.getElementById("round-total").textContent = ROUNDS.length;
  document.getElementById("round-category").textContent = r.category;
  document.getElementById("round-situation").textContent = r.situation;
  renderStatBars();

  const choicesWrap = document.getElementById("round-choices");
  choicesWrap.innerHTML = "";
  ["a", "b"].forEach(key => {
    const opt = r[key];
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.type = "button";
    btn.innerHTML = `<span class="choice-letter">${key.toUpperCase()}</span><span class="choice-text">${opt.text}</span>`;
    btn.addEventListener("click", () => chooseOption(key));
    choicesWrap.appendChild(btn);
  });
}

function chooseOption(key){
  const r = ROUNDS[state.round];
  const opt = r[key];
  beep(key === "a" ? 600 : 420, 0.09);

  Object.keys(opt.delta).forEach(k => {
    state.stats[k] = clamp(state.stats[k] + opt.delta[k]);
  });

  document.getElementById("consequence-title").textContent = opt.title;
  document.getElementById("consequence-text").textContent = opt.text2;

  const factCard = document.getElementById("fact-card");
  if (r.fact){
    factCard.hidden = false;
    document.getElementById("fact-text").textContent = r.fact.text;
  } else {
    factCard.hidden = true;
  }

  document.getElementById("consequence-overlay").classList.add("active");
  renderStatBars();
}

document.getElementById("continue-btn").addEventListener("click", () => {
  document.getElementById("consequence-overlay").classList.remove("active");
  state.round++;
  if (state.round >= ROUNDS.length){
    showResults();
  } else {
    renderRound();
  }
});

/* =========================================================
   RESULTS
   ========================================================= */
function showResults(){
  const s = state.stats;
  const pollutionControl = 100 - s.pollution;
  const overall = Math.round((s.health + s.ozone + s.biodiversity + s.quality + pollutionControl) / 5);

  document.getElementById("results-planet-name").textContent = `${state.selectedPlanet.symbol} ${state.selectedPlanet.name}`;
  document.getElementById("score-number").textContent = overall;
  document.getElementById("score-ring").style.setProperty("--pct", overall);

  let ending, scoreTitle;
  if (overall >= 80){ ending = t("endings.high"); scoreTitle = t("scoreTitles.steward"); }
  else if (overall >= 65){ ending = t("endings.mid"); scoreTitle = t("scoreTitles.protector"); }
  else if (overall >= 50){ ending = t("endings.mid"); scoreTitle = t("scoreTitles.balanced"); }
  else { ending = t("endings.low"); scoreTitle = t("scoreTitles.danger"); }

  document.getElementById("results-ending").textContent = ending.copy;
  document.getElementById("score-title").textContent = scoreTitle;

  const reportWrap = document.getElementById("report-bars");
  reportWrap.innerHTML = "";
  const reportStats = [
    { key: "health", val: s.health },
    { key: "ozone", val: s.ozone },
    { key: "biodiversity", val: s.biodiversity },
    { key: "pollutionControl", val: pollutionControl },
    { key: "quality", val: s.quality }
  ];
  reportStats.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "stat-row";
    const color = i === 3 ? "var(--accent-pollution)" : STAT_META[i]?.color || "var(--accent-health)";
    row.innerHTML = `
      <span class="stat-label">${t("statNames." + item.key)}</span>
      <span class="stat-track"><span class="stat-fill" style="width:${item.val}%;background:${color}"></span></span>
      <span class="stat-value">${item.val}%</span>`;
    reportWrap.appendChild(row);
  });

  const strongest = reportStats.reduce((a, b) => (b.val > a.val ? b : a));
  const weakest = reportStats.reduce((a, b) => (b.val < a.val ? b : a));
  document.getElementById("insight-strongest").textContent = t("statNames." + strongest.key);
  document.getElementById("insight-weakest").textContent = t("statNames." + weakest.key);

  goTo("results");
}

document.getElementById("play-again-btn").addEventListener("click", () => {
  state.round = 0;
  state.stats = freshStats();
  goTo("game");
  renderRound();
});
document.getElementById("choose-other-btn").addEventListener("click", () => {
  state.selectedPlanet = null;
  document.getElementById("start-game-btn").disabled = true;
  goTo("planetSelect");
});

/* =========================================================
   SETTINGS
   ========================================================= */
function syncSettingsUI(){
  document.getElementById("settings-lang-en").classList.toggle("active", state.lang === "en");
  document.getElementById("settings-lang-ar").classList.toggle("active", state.lang === "ar");
  document.getElementById("settings-sound-on").classList.toggle("active", state.sound);
  document.getElementById("settings-sound-off").classList.toggle("active", !state.sound);
  document.getElementById("settings-anim-full").classList.toggle("active", !state.reducedMotion);
  document.getElementById("settings-anim-reduced").classList.toggle("active", state.reducedMotion);
  document.getElementById("high-contrast").checked = state.highContrast;
  document.getElementById("reduced-motion").checked = state.reducedMotion;
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "ar" : "en";
  applyI18n();
  syncSettingsUI();
});
document.getElementById("settings-lang-en").addEventListener("click", () => { state.lang = "en"; applyI18n(); syncSettingsUI(); });
document.getElementById("settings-lang-ar").addEventListener("click", () => { state.lang = "ar"; applyI18n(); syncSettingsUI(); });

document.getElementById("sound-toggle").addEventListener("click", () => {
  state.sound = !state.sound;
  applyI18n();
  syncSettingsUI();
});
document.getElementById("settings-sound-on").addEventListener("click", () => { state.sound = true; applyI18n(); syncSettingsUI(); });
document.getElementById("settings-sound-off").addEventListener("click", () => { state.sound = false; applyI18n(); syncSettingsUI(); });

document.getElementById("settings-anim-full").addEventListener("click", () => {
  state.reducedMotion = false;
  document.body.classList.remove("reduced-motion");
  syncSettingsUI();
});
document.getElementById("settings-anim-reduced").addEventListener("click", () => {
  state.reducedMotion = true;
  document.body.classList.add("reduced-motion");
  syncSettingsUI();
});
document.getElementById("reduced-motion").addEventListener("change", (e) => {
  state.reducedMotion = e.target.checked;
  document.body.classList.toggle("reduced-motion", state.reducedMotion);
  syncSettingsUI();
});
document.getElementById("high-contrast").addEventListener("change", (e) => {
  state.highContrast = e.target.checked;
  document.body.classList.toggle("high-contrast", state.highContrast);
});

const TEXT_SCALES = [0.9, 1, 1.15];
let textScaleIndex = 1;
function applyTextScale(){
  document.documentElement.style.setProperty("--text-scale", TEXT_SCALES[textScaleIndex]);
}
document.getElementById("text-a-minus").addEventListener("click", () => { textScaleIndex = Math.max(0, textScaleIndex - 1); applyTextScale(); });
document.getElementById("text-a").addEventListener("click", () => { textScaleIndex = 1; applyTextScale(); });
document.getElementById("text-a-plus").addEventListener("click", () => { textScaleIndex = Math.min(2, textScaleIndex + 1); applyTextScale(); });

/* =========================================================
   INIT
   ========================================================= */
function init(){
  renderPlanets();
  applyI18n();
  syncSettingsUI();
}
init();
