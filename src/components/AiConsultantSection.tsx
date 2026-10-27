import React, { useState } from 'react';
import { 
  Sparkles, Send, Lightbulb, BookOpen, Layers, Users, Laptop, 
  CheckCircle2, ArrowRight, ShieldCheck, Compass, RefreshCw, FileText 
} from 'lucide-react';
import { NPDL_6C_DESCRIPTIONS, NPDL_COURSES } from '../data/npdlData';

export const AiConsultantSection: React.FC = () => {
  const [subject, setSubject] = useState<string>('自然科學與科技工程');
  const [grade, setGrade] = useState<string>('高二');
  const [primary6C, setPrimary6C] = useState<string>('criticalThinking');
  const [painPoint, setPainPoint] = useState<string>('free_rider');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null);

  const painPointOptions = [
    { id: 'free_rider', label: '分組協作出現「搭便車」與責任分散 (Free-Riding)' },
    { id: 'lack_partner', label: '缺乏外部真實夥伴，成果僅停留在班級內閉門報告' },
    { id: 'shallow_digital', label: '數位利用停留在 Canva/PPT 表面排版，缺乏高階因果建模' },
    { id: 'subjective_rubric', label: 'NPDL 規準「萌芽與發展」層次模糊，評量標準過於主觀' },
    { id: 'low_resilience', label: '學生面對非標準答案探究時容易挫折，缺乏恆毅力與品格反思' }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Find benchmark school reference based on selections
      let benchmark = NPDL_COURSES[0];
      if (subject.includes('自然') || subject.includes('科技')) {
        benchmark = NPDL_COURSES.find(c => c.id === 'g-1-hlhs-klhs') || NPDL_COURSES[1];
      } else if (subject.includes('海洋') || subject.includes('公民') || subject.includes('SDG')) {
        benchmark = NPDL_COURSES.find(c => c.id === 'c-2-hlhs') || NPDL_COURSES[0];
      } else if (subject.includes('人文') || subject.includes('歷史')) {
        benchmark = NPDL_COURSES.find(c => c.id === 'a-1-lkhs') || NPDL_COURSES[2];
      } else if (subject.includes('藝術') || subject.includes('設計')) {
        benchmark = NPDL_COURSES.find(c => c.id === 'e-1-tsdes') || NPDL_COURSES[3];
      }

      const activeComp = NPDL_6C_DESCRIPTIONS.find(c => c.key === primary6C) || NPDL_6C_DESCRIPTIONS[0];

      setDiagnosisResult({
        title: `【${subject}・${grade}】NPDL 深度學習專案優化處方箋`,
        benchmarkCase: benchmark,
        activeComp: activeComp,
        painPointLabel: painPointOptions.find(p => p.id === painPoint)?.label,
        prescriptions: {
          pedagogy: `將單次大型期末報告拆解為 3 次敏捷疊代衝刺 (Sprints)，設立「里程碑檢核點 (Milestone Review)」。開學前 2 週讓學生鎖定真實問題，而非空泛理論。`,
          partnerships: `導入「三方對話矩陣」：由 ${benchmark.school} 典範經驗借鏡，聯繫在地文教基金會、社區社工或大學研究室擔任「非同步外部業師」，讓學生作業直接向真實利害關係人提案。`,
          environments: `建置「敏捷站立會議 (Scrum Standup)」專屬圓桌角，配合線上協同畫布（如 Miro/Notion），營造組內敢於承認困難與向同儕求援的「高心理安全感學習氛圍」。`,
          digital: `超越投影片製作！導入微型物聯網感測 (IoT)、生成式 AI 史料對抗驗證、或 GIS 空間空間標註，讓數位工具成為輔助「因果論證與假設檢驗」的思考槓桿。`
        },
        rubricCalibration: [
          { level: '起步 (Limited)', text: `被動接受現成解答，團隊內部溝通脫節，主要依賴單一成員完成作業。` },
          { level: '萌芽 (Emerging)', text: `能運用基礎工具蒐集資料，但缺乏多方交叉比對，對外部夥伴反饋較為被動。` },
          { level: '發展 (Developing)', text: `小組能依專長自主分工，運用數位工具產出具備論證支持的原型，並能針對目標受眾調整表達。` },
          { level: '熟練 (Proficient)', text: `展現高度自主影響力，能將探究成果轉化為對真實社區/學校有益之解決方案，並展現深刻後設認知反思。` }
        ],
        antiFreeRiderStrategy: [
          '導入「同儕匿名貢獻度評分 (Peer Contribution Weight)」與個人學習歷程日誌',
          '各組指派輪值 PM（專案經理），每週向教師提交 100 字敏捷進度站立匯報',
          '口試答辯採用「隨機抽選組員主講其中一章節」機制，確保人人皆需精熟'
        ]
      });

      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-600" /> NPDL 課程診療與客製化改善生成器
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          依據 2026 校際發表會 16 校實踐常模，輸入您預計開設或優化之學科課程，即時診斷四維度干預策略與錨定評規
        </p>
      </div>

      {/* Input Diagnosis Panel */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Domain */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">1. 學科領域：</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="自然科學與科技工程">自然科學與科技工程 (物理/生科/物聯網)</option>
              <option value="社會文史與歷史思辨">社會文史與公民探究 (歷史/地理/人權)</option>
              <option value="海洋環境與SDGs永續">海洋環境與SDGs永續 (生態/微氣候/倡議)</option>
              <option value="商管技職與地方創生">商管技職與地方創生 (電商/行銷/文創)</option>
              <option value="藝術美學與跨域創客">藝術美學與跨域創客 (設計思考/3D列印/植栽)</option>
              <option value="雙語國際與人道關懷">雙語國際與人道關懷 (模聯/難民/跨國交流)</option>
            </select>
          </div>

          {/* Grade */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">2. 實施年級：</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="高一">高一 (奠基探索、適應新課綱)</option>
              <option value="高二">高二 (專題實作、加深加廣主力)</option>
              <option value="高三">高三 (進階跨域、微選修自主實踐)</option>
            </select>
          </div>

          {/* 6C Target */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">3. 核心鎖定 6C 素養：</label>
            <select
              value={primary6C}
              onChange={(e) => setPrimary6C(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {NPDL_6C_DESCRIPTIONS.map(c => (
                <option key={c.key} value={c.key}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Current Bottleneck */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">4. 最想克服之課堂瓶頸：</label>
            <select
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {painPointOptions.map(p => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Generate Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" /> 正在運算 NPDL 常模處方...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> 生成專屬 NPDL 診療處方與校準評規
              </>
            )}
          </button>
        </div>
      </div>

      {/* Diagnosis Results Card */}
      {diagnosisResult && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 animate-fade-in">
          
          {/* Prescription Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                  NPDL 專家系統診療報告
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  強化核心：{diagnosisResult.activeComp.name.split(' ')[0]}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {diagnosisResult.title}
              </h3>
              <p className="text-xs text-rose-700 font-semibold mt-1">
                標靶瓶頸：{diagnosisResult.painPointLabel}
              </p>
            </div>

            {/* Benchmark School Tag */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs">
              <span className="text-sky-800 font-bold block mb-1">推薦觀摩學習標竿：</span>
              <strong className="text-slate-900 text-sm">{diagnosisResult.benchmarkCase.school}</strong>
              <div className="text-sky-700 mt-0.5">《{diagnosisResult.benchmarkCase.title}》</div>
            </div>
          </div>

          {/* 4 Quadrants Customized Prescriptions */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" /> 四大要素微調處方 (Tailored 4-Quadrant Adjustments)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" /> 1. 教學實踐優化
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {diagnosisResult.prescriptions.pedagogy}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" /> 2. 學習夥伴關係深化
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {diagnosisResult.prescriptions.partnerships}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-600" /> 3. 學習環境與心理安全
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {diagnosisResult.prescriptions.environments}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
                <div className="font-bold text-purple-900 mb-1 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-purple-600" /> 4. 高階數位利用賦能
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {diagnosisResult.prescriptions.digital}
                </p>
              </div>
            </div>
          </div>

          {/* Calibrated Rubric Levels for this Course */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 客製化四階評規標準校準尺規 (Calibrated Rubric Criteria)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {diagnosisResult.rubricCalibration.map((r: any, idx: number) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-between">
                  <div>
                    <span className="font-extrabold text-slate-800 block mb-1">{r.level}</span>
                    <p className="text-slate-600 leading-relaxed">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anti-Free-Rider Practical Tactics */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950 to-slate-900 text-white space-y-3">
            <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" /> 專屬防便車與團隊賦能執行錦囊 (Anti-Free-Riding Protocols)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-200 pt-1">
              {diagnosisResult.antiFreeRiderStrategy.map((strat: string, i: number) => (
                <div key={i} className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {i + 1}
                  </span>
                  <span>{strat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
