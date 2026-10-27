import React, { useState } from 'react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend 
} from 'recharts';
import { NPDL_6C_DESCRIPTIONS, NPDL_COURSES } from '../data/npdlData';
import { 
  Award, Globe, Brain, Sparkles, Users, MessageSquare, 
  ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Bookmark 
} from 'lucide-react';

export const CompetencyRubricSection: React.FC = () => {
  const [activeCompetencyKey, setActiveCompetencyKey] = useState<string>('citizenship');

  const activeComp = NPDL_6C_DESCRIPTIONS.find(c => c.key === activeCompetencyKey) || NPDL_6C_DESCRIPTIONS[0];

  // Pre vs Post aggregated rubric shift data
  const prePostData = [
    { level: '起步 (Limited)', pre: 22.5, post: 0.8, fillPre: '#f87171', fillPost: '#fca5a5' },
    { level: '萌芽 (Emerging)', pre: 44.7, post: 14.7, fillPre: '#fbbf24', fillPost: '#fde68a' },
    { level: '發展 (Developing)', pre: 25.3, post: 48.6, fillPre: '#38bdf8', fillPost: '#0284c7' },
    { level: '熟練 (Proficient)', pre: 7.5, post: 35.9, fillPre: '#34d399', fillPost: '#059669' },
  ];

  // Top courses excelling in this competency
  const topCourses = [...NPDL_COURSES].sort((a, b) => {
    return (b.competencies[activeComp.key as keyof typeof b.competencies] || 0) - 
           (a.competencies[activeComp.key as keyof typeof a.competencies] || 0);
  }).slice(0, 4);

  const getIcon = (key: string) => {
    switch (key) {
      case 'citizenship': return <Globe className="w-5 h-5" />;
      case 'criticalThinking': return <Brain className="w-5 h-5" />;
      case 'creativity': return <Sparkles className="w-5 h-5" />;
      case 'collaboration': return <Users className="w-5 h-5" />;
      case 'communication': return <MessageSquare className="w-5 h-5" />;
      case 'character': return <ShieldCheck className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-500" /> NPDL 6C 全球核心素養規準與前後測躍升
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          解析 2026 校際成果展中「起步 → 萌芽 → 發展 → 熟練」四階規準之質性標準、真實學生佐證與前後測躍遷大數據
        </p>
      </div>

      {/* Aggregate Shift Overview Chart */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> 全國聯盟 6C 素養四階層級前後測分布位移
            </h3>
            <p className="text-xs text-slate-500">
              前測基準中，近 67.2% 學生處於「起步與萌芽」；歷經一學期深度學習探究後，84.5% 學生躍升至「發展與熟練」高階素養！
            </p>
          </div>
          <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            高階素養淨成長率：+51.7%
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={prePostData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="level" tick={{ fill: '#334155', fontSize: 12, fontWeight: 'bold' }} />
              <YAxis unit="%" tick={{ fill: '#64748b', fontSize: 11 }} />
              <Tooltip formatter={(value: any) => [`${value}%`, '']} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar name="前測占比 (Pre-test %)" dataKey="pre" fill="#94a3b8" radius={[6, 6, 0, 0]} />
              <Bar name="後測成果 (Post-test %)" dataKey="post" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 6C Competency Interactive Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {NPDL_6C_DESCRIPTIONS.map(c => {
          const isActive = c.key === activeCompetencyKey;
          return (
            <button
              key={c.key}
              onClick={() => setActiveCompetencyKey(c.key)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-102 ring-2 ring-blue-500/50'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div 
                  className={`p-2 rounded-xl ${
                    isActive ? 'bg-white/10 text-white' : 'bg-slate-100'
                  }`}
                  style={{ color: isActive ? '#fff' : c.color }}
                >
                  {getIcon(c.key)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                  {c.en}
                </span>
              </div>
              <div>
                <div className="text-sm font-black">{c.name.split(' ')[0]}</div>
                <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {c.name.split(' ')[1]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Competency Deep Dive Container */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Competency Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
              style={{ backgroundColor: activeComp.color }}
            >
              {getIcon(activeComp.key)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeComp.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  NPDL 核心維度
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {activeComp.description}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Tier Rubric Progression Matrix */}
        <div>
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-blue-600" /> 質性評量規準 (4-Tier Progressive Rubrics)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Level 1: Limited */}
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-rose-200 text-rose-900">階層 1</span>
                  <span className="text-xs font-bold text-rose-700">起步 / 有限</span>
                </div>
                <div className="text-xs text-rose-950 font-semibold mb-1">Limited</div>
                <p className="text-xs text-rose-900 leading-relaxed">
                  {activeComp.levels.limited}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-rose-200/60 text-[11px] text-rose-700 font-medium">
                前測佔比 22.5% → 後測降至 0.8%
              </div>
            </div>

            {/* Level 2: Emerging */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-amber-200 text-amber-900">階層 2</span>
                  <span className="text-xs font-bold text-amber-700">萌芽</span>
                </div>
                <div className="text-xs text-amber-950 font-semibold mb-1">Emerging</div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {activeComp.levels.emerging}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-200/60 text-[11px] text-amber-700 font-medium">
                前測佔比 44.7% → 後測降至 14.7%
              </div>
            </div>

            {/* Level 3: Developing */}
            <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-sky-200 text-sky-900">階層 3</span>
                  <span className="text-xs font-bold text-sky-700">發展</span>
                </div>
                <div className="text-xs text-sky-950 font-semibold mb-1">Developing</div>
                <p className="text-xs text-sky-900 leading-relaxed">
                  {activeComp.levels.developing}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-sky-200/60 text-[11px] text-sky-700 font-medium">
                前測佔比 25.3% → 後測躍升至 48.6%
              </div>
            </div>

            {/* Level 4: Proficient */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-200 text-emerald-900">階層 4</span>
                  <span className="text-xs font-bold text-emerald-700">熟練 / 精熟</span>
                </div>
                <div className="text-xs text-emerald-950 font-semibold mb-1">Proficient</div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {activeComp.levels.proficient}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-700 font-medium">
                前測佔比 7.5% → 後測躍升至 35.9%
              </div>
            </div>

          </div>
        </div>

        {/* Representative Exemplary Schools in this Competency */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            本素養維度典範課程 (Top Performing Cases)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topCourses.map(course => {
              const score = course.competencies[activeComp.key as keyof typeof course.competencies];
              return (
                <div key={course.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                      <span>{course.group}組 ｜ {course.region}</span>
                      <strong className="text-indigo-600 font-bold">{score.toFixed(1)} / 5.0</strong>
                    </div>
                    <div className="font-bold text-slate-900 line-clamp-1">{course.title}</div>
                    <div className="text-slate-600 text-[11px] mt-0.5">{course.school}</div>
                  </div>
                  <div className="mt-2 text-[11px] text-emerald-700 font-medium">
                    後測熟練+發展：{course.rubricStats.post.developing + course.rubricStats.post.proficient}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
