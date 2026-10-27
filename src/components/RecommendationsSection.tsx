import React, { useState } from 'react';
import { IMPROVEMENT_RECOMMENDATIONS, ImprovementRecommendation } from '../data/npdlData';
import { 
  Lightbulb, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, 
  Layers, Users, Sparkles, Clock, Target, Download, FileText 
} from 'lucide-react';

export const RecommendationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  const filteredRecs = IMPROVEMENT_RECOMMENDATIONS.filter(r => {
    const matchCat = selectedCategory === 'ALL' || r.category === selectedCategory;
    const matchLvl = selectedLevel === 'ALL' || r.level === selectedLevel;
    return matchCat && matchLvl;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" /> 校際成果深層洞察與 5 大關鍵改善處方
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            針對 2026 校際發表會各校暴露之瓶頸（如評量主觀、外部夥伴薄弱、搭便車、城鄉數位落差），擬定立即可落地之行動清單
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center gap-2 shadow-sm self-start md:self-auto"
        >
          <Download className="w-4 h-4" /> 列印 / 匯出行動指南
        </button>
      </div>

      {/* 3-Tier Governance Matrix Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
          <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">層次一</div>
          <h3 className="text-base font-extrabold text-blue-950 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-blue-600" /> 教師教學實踐層次
          </h3>
          <p className="text-xs text-blue-900/80 mt-1.5 leading-relaxed">
            聚焦於微型敏捷週記、個人自評防範搭便車、引入 AI 史料對抗驗證，提升學生在課堂中的後設認知與反思深度。
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">層次二</div>
          <h3 className="text-base font-extrabold text-emerald-950 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-600" /> 校內跨域社群 (PLC)
          </h3>
          <p className="text-xs text-emerald-900/80 mt-1.5 leading-relaxed">
            打破單科單兵作戰，建立「歷史+科技+地理」跨科共備機制，與在地社區、NGO簽訂三年長期夥伴備忘錄。
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200">
          <div className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1">層次三</div>
          <h3 className="text-base font-extrabold text-purple-950 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-purple-600" /> 全國聯盟與國教署政策
          </h3>
          <p className="text-xs text-purple-900/80 mt-1.5 leading-relaxed">
            建置全國 NPDL 規準常模錨定資料庫，推動「跨校遠距雙師協同（如花中×基中）」課綱制度化加給與排課支持。
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-slate-600">領域分類：</span>
          {['ALL', '規準校準與評量', '學習夥伴與社群', '高階數位與AI', '形成性反思與心理', '跨校制度與政策'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'ALL' ? '全部領域' : cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-600">層級：</span>
          {['ALL', '教師個別層次', '校內跨域社群', '全國跨校聯盟'].map(lvl => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                selectedLevel === lvl 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl === 'ALL' ? '全部層級' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Action Plan Cards */}
      <div className="space-y-6">
        {filteredRecs.map((rec, index) => (
          <div
            key={rec.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow space-y-6"
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-800">
                    策略 0{index + 1} ｜ {rec.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    {rec.level}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                    rec.urgency === '高' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    優先級：{rec.urgency}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {rec.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                {rec.targetRubric6C.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    強化 {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Pain Point Diagnostic */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
              <div className="flex items-start gap-2 text-xs">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-950 block mb-0.5 font-bold">現狀診斷瓶頸 (Observed Pain Point)：</strong>
                  <span className="text-rose-900 leading-relaxed">{rec.painPoint}</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Action Plan */}
            <div>
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 具體執行處方 (Step-by-Step Action Protocols)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {rec.actionPlan.map((action, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-between">
                    <div>
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[11px] mb-2">
                        {i + 1}
                      </span>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        {action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Impact */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-950 font-bold">預期躍升成效：</span>
                <span className="text-emerald-900">{rec.expectedImpact}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
