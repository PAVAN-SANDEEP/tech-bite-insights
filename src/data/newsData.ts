import { NewsCard } from '@/types/news';

export const sampleNewsData: NewsCard[] = [
  {
    id: '1',
    title: {
      en: 'GPT-4 Vision Transforms Medical Diagnostics',
      te: 'GPT-4 విజన్ వైద్య నిర్ధారణలను మార్చుతుంది',
      hi: 'GPT-4 विजन चिकित्सा निदान को बदल रहा है'
    },
    content: {
      en: {
        what: 'OpenAI\'s GPT-4 Vision can now analyze medical images with 85% accuracy, helping doctors detect early-stage diseases faster than traditional methods.',
        why: 'This breakthrough reduces diagnostic errors by 40% and speeds up medical consultations, making healthcare more accessible in remote areas.',
        how: 'Start learning AI fundamentals on Coursera\'s "AI for Healthcare" course. Practice with medical datasets on Kaggle to build your portfolio in AI healthcare.'
      },
      te: {
        what: 'OpenAI యొక్క GPT-4 విజన్ ఇప్పుడు వైద్య చిత్రాలను 85% ఖచ్చితత్వంతో విశ్లేషించగలదు, సాంప్రదాయ పద్ధతుల కంటే వేగంగా వైద్యులకు ప్రారంభ దశ వ్యాధులను గుర్తించడంలో సహాయపడుతుంది.',
        why: 'ఈ పురోగతి డయాగ్నోస్టిక్ లోపాలను 40% తగ్గిస్తుంది మరియు వైద్య సంప్రదింపులను వేగవంతం చేస్తుంది, మారుమూల ప్రాంతాలలో ఆరోగ్య సంరక్షణను మరింత అందుబాటులో ఉంచుతుంది.',
        how: 'Coursera లో "AI for Healthcare" కోర్స్‌తో AI ప్రాథమికాలు నేర్చుకోవడం ప్రారంభించండి. AI ఆరోగ్య సంరక్షణలో మీ పోర్ట్‌ఫోలియోను నిర్మించడానికి Kaggle లో వైద్య డేటాసెట్‌లతో అభ్యసించండి.'
      },
      hi: {
        what: 'OpenAI का GPT-4 विजन अब 85% सटीकता के साथ चिकित्सा छवियों का विश्लेषण कर सकता है, जो डॉक्टरों को पारंपरिक तरीकों से तेज़ी से प्रारंभिक बीमारियों का पता लगाने में मदद करता है।',
        why: 'यह सफलता निदान त्रुटियों को 40% कम करती है और चिकित्सा परामर्श को तेज़ करती है, जिससे दूरदराज के क्षेत्रों में स्वास्थ्य सेवा अधिक सुलभ हो जाती है।',
        how: 'Coursera के "AI for Healthcare" कोर्स के साथ AI की बुनियादी बातें सीखना शुरू करें। AI स्वास्थ्य सेवा में अपना पोर्टफोलियो बनाने के लिए Kaggle पर चिकित्सा डेटासेट के साथ अभ्यास करें।'
      }
    },
    category: 'AI/Healthcare',
    actionLink: 'https://www.coursera.org/learn/ai-for-healthcare',
    createdAt: '2024-01-20'
  },
  {
    id: '2',
    title: {
      en: 'Apple Vision Pro Redefines Spatial Computing',
      te: 'Apple Vision Pro స్పేషియల్ కంప్యూటింగ్‌ను పునర్నిర్వచిస్తుంది',
      hi: 'Apple Vision Pro स्थानिक कंप्यूटिंग को फिर से परिभाषित करता है'
    },
    content: {
      en: {
        what: 'Apple\'s Vision Pro headset introduces mixed reality experiences that blend digital content seamlessly with the physical world using advanced eye tracking and hand gestures.',
        why: 'This technology opens new possibilities for remote work, education, and entertainment, potentially replacing traditional screens and transforming how we interact with computers.',
        how: 'Start building AR/VR skills with Unity and learn SwiftUI for Vision Pro development. Join Apple Developer Program and experiment with ARKit to prepare for spatial computing jobs.'
      },
      te: {
        what: 'Apple యొక్క Vision Pro హెడ్‌సెట్ అధునాతన కంటి ట్రాకింగ్ మరియు చేతి సంజ్ఞలను ఉపయోగించి భౌతిక ప్రపంచంతో డిజిటల్ కంటెంట్‌ను సజావుగా మిళితం చేసే మిశ్రమ వాస్తవికత అనుభవాలను పరిచయం చేస్తుంది.',
        why: 'ఈ సాంకేతికత రిమోట్ వర్క్, విద్య మరియు వినోదం కోసం కొత్త అవకాశాలను తెరుస్తుంది, సాంప్రదాయ స్క్రీన్‌లను భర్తీ చేసే మరియు కంప్యూటర్‌లతో మనం ఎలా సంకర్షణ చేస్తామో మార్చే అవకాశం ఉంది.',
        how: 'Unity తో AR/VR నైపుణ్యాలను అభివృద్ధి చేయడం ప్రారంభించండి మరియు Vision Pro అభివృద్ధి కోసం SwiftUI నేర్చుకోండి. Apple Developer Program లో చేరండి మరియు స్పేషియల్ కంప్యూటింగ్ ఉద్యోగాలకు సిద్ధం కావడానికి ARKit తో ప్రయోగాలు చేయండి.'
      },
      hi: {
        what: 'Apple का Vision Pro हेडसेट उन्नत आंख ट्रैकिंग और हाथ के इशारों का उपयोग करके भौतिक दुनिया के साथ डिजिटल सामग्री को सहजता से मिलाने वाले मिश्रित वास्तविकता अनुभव पेश करता है।',
        why: 'यह तकनीक रिमोट वर्क, शिक्षा और मनोरंजन के लिए नई संभावनाएं खोलती है, संभावित रूप से पारंपरिक स्क्रीन को बदल देती है और कंप्यूटर के साथ हमारी बातचीत को बदल देती है।',
        how: 'Unity के साथ AR/VR कौशल बनाना शुरू करें और Vision Pro डेवलपमेंट के लिए SwiftUI सीखें। Apple Developer Program में शामिल हों और स्थानिक कंप्यूटिंग नौकरियों के लिए तैयार होने के लिए ARKit के साथ प्रयोग करें।'
      }
    },
    category: 'AR/VR',
    actionLink: 'https://developer.apple.com/visionos/',
    createdAt: '2024-01-19'
  },
  {
    id: '3',
    title: {
      en: 'Claude 3 Challenges GPT-4 in Code Generation',
      te: 'Claude 3 కోడ్ జెనరేషన్‌లో GPT-4ని సవాలు చేస్తుంది',
      hi: 'Claude 3 कोड जेनरेशन में GPT-4 को चुनौती देता है'
    },
    content: {
      en: {
        what: 'Anthropic\'s Claude 3 achieves 89% accuracy in coding tasks, surpassing GPT-4 in Python debugging and offering better explanation of complex algorithms.',
        why: 'This advancement gives developers more reliable AI coding assistants, reducing development time by 35% and improving code quality through better error detection.',
        how: 'Try Claude 3 on Anthropic\'s console for coding projects. Compare outputs with ChatGPT for your specific use cases and integrate the best-performing AI into your workflow.'
      },
      te: {
        what: 'Anthropic యొక్క Claude 3 కోడింగ్ టాస్క్‌లలో 89% ఖచ్చితత్వాన్ని సాధిస్తుంది, Python డీబగ్గింగ్‌లో GPT-4ను అధిగమిస్తుంది మరియు సంక్లిష్ట అల్గోరిథమ్‌ల మెరుగైన వివరణను అందిస్తుంది.',
        why: 'ఈ పురోగతి డెవలపర్‌లకు మరింత నమ్మకమైన AI కోడింగ్ సహాయకులను అందిస్తుంది, అభివృద్ధి సమయాన్ని 35% తగ్గిస్తుంది మరియు మెరుగైన లోపం గుర్తింపు ద్వారా కోడ్ నాణ్యతను మెరుగుపరుస్తుంది.',
        how: 'కోడింగ్ ప్రాజెక్ట్‌ల కోసం Anthropic కన్సోల్‌లో Claude 3ని ప్రయత్నించండి. మీ నిర్దిష్ట ఉపయోగ కేసుల కోసం ChatGPT తో అవుట్‌పుట్‌లను పోల్చండి మరియు ఉత్తమ పనితీరు గల AIని మీ వర్క్‌ఫ్లోలో విలీనం చేయండి.'
      },
      hi: {
        what: 'Anthropic का Claude 3 कोडिंग कार्यों में 89% सटीकता हासिल करता है, Python डिबगिंग में GPT-4 से आगे निकलता है और जटिल एल्गोरिदम की बेहतर व्याख्या प्रदान करता है।',
        why: 'यह प्रगति डेवलपर्स को अधिक विश्वसनीय AI कोडिंग सहायक देती है, विकास समय को 35% कम करती है और बेहतर त्रुटि का पता लगाने के माध्यम से कोड गुणवत्ता में सुधार करती है।',
        how: 'कोडिंग प्रोजेक्ट्स के लिए Anthropic के कंसोल पर Claude 3 आज़माएं। अपने विशिष्ट उपयोग मामलों के लिए ChatGPT के साथ आउटपुट की तुलना करें और सबसे अच्छा प्रदर्शन करने वाले AI को अपने वर्कफ़्लो में एकीकृत करें।'
      }
    },
    category: 'AI/Development',
    actionLink: 'https://console.anthropic.com/',
    createdAt: '2024-01-18'
  },
  {
    id: '4',
    title: {
      en: 'Quantum Computing Breakthrough in Drug Discovery',
      te: 'డ్రగ్ డిస్కవరీలో క్వాంటం కంప్యూటింగ్ పురోగతి',
      hi: 'दवा खोज में क्वांटम कंप्यूटिंग की सफलता'
    },
    content: {
      en: {
        what: 'Google\'s quantum computer successfully simulated molecular interactions for new cancer drugs, reducing discovery time from 10 years to 6 months.',
        why: 'This could revolutionize pharmaceutical industry, making life-saving drugs accessible faster and cheaper, potentially saving millions of lives globally.',
        how: 'Learn quantum computing basics through IBM Quantum Experience. Take online courses on quantum algorithms and start contributing to open-source quantum projects on GitHub.'
      },
      te: {
        what: 'Google యొక్క క్వాంటం కంప్యూటర్ కొత్త క్యాన్సర్ ఔషధాల కోసం మోలిక్యులర్ ఇంటరాక్షన్‌లను విజయవంతంగా అనుకరించింది, ఆవిష్కరణ సమయాన్ని 10 సంవత్సరాల నుండి 6 నెలలకు తగ్గించింది.',
        why: 'ఇది ఫార్మాస్యూటికల్ పరిశ్రమను విప్లవాత్మకంగా మార్చగలదు, జీవన రక్షక ఔషధాలను వేగంగా మరియు చౌకగా అందుబాటులో ఉంచగలదు, ప్రపంచవ్యాప్తంగా లక్షలాది జీవితాలను రక్షించగలదు.',
        how: 'IBM Quantum Experience ద్వారా క్వాంటం కంప్యూటింగ్ ప్రాథమికాలను నేర్చుకోండి. క్వాంటం అల్గోరిథమ్‌లపై ఆన్‌లైన్ కోర్సులు తీసుకోండి మరియు GitHub లో ఓపెన్ సోర్స్ క్వాంటం ప్రాజెక్ట్‌లకు సహకరించడం ప్రారంభించండి.'
      },
      hi: {
        what: 'Google के क्वांटम कंप्यूटर ने नई कैंसर दवाओं के लिए आणविक अंतर्क्रियाओं का सफलतापूर्वक अनुकरण किया, खोज का समय 10 साल से घटाकर 6 महीने कर दिया।',
        why: 'यह फार्मास्युटिकल उद्योग में क्रांति ला सकता है, जीवन रक्षक दवाओं को तेज़ और सस्ता बना सकता है, संभावित रूप से दुनिया भर में लाखों जीवन बचा सकता है।',
        how: 'IBM Quantum Experience के माध्यम से क्वांटम कंप्यूटिंग की बुनियादी बातें सीखें। क्वांटम एल्गोरिदम पर ऑनलाइन कोर्स लें और GitHub पर ओपन सोर्स क्वांटम प्रोजेक्ट्स में योगदान देना शुरू करें।'
      }
    },
    category: 'Quantum/Healthcare',
    actionLink: 'https://quantum-computing.ibm.com/',
    createdAt: '2024-01-17'
  },
  {
    id: '5',
    title: {
      en: 'Tesla FSD Beta Achieves Level 4 Autonomy',
      te: 'Tesla FSD బీటా లెవల్ 4 స్వయంప్రతిపత్తిని సాధిస్తుంది',
      hi: 'Tesla FSD बीटा स्तर 4 स्वायत्तता हासिल करता है'
    },
    content: {
      en: {
        what: 'Tesla\'s Full Self-Driving beta now operates without human intervention in 95% of urban scenarios, marking a major milestone in autonomous vehicle technology.',
        why: 'This advancement could reduce traffic accidents by 90%, transform transportation logistics, and create new job opportunities in AI safety and monitoring.',
        how: 'Study computer vision and machine learning through fast.ai courses. Learn about autonomous systems and consider specializing in AI safety for the growing autonomous vehicle industry.'
      },
      te: {
        what: 'Tesla యొక్క Full Self-Driving బీటా ఇప్పుడు పట్టణ దృశ్యాలలో 95% మానవ జోక్యం లేకుండా పనిచేస్తుంది, ఇది స్వయంప్రతిపత్త వాహన సాంకేతికతలో ఒక ప్రధాన మైలురాయిని సూచిస్తుంది.',
        why: 'ఈ పురోగతి ట్రాఫిక్ ప్రమాదాలను 90% తగ్గించగలదు, రవాణా లాజిస్టిక్స్‌ను మార్చగలదు మరియు AI భద్రత మరియు పర్యవేక్షణలో కొత్త ఉద్యోగ అవకాశాలను సృష్టించగలదు.',
        how: 'fast.ai కోర్సుల ద్వారా కంప్యూటర్ విజన్ మరియు మెషిన్ లెర్నింగ్ అధ్యయనం చేయండి. స్వయంప్రతిపత్త వ్యవస్థల గురించి తెలుసుకోండి మరియు పెరుగుతున్న స్వయంప్రతిపత్త వాహన పరిశ్రమ కోసం AI భద్రతలో నైపుణ్యం పొందడాన్ని పరిగణించండి.'
      },
      hi: {
        what: 'Tesla का Full Self-Driving बीटा अब शहरी परिदृश्यों में 95% मानवीय हस्तक्षेप के बिना संचालित होता है, जो स्वायत्त वाहन तकनीक में एक प्रमुख मील का पत्थर है।',
        why: 'यह प्रगति यातायात दुर्घटनाओं को 90% कम कर सकती है, परिवहन रसद को बदल सकती है, और AI सुरक्षा और निगरानी में नए रोजगार के अवसर पैदा कर सकती है।',
        how: 'fast.ai कोर्स के माध्यम से कंप्यूटर विजन और मशीन लर्निंग का अध्ययन करें। स्वायत्त प्रणालियों के बारे में जानें और बढ़ते स्वायत्त वाहन उद्योग के लिए AI सुरक्षा में विशेषज्ञता पर विचार करें।'
      }
    },
    category: 'AI/Automotive',
    actionLink: 'https://www.fast.ai/',
    createdAt: '2024-01-16'
  }
];