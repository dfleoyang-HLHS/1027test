import React, { useState } from 'react';
import { 
  BookOpen, Users, Layers, Laptop, AlertTriangle, CheckCircle2, 
  ArrowRight, Sparkles, TrendingUp, Compass, ChevronRight 
} from 'lucide-react';
import { SCHOOL_AGGREGATES } from '../data/npdlData';

export const FourQuadrantsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'practice' | 'partnerships' | 'environments' | 'digital'>('partnerships');

  const quadrants = [
    {
      key: 'practice',
      title: '教學實踐 (Pedagogical Practices)',
      en: 'Pedagogical Practices',
      score: 89.8,
      status: '成熟領先',
      color: '#2563eb',
      icon: <BookOpen className="w-5 h-5" />,
      desc: '以真實世界任務、專案式學習 (PBL)、設計思考、議題探究取代傳統照本宣科。教師轉型為專案經理人 (PM) 與學習引導者。',
      strengths: [
        '多元議題結合（海洋保育、白色恐怖法庭、SDGs、智慧電網、地方創生）高度引發學生內在學習動機。',
        '普遍導入分組合作學習與 Game Jam、敏捷衝刺等新興教學法。',
        '評量證據導向：從單一紙筆測驗轉向「遊戲原型、研究論文、導覽手冊、政策建言」真實作品。'
      ],
      bottlenecks: [
        '部分探究主題初期設定過於龐雜發散，導致期末專案收斂時程嚴重吃緊。',
        '教師在「給予鷹架引導」與「放手自主試錯」之間的分寸拿捏仍具挑戰。'
      ],
      innovations: [
        '林口高中：將歷史探究導入 Game Jam 黑客松機制，以卡片盒筆記鏈結遊戲分歧抉擇。',
        '義大國際：設計白色恐怖情境模擬法庭，透過角色扮演引導高張力人權道德思辨。'
      ]
    },
    {
      key: 'partnerships',
      title: '學習夥伴關係 (Learning Partnerships)',
      en: 'Learning Partnerships',
      score: 76.8,
      status: '關鍵待突破瓶頸！',
      color: '#059669',
      icon: <Users className="w-5 h-5" />,
      desc: '深化「師生共學」、「跨校協作」、「社區外部資源」與「跨國交流」。打破單一班級圍牆，讓學生與真實世界專家、受眾建立互惠對話。',
      strengths: [
        '花蓮高中與基隆高中跨越山海隔閡，建立「跨校遠距雙師共備」指標性典範。',
        '臺東高中與澳洲青年俱樂部、三民高中模聯對接跨國非同步交流。'
      ],
      bottlenecks: [
        '全台 16 校均分最低（僅 76.8 分）：過半數教案仍局限在「班級內學生同儕分組」，缺乏外部利害關係人深度參與。',
        '校外專家多僅擔任單向演講嘉賓，未能參與期中指導與期末雙向互惠評鑑。',
        '小組內部出現搭便車（Free-rider）現象，分工不均引發同儕心結。'
      ],
      innovations: [
        '花蓮高中：與在地黑潮海洋文教基金會及海巡單位建立實地護海夥伴關係。',
        '北大高中：攜手芒草心慈善協會與在地社工，進入街友庇護所進行深度田野訪談。',
        '新竹高商：走入新竹舊城區東南亞新住民小吃店，協助新住民媽媽建置專業電商品牌。'
      ]
    },
    {
      key: 'environments',
      title: '學習環境 (Learning Environments)',
      en: 'Learning Environments',
      score: 86.2,
      status: '穩健發揮',
      color: '#d97706',
      icon: <Layers className="w-5 h-5" />,
      desc: '營造具備「心理安全感」的包容氛圍，融合實體教室、戶外場域、數位協同平台與校外博物館/社區空間。',
      strengths: [
        '實體場域高度延伸：七星潭海岸、故宮南院展廳、三峽老街、永和都市熱島公園。',
        '重視探究過程中的心理安全感，鼓勵學生從實驗失敗或程式 bug 中學習。'
      ],
      bottlenecks: [
        '戶外踏查受天候交通限制大，偏鄉或跨區移動之交通保險經費與行政程序繁複。',
        '傳統排排坐教室桌椅不易快速切換為小組衝刺與圓桌研討空間。'
      ],
      innovations: [
        '數位實驗高中：全校打造模組化可移動式家具與造物創客實驗室，完美配合敏捷衝刺。',
        '嘉科實中：將故宮南院常設展廳直接轉化為課堂學習與雙語導覽場域。'
      ]
    },
    {
      key: 'digital',
      title: '數位利用 (Digital Leveraging)',
      en: 'Digital Leveraging',
      score: 87.4,
      status: '高潛力躍進',
      color: '#7c3aed',
      icon: <Laptop className="w-5 h-5" />,
      desc: '運用生成式 AI、物聯網感測 (IoT)、GIS地理資訊系統、線上數位協同平台，從單純數位傳遞邁向「高階因果建模與創造力外顯」。',
      strengths: [
        '新興科技工具廣泛普及：生成式 AI、Twine、Arduino/ESP32、QGIS、Canva、Padlet。',
        '學生能主動利用數位工具進行數據擬合、地圖標繪與多媒體視覺化發表。'
      ],
      bottlenecks: [
        '部分課程停留在 Canva 排版或 Google Classroom 繳作業，缺乏高階演算法思辨或數據分析。',
        '生成式 AI 出現「史實幻覺」與「代寫作業」之學術倫理顧慮，需建立校準辨析機制。'
      ],
      innovations: [
        '基隆高中 × 花蓮高中：運用 ESP32 感測器串聯 ThingSpeak 雲端物聯網，即時監控綠能微電網儲能數據。',
        '永平高中：結合紅外線熱成像儀與 QGIS 空間疊圖，精準測繪永和都市熱島微氣候。'
      ]
    }
  ];

  const currentQ = quadrants.find(q => q.key === activeTab) || quadrants[0];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Layers className="w-6 h-6 text-blue-600" /> NPDL 深度學習四大核心維度全面剖析
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          系統化檢視全台 16 校在「教學實踐、學習夥伴、學習環境、數位利用」之落實深度、結構性痛點與標竿轉型解方
        </p>
      </div>

      {/* 4 Quadrants Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quadrants.map(q => {
          const isActive = q.key === activeTab;
          return (
            <div
              key={q.key}
              onClick={() => setActiveTab(q.key as any)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isActive 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl ring-2 ring-blue-500/50 scale-102' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className={`p-2.5 rounded-xl ${isActive ? 'bg-white/10 text-white' : 'bg-slate-100'}`}
                    style={{ color: isActive ? '#fff' : q.color }}
                  >
                    {q.icon}
                  </div>
                  <span 
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      q.score < 80 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {q.status}
                  </span>
                </div>
                <h3 className="text-base font-extrabold">{q.title.split(' ')[0]}</h3>
                <div className={`text-xs mt-0.5 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                  {q.en}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100/20 flex items-center justify-between">
                <span className="text-xs text-slate-400">落實指數</span>
                <span className="text-2xl font-black" style={{ color: isActive ? '#38bdf8' : q.color }}>
                  {q.score} <span className="text-xs font-normal">分</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Quadrant Detailed Analysis Container */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Title & Core Meaning */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
              style={{ backgroundColor: currentQ.color }}
            >
              {currentQ.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {currentQ.title}
                </h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  落實得分：{currentQ.score} 分
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                {currentQ.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Breakdown: Strengths, Bottlenecks, Exemplary Innovations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. Strengths */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 現階段卓越實踐亮點
              </h4>
              <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed">
                {currentQ.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/60 text-[11px] text-emerald-700 font-medium">
              展現 108 課綱與 NPDL 精神之高度契合
            </div>
          </div>

          {/* 2. Bottlenecks */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> 普遍遭遇之結構性痛點
              </h4>
              <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
                {currentQ.bottlenecks.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold shrink-0">!</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-200/60 text-[11px] text-rose-700 font-medium">
              需在下一輪備課中導入結構性干預策略
            </div>
          </div>

          {/* 3. Exemplary Innovations */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" /> 聯盟標竿學校突破解方
              </h4>
              <ul className="space-y-2 text-xs text-blue-950 leading-relaxed">
                {currentQ.innovations.map((inn, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold shrink-0">★</span>
                    <span>{inn}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200/60 text-[11px] text-blue-700 font-medium">
              可作為其他聯盟學校移植借鏡之標準範例
            </div>
          </div>

        </div>

        {/* Deep Dive Note for Learning Partnerships */}
        {activeTab === 'partnerships' && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <Sparkles className="w-4 h-4" /> 深度策略專題：如何將「同儕分組」蛻變為「真實外部夥伴」？
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed">
              深度學習倡導者 Michael Fullan 指出：「當學習成果只交付給老師批改時，它只是作業；當成果能交付給真實社群甚至解決問題時，它才成為真正的深度學習。」
              聯盟學校在下階段推進中，應積極導入「<strong>三位一體外部夥伴模型</strong>」：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-emerald-50 pt-1">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <strong className="text-white block mb-1">1. 田野真實對象 (Authentic Client)</strong>
                如花蓮黑潮基金會、新竹老店、三峽無家者。讓學生的探究擁有明確的受眾與痛點。
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <strong className="text-white block mb-1">2. 專業教練導師 (Industry Mentor)</strong>
                邀請大學教授、工程師、律師於期中進行 1~2 次線上點評，提供業界實戰視角。
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <strong className="text-white block mb-1">3. 成果真實發布場 (Public Showcase)</strong>
                跳脫教室展示，在地方展館、校園市集或社群平台公開發表，引發大眾迴響。
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
