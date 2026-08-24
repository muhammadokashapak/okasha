/**
 * ============================================================================
 * OKASHA NEURAL KNOWLEDGE BASE & CONVERSATIONAL INTELLIGENCE ROUTER
 * ============================================================================
 * Comprehensive document, deeply detailed executive semantic chunks,
 * and conversational personal assistant intelligence.
 */

export const OKASHA_PROFILE_DOCUMENT = `
# Muhammad Okasha — Executive Profile & Engineering Dossier

## 1. Background & Philosophy
Muhammad Okasha is an AI Solutions Architect, Machine Learning Engineer, and Full-Stack Systems Specialist based in Islamabad, Pakistan (PKT / UTC+5). He holds a Bachelor of Engineering in Computer Systems Engineering from UET Peshawar (Oct 2022 – Present), having previously completed his Intermediate in Pre-Engineering from APSACS Secretariat, Attock with top academic standing.

Muhammad operates at the intersection of deep neural algorithms, on-device edge AI, and high-concurrency distributed software systems. His core philosophy is to build production-grade, zero-compromise systems that translate complex mathematical models into intuitive, real-time products.

## 2. Core Production Systems & Architectures
1. GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform:
   Enterprise ChatGPT-Grade AI Cockpit built with Gemini 3.7 Flash, FastAPI, and ChromaDB vector store indexing 5,717 chunks of official GoHighLevel REST API v2, OAuth 2.0, and documentation. Runs FastEmbed ONNX (nomic-embed-text-v1.5) with sub-150ms retrieval latency, Reciprocal Rank Fusion (RRF), clipboard OCR screenshot inspection, voice notes, and real-time Server-Sent Events (SSE) token typewriter streaming.

2. Sales Voice Co-Pilot & Real-Time RAG:
   Sub-50ms local sales intelligence system capturing live browser audio from Google Meet and Zoom tabs via WebRTC and WebSockets. Transcribes audio in real time with local OpenAI Whisper STT, uses local Ollama LLMs for psychological client objection classification, and retrieves battlecards in <50ms with whisper audio cues and a floating transparent Zoom HUD.

3. Offline AI Video & Subtitle Translator (Android):
   100% On-Device native Android application built with Jetpack Compose Material 3 and Media3 ExoPlayer. Bundles quantized INT8 OpenAI Whisper with Voice Activity Detection (VAD) and MarianMT / OPUS-MT seq2seq neural translation models running on ONNX Runtime with Room SQLite caching. 0 KB cloud data used.

4. Apex Digital School Operating System:
   Next-gen multi-role education ERP unifying 5 user portals (Student, Teacher, Parent, Admin, Finance) with Role-Based Access Control (RBAC), Socratic AI diagnostic tutors, automated quiz generators, live virtual broadcast studios with collaborative whiteboards, dynamic attendance analytics, and cryptographic PDF marksheet/transcript generation.

5. Clinical Care & Hospital Management ERP:
   Cross-platform clinical operating system and patient Electronic Health Records (EHR) ledger. Supports doctor scheduling, OPD/IPD ward management, bed occupancy logs, pharmacy point-of-sale inventory tracking with batch expiration warnings, compiled natively for Android and Desktop via Capacitor.

6. MedPrep Pro & FCPS Medical Licensure Exam Engine:
   AI-powered medical licensure engine featuring 10,000+ high-yield MBBS and FCPS clinical MCQs with comprehensive anatomical, pharmacological, and clinical rationales. Includes timed exam simulators with negative marking, custom revision filters, and native Windows EXE & Android APK distributions.

7. Med Connect Telemedicine Network:
   Decentralized telehealth ecosystem connecting patients with verified medical specialists. Features appointment booking, digital prescription issuance, automated medicine reminders, and an encrypted health records vault.

8. CHASHM AI Assistive Smart Headset:
   Hybrid edge-computing vision headset for the visually impaired. Integrates an ESP32-CAM module streaming ultra-low latency MJPEG video over WebSockets to a custom INT8 quantized YOLO model, performing sub-30ms obstacle detection and generating 3D spatial directional Text-to-Speech audio navigation feedback.

9. Shina NLP Linguistic Deep Learning Engine:
   Pioneering linguistic preservation and deep learning classification system for the regional endangered Shina language. Built using custom N-gram tokenizers, word embeddings, and hybrid Bidirectional LSTM + 1D-CNN architectures, achieving 94%+ F1 benchmark classification accuracy.

10. Toxicity Sentinel & NLP Moderation Engine:
    High-throughput content safety engine processing live social streams. Utilizes TF-IDF vectorization, lemmatization, and multi-label classifiers to detect insults, threats, and hate speech with 98.2% accuracy at 10,000 req/sec inference capacity.

## 3. Experience & Leadership
- BIT BUILD (Oct 2025 – Feb 2026): Artificial Intelligence Intern — Acted as strategic partner to senior leadership, engineered automated reporting pipelines visualizing 20+ global campaigns, delivered actionable C-suite insights, and fueled a 250% surge in search revenue.
- NAVTTC (Mar 2025 – Jun 2025): Deep Learning BootCamp — Hands-on architecture and deployment of end-to-end CNN/LSTM deep learning pipelines, data preprocessing, and model quantization.

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
    title: "Muhammad Okasha — Executive Biography & Architectural Vision",
    keywords: ["who", "okasha", "muhammad", "about", "bio", "background", "engineer", "philosophy", "location", "islamabad", "uet", "peshawar", "kon", "kya", "profile", "overview"],
    summary: "Comprehensive executive profile of AI Solutions Architect Muhammad Okasha.",
    content: `Muhammad Okasha is an AI Solutions Architect, Machine Learning Engineer, and Systems Developer based in Islamabad, Pakistan (PKT / UTC+5).

Academic Foundation:
He is pursuing his Bachelor of Engineering in Computer Systems Engineering from UET Peshawar (Oct 2022 – Present), building upon an exceptional academic background in Pre-Engineering from APSACS Secretariat, Attock.

Core Architectural Focus:
Muhammad specializes in bridging advanced theoretical machine learning with production-grade distributed software. His engineering portfolio encompasses:
• Enterprise Multimodal RAG Systems: Architected engines indexing 5,700+ vector chunks with sub-150ms retrieval and zero hallucination fallback.
• 100% On-Device Edge Intelligence: Deployed quantized INT8 Whisper STT and MarianMT seq2seq models running entirely offline on mobile hardware without internet.
• Real-Time Voice Intelligence: Built sub-50ms live WebRTC meeting co-pilots for Zoom and Google Meet with psychological objection intent classification.
• Mission-Critical Full-Stack Platforms: Delivered multi-portal enterprise ERPs for education, healthcare, telemedicine, and medical licensure.

Track Record & Philosophy:
Having shipped 10+ production systems and driven a 250% search revenue surge during his AI engineering tenure at Bit Build, Muhammad builds zero-compromise software that combines mathematical rigor with intuitive human experience.`,
    actionChips: [
      { label: "⚡ View Featured Systems", href: "#projects" },
      { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "📫 Contact Muhammad", href: "#contact" }
    ]
  },
  {
    id: "chunk-ghl-rag",
    category: "projects",
    title: "⚡ GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform",
    keywords: ["ghl", "gohighlevel", "rag", "vector", "chromadb", "gemini", "multimodal", "fastembed", "onnx", "chunks", "5717", "tokens", "oauth", "api"],
    summary: "Deep architectural overview of the GHL Enterprise Multimodal RAG platform.",
    content: `GoHighLevel (GHL) Enterprise RAG & Multimodal AI Platform

System Overview:
Engineered an enterprise ChatGPT-Grade AI Cockpit designed specifically for GoHighLevel developers, agency owners, and SaaS architects. It eliminates generic LLM hallucinations by anchoring every response in a verified vector knowledge store.

Key Technical Specifications:
• Vector Store & Indexing: 5,717 semantic chunks indexing the entire official GoHighLevel REST API v2, OAuth 2.0 specs, webhooks, and custom script repositories in ChromaDB with SQLite WAL mode.
• Embedding Pipeline: Utilizes nomic-embed-text-v1.5 running on FastEmbed ONNX Runtime, delivering sub-150ms embedding generation without external API dependencies.
• Hybrid Retrieval Engine: Employs Reciprocal Rank Fusion (RRF) combining dense semantic cosine similarity with exact entity keyword matching.
• Multimodal Ingestion: Supports direct clipboard screenshot pasting for UI/workflow error OCR inspection, voice note waveform transcription, and document uploads.
• Real-Time Output: Powered by Gemini 3.7 Flash with Server-Sent Events (SSE) word streaming and live Markdown rendering.

Production Impact:
Provides truthful, working code snippets, OAuth token exchange routines, and workflow workarounds that standard AI models fail to generate.`,
    actionChips: [
      { label: "🔬 Deep-Dive GHL RAG", href: "#projects" },
      { label: "GitHub Profile", href: "https://github.com/muhammadokashapak", external: true }
    ]
  },
  {
    id: "chunk-sales-copilot",
    category: "projects",
    title: "🎙️ Sales Voice Co-Pilot & Real-Time RAG",
    keywords: ["sales", "copilot", "voice", "meeting", "zoom", "meet", "webrtc", "whisper", "ollama", "latency", "50ms", "battlecard", "hud", "objection"],
    summary: "Deep architectural overview of the real-time sub-50ms Sales Voice Co-Pilot.",
    content: `Sales Voice Co-Pilot & Real-Time RAG

System Overview:
A real-time voice intelligence assistant designed to support sales representatives during live client negotiations on Zoom and Google Meet by delivering instant, psychology-backed objection battlecards.

Key Technical Specifications:
• Live Audio Stream Ingestion: Captures live speaker audio directly from browser tabs and local microphones using WebRTC and WebSockets with ambient noise suppression.
• Local Speech-to-Text: Runs on-device OpenAI Whisper STT with Voice Activity Detection (VAD) to achieve sub-second audio transcription.
• Psychological Intent Decider: Uses a localized Ollama LLM to classify buyer hesitation into actionable categories (Budget Constraint, Authority Doubt, Competitor Comparison, Skepticism).
• Sub-50ms Vector Retrieval: Queries ChromaDB vector indexes in under 50 milliseconds to retrieve proven closing pitches and tactical Do's/Don'ts.
• Stealth UI & Audio Cues: Features an ultra-compact, transparent floating Zoom HUD overlay and secret whisper Text-to-Speech (TTS) cues fed directly into the rep's earpiece.

Production Impact:
Empowers sales professionals to overcome complex objections on the fly with zero awkward pauses and zero screen-share visibility.`,
    actionChips: [
      { label: "🔬 Deep-Dive Sales Co-Pilot", href: "#projects" }
    ]
  },
  {
    id: "chunk-video-translator",
    category: "edge_ai",
    title: "🎬 Offline AI Video & Audio Subtitle Translator (Android)",
    keywords: ["translator", "translate", "video", "subtitle", "offline", "android", "kotlin", "compose", "whisper", "int8", "marianmt", "seq2seq", "exoplayer", "on-device"],
    summary: "Deep architectural overview of the 100% On-Device Neural Video Translator Android app.",
    content: `Offline AI Video & Subtitle Translator (Native Android)

System Overview:
A native Android media application that transcribes and translates video and audio files into synchronized multilingual subtitles completely on-device without internet access, cloud APIs, or recurring subscriptions.

Key Technical Specifications:
• 100% On-Device Neural Pipeline: Integrates quantized INT8 OpenAI Whisper speech recognition models compiled for ONNX Runtime on mobile ARM processors.
• Neural Machine Translation: Employs autoregressive MarianMT and OPUS-MT seq2seq transformer models to translate recognized speech into Urdu, Spanish, French, and regional dialects.
• Modern Media Stack: Built using Android Jetpack Compose Material 3 and Google Media3 ExoPlayer with binary-search timestamp synchronization for sub-frame subtitle alignment.
• Intelligent Local Cache: Uses Room SQLite persistence to cache generated subtitles permanently, ensuring media is transcribed exactly once.
• Hardware Optimization: Runs Voice Activity Detection (VAD) to skip silent frames, drastically reducing battery consumption and thermal load.

Production Impact:
Guarantees 100% user privacy and zero data leakage, enabling seamless video translation in remote, air-gapped, or low-connectivity environments.`,
    actionChips: [
      { label: "🔬 Deep-Dive Offline Translator", href: "#projects" }
    ]
  },
  {
    id: "chunk-digital-school",
    category: "fullstack",
    title: "🎓 Apex Digital School Operating System",
    keywords: ["school", "apex", "education", "lms", "erp", "socratic", "quiz", "whiteboard", "transcript", "pdf", "portal", "student", "teacher"],
    summary: "Deep architectural overview of the Apex Digital School ERP & Socratic AI engine.",
    content: `Apex Digital School Operating System

System Overview:
A unified next-generation education operating system and ERP that digitizes academic management across 5 specialized role-based portals while embedding adaptive Socratic AI diagnostic tutors.

Key Technical Specifications:
• 5 Role-Based Portals: Tailored environments for Students, Teachers, Parents, Administrators, and Finance Controllers protected by strict Role-Based Access Control (RBAC).
• Socratic AI Tutor: Interactive diagnostic tutor that guides students through problem-solving steps, awards XP streaks, and automatically synthesizes topic-specific quizzes.
• Live Virtual Broadcast Studio: Integrated WebRTC classroom studio featuring real-time collaborative whiteboards, screen sharing, and interactive class discussions.
• Automated Document Engine: Generates official cryptographic PDF marksheet transcripts, report cards, and student diagnostic dossiers with automated grade calculations.
• 360 Parent Dashboard: Real-time fee ledger tracking, automated payment receipts, and bus route status logs.

Production Impact:
Streamlines school administrative overhead by over 70% while boosting student engagement through gamified, AI-assisted learning pathways.`,
    actionChips: [
      { label: "🔬 Deep-Dive Digital School", href: "#projects" }
    ]
  },
  {
    id: "chunk-hospital-erp",
    category: "healthtech",
    title: "🏥 Clinical Care & Hospital Management ERP",
    keywords: ["hospital", "clinical", "ehr", "medical", "patient", "doctor", "opd", "ipd", "pharmacy", "capacitor", "billing"],
    summary: "Deep architectural overview of the Clinical Care Hospital ERP & EHR Suite.",
    content: `Clinical Care & Hospital Management ERP

System Overview:
An enterprise hospital administration and clinical management suite engineered for high-throughput healthcare facilities, electronic health records (EHR), and inpatient/outpatient workflows.

Key Technical Specifications:
• Centralized Patient EHR: Sanitized electronic health records ledger tracking patient diagnostics, medical histories, vital trends, and laboratory findings.
• Ward & Bed Management: Real-time visual OPD/IPD ward allocation, bed occupancy monitoring, doctor shift scheduling, and nurse handover logging.
• Pharmacy POS & Inventory: Real-time pharmaceutical point-of-sale inventory engine with automated low-stock triggers, batch expiration alerts, and supplier reordering.
• Cross-Platform Compilation: Architected with React and FastAPI, compiled into native Android tablet APKs and Windows desktop applications via Capacitor.
• Role-Based Security: Strict compliance-ready access controls separating doctors, triage nurses, pharmacists, and billing administrators.

Production Impact:
Eliminates paper records, prevents medication dispensing errors, and speeds up inpatient admission and discharge processing across hospital departments.`,
    actionChips: [
      { label: "🔬 Deep-Dive Hospital ERP", href: "#projects" }
    ]
  },
  {
    id: "chunk-medprep",
    category: "healthtech",
    title: "🩺 MedPrep Pro & FCPS Medical Licensure Engine",
    keywords: ["medprep", "fcps", "mbbs", "mcq", "medical", "exam", "licensure", "rationale", "anatomy", "physiology", "pathology"],
    summary: "Deep architectural overview of the MedPrep Pro FCPS examination platform.",
    content: `MedPrep Pro & FCPS Medical Licensure Engine

System Overview:
A specialized AI-powered medical licensure and post-graduate examination platform built for MBBS students, FCPS candidates, and clinical practitioners.

Key Technical Specifications:
• 10,000+ High-Yield MCQ Bank: Curated clinical questions covering Anatomy, Physiology, Pathology, Pharmacology, Forensic Medicine, Surgery, and Internal Medicine.
• In-Depth Clinical Rationales: Provides detailed pathophysiological reasoning, anatomical diagrams, and authoritative medical textbook references for both correct and distractor options.
• Timed Exam Simulator: Configurable examination modes featuring official negative marking rules, real-time countdown timers, and projected percentile rankings.
• Spaced-Repetition Learning: Algorithms track user mistake patterns and resurface weak clinical topics at optimal intervals.
• Offline Standalone Distributions: Packaged as standalone Windows executable installers (.exe) via PyInstaller and native Android APKs.

Production Impact:
Enables medical aspirants to prepare for high-stakes licensure exams anywhere with comprehensive clinical reasoning and zero internet dependency.`,
    actionChips: [
      { label: "🔬 Deep-Dive MedPrep Pro", href: "#projects" }
    ]
  },
  {
    id: "chunk-medconnect",
    category: "healthtech",
    title: "🌐 Med Connect Telemedicine Network",
    keywords: ["medconnect", "telemedicine", "telehealth", "consultation", "prescription", "doctor", "booking", "vault"],
    summary: "Deep architectural overview of the Med Connect Telemedicine consultation network.",
    content: `Med Connect Telemedicine Network

System Overview:
A modern telehealth collaboration network designed to bridge patients and licensed physicians through encrypted digital consultations, automated prescription dispatch, and health vaults.

Key Technical Specifications:
• Specialist Discovery Directory: Search and filter verified medical specialists by clinical discipline, credentials, consultation fees, and patient ratings.
• Real-Time Appointment Engine: Live calendar scheduling with instant slot reservation and WebSockets reminder notifications.
• Digital Prescription Dispatch: Structured electronic prescription generation with automated dosage schedules and pharmacy fulfillment sync.
• Encrypted Health Vault: Secure cloud repository where patients upload diagnostic lab reports with time-limited, permissioned doctor access.

Production Impact:
Removes geographic barriers to specialized healthcare, allowing patients in remote regions to access top-tier clinical consultations seamlessly.`,
    actionChips: [
      { label: "🔬 Deep-Dive Med Connect", href: "#projects" }
    ]
  },
  {
    id: "chunk-chashm",
    category: "edge_ai",
    title: "👁️ CHASHM AI Assistive Smart Headset",
    keywords: ["chashm", "headset", "visually", "impaired", "blind", "esp32", "yolo", "tflite", "opencv", "spatial", "tts", "hardware", "camera"],
    summary: "Deep architectural overview of the CHASHM AI Assistive Edge Computer Vision Headset.",
    content: `CHASHM AI Assistive Smart Headset

System Overview:
An edge-AI hardware headset prototype engineered to restore spatial independence for visually impaired individuals through real-time computer vision and 3D directional audio navigation.

Key Technical Specifications:
• Wireless Edge Video Capture: ESP32-CAM module mounted on ergonomic eyewear transmits ultra-low latency MJPEG video over local WebSockets.
• Quantized Neural Inference: Custom INT8 quantized YOLO model (.tflite) running on a local FastAPI processing server with sub-30ms frame latency.
• Spatial Depth Estimation: Computer vision algorithms calculate obstacle proximity, trajectory, and potential collision hazards in real time.
• 3D Directional Audio Guidance: Generates spatial Text-to-Speech (TTS) audio cues (e.g., 'Step down ahead, 2 meters left') played directly through directional bone-conduction audio channels.
• Web Telemetry Dashboard: Real-time browser monitor with bounding box visualizer for clinical caretakers.

Production Impact:
Provides intuitive, hands-free navigation support for blind individuals with rapid response times and edge-grade reliability.`,
    actionChips: [
      { label: "🔬 Deep-Dive CHASHM AI", href: "#projects" }
    ]
  },
  {
    id: "chunk-shina-nlp",
    category: "deep_learning",
    title: "📜 Shina NLP Linguistic Deep Learning Engine",
    keywords: ["shina", "nlp", "lstm", "cnn", "corpus", "linguistic", "language", "dialect", "embeddings", "preservation"],
    summary: "Deep architectural overview of the Shina NLP Deep Learning preservation engine.",
    content: `Shina NLP Linguistic Deep Learning Engine

System Overview:
A pioneering natural language processing and deep learning initiative designed to preserve, digitize, and classify the endangered regional Shina language spoken in Northern Pakistan.

Key Technical Specifications:
• Indigenous Corpus Architecture: Built the first standardized digital linguistic text corpus for the Shina language with morphological normalization rules.
• Custom Word Embeddings: Trained dense domain-specific vector embedding matrices capturing regional phonetic and semantic dialectical variations.
• Hybrid Neural Architecture: Designed a hybrid Bidirectional LSTM and 1D-CNN deep learning network for rich contextual phrase representation.
• Benchmark Results: Achieved state-of-the-art 94%+ F1 classification benchmark score across dialect identification and sentiment analysis tasks.

Production Impact:
Establishes a permanent digital computational baseline for an under-resourced indigenous language, opening doors for automated translation and voice interfaces.`,
    actionChips: [
      { label: "🔬 Deep-Dive Shina NLP", href: "#projects" }
    ]
  },
  {
    id: "chunk-toxicity-sentinel",
    category: "fullstack",
    title: "🛡️ Toxicity Sentinel & NLP Moderation Engine",
    keywords: ["toxicity", "sentinel", "moderation", "hate", "speech", "nlp", "tfidf", "lemmatization", "throughput", "10k"],
    summary: "Deep architectural overview of the Toxicity Sentinel Content Safety Engine.",
    content: `Toxicity Sentinel & NLP Moderation Engine

System Overview:
A high-throughput text moderation and digital safety engine engineered to process live social media streams and detect toxic content, hate speech, and harassment in real time.

Key Technical Specifications:
• High-Capacity Gateway: Async FastAPI microservice capable of processing over 10,000 inference requests per second with sub-5ms latency.
• Rigorous Preprocessing: Advanced text normalization pipeline incorporating regex slang expansion, lemmatization, and customized stop-word tuning.
• Multi-Label Classifier: N-gram TF-IDF vectorization paired with optimized ensemble classifiers categorizing text across Toxic, Severe Toxic, Insult, Threat, and Identity Hate.
• Precision Accuracy: Achieves 98.2% detection precision with an ultra-low false-positive rate.
• Interactive Web Playground: Live testing console for real-time safety confidence score evaluation.

Production Impact:
Serves as an automated, scalable moderation firewall for community platforms, social feeds, and live chat applications.`,
    actionChips: [
      { label: "🔬 Deep-Dive Toxicity Sentinel", href: "#projects" }
    ]
  },
  {
    id: "chunk-skills",
    category: "skills",
    title: "🛠️ Technical Mastery & Core Arsenal",
    keywords: ["skills", "tech", "stack", "python", "pytorch", "tensorflow", "fastapi", "react", "chromadb", "ollama", "langchain", "android", "docker", "sql", "tools", "languages", "arsenal"],
    summary: "Detailed overview of Muhammad Okasha's technical competencies and tool stack.",
    content: `Muhammad Okasha's Technical Mastery & Tool Arsenal

Generative AI & RAG Architecture:
• Large Language Models: Gemini 3.7 Flash, Llama 3, Mistral, Ollama on-device LLMs.
• Vector Databases & Embeddings: ChromaDB, FastEmbed ONNX (nomic-embed-text-v1.5), Reciprocal Rank Fusion (RRF), Hybrid Dense/Sparse Search.
• AI Frameworks: LangChain, LlamaIndex, HuggingFace Transformers, Prompt Engineering & Guardrails.

Deep Learning & Edge Computer Vision:
• Neural Frameworks: PyTorch, TensorFlow, Keras, ONNX Runtime.
• Speech & Vision Models: OpenAI Whisper (INT8 quantized), MarianMT Seq2Seq, YOLOv8, YOLO .tflite, OpenCV.
• Edge & Embedded AI: Android Jetpack Compose ONNX execution, ESP32-CAM embedded vision, Media3 ExoPlayer.

Full-Stack & Systems Architecture:
• Backend Engineering: FastAPI (Async/Await), Node.js, Express, WebSockets, WebRTC, Server-Sent Events (SSE), RESTful APIs.
• Frontend & Mobile: React 19/18, Vite, Three.js, TailwindCSS, Android Kotlin, Capacitor Cross-Platform.
• Databases & Storage: SQLite with WAL mode, PostgreSQL, Redis Caching, Room SQLite.
• DevOps & Tooling: Git, Docker, PyInstaller Desktop Packaging, Linux, Postman.`,
    actionChips: [
      { label: "View Skills Matrix", href: "#skills" },
      { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true }
    ]
  },
  {
    id: "chunk-experience",
    category: "experience",
    title: "💼 Professional Experience & Milestones",
    keywords: ["experience", "bit", "build", "intern", "navttc", "revenue", "250%", "campaigns", "work", "history", "job", "career"],
    summary: "Detailed work history and quantifiable business impact.",
    content: `Professional Experience & Career Milestones

1. BIT BUILD (Oct 2025 – Feb 2026) | Artificial Intelligence Intern
• Strategic Partnership: Acted as a key technical advisor to senior leadership, designing AI pipelines to streamline cross-functional reporting.
• Analytics & Visualization: Built automated reporting dashboards that synthesized metrics across 20+ global client marketing campaigns.
• Revenue Growth Impact: Delivered actionable C-suite insights and AI-guided optimizations that fueled a 250% surge in organic search revenue.
• Enterprise Standards: Spearheaded prompt engineering best practices and automated internal workflows.

2. NAVTTC (Mar 2025 – Jun 2025) | Deep Learning BootCamp Specialist
• Deep Learning Architecture: Mastered hands-on development and deployment of Convolutional Neural Networks (CNNs) and Recurrent/LSTM networks.
• Data Preprocessing & Quantization: Executed rigorous dataset normalization, feature extraction, and post-training quantization for edge deployment.
• Applied NLP & Vision: Completed real-world capstone projects across speech synthesis, computer vision classification, and multilingual NLP.`,
    actionChips: [
      { label: "View Experience Section", href: "#experience" },
      { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true }
    ]
  },
  {
    id: "chunk-contact",
    category: "contact",
    title: "📫 Contact Channels, Resume & Hiring Details",
    keywords: ["contact", "email", "phone", "whatsapp", "resume", "cv", "hire", "interview", "call", "reach", "gmail", "number", "kahan", "rabta"],
    summary: "Official contact coordinates, resume PDF download, and hiring status.",
    content: `Direct Contact Channels & Collaboration Details

Muhammad Okasha is actively open for high-impact roles including AI Solutions Architect, Senior AI/ML Engineer, and Full-Stack Systems Lead (Global Remote and On-Site).

Official Communication Coordinates:
• Primary Email: muhammad.okasha2146@gmail.com
• Phone / WhatsApp: +92 3495696659
• Geographic Base: Islamabad, Pakistan (PKT / UTC+5)
• GitHub: https://github.com/muhammadokashapak
• LinkedIn: https://linkedin.com/in/muhammad-okasha23

Curriculum Vitae:
His comprehensive, up-to-date Resume PDF containing full project metrics, academic verifications, and technical references is ready for instant download below.`,
    actionChips: [
      { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "📫 Go to Contact Form", href: "#contact" }
    ]
  }
];

/**
 * High-Precision Conversational & Semantic Query Router (Detailed Executive Responses)
 */
export function queryKnowledgeBase(userQuery) {
  if (!userQuery || !userQuery.trim()) {
    return {
      chunk: null,
      source: "Okasha Neural Engine",
      answer: "Hello! How can I assist you today? You can ask me about Muhammad's projects, RAG architecture, or get his resume.",
      actionChips: [
        { label: "⚡ Explore Projects", href: "#projects" },
        { label: "📄 Download Resume", href: "/Muhammad_Okasha_Resume.pdf", download: true }
      ]
    };
  }

  const raw = userQuery.trim();
  const lower = raw.toLowerCase();
  const cleanTokens = lower.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length > 0);

  // 1. GREETINGS & INTRODUCTIONS (English & Urdu / Roman Urdu)
  const greetingWords = ['hi', 'hello', 'hey', 'salam', 'assalam', 'assalamu', 'aoa', 'hola', 'sup', 'yo', 'heya', 'good morning', 'good evening', 'good afternoon'];
  if (greetingWords.some(g => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + '!'))) {
    return {
      chunk: null,
      source: "Conversational Greeting Engine",
      answer: `Hello there! 👋 Welcome to Muhammad Okasha's Executive Portfolio.

I am Okasha AI, his personal knowledge assistant. I have full indexing over his 10 production-grade AI systems, edge neural architectures, deep learning models, and full-stack applications.

How may I assist you today? You can ask me for in-depth technical breakdowns of any project, explore his technical stack, or download his resume:`,
      actionChips: [
        { label: "⚡ GoHighLevel RAG (5.7k Chunks)", prompt: "Tell me about GHL RAG architecture" },
        { label: "🎙️ Sales Voice Co-Pilot", prompt: "How does Sales Voice Co-Pilot work?" },
        { label: "🎬 100% Offline AI Translator", prompt: "Explain Offline Video Translator Android App" },
        { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true }
      ]
    };
  }

  // 2. WELL-BEING & SMALL TALK
  if (['how are you', 'how r u', 'kese ho', 'kaise ho', 'kia haal', 'kya haal', 'kese hain', 'kaise hain', "what's up", 'wassup'].some(p => lower.includes(p))) {
    return {
      chunk: null,
      source: "Conversational Assistant",
      answer: `I am running in top condition on high-precision neural embeddings with zero latency! 🚀

I'm ready to walk you through Muhammad Okasha's architectural designs, production AI systems, or career highlights. Which area would you like to explore first?`,
      actionChips: [
        { label: "⚡ View 10 Featured Systems", href: "#projects" },
        { label: "🛠️ Check Technical Arsenal", href: "#skills" },
        { label: "📫 Get in Touch", href: "#contact" }
      ]
    };
  }

  // 3. IDENTITY / WHO ARE YOU
  if (['who are you', 'who r u', 'what are you', 'who made you', 'who created you', 'tum kon ho', 'kon ho', 'kya ho', 'ap kon ho'].some(p => lower.includes(p))) {
    return {
      chunk: null,
      source: "Assistant Identity",
      answer: `I am Okasha AI, a dedicated executive portfolio assistant designed and built by Muhammad Okasha.

I am engineered to provide technical walkthroughs and architectural insights into his:
• Enterprise Multimodal RAG Platforms (5,717 vector chunks indexed in ChromaDB)
• 100% On-Device Neural Edge Applications (Whisper INT8 and MarianMT on Android)
• Sub-50ms Real-Time Voice Intelligence Engines for Zoom/Meet
• Full-Stack Clinical ERPs, Digital School Operating Systems, and Telemedicine Networks

Feel free to ask me any technical or career question!`,
      actionChips: [
        { label: "⚡ Explore Projects", href: "#projects" },
        { label: "📄 View Resume", href: "/Muhammad_Okasha_Resume.pdf", download: true }
      ]
    };
  }

  // 4. GRATITUDE & THANKS
  if (['thanks', 'thank you', 'thx', 'shukriya', 'jazakallah', 'great job', 'awesome', 'nice', 'bohat shukriya', 'good'].some(p => lower === p || lower.includes(p))) {
    return {
      chunk: null,
      source: "Conversational Assistant",
      answer: `You are very welcome! 😊 It is a true pleasure presenting Muhammad's engineering accomplishments.

If you have additional questions regarding system architectures, API implementations, or wish to connect with Muhammad directly for collaboration, please let me know!`,
      actionChips: [
        { label: "📫 Contact Muhammad", href: "#contact" },
        { label: "⚡ Explore Projects", href: "#projects" }
      ]
    };
  }

  // 5. FAREWELL
  if (['bye', 'goodbye', 'see you', 'allah hafiz', 'tata', 'take care'].some(p => lower.includes(p))) {
    return {
      chunk: null,
      source: "Conversational Assistant",
      answer: `Goodbye! 👋 Thank you for taking the time to inspect Muhammad Okasha's portfolio.

Have a wonderful day ahead, and feel free to connect with Muhammad on LinkedIn or reach out via email anytime!`,
      actionChips: [
        { label: "LinkedIn Profile", href: "https://linkedin.com/in/muhammad-okasha23", external: true },
        { label: "📫 Send an Email", href: "mailto:muhammad.okasha2146@gmail.com" }
      ]
    };
  }

  // 6. DIRECT PROJECT TARGETING
  // GHL RAG
  if (['ghl', 'gohighlevel', '5717', 'chunks', 'fastembed', 'gemini 3.7'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-ghl-rag');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Sales Co-Pilot
  if (['sales', 'copilot', 'zoom', 'google meet', 'battlecard', '50ms', 'objection', 'hud'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-sales-copilot');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Offline Translator
  if (['translator', 'translate', 'video subtitle', 'offline', 'marianmt', 'exoplayer', 'subtitles'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-video-translator');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // School
  if (['school', 'apex', 'lms', 'student', 'teacher', 'whiteboard', 'marksheet', 'socratic'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-digital-school');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Hospital ERP
  if (['hospital', 'clinical', 'ehr', 'patient', 'opd', 'ipd', 'pharmacy'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-hospital-erp');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // MedPrep Pro
  if (['medprep', 'fcps', 'mbbs', 'mcq', 'medical exam', 'rationale'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-medprep');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Med Connect
  if (['medconnect', 'telemedicine', 'telehealth', 'doctor booking', 'health vault'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-medconnect');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // CHASHM AI
  if (['chashm', 'headset', 'glasses', 'visually impaired', 'blind', 'esp32'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-chashm');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Shina NLP
  if (['shina', 'linguistic', 'endangered', 'dialect', 'corpus'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-shina-nlp');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Toxicity Sentinel
  if (['toxicity', 'sentinel', 'hate speech', 'moderation', 'tfidf', '10k'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-toxicity-sentinel');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Skills / Stack
  if (['skills', 'tech', 'stack', 'languages', 'tools', 'python', 'pytorch', 'fastapi', 'react', 'arsenal', 'frameworks'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-skills');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Resume / Contact / Hire
  if (['resume', 'cv', 'contact', 'email', 'phone', 'hire', 'interview', 'reach', 'whatsapp', 'download cv', 'download resume'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-contact');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // Experience
  if (['experience', 'bit build', 'navttc', 'work', 'job', 'history', 'internship', 'revenue'].some(k => lower.includes(k))) {
    const chunk = OKASHA_KNOWLEDGE_CHUNKS.find(c => c.id === 'chunk-experience');
    return { chunk, source: chunk.title, answer: chunk.content, actionChips: chunk.actionChips };
  }

  // 7. MULTI-KEYWORD SEMANTIC SCORING FALLBACK
  let bestChunk = null;
  let highestScore = -1;

  for (const chunk of OKASHA_KNOWLEDGE_CHUNKS) {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (lower.includes(kw)) score += 3;
      for (const t of cleanTokens) {
        if (kw === t) score += 4;
        else if (kw.includes(t) && t.length > 2) score += 1.5;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestChunk = chunk;
    }
  }

  if (bestChunk && highestScore >= 3) {
    return {
      chunk: bestChunk,
      source: bestChunk.title,
      answer: bestChunk.content,
      actionChips: bestChunk.actionChips
    };
  }

  // 8. GENERAL DETAILED ASSISTANT RESPONSE
  return {
    chunk: null,
    source: "Okasha Knowledge Index",
    answer: `Here is a structured briefing regarding your inquiry:

Muhammad Okasha is an AI Solutions Architect & Machine Learning Engineer (B.E. Computer Systems, UET Peshawar). He has delivered 10+ production systems spanning Enterprise Multimodal RAG, 100% On-Device Edge AI, Clinical ERPs, and Real-Time Voice Intelligence.

You can ask me specifically about any of his production systems:
• "GHL RAG" — 5,717 vector chunks with Gemini 3.7 & FastEmbed ONNX
• "Sales Voice Co-Pilot" — Real-time objection battlecards in <50ms for Zoom/Meet
• "Offline Translator" — 100% On-device Whisper INT8 + MarianMT Android App
• "Apex School OS" — 5-portal ERP with Socratic AI & cryptographic PDF marksheet engine
• "Skills & Stack" — AI, Deep Learning, Vector DBs & Full-Stack Arsenal
• "Resume / Contact" — Direct download & official contact coordinates`,
    actionChips: [
      { label: "⚡ View All 10 Projects", href: "#projects" },
      { label: "📄 Download Resume PDF", href: "/Muhammad_Okasha_Resume.pdf", download: true },
      { label: "📫 Contact Muhammad", href: "#contact" }
    ]
  };
}
