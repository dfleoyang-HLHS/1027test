export interface CourseCase {
  id: string;
  group: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  groupOrder: number;
  title: string;
  subtitle?: string;
  school: string;
  teachers: string[];
  region: '東部' | '北部' | '桃竹苗' | '南部';
  schoolType: '國立普通高中' | '市立普通高中' | '技術型高中' | '實驗中學' | '私立雙語/國際中學';
  courseType: '探究與實作' | '多元選修' | '跨校遠距選修' | '校訂必修' | '加深加廣選修';
  grade: string;
  credits: number;
  totalHours: number;
  studentCount: number;
  isSpotlight?: boolean; // Highlight for user's school / cross-school innovation
  pageStart: number;
  summary: string;
  // 4 NPDL Quadrants
  pedagogicalPractice: string;
  learningPartnership: string;
  learningEnvironment: string;
  digitalLeveraging: string;
  // 6C Competencies focus & ratings (1 to 5)
  competencies: {
    character: number;      // 品格
    citizenship: number;    // 公民素養
    collaboration: number;  // 協作
    communication: number;  // 溝通
    creativity: number;     // 創意
    criticalThinking: number; // 批判思考
  };
  // Rubric Level distribution (Pre-test vs Post-test) in %
  rubricStats: {
    dimension: string;
    pre: { limited: number; emerging: number; developing: number; proficient: number };
    post: { limited: number; emerging: number; developing: number; proficient: number };
  };
  keyOutcomes: string[];
  studentFeedback: string;
  teacherReflection: string;
  challenges: string[];
  recommendations: string[];
}

export const NPDL_6C_DESCRIPTIONS = [
  {
    key: 'citizenship',
    name: '公民素養 (Citizenship)',
    en: 'Citizenship',
    color: '#0284c7',
    icon: 'Globe',
    description: '具備全球視野、真誠關懷社會環境問題，並能以同理心付諸行動解決真實社群難題。',
    levels: {
      limited: '對全球與在地公共議題缺乏感知，僅能被動聽講，難以察覺自身與社會之關聯。',
      emerging: '開始注意環境或社會爭議，能陳述議題表面現象，但缺乏探究根因之自主動機。',
      developing: '能主動進行田野調查或文獻調研，從不同利害關係人角度同理並探討解方。',
      proficient: '能發起實際社會倡議、政策建言或公民行動，在社群中產生具體外溢正面影響。'
    }
  },
  {
    key: 'criticalThinking',
    name: '批判性思考 (Critical Thinking)',
    en: 'Critical Thinking',
    color: '#7c3aed',
    icon: 'Brain',
    description: '能客觀評估資訊來源真實性、反思多元觀點，並透過證據推理作出嚴謹決策。',
    levels: {
      limited: '全盤接受現成文本或單一權威說法，未進行史料或數據辨偽。',
      emerging: '能發現相左意見，但在論證時容易受情感偏見或片面資訊誤導。',
      developing: '能多方交叉比對文獻史料與實證數據，釐清因果關聯並提出具支持力的觀點。',
      proficient: '能建構多維度分析架構，辨析隱含的價值觀偏頗，並對複雜開放式問題提出原創洞見。'
    }
  },
  {
    key: 'creativity',
    name: '創造力 (Creativity)',
    en: 'Creativity',
    color: '#ea580c',
    icon: 'Sparkles',
    description: '能提出優質探究性問題，勇於跳脫既定思維，將構想轉化為具實踐價值的原創成果。',
    levels: {
      limited: '複製既有模板或他人成果，欠缺個人思維注入或新穎探索。',
      emerging: '在現有框架上進行小幅度調整改良，對不確定性較為猶豫。',
      developing: '能結合生成式AI、跨領域工具自創遊戲原型、文創策展或實作裝置。',
      proficient: '展現高階跨域破框思維，產出具備美感、實用性與突破性的創新作法。'
    }
  },
  {
    key: 'collaboration',
    name: '協作力 (Collaboration)',
    en: 'Collaboration',
    color: '#059669',
    icon: 'Users',
    description: '團隊以相互依存方式分工運作，具備高情商同理心、群體凝聚力與集體領導力。',
    levels: {
      limited: '小組成員各行其是，搭便車或個人英雄主義嚴重，缺乏實質互賴。',
      emerging: '能按分配完成個別任務，但遇到爭執或進度脫節時仰賴教師介入調停。',
      developing: '建立團隊協作公約與專案管理看板，能進行結構化回饋並主動補位。',
      proficient: '跨校、跨群體無縫協同，甚至與外部專家/社區社工共好共創，發揮團隊綜效。'
    }
  },
  {
    key: 'communication',
    name: '溝通力 (Communication)',
    en: 'Communication',
    color: '#2563eb',
    icon: 'MessageSquare',
    description: '能針對特定受眾量身打造傳播形式，靈活運用文字、視覺圖表與數位多媒體精準表達。',
    levels: {
      limited: '單向照本宣科，報告內容雜亂無章，完全忽略聽眾背景與理解門檻。',
      emerging: '能製作一般簡報，但訊息過多或排版凌亂，問答環節顯得被動。',
      developing: '能針對目標受眾（如同儕、評審、社區長輩）設計對話邏輯與互動展示。',
      proficient: '具備卓越說服力與感染力，能將艱深科學或歷史議題轉譯為大眾有感之敘事。'
    }
  },
  {
    key: 'character',
    name: '品格力 (Character)',
    en: 'Character',
    color: '#db2777',
    icon: 'ShieldCheck',
    description: '展現挫折復原力、恆毅力、誠信同理、以及在未知挑戰中主動對自我學習負責。',
    levels: {
      limited: '遇到瓶頸容易放棄，依賴單一解答，欠缺後設認知與自我檢視習慣。',
      emerging: '在師長鼓勵下能重新嘗試，能指出自身不足之處但改進動作有限。',
      developing: '建立學習日誌與敏捷反思習慣，能從實驗失敗或程式bug中自主調適心態。',
      proficient: '高度內在學習動機，視困難為成長契機，並在團隊中傳遞正向信任與心理安全感。'
    }
  }
];

export const NPDL_COURSES: CourseCase[] = [
  // GROUP C - Spotlight Hualien Senior High
  {
    id: 'c-2-hlhs',
    group: 'C',
    groupOrder: 2,
    title: '搶救海洋大作戰',
    subtitle: '在地海洋保育 × 深度學習全球素養實踐',
    school: '國立花蓮高級中學',
    teachers: ['黃雅蕾 教師'],
    region: '東部',
    schoolType: '國立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 35,
    isSpotlight: true,
    pageStart: 88,
    summary: '立足花蓮太平洋濱特殊海洋地理環境，引導學生走出教室調查海洋廢棄物、鯨豚生態威脅與漁業永續，並結合 NPDL 6C 全球素養規準與數位倡議，產出具有受眾導向的海洋保育策展。',
    pedagogicalPractice: '採用議題式探究與真實世界任務導向 (Real-World Authentic Challenge)，設計田野踏查、海洋科學探討與社群倡議行動。',
    learningPartnership: '與黑潮海洋文教基金會、在地環保志工及海巡署建立合作關係，讓學生直接與第一線護海專家深度對話。',
    learningEnvironment: '花蓮七星潭海岸踏查場域、校內海洋多媒體創客教室，建構具備開放性與同儕尊重的學習氛圍。',
    digitalLeveraging: '利用 GIS 海廢熱點標記地圖、Canva 多媒體視覺資訊圖表、Podcast 海洋專題錄製與社群平台傳播。',
    competencies: {
      character: 4.5,
      citizenship: 4.9,
      collaboration: 4.6,
      communication: 4.7,
      creativity: 4.3,
      criticalThinking: 4.8
    },
    rubricStats: {
      dimension: '公民素養 - 具有全球與在地海洋視野',
      pre: { limited: 15, emerging: 45, developing: 30, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 55, proficient: 35 }
    },
    keyOutcomes: [
      '完成七星潭海洋廢棄物監測報告與微塑膠檢測分析',
      '設計受眾導向之「給花蓮遊客的海洋友善指南」互動圖文',
      '舉辦校園海洋週公開展演，獲全校師生及社區參訪者熱烈迴響'
    ],
    studentFeedback: '「以前去海邊只是看風景拍照，這堂課讓我第一次戴上手套踩進浪花邊撿起無數塑膠碎片，深刻感受到我們每一天的生活都在影響海洋生命的存續。」',
    teacherReflection: '「藉由 NPDL 的規準引導，學生不再只是背誦死板的環保口號，而是能從文獻、數據與現場觀察中，提煉出真正有說服力的公民倡議。」',
    challenges: [
      '戶外踏查受限於天候海象，安全與時間調配需精細規劃',
      '學生在初期設計溝通產品時，容易流於泛道德說教，受眾意識（Audience Awareness）需要多次疊代磨練'
    ],
    recommendations: [
      '建立常態性「海洋公民科學資料庫」，讓各屆學弟妹數據得以跨年度累積與縱向比較',
      '擴大跨校連結，與西海岸學校對照台灣海峽與太平洋不同海域的環境課題'
    ]
  },

  // GROUP G - Spotlight Joint Hualien + Keelung
  {
    id: 'g-1-hlhs-klhs',
    group: 'G',
    groupOrder: 1,
    title: '《多元宇宙萬物聯網》〈永續綠能_智慧電網之儲能與創能〉',
    subtitle: '花蓮高中 × 基隆高中 跨山海遠距共備協作課程',
    school: '國立花蓮高級中學 / 國立基隆高級中學',
    teachers: ['黃楨喻 (花中)', '麥芃芃 (花中秘書)', '楊志忠 (基中)', '黃相文 (基中)', '洪譽 (基中)'],
    region: '東部',
    schoolType: '國立普通高中',
    courseType: '跨校遠距選修',
    grade: '高三 (14週)',
    credits: 2,
    totalHours: 28,
    studentCount: 30,
    isSpotlight: true,
    pageStart: 219,
    summary: '打破地理藩籬！基隆高中優質物理工程師資遠距同步授課，花蓮高中學生於電腦教室實作，兩校跨越北海岸與花蓮縱谷，共同攻克物聯網(IoT)感測器、能源計量與綠能微電網儲能系統。',
    pedagogicalPractice: '跨校雙師協同教學 (Co-teaching)：線上主講概念與程式架構，線下花中教師即時巡堂指導硬體線路與問題排除。',
    learningPartnership: '基隆高中與花蓮高中兩校跨校學習夥伴關係，學生透過雲端平台共筆與遠端同儕代碼評閱，形成跨校學習社群。',
    learningEnvironment: '混成數位遠距連線教室、物理感測物聯網實驗台，打造高互動、低延遲的虛實整合學習情境。',
    digitalLeveraging: 'Arduino / ESP32 微控制器、ThingSpeak 物聯網雲端數據流、即時電壓電流感測與數位能源儀表板。',
    competencies: {
      character: 4.4,
      citizenship: 4.8,
      collaboration: 4.9,
      communication: 4.5,
      creativity: 4.7,
      criticalThinking: 4.6
    },
    rubricStats: {
      dimension: '協作力與跨領域科技解決方案實作',
      pre: { limited: 20, emerging: 50, developing: 25, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 50, proficient: 35 }
    },
    keyOutcomes: [
      '成功研製小型校園太陽能儲能與智慧負載切換原型系統',
      '完成校園主要教室耗電功率實測與節能潛力情境模擬',
      '兩校學生完成雲端期末成果聯展，建立跨校遠距共同備課機制典範'
    ],
    studentFeedback: '「雖然遠距老師在基隆，但連線非常流暢，而且遇到電路短路時花中老師就在身邊指導，讓我們高三學生能親手接線、寫出雲端監控介面，很有成就感！」',
    teacherReflection: '「跨校共備最大收穫是教學資源共享與觀摩，基中深耕科技專題、花中擅長探究引導，互補長處，讓學生享有雙重教育資源。」',
    challenges: [
      '兩校鐘聲與段考時程微有差異，每週連線前置準備需精準對時',
      '感測器零件損耗與遠距除錯需高度依賴現場助教或線下教師的專業協作'
    ],
    recommendations: [
      '制度化跨校遠距授課排課機制，提供參與共備教師合理鐘點與行政支持',
      '將微電網物聯網模組封裝為可攜式跨校實驗箱，方便不同班級隨取隨測'
    ]
  },

  // GROUP A
  {
    id: 'a-1-lkhs',
    group: 'A',
    groupOrder: 1,
    title: 'Game On - 歷史桌遊與數位遊戲化探究',
    school: '新北市立林口高級中學',
    teachers: ['楊可倫 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '探究與實作',
    grade: '高二、高三',
    credits: 2,
    totalHours: 36,
    studentCount: 120,
    pageStart: 3,
    summary: '結合歷史文本史料探勘與 Game Jam 遊戲黑客松，利用生成式AI與 Twine 遊戲引擎，將台灣歷史人物與事件轉化為具備因果抉擇的互動式遊戲。',
    pedagogicalPractice: '專案式教學 (PBL) 與 Game Jam 敏捷衝刺，教師轉化為專案經理人 (PM)，以累積點數與迭代修正推進。',
    learningPartnership: '學生在遊戲開發團隊中擔任程式、美術、史料企劃等互補角色，並進行跨組試玩互評。',
    learningEnvironment: '卡片盒筆記軟體、Twine 線上開發環境、Game Jam 遊戲發布展示間。',
    digitalLeveraging: '生成式 AI 輔助腳本與程式生成、Twine 互動故事遊戲引擎、數位問卷前後測分析。',
    competencies: {
      character: 4.2,
      citizenship: 4.3,
      collaboration: 4.7,
      communication: 4.4,
      creativity: 4.9,
      criticalThinking: 4.6
    },
    rubricStats: {
      dimension: '創造力 - 將歷史史料轉化為遊戲邏輯機制',
      pre: { limited: 35, emerging: 45, developing: 15, proficient: 5 },
      post: { limited: 5, emerging: 20, developing: 50, proficient: 25 }
    },
    keyOutcomes: ['產出8款具備歷史考證之 Twine 網頁文字冒險遊戲', '建立史料卡片盒向遊戲腳本映射之標準 SOP 工作流'],
    studentFeedback: '「沒想到歷史課可以寫遊戲！原本覺得枯燥的文獻，為了做遊戲數值平衡和分歧選項，看了好多遍。」',
    teacherReflection: '「AI 工具大幅降低了非資訊背景學生的編程門檻，讓焦點能回到『史料考證的深度與敘事真實性』。」',
    challenges: ['學生沉迷於遊戲介面華麗度，偶有歷史論證失衡現象', '生成式 AI 產生之史實幻覺需要嚴格檢核流程'],
    recommendations: ['增加史實真偽辨析之評分權重', '將優秀遊戲上架校園數位圖書館供同儕日常遊玩']
  },
  {
    id: 'a-2-hccvs',
    group: 'A',
    groupOrder: 2,
    title: '從鹿港乘桴記中發現新竹之美',
    school: '國立新竹高級商業職業學校',
    teachers: ['蔡濬廷 教師'],
    region: '桃竹苗',
    schoolType: '技術型高中',
    courseType: '多元選修',
    grade: '高一',
    credits: 2,
    totalHours: 36,
    studentCount: 38,
    pageStart: 12,
    summary: '技職學生結合國文古典散文《鹿港乘桴記》進行跨時空移轉，深入新竹舊城區歷史街區踏查，以商管技職專長打造地方創生行銷提案。',
    pedagogicalPractice: '跨學科文本轉譯 (Literature to Local Reality)、地方田野踏查與商業提案展示。',
    learningPartnership: '新竹老城店家、地方文史工作室負責人、商經科教師群。',
    learningEnvironment: '新竹北門街、東門城歷史街區、校內行銷實作展示間。',
    digitalLeveraging: '手機攝影空拍、Canva 導覽文宣設計、社群短影音剪輯行銷。',
    competencies: {
      character: 4.0,
      citizenship: 4.6,
      collaboration: 4.5,
      communication: 4.8,
      creativity: 4.4,
      criticalThinking: 4.1
    },
    rubricStats: {
      dimension: '溝通力 - 文學意象與在地商業提案之整合表達',
      pre: { limited: 25, emerging: 50, developing: 20, proficient: 5 },
      post: { limited: 0, emerging: 20, developing: 55, proficient: 25 }
    },
    keyOutcomes: ['新竹古蹟步道商業導覽手冊', '老店創新品牌定位短片專案'],
    studentFeedback: '「原來每天經過的東門市場背後有這麼多故事，課本上的古文突然和新竹的生活連起來了！」',
    teacherReflection: '「高職學生在行銷創意與設計實作上非常靈活，NPDL 規準幫助他們在文字論證上更加嚴密。」',
    challenges: ['田野調查訪談時間與店家營業時間衝突', '跨科系商管與語文教師備課負擔較重'],
    recommendations: ['建立長期產學文史基地合約', '將成果送交新竹市文化局參與青年提案競賽']
  },
  {
    id: 'a-3-twhs',
    group: 'A',
    groupOrder: 3,
    title: '國文課的自我探索：甲骨文植栽的生命微風景',
    school: '新北市立竹圍高級中學',
    teachers: ['張羽璇 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '多元選修',
    grade: '高一',
    credits: 2,
    totalHours: 36,
    studentCount: 32,
    pageStart: 20,
    summary: '打破國文與造字學枯燥背誦，將甲骨文古字造字思維與生命教育、多肉植栽結合，引導學生在文字演變中進行自我探索與生命反思。',
    pedagogicalPractice: '跨領域美感體驗教學、後設認知生命反思敘事、手作實踐。',
    learningPartnership: '園藝治療師諮詢、校園輔導諮商中心支援、親師共賞聯展。',
    learningEnvironment: '校園綠屋頂溫室、人文美學陶藝教室。',
    digitalLeveraging: '甲骨文數位字典字源溯源、微距攝影縮時記錄、線上美感學習檔案。',
    competencies: {
      character: 4.9,
      citizenship: 3.8,
      collaboration: 4.1,
      communication: 4.5,
      creativity: 4.8,
      criticalThinking: 4.2
    },
    rubricStats: {
      dimension: '品格力 - 自我省察與生命恆毅力探索',
      pre: { limited: 20, emerging: 45, developing: 25, proficient: 10 },
      post: { limited: 0, emerging: 15, developing: 45, proficient: 40 }
    },
    keyOutcomes: ['32件甲骨文陶盆微型生態景觀植栽', '「給未來自己的一封信」自我生命敘事電子書'],
    studentFeedback: '「看著自己挑選的甲骨文字和多肉小苗每天一點點長大，感覺心中的焦慮被溫柔治癒了。」',
    teacherReflection: '「國文教學不只是語文工具，更是心靈棲息地。NPDL 讓我學會用更結構化的規準看見學生的深層成長。」',
    challenges: ['評量品格與內省質性指標客觀化難度較大', '植物養護受寒暑假中斷影響'],
    recommendations: ['導入同儕互評質性訪談範本', '串聯美術與輔導科常態化開設為校訂特色課程']
  },

  // GROUP B
  {
    id: 'b-1-jksvs',
    group: 'B',
    groupOrder: 1,
    title: '南院遊於藝 - 博物館美學與跨域創客',
    school: '國立嘉科實驗高級中等學校',
    teachers: ['潘宜均', '吳俐潁', '林怡慈'],
    region: '南部',
    schoolType: '實驗中學',
    courseType: '探究與實作',
    grade: '高一',
    credits: 2,
    totalHours: 36,
    studentCount: 42,
    pageStart: 31,
    summary: '鄰近故宮南院地理優勢，結合歷史典藏文物鑑賞、3D列印創客與雙語解說導覽，培育跨文化美學與數位科技素養。',
    pedagogicalPractice: '博物館本位學習 (Museum-Based Learning)、STEAM 創客實作、雙語導覽演練。',
    learningPartnership: '國立故宮博物院南部院區教育展資科、在地導覽志工協會。',
    learningEnvironment: '故宮南院常設展廳、嘉科實中創客自造基地 (FabLab)。',
    digitalLeveraging: '故宮 Open Data 數位典藏圖庫、Fusion 360 3D建模軟體、VR 虛擬導覽環景。',
    competencies: {
      character: 4.2,
      citizenship: 4.7,
      collaboration: 4.6,
      communication: 4.8,
      creativity: 4.7,
      criticalThinking: 4.5
    },
    rubricStats: {
      dimension: '批判思考與跨文化轉譯表達',
      pre: { limited: 25, emerging: 45, developing: 25, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 55, proficient: 30 }
    },
    keyOutcomes: ['3D列印故宮紋飾文創生活商品原型', '雙語版青年視角南院展品語音導覽 QR Code'],
    studentFeedback: '「我們在故宮現場為外國觀光客用英文解說青花瓷，那種心跳加速但被外國人讚賞的感覺超棒！」',
    teacherReflection: '「實驗學校的彈性讓我們能打破學科界線，讓歷史、美術與資訊老師真正坐在同一張桌子上共備。」',
    challenges: ['學生在3D建模軟體學習曲線較陡峭', '全英文導覽對部分學生形成口語焦慮'],
    recommendations: ['增加建模基礎前置微課程', '導入分層多軌評量，鼓勵非流利英語學生的肢體與視覺展示']
  },
  {
    id: 'b-2-isedu',
    group: 'B',
    groupOrder: 2,
    title: 'HOW DO I LIVE? - 體驗政治犯的審判，白色恐怖時期的臺灣',
    school: '義大國際高級中學',
    teachers: ['梁祐菖 教師'],
    region: '南部',
    schoolType: '私立雙語/國際中學',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 45,
    pageStart: 50,
    summary: '以白色恐怖真實歷史判決卷宗為基底，結合模擬法庭角色扮演（審判官、檢察官、被捕青年、辯護律師），引導國際學校學生深思人權、法治與歷史正義。',
    pedagogicalPractice: '情境模擬法庭審判、史料互證詰問、爭議性道德哲學兩難思辨。',
    learningPartnership: '國家人權博物館檔案研究員、人權律師協會專家、受難者家屬訪談錄影。',
    learningEnvironment: '模擬法庭空間、人權文獻解密閱讀室、靜心反思角。',
    digitalLeveraging: '國家檔案局政治檔案開放查詢系統、模擬審判辯護AI辯駁對話系統。',
    competencies: {
      character: 4.8,
      citizenship: 4.9,
      collaboration: 4.5,
      communication: 4.8,
      creativity: 4.2,
      criticalThinking: 4.9
    },
    rubricStats: {
      dimension: '批判思考 - 辨析不同意識形態與史料背後權力結構',
      pre: { limited: 10, emerging: 40, developing: 35, proficient: 15 },
      post: { limited: 0, emerging: 10, developing: 40, proficient: 50 }
    },
    keyOutcomes: ['3場高張力真實歷史個案模擬法庭審判錄像', '「歷史的重量」白色恐怖人權反思專刊'],
    studentFeedback: '「當我站在被告席讀著70年前那位只有22歲大學生的遺書時，我真正懂了自由民主不是理所當然的空氣。」',
    teacherReflection: '「NPDL 規準中的批判思考在此發揮極致，學生不再是非黑即白的二元對立評判，而是看見結構性悲劇。」',
    challenges: ['部分敏感政治爭議引起家長初步疑慮', '模擬法庭時間緊迫難以讓每位學生充分發言'],
    recommendations: ['事前提供家長清晰之教育目標與人權法治說明書', '善用非同步線上審判攻防論壇延伸討論']
  },
  {
    id: 'b-3-lshs',
    group: 'B',
    groupOrder: 3,
    title: '歷史領域探索-鄭成功人物形象分析',
    school: '臺北市立麗山高級中學',
    teachers: ['楊善茵 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '探究與實作',
    grade: '高一',
    credits: 2,
    totalHours: 36,
    studentCount: 36,
    pageStart: 60,
    summary: '從荷蘭東印度公司日記、明清史料到原住民族口傳歷史，跨視角剖析鄭成功在不同政權與族群中的形象塑構與多維歷史評價。',
    pedagogicalPractice: '史料批判探究 (Historical Sourcing)、跨族群觀點拼圖法、歷史辯證小論文寫作。',
    learningPartnership: '中央研究院台灣史研究所學者講座、平埔族群文化復振團體。',
    learningEnvironment: '史料研讀室、圓桌研討辯論空間。',
    digitalLeveraging: '數位化古地圖疊圖系統 (Taiwan Historical GIS)、史料檢索平台、Zotero 文獻管理。',
    competencies: {
      character: 4.1,
      citizenship: 4.6,
      collaboration: 4.3,
      communication: 4.6,
      creativity: 4.1,
      criticalThinking: 4.9
    },
    rubricStats: {
      dimension: '批判性思考 - 辨析歷史書寫中之族群立場與主觀建構',
      pre: { limited: 20, emerging: 50, developing: 25, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 45, proficient: 40 }
    },
    keyOutcomes: ['跨視角鄭成功形象多維辯證專題報告集', '原住民族視角補遺之教材建議書'],
    studentFeedback: '「以前只知道他是延平郡王開台聖王，從原住民角度重看後才發現歷史往往只有勝利者的聲音。」',
    teacherReflection: '「麗山學生思辨力強，透過 NPDL 規準將思考外顯化，讓他們的論文論證具備大學專題水平。」',
    challenges: ['古荷蘭文與明清文言史料閱讀難度偏高', '部分學生初期難以接受歷史多元開放無標準答案'],
    recommendations: ['建立分級譯註史料選集資料庫', '引入後設認知學習單協助調適認知失調']
  },

  // GROUP C
  {
    id: 'c-1-tths',
    group: 'C',
    groupOrder: 1,
    title: 'SDGs的全球公民對話',
    school: '國立臺東高級中學',
    teachers: ['羅勝吉', '吳姿瑩'],
    region: '東部',
    schoolType: '國立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 34,
    pageStart: 79,
    summary: '立足臺東多元族群與南島語系脈絡，對接聯合國永續發展目標 (SDGs)，探討氣候變遷、原鄉文化復振與全球永續對話。',
    pedagogicalPractice: '全球議題在地化探究 (Glocal Inquiry)、部落長老訪談、世界咖啡館審議民主。',
    learningPartnership: '在地原住民部落發展協會、東華大學原住民民族學院教授、國際特赦組織。',
    learningEnvironment: '部落戶外文化聚落、校內多功能演講廳。',
    digitalLeveraging: 'SDGs 永續儀表板追蹤、跨國非同步交流平台 Padlet、Podcast 訪談錄製。',
    competencies: {
      character: 4.6,
      citizenship: 4.9,
      collaboration: 4.5,
      communication: 4.7,
      creativity: 4.2,
      criticalThinking: 4.6
    },
    rubricStats: {
      dimension: '公民素養 - 跨文化同理與在地倡議行動',
      pre: { limited: 20, emerging: 45, developing: 25, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 55, proficient: 35 }
    },
    keyOutcomes: ['臺東在地減碳與原鄉傳統智慧結合之倡議書', '「山與海的對話」多語雙聲道倡議廣播劇'],
    studentFeedback: '「原來我們部落長老世代相傳的輪耕休耕觀念，就是聯合國倡導的最先進永續農業！」',
    teacherReflection: '「偏遠東部孩子具有極深厚的土地情感，NPDL 為他們插上連結國際話語體系的翅膀。」',
    challenges: ['跨國連線時差與英文口語表達信心不足', '部落訪談交通接駁資源吃緊'],
    recommendations: ['爭取教育部偏鄉交通車輛專案經費', '媒合海外華語志工進行雙向語言搭棚']
  },
  {
    id: 'c-3-yphs',
    group: 'C',
    groupOrder: 3,
    title: 'SDGs創意行銷',
    school: '新北市立永平高級中學',
    teachers: ['陳巧芬 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '多元選修',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 40,
    pageStart: 96,
    summary: '將全球永續議題化為商管行銷實務，引導高中生以受眾同理為起點，為社會企業與綠色品牌策劃具備可行性之整合行銷專案。',
    pedagogicalPractice: '敏捷行銷實作 (Agile Marketing Sprint)、同理心地圖與受眾分群定位。',
    learningPartnership: '永和在地獨立書店、無包裝商店老闆、知名社企公關顧問。',
    learningEnvironment: '永平高中文創情境教室、社區創生市集展售攤位。',
    digitalLeveraging: 'Instagram / Threads 數據分析工具、數位文案 A/B 測試、短影音剪輯工具。',
    competencies: {
      character: 4.3,
      citizenship: 4.6,
      collaboration: 4.7,
      communication: 4.9,
      creativity: 4.8,
      criticalThinking: 4.4
    },
    rubricStats: {
      dimension: '溝通與創意 - 針對目標受眾之行銷傳播轉化力',
      pre: { limited: 15, emerging: 45, developing: 30, proficient: 10 },
      post: { limited: 0, emerging: 15, developing: 45, proficient: 40 }
    },
    keyOutcomes: ['3家在地友善小農品牌社群翻新企劃', '自辦校園綠色零浪費市集實收逾萬元公益捐贈'],
    studentFeedback: '「看見我們設計的環保宣傳海報真的讓社區媽媽願意自備提袋購物，感動得說不出話！」',
    teacherReflection: '「NPDL 規準中的受眾評量讓孩子們不再自我感覺良好，而是學會看數據後台回饋修正方案。」',
    challenges: ['社群貼文成效受演算法波動影響學生心理感受', '專案預算編列與採購核銷繁瑣'],
    recommendations: ['建立校內永續微型基金帳戶支持專案試錯', '增設社群數據識讀與情緒韌性課程模組']
  },

  // GROUP D
  {
    id: 'd-1-tcushs',
    group: 'D',
    groupOrder: 1,
    title: '國際關懷與行動',
    school: '慈濟大學附屬高級中學',
    teachers: ['葉宜宣', '黃韻宇', '葉宜鑫', '洪振斌', '許裔翎', '余美其'],
    region: '東部',
    schoolType: '私立雙語/國際中學',
    courseType: '校訂必修',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 85,
    pageStart: 109,
    summary: '結合慈濟國際人道救援網絡，帶領東部學子關注土耳其震災、非洲淨水計畫與烏克蘭難民救助，培育同理心、國際人道倡議與具體勸募實踐。',
    pedagogicalPractice: '人道服務學習 (Service-Learning)、跨領域6位教師協同備課、敘事共感引導。',
    learningPartnership: '慈濟基金會國際賑災總部救難隊員、聯合國難民署 NGO 駐台代表。',
    learningEnvironment: '慈大附中靜思講堂、沉浸式國際難民帳篷體驗區。',
    digitalLeveraging: '跨國志工即時 Zoom 視訊連線、全球人道災情 GIS 地圖追蹤、影音紀錄片剪輯。',
    competencies: {
      character: 4.9,
      citizenship: 4.9,
      collaboration: 4.6,
      communication: 4.7,
      creativity: 4.3,
      criticalThinking: 4.5
    },
    rubricStats: {
      dimension: '品格力與全球公民素養 - 人道關懷與同理共感實踐',
      pre: { limited: 10, emerging: 35, developing: 40, proficient: 15 },
      post: { limited: 0, emerging: 5, developing: 45, proficient: 50 }
    },
    keyOutcomes: ['發起「為遠方孩子點燈」愛心物資募集中繼專案', '完成5部跨國難民青年深度專訪紀錄短片'],
    studentFeedback: '「看見同齡的烏克蘭女孩在地下防空洞裡堅持上網課，我意識到我們擁有的平靜生活有多麼珍貴。」',
    teacherReflection: '「跨學科6位老師的共備雖然耗時，但能從地理氣候、政治局勢到生命倫理全方位包裹，力量無比強大。」',
    challenges: ['大型跨領域團隊教師排課不易協調', '學生面對巨大苦難時偶發同理疲勞與無力感'],
    recommendations: ['建立輔導心理支持系統陪伴學生消化情緒', '與大專院校建立長效服務傳承梯隊']
  },
  {
    id: 'd-2-klhs',
    group: 'D',
    groupOrder: 2,
    title: '在地走讀趣 - 雨都基隆的地方創生與文化拼圖',
    school: '國立基隆高級中學',
    teachers: ['李婉玲 教師'],
    region: '北部',
    schoolType: '國立普通高中',
    courseType: '多元選修',
    grade: '高一',
    credits: 2,
    totalHours: 36,
    studentCount: 30,
    pageStart: 123,
    summary: '帶領基隆高中學生穿梭於八斗子漁港、委託行商圈與基隆山城，以在地走讀踏查挖掘雨都背後的海洋歷史與移民文化，翻轉對家鄉的刻板印象。',
    pedagogicalPractice: '地方學田野走讀 (Place-Based Pedagogy)、口述歷史採訪、感官地圖繪製。',
    learningPartnership: '基隆委託行街區創生團隊、八斗子漁村耆老、基隆市文化局。',
    learningEnvironment: '基隆防空洞坑道、崁仔頂漁市、基隆高中多功能視聽教室。',
    digitalLeveraging: 'Google My Maps 故事地圖標註、手機 Podcast 錄製收音、AR 歷史影像疊合。',
    competencies: {
      character: 4.4,
      citizenship: 4.7,
      collaboration: 4.5,
      communication: 4.6,
      creativity: 4.5,
      criticalThinking: 4.3
    },
    rubricStats: {
      dimension: '公民素養與在地認同 - 地方文化保存探究',
      pre: { limited: 30, emerging: 40, developing: 20, proficient: 10 },
      post: { limited: 0, emerging: 15, developing: 55, proficient: 30 }
    },
    keyOutcomes: ['八斗子與委託行手繪走讀地圖摺頁', '基隆走讀專題語音導覽節目上架'],
    studentFeedback: '「從小生長在基隆總覺得每天下雨很煩，走過這趟才發現這座山海之城隱藏著如此迷人的歷史紋理。」',
    teacherReflection: '「當學生親口採訪八十歲的老船長，眼神裡對家鄉的尊重與驕傲，是任何考卷無法測量出來的。」',
    challenges: ['戶外雨天行程備案需要頻繁切換', '學生訪談技巧較為生澀需要前期多次演練'],
    recommendations: ['編製基隆高中專屬田野訪談工具手冊', '與基隆國中小合作，由高中生擔任學弟妹走讀導覽員']
  },
  {
    id: 'd-3-smhs',
    group: 'D',
    groupOrder: 3,
    title: '多元文本與實作—Issues on Refugees',
    school: '新北市立三民高級中學',
    teachers: ['林承龍 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '加深加廣選修',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 32,
    pageStart: 146,
    summary: '高中英語科全英語探究實作，透過英文新聞、聯合國難民署報告、傳記小說多元文本，進行批判性閱讀與模擬國際高峰會論辯。',
    pedagogicalPractice: '內容語言整合學習 (CLIL)、模擬聯合國議事規則 (MUN)、多元文本比較閱讀。',
    learningPartnership: '海外留學學長姐跨國視訊分享、台灣人權促進會難民專案研究員。',
    learningEnvironment: '模擬國際高峰會 U 型會議廳、英語閱讀沙龍。',
    digitalLeveraging: 'Perplexity / AI 英文文獻總結工具、Canva 全英文政策簡報、Mural 協同看板。',
    competencies: {
      character: 4.3,
      citizenship: 4.8,
      collaboration: 4.6,
      communication: 4.9,
      creativity: 4.2,
      criticalThinking: 4.8
    },
    rubricStats: {
      dimension: '批判思考與跨語言溝通 - 國際難民政策辯護與反駁',
      pre: { limited: 20, emerging: 45, developing: 25, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 50, proficient: 40 }
    },
    keyOutcomes: ['模擬聯合國難民署全英文決議草案 (Draft Resolution)', '難民人權議題全英文播客特輯'],
    studentFeedback: '「一開始很害怕要全程講英文辯論，但在查閱各國政策的過程中，語言變成了保護弱勢的有力武器。」',
    teacherReflection: '「英語不再只是考試學科，而是探究世界痛點的真正媒介。學生的詞彙與思想深度同步飛躍。」',
    challenges: ['雙語能力雙峰現象明顯，需提供足夠鷹架', '國際法規與難民公約專業術語門檻較高'],
    recommendations: ['設計分級英語詞彙包與辯論句型引導卡', '建立跨校高中生模擬聯合國常態交流機制']
  },

  // GROUP E
  {
    id: 'e-1-tsdes',
    group: 'E',
    groupOrder: 1,
    title: '設計思考 (Design Thinking 跨域創新實驗)',
    school: '臺北市數位實驗高級中等學校',
    teachers: ['潘玳玉', '林姿妤', '莊子寬', '謝博文', '楊士賢', '李若維', '陳秀墨', '賴宏銓', '王雅旻', '張志康'],
    region: '北部',
    schoolType: '實驗中學',
    courseType: '探究與實作',
    grade: '高一、高二',
    credits: 3,
    totalHours: 54,
    studentCount: 65,
    pageStart: 165,
    summary: '全台首創數位實驗高中10位跨學科教師大協同！落實 Design Thinking 五步驟（同理、定義、發想、原型、測試），針對真實校園生活與城市無障礙議題進行敏捷造物與原型驗證。',
    pedagogicalPractice: '史丹佛設計思考架構、敏捷式 Scrum 衝刺、跨領域大班分流工作坊。',
    learningPartnership: '社福基金會身障輔具工程師、軟體科技公司 UX/UI 資深設計師。',
    learningEnvironment: '彈性模組化協作桌椅空間、數位造物創客實驗室、雲端虛擬白板。',
    digitalLeveraging: 'Figma UI/UX 原型設計、Notion 專案進度管理、AI 輔助靈感生圖與快速概念驗證。',
    competencies: {
      character: 4.5,
      citizenship: 4.6,
      collaboration: 4.9,
      communication: 4.7,
      creativity: 4.9,
      criticalThinking: 4.7
    },
    rubricStats: {
      dimension: '創造力與協作力 - 原型驗證與敏捷疊代解決真實痛點',
      pre: { limited: 15, emerging: 40, developing: 35, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 45, proficient: 45 }
    },
    keyOutcomes: ['12套身障與高齡友善公共設施優化原型與 Figma 設計稿', '數位實中首屆設計思考 Demo Day 創新發表會'],
    studentFeedback: '「我們做的輪椅坡道偵測原型在測試時被受訪者狠狠吐槽，那一刻才懂得什麼叫做『以人為本』而不是以自我為中心。」',
    teacherReflection: '「10位老師的協作初期經歷劇烈磨合，但也示範了真實職場跨部門合作的態度給學生看。」',
    challenges: ['多位教師評量標準一致性校準耗時極長', '原型製作材料與硬體經費消耗龐大'],
    recommendations: ['建立數位化 NPDL 評規校準輔助系統', '引進企業贊助之創客硬體基金池']
  },
  {
    id: 'e-2-yphs',
    group: 'E',
    groupOrder: 2,
    title: '生態環境探究與實作（綠色生活地圖）—印象永存之城市問題進階探究',
    school: '新北市立永平高級中學',
    teachers: ['陳祥', '周映彤', '黃冠婷', '周孝柔'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 42,
    pageStart: 175,
    summary: '針對永和全台人口密度最高之極端都市型態，結合自然科生態監測與地理資訊系統 (GIS)，繪製綠色生活地圖，實測都市熱島效應與微氣候調節解方。',
    pedagogicalPractice: '環境科學實地採樣、空間資訊空間分析 (Spatial Analysis)、都市生態微氣候實驗。',
    learningPartnership: '荒野保護協會新北分會、台灣大學地理環境資源學系研究團隊。',
    learningEnvironment: '永和仁愛公園、校園綠能氣象站、地理資訊電腦教室。',
    digitalLeveraging: 'QGIS 地理資訊系統、紅外線熱成像儀、微型溫度濕度物聯網感測紀錄器。',
    competencies: {
      character: 4.3,
      citizenship: 4.8,
      collaboration: 4.6,
      communication: 4.5,
      creativity: 4.4,
      criticalThinking: 4.7
    },
    rubricStats: {
      dimension: '批判思考與數據分析 - 都會微氣候數據建模與改善建言',
      pre: { limited: 25, emerging: 45, developing: 25, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 50, proficient: 35 }
    },
    keyOutcomes: ['新北市永和區綠色生活生活生態互動地圖', '「降溫兩度C」永和綠廊帶規劃建言書呈送市府參閱'],
    studentFeedback: '「看著熱成像儀上柏油路面50多度高溫、而大樹林蔭下只有32度，深刻體會到城市裡每一棵樹的存在價值。」',
    teacherReflection: '「跨自然科與社會科共備，讓科學測量數據不再是冰冷數字，而是轉化為城市治理的公民建言。」',
    challenges: ['QGIS 軟體入門複雜度較高需耗費較多電腦課時數', '夏季室外高溫採樣學生體力負荷大'],
    recommendations: ['開發低代碼或網頁版 GIS 輕量工具包', '與都市更新處建立產官學研究合作機制']
  },

  // GROUP F
  {
    id: 'f-1-tths',
    group: 'F',
    groupOrder: 1,
    title: '與澳洲籃球俱樂部中學生交流',
    school: '國立臺東高級中學',
    teachers: ['張增盈 教師'],
    region: '東部',
    schoolType: '國立普通高中',
    courseType: '多元選修',
    grade: '高一、高二',
    credits: 2,
    totalHours: 36,
    studentCount: 28,
    pageStart: 193,
    summary: '體育不只是運動競技！以籃球為共同語言，跨國對接澳洲青少年籃球俱樂部，融入原住民傳統樂舞、雙語運動戰術溝通與跨文化情誼。',
    pedagogicalPractice: '情境化雙語體育教學、跨文化運動交流、同儕教練制。',
    learningPartnership: '澳洲布里斯本青少年籃球聯盟、臺東在地基層體育協會。',
    learningEnvironment: '臺東高中室內體育館、跨國視訊雙向交流室。',
    digitalLeveraging: '運動比賽影片慢速戰術分析軟體、跨國雲端視訊連線、運動數據分析手環。',
    competencies: {
      character: 4.7,
      citizenship: 4.6,
      collaboration: 4.8,
      communication: 4.7,
      creativity: 4.2,
      criticalThinking: 4.3
    },
    rubricStats: {
      dimension: '協作力與跨文化溝通 - 運動場上的國際友誼與團隊溝通',
      pre: { limited: 30, emerging: 40, developing: 25, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 55, proficient: 30 }
    },
    keyOutcomes: ['台澳雙語青少年運動戰術交流影片手冊', '原住民族傳統豐年樂舞文化介紹短片'],
    studentFeedback: '「即使英文講得不輪轉，只要一個傳球、一個眼神，我們和澳洲隊員在球場上完全零隔閡！」',
    teacherReflection: '「動態運動結合 NPDL 全球素養，讓原本在教室坐不住的體育班與原住民孩子找回無比自信。」',
    challenges: ['台澳兩地時差與學期制不同步', '國際實體互訪經費門檻較高需爭取贊助'],
    recommendations: ['常態化推動「雲端運動友誼賽」機制', '結合體育署國際體育交流專案爭取機票補助']
  },
  {
    id: 'f-2-hccvs',
    group: 'F',
    groupOrder: 2,
    title: '一電銷鄉愁 - 新住民特色電商行銷',
    school: '國立新竹高級商業職業學校',
    teachers: ['張陳明', '勞裕安', '王明儀'],
    region: '桃竹苗',
    schoolType: '技術型高中',
    courseType: '多元選修',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 36,
    pageStart: 201,
    summary: '商業管理與資處科跨領域專案，帶領技職學生走訪新竹地區東南亞新住民小吃與文創店家，為新住民媽媽打造專業品牌視覺、商品上架與電商行銷方案。',
    pedagogicalPractice: '跨文化商業實務專案、顧客旅程地圖分析、電商平台建置與上架。',
    learningPartnership: '新竹市新住民家庭服務中心、在地東南亞特色商家。',
    learningEnvironment: '新住民實體店面、高商電商直播實訓攝影棚。',
    digitalLeveraging: 'Shopline 電商建站系統、商品棚拍專業燈光、社群行銷廣告投放模擬。',
    competencies: {
      character: 4.6,
      citizenship: 4.8,
      collaboration: 4.7,
      communication: 4.7,
      creativity: 4.6,
      criticalThinking: 4.4
    },
    rubricStats: {
      dimension: '公民素養與商業創新 - 新住民文化多元同理與商業賦能',
      pre: { limited: 20, emerging: 45, developing: 30, proficient: 5 },
      post: { limited: 0, emerging: 15, developing: 45, proficient: 40 }
    },
    keyOutcomes: ['為3位新住民店家建立完整蝦皮/Shopline 電商專頁', '創下單月協助店家線上營業額成長 35% 之實戰佳績'],
    studentFeedback: '「看見越南阿姨握著我們的手，感謝我們幫她的家鄉醬料拍出像精品一樣的照片，真的超級感動！」',
    teacherReflection: '「技職教育的價值在於用所學技能解決社會真實問題，NPDL 讓商業技術有了人性的溫度。」',
    challenges: ['部分店家語言溝通需要通譯輔助', '食品商品安全檢驗與法規標示門檻嚴格'],
    recommendations: ['與食品科或衛生局建立諮詢合作渠道', '擴大推廣為桃竹苗跨校新住民賦能聯合計畫']
  },
  {
    id: 'f-3-pkhs',
    group: 'F',
    groupOrder: 3,
    title: 'Youth in Action : SDGs 實踐方案，改寫在地未來',
    school: '新北市立北大高級中學',
    teachers: ['李貞誼', '陳炯皓'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 42,
    pageStart: 209,
    summary: '立足三峽鶯歌在地陶瓷文創、老街文化與青銀共居議題，引導高中生以 SDGs 為綱領，深入無家者與弱勢社群，規劃並付諸行動方案。',
    pedagogicalPractice: '社會行動式學習 (Action-Oriented Pedagogy)、利害關係人深度訪談、期末海報公開辯證。',
    learningPartnership: '三峽在地社工團隊、芒草心慈善協會、北大特區里長聯誼會。',
    learningEnvironment: '三峽老街與秀川河岸空間、學校圖書館共學大廳。',
    digitalLeveraging: 'Google 表單問卷大數據調研、數位倡議海報與影音宣傳。',
    competencies: {
      character: 4.7,
      citizenship: 4.9,
      collaboration: 4.6,
      communication: 4.6,
      creativity: 4.4,
      criticalThinking: 4.7
    },
    rubricStats: {
      dimension: '公民素養與批判思考 - 弱勢議題實地探究與行動提案',
      pre: { limited: 20, emerging: 40, developing: 30, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 45, proficient: 45 }
    },
    keyOutcomes: ['「傾聽街角聲音」三峽街友與弱勢陪伴行動成果集', '北大特區青銀共融生活提案建議書'],
    studentFeedback: '「走進收容所之前我對無家者充滿刻板恐懼，坐下來聽完他們的人生故事，才明白每個人都值得被溫柔對待。」',
    teacherReflection: '「社工給我們回饋說：高中生能有這樣深刻的同理心令人驚艷，這正是深度學習所追求的靈魂。」',
    challenges: ['行動方案時程緊湊，部分小組執行進度落後', '外部社工與訪談資源需教師大量前期引導'],
    recommendations: ['將時程分階段推進，設置每兩週里程碑檢討會議', '評量機制加入個人自評與同儕互評防範搭便車']
  },

  // GROUP G
  {
    id: 'g-2-tnsfhs',
    group: 'G',
    groupOrder: 2,
    title: '臺南400：信仰與族群',
    school: '國立臺南第一高級中學',
    teachers: ['蔡良昇 教師'],
    region: '南部',
    schoolType: '國立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 38,
    pageStart: 229,
    summary: '呼應臺南建城400年歷史坐標，穿梭府城各大廟宇、基督教會、清真寺與原住民西拉雅祭祀場域，探討信仰背後跨越四百年的族群共融與衝突流變。',
    pedagogicalPractice: '宗教文化人類學田野調查、口述歷史訪談、歷史地理景觀復原。',
    learningPartnership: '國立成功大學歷史系教授指導、臺南文化局文資處、在地文史耆老。',
    learningEnvironment: '臺南中西區歷史古蹟核心區、南一中竹園崗人文思辨講堂。',
    digitalLeveraging: '中央研究院歷史百年地圖 GIS 疊合系統、360度廟宇全景數位導覽、文史專題網頁。',
    competencies: {
      character: 4.3,
      citizenship: 4.8,
      collaboration: 4.5,
      communication: 4.7,
      creativity: 4.5,
      criticalThinking: 4.9
    },
    rubricStats: {
      dimension: '批判思考 - 宗教信仰與多族群權力互動之深度辨析',
      pre: { limited: 15, emerging: 45, developing: 30, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 50, proficient: 40 }
    },
    keyOutcomes: ['府城400年宗教族群文化地圖專題網站', '西拉雅族信仰復振青年田野調查報告'],
    studentFeedback: '「站在開山神社與延平郡王祠前，一層層撥開不同政權刻在同一座建築上的印記，歷史頓時變得立體震撼。」',
    teacherReflection: '「南一中學生論述底蘊深厚，透過 NPDL 規準將零散的訪談觀察提煉為系統性學術小論文。」',
    challenges: ['宗教儀式與傳統禁忌需要嚴謹的前置倫理教育', '期末專題格式要求高導致學生負擔較大'],
    recommendations: ['建立田野倫理與宗教訪談守則 SOP', '將優秀作品編纂為《竹園青年文史研究年刊》']
  },
  {
    id: 'g-3-dths',
    group: 'G',
    groupOrder: 3,
    title: '自然科探究與實作 - 物理科學數據模型與環境微氣象',
    school: '臺北市立大同高級中學',
    teachers: ['蕭琬莉 教師'],
    region: '北部',
    schoolType: '市立普通高中',
    courseType: '探究與實作',
    grade: '高二',
    credits: 2,
    totalHours: 36,
    studentCount: 40,
    pageStart: 238,
    summary: '以生活中常見的流體力學與熱傳導為題材，學生自主提出探究問題、設計對照實驗、運用 Python / Excel 進行數據擬合與模型驗證。',
    pedagogicalPractice: '引導式科學探究 (Guided Scientific Inquiry)、控制變因實驗設計、同儕審查機制 (Peer Review)。',
    learningPartnership: '國立臺灣師範大學物理系教授指導、校內科展金牌教師指導團。',
    learningEnvironment: '大同高中物理專業實驗室、數據分析微電腦教室。',
    digitalLeveraging: 'Vernier 數位感測器、Tracker 慢速動態影像軌跡分析、Python 科學數據繪圖。',
    competencies: {
      character: 4.4,
      citizenship: 4.1,
      collaboration: 4.6,
      communication: 4.6,
      creativity: 4.5,
      criticalThinking: 4.9
    },
    rubricStats: {
      dimension: '批判性思考與科學探究 - 實驗數據建模與誤差深度辨析',
      pre: { limited: 20, emerging: 45, developing: 25, proficient: 10 },
      post: { limited: 0, emerging: 10, developing: 45, proficient: 45 }
    },
    keyOutcomes: ['10篇具備同儕審查機制之科學探究完整論文', '高中生物理探究實驗設計與除錯標準手冊'],
    studentFeedback: '「實驗數據和理論公式不合時超崩潰，但在老師引導下反覆檢查系統誤差，終於抓出問題的那刻真的狂喜！」',
    teacherReflection: '「科學探究的本質在於面對『失敗與異常數據』時的批判性思考，NPDL 規準完美呼應了課綱素養核心。」',
    challenges: ['學生在初期提出假說時容易過於發散難以收斂', '實驗器材預約與校準耗費實驗室管理精力'],
    recommendations: ['設置「探究問題初審委員會」在開學第二週快速把關可行性', '推動跨校自然科實驗數據公開共享庫']
  }
];

export interface SchoolAggregate {
  name: string;
  region: string;
  type: string;
  coursesCount: number;
  totalStudents: number;
  avg6C: number;
  avgPedagogy: number;
  avgPartnership: number;
  avgEnvironment: number;
  avgDigital: number;
  spotlightCourse: string;
}

export const SCHOOL_AGGREGATES: SchoolAggregate[] = [
  {
    name: '國立花蓮高級中學',
    region: '東部',
    type: '國立普通高中',
    coursesCount: 2,
    totalStudents: 65,
    avg6C: 4.63,
    avgPedagogy: 92,
    avgPartnership: 94,
    avgEnvironment: 89,
    avgDigital: 93,
    spotlightCourse: '搶救海洋大作戰 / 萬物聯網智慧微電網 (跨校共備)'
  },
  {
    name: '國立基隆高級中學',
    region: '北部',
    type: '國立普通高中',
    coursesCount: 2,
    totalStudents: 60,
    avg6C: 4.54,
    avgPedagogy: 88,
    avgPartnership: 92,
    avgEnvironment: 84,
    avgDigital: 90,
    spotlightCourse: '在地走讀趣 / 智慧電網之儲能創能 (與花中跨校共備)'
  },
  {
    name: '國立臺東高級中學',
    region: '東部',
    type: '國立普通高中',
    coursesCount: 2,
    totalStudents: 62,
    avg6C: 4.57,
    avgPedagogy: 89,
    avgPartnership: 88,
    avgEnvironment: 86,
    avgDigital: 83,
    spotlightCourse: 'SDGs全球公民對話 / 澳洲籃球中學生跨國交流'
  },
  {
    name: '新北市立永平高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 2,
    totalStudents: 82,
    avg6C: 4.56,
    avgPedagogy: 90,
    avgPartnership: 85,
    avgEnvironment: 88,
    avgDigital: 89,
    spotlightCourse: 'SDGs創意行銷 / 綠色生活地圖城市問題進階探究'
  },
  {
    name: '國立新竹高級商業職業學校',
    region: '桃竹苗',
    type: '技術型高中',
    coursesCount: 2,
    totalStudents: 74,
    avg6C: 4.45,
    avgPedagogy: 86,
    avgPartnership: 84,
    avgEnvironment: 82,
    avgDigital: 88,
    spotlightCourse: '一電銷鄉愁 / 從鹿港乘桴記發現新竹之美'
  },
  {
    name: '臺北市數位實驗高級中等學校',
    region: '北部',
    type: '實驗中學',
    coursesCount: 1,
    totalStudents: 65,
    avg6C: 4.72,
    avgPedagogy: 95,
    avgPartnership: 87,
    avgEnvironment: 96,
    avgDigital: 98,
    spotlightCourse: '設計思考 (10位跨域教師協同突破)'
  },
  {
    name: '國立臺南第一高級中學',
    region: '南部',
    type: '國立普通高中',
    coursesCount: 1,
    totalStudents: 38,
    avg6C: 4.62,
    avgPedagogy: 91,
    avgPartnership: 89,
    avgEnvironment: 87,
    avgDigital: 85,
    spotlightCourse: '臺南400：信仰與族群 (文史田野小論文)'
  },
  {
    name: '新北市立北大高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 42,
    avg6C: 4.65,
    avgPedagogy: 90,
    avgPartnership: 91,
    avgEnvironment: 85,
    avgDigital: 82,
    spotlightCourse: 'Youth in Action : SDGs 實踐方案改寫在地未來'
  },
  {
    name: '新北市立林口高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 120,
    avg6C: 4.52,
    avgPedagogy: 89,
    avgPartnership: 78,
    avgEnvironment: 84,
    avgDigital: 94,
    spotlightCourse: 'Game On - 生成式AI與Twine歷史遊戲探究'
  },
  {
    name: '義大國際高級中學',
    region: '南部',
    type: '私立雙語/國際中學',
    coursesCount: 1,
    totalStudents: 45,
    avg6C: 4.68,
    avgPedagogy: 93,
    avgPartnership: 86,
    avgEnvironment: 90,
    avgDigital: 88,
    spotlightCourse: 'HOW DO I LIVE? 白色恐怖模擬法庭審判體驗'
  },
  {
    name: '慈濟大學附屬高級中學',
    region: '東部',
    type: '私立雙語/國際中學',
    coursesCount: 1,
    totalStudents: 85,
    avg6C: 4.65,
    avgPedagogy: 91,
    avgPartnership: 95,
    avgEnvironment: 89,
    avgDigital: 86,
    spotlightCourse: '國際關懷與行動 (跨國人道救援與共感)'
  },
  {
    name: '國立嘉科實驗高級中等學校',
    region: '南部',
    type: '實驗中學',
    coursesCount: 1,
    totalStudents: 42,
    avg6C: 4.57,
    avgPedagogy: 88,
    avgPartnership: 92,
    avgEnvironment: 91,
    avgDigital: 90,
    spotlightCourse: '南院遊於藝 (故宮南院美學 × 3D列印創客)'
  },
  {
    name: '臺北市立麗山高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 36,
    avg6C: 4.48,
    avgPedagogy: 87,
    avgPartnership: 81,
    avgEnvironment: 83,
    avgDigital: 84,
    spotlightCourse: '鄭成功人物形象多維史料批判探索'
  },
  {
    name: '臺北市立大同高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 40,
    avg6C: 4.52,
    avgPedagogy: 90,
    avgPartnership: 79,
    avgEnvironment: 86,
    avgDigital: 89,
    spotlightCourse: '自然科探究與實作 - 物理科學數據模型'
  },
  {
    name: '新北市立三民高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 32,
    avg6C: 4.60,
    avgPedagogy: 89,
    avgPartnership: 82,
    avgEnvironment: 86,
    avgDigital: 87,
    spotlightCourse: '多元文本與實作—Issues on Refugees (全英模聯)'
  },
  {
    name: '新北市立竹圍高級中學',
    region: '北部',
    type: '市立普通高中',
    coursesCount: 1,
    totalStudents: 32,
    avg6C: 4.38,
    avgPedagogy: 86,
    avgPartnership: 80,
    avgEnvironment: 85,
    avgDigital: 78,
    spotlightCourse: '國文課的自我探索：甲骨文植栽微風景'
  }
];

export interface ImprovementRecommendation {
  id: string;
  category: '規準校準與評量' | '學習夥伴與社群' | '高階數位與AI' | '形成性反思與心理' | '跨校制度與政策';
  level: '教師個別層次' | '校內跨域社群' | '全國跨校聯盟';
  urgency: '高' | '中' | '長期深耕';
  title: string;
  painPoint: string;
  actionPlan: string[];
  expectedImpact: string;
  targetRubric6C: string[];
}

export const IMPROVEMENT_RECOMMENDATIONS: ImprovementRecommendation[] = [
  {
    id: 'rec-1',
    category: '規準校準與評量',
    level: '全國跨校聯盟',
    urgency: '高',
    title: '建構全國跨校 NPDL 規準「常模錨定庫」與標準作品鑑賞規準',
    painPoint: '多校教師反映：在「萌芽 (Emerging)」與「發展 (Developing)」階層認定上主觀落差較大，導致跨校評估信度受限，尤其在品格與協作質性指標上難以標準化。',
    actionPlan: [
      '由陳佩英教授團隊與領先學校（如花中、基中、數位實中）彙整本屆20+課程之典型學生佐證作品',
      '建立線上「NPDL 錨定範本資料庫」，提供四階規準的真實影音、報告文字與評析註解',
      '學期初辦理跨校「盲審校準工作坊 (Calibration Workshop)」，讓各校教師在相同標準尺規下取得評分共識'
    ],
    expectedImpact: '跨校評量信度提升 40% 以上，並讓新手教師接軌 NPDL 備課時間縮短 3 週。',
    targetRubric6C: ['批判思考', '品格力', '協作力']
  },
  {
    id: 'rec-2',
    category: '學習夥伴與社群',
    level: '校內跨域社群',
    urgency: '高',
    title: '由「班級內分組」跨越至「真實世界雙向互惠外部夥伴關係」',
    painPoint: '現行課程中四大要素得分最低者為「學習夥伴 (76.8分)」，多數課程仍停留在班級內同儕分組，未能深度串聯社區長者、NGO、企業或國際學術資源。',
    actionPlan: [
      '借鏡北大高中（芒草心無家者社工）、花蓮高中（黑潮基金會）之成功典範，簽訂產官學社三年長約',
      '課程目標由「學生期末展示給家長看」轉化為「真正解決外部夥伴痛點之交付產出（如無家者倡議、老街電商、海廢指南）」',
      '引進校外夥伴擔任期末「真實受眾評審團」，提供產業第一線質性反饋'
    ],
    expectedImpact: '學習夥伴關係指標由 76.8 提升至 88 分以上，學生「公民素養」與「受眾溝通意識」大幅深化。',
    targetRubric6C: ['公民素養', '溝通力', '品格力']
  },
  {
    id: 'rec-3',
    category: '高階數位與AI',
    level: '教師個別層次',
    urgency: '中',
    title: '突破「數位傳遞」層次，推進「生成式 AI 人機協作思辨與數據真實建模」',
    painPoint: '部分學校將數位利用停留在 Google Classroom 繳交作業、Canva 美編排版等低階工具，欠缺高階因果建模、AI幻覺辨析與演算法反思。',
    actionPlan: [
      '推廣林口高中（Game Jam + Twine + AI）及基中/花中（物聯網微電網即時串流）之技術範式',
      '在課程中增設「AI 幻覺與史料對抗測試 (Red-Teaming)」環節，評量學生如何抓出 AI 生成內容之史實破綻',
      '引進低代碼資料可視化與開源感測工具箱，降低自然科與人文科之數位技術門檻'
    ],
    expectedImpact: '學生創造力自評滿意度突破 90%，高階數位賦能不再受限於少數資優班，普及至全體選修學生。',
    targetRubric6C: ['創造力', '批判思考', '數位利用']
  },
  {
    id: 'rec-4',
    category: '形成性反思與心理',
    level: '教師個別層次',
    urgency: '高',
    title: '導入「微型敏捷週記 (Micro-Reflections)」與個人自評互評機制，破解「搭便車」',
    painPoint: '北大高中、永平高中教師均指出：專案後期因成員參與度不均出現搭便車（Free-rider）現象，且學期末單次後測無法及時捕捉學習過程中的心理挫折。',
    actionPlan: [
      '每兩週實施 5 分鐘「敏捷三問 (Scrum Check-in)」：本週我完成了什麼？我遇到了什麼阻礙？下一週如何改進？',
      '將小組總分與個人「同儕匿名貢獻度係數 (Contribution Weight)」掛鉤，保障積極付出學生權益',
      '導入心理安全感量表，鼓勵學生在組內勇敢承認知識漏洞並向同儕求援'
    ],
    expectedImpact: '團隊搭便車投訴率下降 75%，學生恆毅力與後設認知反思能力顯著增長。',
    targetRubric6C: ['協作力', '品格力']
  },
  {
    id: 'rec-5',
    category: '跨校制度與政策',
    level: '全國跨校聯盟',
    urgency: '長期深耕',
    title: '將「花蓮高中 × 基隆高中跨山海共備」機制化，建立常態性城鄉雲端同盟',
    painPoint: '東部及非都會區學校（如花蓮、臺東）擁有豐富的海洋、原民與生態資源，但因地理距離與外部專家邀約不易，單校備課負擔沉重。',
    actionPlan: [
      '建請教育部國教署針對「跨校遠距雙師協同（線上專題主講 + 線下實體帶領）」編列常態性加給與減授鐘點',
      '建立「東西校際姊妹學科共備群」：將西部都會學校之科技/商管資源與東部學校之海洋/文化優勢進行雙向互融',
      '設立「每年兩次全國 NPDL 青年學生線上跨校高峰會」，讓學生直接向不同縣市同儕發表成果'
    ],
    expectedImpact: '有效消弭城鄉教育資源落差，促進台灣高中教育跨地域、跨學科之共好共榮。',
    targetRubric6C: ['協作力', '公民素養', '溝通力']
  }
];
