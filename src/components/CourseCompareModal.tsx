import React, { useState } from 'react';
import { CourseCase, NPDL_COURSES, NPDL_6C_DESCRIPTIONS } from '../data/npdlData';
import { X, ArrowRightLeft, BookOpen, Users, Layers, Laptop, Award } from 'lucide-react';

interface CourseCompareModalProps {
  initialCourseA: CourseCase;
  onClose: () => void;
}

export const CourseCompareModal: React.FC<CourseCompareModalProps> = ({ initialCourseA, onClose }) => {
  const [courseAId, setCourseAId] = useState<string>(initialCourseA.id);
  const [courseBId, setCourseBId] = useState<string>(() => {
    // Default course B to another school or Spotlight course
    const candidate = NPDL_COURSES.find(c => c.id !== initialCourseA.id && (c.id === 'g-1-hlhs-klhs' || c.id === 'c-2-hlhs' || c.id === 'e-1-tsdes'));
    return candidate ? candidate.id : NPDL_COURSES[0].id;
  });

  const courseA = NPDL_COURSES.find(c => c.id === courseAId) || initialCourseA;
  const courseB = NPDL_COURSES.find(c => c.id === courseBId) || NPDL_COURSES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">校際雙向深度對比分析 (Side-by-Side Benchmark)</h2>
              <p className="text-xs sm:text-sm text-slate-400">對照兩所高中在 NPDL 深度學習四要素、6C素養規準與轉化實踐之差異與互補性</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* School Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50 p-4 border-b border-slate-200">
          {/* Selector A */}
          <div className="p-2 space-y-1">
            <label className="text-xs font-bold text-blue-700 uppercase tracking-wider block">【基準案例 A】選擇課程：</label>
            <select
              value={courseAId}
              onChange={(e) => setCourseAId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {NPDL_COURSES.map(c => (
                <option key={c.id} value={c.id}>
                  [{c.group}組] {c.school} - {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Selector B */}
          <div className="p-2 space-y-1">
            <label className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">【對照案例 B】選擇課程：</label>
            <select
              value={courseBId}
              onChange={(e) => setCourseBId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {NPDL_COURSES.map(c => (
                <option key={c.id} value={c.id}>
                  [{c.group}組] {c.school} - {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Basic Info Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box A */}
            <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white">{courseA.region}．{courseA.schoolType}</span>
                <span className="text-xs font-semibold text-blue-700">{courseA.grade} / {courseA.studentCount}人</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{courseA.title}</h3>
              <div className="text-xs text-slate-600 mt-1 mb-3">學校：<strong>{courseA.school}</strong> ｜ 教師：{courseA.teachers.join('、')}</div>
              <p className="text-xs leading-relaxed text-slate-700">{courseA.summary}</p>
            </div>

            {/* Box B */}
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">{courseB.region}．{courseB.schoolType}</span>
                <span className="text-xs font-semibold text-emerald-700">{courseB.grade} / {courseB.studentCount}人</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{courseB.title}</h3>
              <div className="text-xs text-slate-600 mt-1 mb-3">學校：<strong>{courseB.school}</strong> ｜ 教師：{courseB.teachers.join('、')}</div>
              <p className="text-xs leading-relaxed text-slate-700">{courseB.summary}</p>
            </div>
          </div>

          {/* 6C Competency Matrix Direct Comparison */}
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-600" /> 6C 全球核心素養對比 (1.0 - 5.0)
            </h3>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-xs border-b border-slate-200">
                  <tr>
                    <th className="p-3">6C 素養維度</th>
                    <th className="p-3 text-blue-700 bg-blue-50/50 w-2/5">案例 A：{courseA.school.replace('高級中學', '').replace('高級商業職業學校', '高商')}</th>
                    <th className="p-3 text-emerald-700 bg-emerald-50/50 w-2/5">案例 B：{courseB.school.replace('高級中學', '').replace('高級商業職業學校', '高商')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {NPDL_6C_DESCRIPTIONS.map(c => {
                    const valA = courseA.competencies[c.key as keyof typeof courseA.competencies];
                    const valB = courseB.competencies[c.key as keyof typeof courseB.competencies];
                    const diff = valA - valB;

                    return (
                      <tr key={c.key} className="hover:bg-slate-50/80">
                        <td className="p-3 font-semibold text-slate-800 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                          {c.name.split(' ')[0]}
                        </td>
                        <td className="p-3 bg-blue-50/30">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-800">{valA.toFixed(1)}</span>
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden max-w-[120px]">
                              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${(valA / 5) * 100}%` }} />
                            </div>
                          </div>
                        </td>
                        <td className="p-3 bg-emerald-50/30">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-emerald-800">{valB.toFixed(1)}</span>
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden max-w-[120px]">
                              <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${(valB / 5) * 100}%` }} />
                            </div>
                            <span className="text-[11px] text-slate-400 font-medium">
                              ({diff > 0 ? `+${diff.toFixed(1)} A勝` : diff < 0 ? `+${Math.abs(diff).toFixed(1)} B勝` : '持平'})
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4 Quadrants Detailed Comparison */}
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-indigo-600" /> NPDL 四大維度落實方式對照
            </h3>
            <div className="space-y-4">
              {/* Row 1: Pedagogical Practices */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <BookOpen className="w-4 h-4 text-blue-600" /> 1. 教學實踐 (Pedagogical Practices)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-blue-50/60 text-slate-700 leading-relaxed border-l-4 border-blue-500">
                    <strong className="text-blue-900 block mb-1">【{courseA.school}】</strong>
                    {courseA.pedagogicalPractice}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/60 text-slate-700 leading-relaxed border-l-4 border-emerald-500">
                    <strong className="text-emerald-900 block mb-1">【{courseB.school}】</strong>
                    {courseB.pedagogicalPractice}
                  </div>
                </div>
              </div>

              {/* Row 2: Learning Partnerships */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <Users className="w-4 h-4 text-emerald-600" /> 2. 學習夥伴關係 (Learning Partnerships)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-blue-50/60 text-slate-700 leading-relaxed border-l-4 border-blue-500">
                    <strong className="text-blue-900 block mb-1">【{courseA.school}】</strong>
                    {courseA.learningPartnership}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/60 text-slate-700 leading-relaxed border-l-4 border-emerald-500">
                    <strong className="text-emerald-900 block mb-1">【{courseB.school}】</strong>
                    {courseB.learningPartnership}
                  </div>
                </div>
              </div>

              {/* Row 3: Learning Environments */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <Layers className="w-4 h-4 text-amber-600" /> 3. 學習環境 (Learning Environments)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-blue-50/60 text-slate-700 leading-relaxed border-l-4 border-blue-500">
                    <strong className="text-blue-900 block mb-1">【{courseA.school}】</strong>
                    {courseA.learningEnvironment}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/60 text-slate-700 leading-relaxed border-l-4 border-emerald-500">
                    <strong className="text-emerald-900 block mb-1">【{courseB.school}】</strong>
                    {courseB.learningEnvironment}
                  </div>
                </div>
              </div>

              {/* Row 4: Digital Leveraging */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/40">
                <div className="flex items-center gap-2 font-bold text-slate-800 text-sm mb-3">
                  <Laptop className="w-4 h-4 text-purple-600" /> 4. 數位利用 (Digital Leveraging)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-blue-50/60 text-slate-700 leading-relaxed border-l-4 border-blue-500">
                    <strong className="text-blue-900 block mb-1">【{courseA.school}】</strong>
                    {courseA.digitalLeveraging}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/60 text-slate-700 leading-relaxed border-l-4 border-emerald-500">
                    <strong className="text-emerald-900 block mb-1">【{courseB.school}】</strong>
                    {courseB.digitalLeveraging}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-School Synergy Insights */}
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
            <h4 className="text-xs sm:text-sm font-bold text-indigo-900 mb-1">💡 跨校共備與互補性洞察 (Synergy Takeaways)</h4>
            <p className="text-xs text-indigo-800 leading-relaxed">
              此兩門課程分別體現了不同的 NPDL 突破口：一端側重於真實社會倡議與夥伴串聯，另一端則在數位高階建模或跨領域實作深耕。若能藉由全國聯盟進行「雙校聯展」或「學生作品交叉互審」，將能創造 1+1 &gt; 2 的深度學習外溢效應。
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 px-6 flex justify-end border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white transition-colors"
          >
            結束對比檢視
          </button>
        </div>
      </div>
    </div>
  );
};
