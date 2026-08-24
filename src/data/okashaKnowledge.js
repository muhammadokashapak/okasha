/**
 * ============================================================================
 * OKASHA NEURAL KNOWLEDGE BASE & SEMANTIC CHUNKS REPOSITORY
 * ============================================================================
 * Comprehensive document & indexed semantic chunks representing Muhammad Okasha's
 * background, education, engineering philosophy, 10 core systems, and technical stack.
 */

export const OKASHA_PROFILE_DOCUMENT = `
# Muhammad Okasha — Executive Profile & Engineering Dossier

## 1. Background & Philosophy
Muhammad Okasha is an AI Solutions Architect, Machine Learning Engineer, and Full-Stack Systems Specialist based in Islamabad, Pakistan (PKT / UTC+5). He holds a Bachelor of Engineering in Computer Systems Engineering from UET Peshawar (Oct 2022 – Present), having previously completed his Intermediate in Pre-Engineering from APSACS Secretariat, Attock with top academic standing.

Muhammad operates at the intersection of deep neural algorithms, on-device edge AI, and high-concurrency distributed software systems. His core philosophy is to build production-grade, zero-compromise systems that translate complex mathematical models into intuitive, real-time products.

## 2. Core Production Systems & Architectures
1. **GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform**:
   Enterprise ChatGPT-Grade AI Cockpit built with Gemini 3.7 Flash, FastAPI, and ChromaDB vector store indexing 5,717 chunks of official GoHighLevel REST API v2, OAuth 2.0, and documentation. Runs FastEmbed ONNX (nomic-embed-text-v1.5) with sub-150ms retrieval latency, Reciprocal Rank Fusion (RRF), clipboard OCR screenshot inspection, voice notes, and real-time Server-Sent Events (SSE) token typewriter streaming.

2. **Sales Voice Co-Pilot & Real-Time RAG**:
   Sub-50ms local sales intelligence system capturing live browser audio from Google Meet and Zoom tabs via WebRTC and WebSockets. Transcribes audio in real time with local OpenAI Whisper STT, uses local Ollama LLMs for psychological client objection classification, and retrieves battlecards in <50ms with whisper audio cues and a floating transparent Zoom HUD.

3. **Offline AI Video & Subtitle Translator (Android)**:
   100% On-Device native Android application built with Jetpack Compose Material 3 and Media3 ExoPlayer. Bundles quantized INT8 OpenAI Whisper with Voice Activity Detection (VAD) and MarianMT / OPUS-MT seq2seq neural translation models running on ONNX Runtime with Room SQLite caching. 0 KB cloud data used.

4. **Apex Digital School Operating System**:
   Next-gen multi-role education ERP unifying 5 user portals (Student, Teacher, Parent, Admin, Finance) with Role-Based Access Control (RBAC), Socratic AI diagnostic tutors, automated quiz generators, live virtual broadcast studios with collaborative whiteboards, dynamic attendance analytics, and cryptographic PDF marksheet/transcript generation.

5. **Clinical Care & Hospital Management ERP**:
   Cross-platform clinical operating system and patient Electronic Health Records (EHR) ledger. Supports doctor scheduling, OPD/IPD ward management, bed occupancy logs, pharmacy point-of-sale inventory tracking with batch expiration warnings, compiled natively for Android and Desktop via Capacitor.

6. **MedPrep Pro & FCPS Medical Licensure Exam Engine**:
   AI-powered medical licensure engine featuring 10,000+ high-yield MBBS and FCPS clinical MCQs with comprehensive anatomical, pharmacological, and clinical rationales. Includes timed exam simulators with negative marking, custom revision filters, and native Windows EXE & Android APK distributions.

7. **Med Connect Telemedicine Network**:
   Decentralized telehealth ecosystem connecting patients with verified medical specialists. Features appointment booking, digital prescription issuance, automated medicine reminders, and an encrypted health records vault.

8. **CHASHM AI Assistive Smart Headset**:
   Hybrid edge-computing vision headset for the visually impaired. Integrates an ESP32-CAM module streaming ultra-low latency MJPEG video over WebSockets to a custom INT8 quantized YOLO model, performing sub-30ms obstacle detection and generating 3D spatial directional Text-to-Speech audio navigation feedback.

9. **Shina NLP Linguistic Deep Learning Engine**:
   Pioneering linguistic preservation and deep learning classification system for the regional endangered Shina language. Built using custom N-gram tokenizers, word embeddings, and hybrid Bidirectional LSTM + 1D-CNN architectures, achieving 94%+ F1 benchmark classification accuracy.

10. **Toxicity Sentinel & NLP Moderation Engine**:
    High-throughput content safety engine processing live social streams. Utilizes TF-IDF vectorization, lemmatization, and multi-label classifiers to detect insults, threats, and hate speech with 98.2% accuracy at 10,000 req/sec inference capacity.

## 3. Experience & Leadership
- **BIT BUILD (Oct 2025 – Feb 2026)**: Artificial Intelligence Intern — Acted as strategic partner to senior leadership, engineered automated reporting pipelines visualizing 20+ global campaigns, delivered actionable C-suite insights, and fueled a 250% surge in search revenue.
- **NAVTTC (Mar 2025 – Jun 2025)**: Deep Learning BootCamp — Hands-on architecture and deployment of end-to-end CNN/LSTM deep learning pipelines, data preprocessing, and model quantization.

## 4. Contact & Availability
- Email: muhammad.okasha2146@gmail.com
- Phone / WhatsApp: +92 3495696659
- Location: Islamabad, Pakistan (PKT UTC+5)
- Open for: AI Solutions Architect, Senior AI/ML Engineer, Full-Stack Systems & Edge AI roles.
`;

export const OKASHA_KNOWLEDGE_CHUNKS = [
  {
    id: "chunk-bio",
    category: "bio",
    title: "Muhammad Okasha — Background & Architectural Philosophy",
    keywords: ["who", "okasha", "muhammad", "about", "bio", "background", "engineer", "philosophy", "location", "islamabad", "uet", "peshawar"],
    summary: "AI Solutions Architect & Machine Learning Engineer based in Islamabad, Pakistan.",
    content: `**Muhammad Okasha** is an **AI Solutions Architect & Machine Learning Engineer** based in Islamabad, Pakistan. 

He holds a **B.E. in Computer Systems Engineering from UET Peshawar**. Muhammad specializes in bridging theoretical AI research with production-grade software engineering — from architecting **enterprise Multimodal RAG platforms with 5,700+ vector chunks** to compiling **INT8 quantized neural models for 100% offline edge devices**.`,
    actionChips: [
      { label: "View Featured Projects", href: "#projects" },
      { label: "Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true }
    ]
  },
  {
    id: "chunk-ghl-rag",
    category: "projects",
    title: "⚡ GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform",
    keywords: ["ghl", "gohighlevel", "rag", "vector", "chromadb", "gemini", "multimodal", "fastembed", "onnx", "chunks", "5717", "tokens", "oauth", "api"],
    summary: "Enterprise ChatGPT-Grade GHL RAG Platform with Gemini 3.7 & ChromaDB (5,717 chunks).",
    content: `**GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform**:
• **Vector Store**: **5,717 chunks** of official GHL REST API v2 & OAuth 2.0 specs indexed in ChromaDB.
• **Embedding Engine**: **FastEmbed ONNX** (\`nomic-embed-text-v1.5\`) with sub-150ms vectorization latency.
• **LLM Core**: **Gemini 3.7 Flash** with multimodal vision (clipboard paste screenshots OCR) and voice notes.
• **Interface**: 1:1 ChatGPT Dark cockpit with Server-Sent Events (SSE) token typewriter streaming.
• **Truthful Solutions**: Delivers custom frontend deliverables, workflow workarounds, and API integrations without generic refusals.`,
    actionChips: [
      { label: "🔬 Deep-Dive GHL RAG", href: "#projects" },
      { label: "GitHub Repo", href: "https://github.com/muhammadokashapak", external: true }
    ]
  },
  {
    id: "chunk-sales-copilot",
    category: "projects",
    title: "🎙️ Sales Voice Co-Pilot & Real-Time RAG",
    keywords: ["sales", "copilot", "voice", "meeting", "zoom", "meet", "webrtc", "whisper", "ollama", "latency", "50ms", "battlecard", "hud", "objection"],
    summary: "Sub-50ms Real-Time Voice Sales Intelligence & Intent Decider.",
    content: `**Sales Voice Co-Pilot & Real-Time RAG**:
• **Live Audio Capture**: Streams audio from Google Meet and Zoom tabs via WebRTC & WebSockets.
• **Speech-to-Text**: Local **OpenAI Whisper STT** with noise suppression and zero cloud latency.
• **Psychological Intent Decider**: Local **Ollama LLM** classifies objections (Budget, Skepticism, Authority).
• **Sub-50ms Retrieval**: Fetches enterprise sales battlecards in **<50ms** from ChromaDB vector store.
• **Floating HUD**: Ultra-compact transparent overlay for screen shares with secret whisper TTS earphone cues.`,
    actionChips: [
      { label: "🔬 Deep-Dive Sales Co-Pilot", href: "#projects" }
    ]
  },
  {
    id: "chunk-video-translator",
    category: "edge_ai",
    title: "🎬 Offline AI Video & Audio Subtitle Translator (Android)",
    keywords: ["translator", "video", "subtitle", "offline", "android", "kotlin", "compose", "whisper", "int8", "marianmt", "seq2seq", "exoplayer", "on-device"],
    summary: "100% On-Device Neural Video Subtitling & Translation Android Application.",
    content: `**Offline AI Video & Subtitle Translator**:
• **100% On-Device AI**: Zero internet, zero cloud APIs, and zero subscription costs.
• **Speech Recognition**: Quantized **INT8 OpenAI Whisper** running on ONNX Runtime with Voice Activity Detection (VAD).
• **Neural Translation**: Autoregressive **MarianMT / OPUS-MT seq2seq** models translating English to Urdu, Spanish, etc.
• **Modern Player**: Built on **Android Media3 / ExoPlayer** with Jetpack Compose Material 3 and Room SQLite caching.`,
    actionChips: [
      { label: "🔬 Deep-Dive Offline Translator", href: "#projects" }
    ]
  },
  {
    id: "chunk-digital-school",
    category: "fullstack",
    title: "🎓 Apex Digital School Operating System",
    keywords: ["school", "apex", "education", "lms", "erp", "socratic", "quiz", "whiteboard", "transcript", "pdf", "portal", "student", "teacher"],
    summary: "5-Portal AI-Powered School Management ERP & Socratic Learning Engine.",
    content: `**Apex Digital School Operating System**:
• **5 Unified Portals**: Student, Teacher, Parent, Admin, and AI Education Engine with strict RBAC.
• **AI Socratic Tutor**: Interactive diagnostic tutors and automated quiz generators.
• **Live Classroom Studio**: Virtual broadcasts with real-time collaborative whiteboard and class chat.
• **Official Marksheets**: Instant cryptographic PDF transcript and marksheet generation.`,
    actionChips: [
      { label: "🔬 Deep-Dive Digital School", href: "#projects" }
    ]
  },
  {
    id: "chunk-hospital-erp",
    category: "healthtech",
    title: "🏥 Clinical Care & Hospital Management ERP",
    keywords: ["hospital", "clinical", "ehr", "medical", "patient", "doctor", "opd", "ipd", "pharmacy", "capacitor", "billing"],
    summary: "Enterprise Hospital Administration, Electronic Health Records & Clinical Care System.",
    content: `**Clinical Care & Hospital Management ERP**:
• **Centralized EHR Ledger**: Sanitized patient medical history, prescriptions, and lab findings.
• **Inpatient & Outpatient**: Real-time OPD/IPD bed allocation, nurse handover logs, and scheduling.
• **Pharmacy POS**: Inventory tracking with batch expiration warnings and automated audits.
• **Multi-Platform**: Native compilation for Android tablets and Windows desktop via Capacitor.`,
    actionChips: [
      { label: "🔬 Deep-Dive Hospital ERP", href: "#projects" }
    ]
  },
  {
    id: "chunk-medprep",
    category: "healthtech",
    title: "🩺 MedPrep Pro & FCPS Medical Licensure Engine",
    keywords: ["medprep", "fcps", "mbbs", "mcq", "medical", "exam", "licensure", "rationale", "anatomy", "physiology", "pathology"],
    summary: "AI-Powered Medical Licensure Exam Platform with 10k+ Clinical MCQs.",
    content: `**MedPrep Pro & FCPS Medical Exam Engine**:
• **10,000+ Question Bank**: High-yield clinical MCQs covering Anatomy, Physiology, Pathology, Surgery, Medicine.
• **Clinical Reasoning**: In-depth pathophysiological explanations and medical reference citations for every option.
• **Timed Simulator**: Real-time examination mode with negative marking and percentile projection.
• **Native Packages**: Standalone Windows .exe installer and Android APK.`,
    actionChips: [
      { label: "🔬 Deep-Dive MedPrep Pro", href: "#projects" }
    ]
  },
  {
    id: "chunk-medconnect",
    category: "healthtech",
    title: "🌐 Med Connect Telemedicine Network",
    keywords: ["medconnect", "telemedicine", "telehealth", "consultation", "prescription", "doctor", "booking", "vault"],
    summary: "Decentralized Telehealth & Doctor-Patient Consultation Network.",
    content: `**Med Connect Telemedicine Network**:
• **Doctor Discovery**: Specialist directory with verified credentials and availability calendar.
• **Digital Prescriptions**: Automated digital prescription dispatch and medicine schedule synchronization.
• **Encrypted Health Vault**: Secure patient diagnostic repository with permissioned physician access.`,
    actionChips: [
      { label: "🔬 Deep-Dive Med Connect", href: "#projects" }
    ]
  },
  {
    id: "chunk-chashm",
    category: "edge_ai",
    title: "👁️ CHASHM AI Assistive Smart Headset",
    keywords: ["chashm", "headset", "visually", "impaired", "esp32", "yolo", "tflite", "opencv", "spatial", "tts", "hardware", "camera"],
    summary: "Hybrid Edge-Computing Vision Headset for Visually Impaired with Spatial 3D Audio.",
    content: `**CHASHM AI Assistive Smart Headset**:
• **Edge Hardware**: Wireless ESP32-CAM module transmitting ultra-low latency MJPEG video over WebSockets.
• **Neural Inference**: Custom **INT8 quantized YOLO** model running sub-30ms obstacle detection.
• **Spatial Guidance**: Generates 3D directional Text-to-Speech audio navigation alerts for users.`,
    actionChips: [
      { label: "🔬 Deep-Dive CHASHM AI", href: "#projects" }
    ]
  },
  {
    id: "chunk-shina-nlp",
    category: "deep_learning",
    title: "📜 Shina NLP Linguistic Deep Learning Engine",
    keywords: ["shina", "nlp", "lstm", "cnn", "corpus", "linguistic", "language", "dialect", "embeddings", "preservation"],
    summary: "Hybrid LSTM/CNN Deep Learning Architecture for Regional Shina Language Preservation.",
    content: `**Shina NLP Linguistic Deep Learning Engine**:
• **Endangered Preservation**: Developed the first digital linguistic corpus and custom tokenizers for Shina language.
• **Hybrid Architecture**: Combines Bidirectional LSTM and 1D-CNN layers for contextual representation.
• **State-of-the-Art Results**: Achieved **94%+ F1 classification benchmark accuracy**.`,
    actionChips: [
      { label: "🔬 Deep-Dive Shina NLP", href: "#projects" }
    ]
  },
  {
    id: "chunk-toxicity-sentinel",
    category: "fullstack",
    title: "🛡️ Toxicity Sentinel & NLP Moderation Engine",
    keywords: ["toxicity", "sentinel", "moderation", "hate", "speech", "nlp", "tfidf", "lemmatization", "throughput", "10k"],
    summary: "High-Throughput Social Media Content Moderation & Hate Speech Detection.",
    content: `**Toxicity Sentinel & NLP Moderation Engine**:
• **High Throughput**: **10,000 requests/second** inference capacity for real-time social streams.
• **NLP Preprocessing**: N-gram TF-IDF vectorization, lemmatization, and slang expansion.
• **Accuracy**: **98.2% detection precision** across insults, threats, and toxic content.`,
    actionChips: [
      { label: "🔬 Deep-Dive Toxicity Sentinel", href: "#projects" }
    ]
  },
  {
    id: "chunk-skills",
    category: "skills",
    title: "🛠️ Technical Mastery & Core Arsenal",
    keywords: ["skills", "tech", "stack", "python", "pytorch", "tensorflow", "fastapi", "react", "chromadb", "ollama", "langchain", "android", "docker", "sql"],
    summary: "Comprehensive matrix of AI, Deep Learning, Vector DBs, and Full-Stack Technologies.",
    content: `**Muhammad Okasha's Technical Arsenal**:
• **Generative AI & LLMs**: Gemini 3.7 Flash, ChromaDB, FastEmbed ONNX, LangChain, LlamaIndex, Ollama, Semantic Hybrid Search, RRF Reranking.
• **Deep Learning & Edge AI**: PyTorch, TensorFlow, OpenAI Whisper (INT8), MarianMT, YOLOv8 / .tflite, OpenCV, ONNX Runtime, ESP32 Embedded AI.
• **Full-Stack & Systems**: FastAPI (Async), React 19/18, Vite, WebSockets, WebRTC, Server-Sent Events (SSE), Android Jetpack Compose, Capacitor, SQLite WAL, PostgreSQL.`,
    actionChips: [
      { label: "View Skills Matrix", href: "#skills" }
    ]
  },
  {
    id: "chunk-experience",
    category: "experience",
    title: "💼 Professional Experience & Milestones",
    keywords: ["experience", "bit", "build", "intern", "navttc", "revenue", "250%", "campaigns", "work", "history"],
    summary: "Track record at BIT BUILD and NAVTTC Deep Learning BootCamp.",
    content: `**Professional Milestones**:
• **BIT BUILD (Oct 2025 – Feb 2026)**: Artificial Intelligence Intern — Partnered with senior leadership, deployed automated reporting pipelines for 20+ global campaigns, delivered C-suite insights that fueled a **250% search revenue surge**.
• **NAVTTC (Mar 2025 – Jun 2025)**: Deep Learning BootCamp — Built and deployed CNN/LSTM neural models, optimized end-to-end pipelines, and mastered model quantization.`,
    actionChips: [
      { label: "View Experience Section", href: "#experience" }
    ]
  },
  {
    id: "chunk-contact",
    category: "contact",
    title: "📫 Contact Channels, Resume & Hiring",
    keywords: ["contact", "email", "phone", "whatsapp", "resume", "cv", "hire", "interview", "call", "reach", "gmail"],
    summary: "Direct communication channels, resume PDF, and collaboration booking.",
    content: `**Direct Contact & Availability**:
• 📧 **Email**: [muhammad.okasha2146@gmail.com](mailto:muhammad.okasha2146@gmail.com)
• 📞 **Phone / WhatsApp**: [+92 3495696659](tel:+923495696659)
• 📍 **Location**: Islamabad, Pakistan (PKT UTC+5)
• 📄 **Resume PDF**: Ready for direct download.
• 💼 **Status**: Available for AI Solutions Architect & Senior Engineering roles globally.`,
    actionChips: [
      { label: "Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "Go to Contact Form", href: "#contact" }
    ]
  }
];

/**
 * Semantic / Keyword Vector Retrieval Engine
 * Scores every chunk based on token matches, exact phrases, category affinity, and weights.
 */
export function queryKnowledgeBase(userQuery) {
  if (!userQuery || !userQuery.trim()) {
    return {
      chunk: OKASHA_KNOWLEDGE_CHUNKS[0],
      score: 1.0,
      answer: OKASHA_KNOWLEDGE_CHUNKS[0].content,
      actionChips: OKASHA_KNOWLEDGE_CHUNKS[0].actionChips
    };
  }

  const normalized = userQuery.toLowerCase().replace(/[^\w\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 1);

  let bestChunk = null;
  let highestScore = -1;

  for (const chunk of OKASHA_KNOWLEDGE_CHUNKS) {
    let score = 0;

    // Check exact title phrase match
    if (normalized.includes(chunk.title.toLowerCase())) {
      score += 15;
    }

    // Check keywords matches
    for (const kw of chunk.keywords) {
      if (normalized.includes(kw)) {
        score += 3;
      }
      for (const t of tokens) {
        if (kw === t) score += 4;
        else if (kw.includes(t) || t.includes(kw)) score += 1.5;
      }
    }

    // Check category match
    if (tokens.includes(chunk.category)) {
      score += 5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestChunk = chunk;
    }
  }

  // If score is sufficient, return best matched chunk
  if (bestChunk && highestScore >= 3) {
    return {
      chunk: bestChunk,
      score: highestScore,
      answer: bestChunk.content,
      actionChips: bestChunk.actionChips
    };
  }

  // Fallback intelligent summary
  return {
    chunk: null,
    score: 0,
    answer: `Muhammad Okasha is an **AI Solutions Architect & Machine Learning Engineer** (UET Peshawar) who has engineered 10+ production systems spanning **Enterprise Multimodal RAG (5,717 vector chunks)**, **100% On-Device Edge AI (Whisper INT8, MarianMT)**, **Assistive Computer Vision**, and **Full-Stack ERP Platforms**.

You can ask me specifically about:
• **"GHL RAG"** — GoHighLevel Enterprise Gemini 3.7 RAG Platform
• **"Sales Co-Pilot"** — Real-Time Voice AI for Zoom & Meet
• **"Offline Translator"** — On-Device Whisper INT8 Android App
• **"Skills & Stack"** — Complete AI & Full-Stack Technologies
• **"Resume / Contact"** — Direct credentials & contact info`,
    actionChips: [
      { label: "View All 10 Projects", href: "#projects" },
      { label: "Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "Contact Muhammad", href: "#contact" }
    ]
  };
}
