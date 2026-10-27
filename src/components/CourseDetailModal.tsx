import React from 'react';
import { CourseCase, NPDL_6C_DESCRIPTIONS } from '../data/npdlData';
import { X, Users, BookOpen, Layers, Laptop, Award, AlertTriangle, Lightbulb, Compass, ArrowRight, Quote } from 'lucide-react';

interface CourseDetailModalProps {
  course: CourseCase | null;
  onClose: () => void;
  onCompareWith?: (course: CourseCase) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onCompareWith }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="關閉"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
              分組 {course.group} 組 (第 {course.groupOrder} 門)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-slate-900">
              {course.region}．{course.schoolType}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-200 text-sky-900">
              {course.courseType}
            </span>
            {course.isSpotlight && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500 text-white flex items-center gap-1 shadow-sm">
                <Award className="w-3.5 h-3.5" /> 標竿成果焦點
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {course.title}
          </h2>
          {course.subtitle && (
            <p className="text-sky-100 text-sm sm:text-base mt-1 font-medium">
              {course.subtitle}
            </p>
          )}

          <div className="mt-4 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between text-xs sm:text-sm text-sky-100 gap-y-2">
            <div>
              <span className="text-sky-200">主辦學校：</span>
              <strong className="text-white ml-1">{course.school}</strong>
            </div>
            <div>
              <span className="text-sky-200">執教教師：</span>
              <strong className="text-white ml-1">{course.teachers.join('、')}</strong>
            </div>
            <div>
              <span className="text-sky-200">實施對象：</span>
              <strong className="text-white ml-1">{course.grade}（{course.studentCount}名學生）</strong>
            </div>
            <div>
              <span className="text-sky-200">學分/時數：</span>
              <strong className="text-white ml-1">{course.credits}學分 / {course.totalHours}節</strong>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          
          {/* Executive Summary */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-5">
            <h3 className="text-base font-bold text-sky-900 flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-sky-600" /> 課程核心簡介
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {course.summary}
            </p>
          </div>

          {/* NPDL 4 Quadrants Matrix */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-indigo-600" /> NPDL 深度學習四大核心要素實踐
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pedagogical Practices */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 font-bold text-blue-700 text-sm mb-2">
                  <BookOpen className="w-4 h-4" /> 1. 教學實踐 (Pedagogical Practices)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.pedagogicalPractice}
                </p>
              </div>

              {/* Learning Partnerships */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 font-bold text-emerald-700 text-sm mb-2">
                  <Users className="w-4 h-4" /> 2. 學習夥伴關係 (Learning Partnerships)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.learningPartnership}
                </p>
              </div>

              {/* Learning Environments */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-2 font-bold text-amber-700 text-sm mb-2">
                  <Layers className="w-4 h-4" /> 3. 學習環境 (Learning Environments)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.learningEnvironment}
                </p>
              </div>

              {/* Digital Leveraging */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-colors">
                <div className="flex items-center gap-2 font-bold text-purple-700 text-sm mb-2">
                  <Laptop className="w-4 h-4" /> 4. 數位利用 (Digital Leveraging)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.digitalLeveraging}
                </p>
              </div>
            </div>
          </div>

          {/* 6C Competencies & Rubric Shift */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-600" /> 6C 全球素養達成度與規準前後測躍升
            </h3>
            
            {/* Competency scores pill view */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
              {NPDL_6C_DESCRIPTIONS.map(c => {
                const val = course.competencies[c.key as keyof typeof course.competencies];
                return (
                  <div key={c.key} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-slate-600">{c.name.split(' ')[0]}</div>
                    <div className="text-xl font-extrabold mt-1" style={{ color: c.color }}>
                      {val.toFixed(1)} <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rubric Shift Visualization */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">關鍵規準維度前後測檢驗</div>
              <div className="text-sm font-bold text-slate-800 mb-4">{course.rubricStats.dimension}</div>

              <div className="space-y-4">
                {/* Pre-test bar */}
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span className="font-semibold text-slate-700">前測基準 (Pre-test)</span>
                    <span>起步 {course.rubricStats.pre.limited}% | 萌芽 {course.rubricStats.pre.emerging}% | 發展 {course.rubricStats.pre.developing}% | 熟練 {course.rubricStats.pre.proficient}%</span>
                  </div>
                  <div className="h-6 w-full flex rounded-lg overflow-hidden text-[10px] font-bold text-white text-center leading-6 shadow-inner">
                    <div style={{ width: `${course.rubricStats.pre.limited}%` }} className="bg-rose-400" title={`起步 ${course.rubricStats.pre.limited}%`}>
                      {course.rubricStats.pre.limited > 8 && `${course.rubricStats.pre.limited}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.pre.emerging}%` }} className="bg-amber-400 text-slate-900" title={`萌芽 ${course.rubricStats.pre.emerging}%`}>
                      {course.rubricStats.pre.emerging > 8 && `${course.rubricStats.pre.emerging}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.pre.developing}%` }} className="bg-sky-500" title={`發展 ${course.rubricStats.pre.developing}%`}>
                      {course.rubricStats.pre.developing > 8 && `${course.rubricStats.pre.developing}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.pre.proficient}%` }} className="bg-emerald-500" title={`熟練 ${course.rubricStats.pre.proficient}%`}>
                      {course.rubricStats.pre.proficient > 5 && `${course.rubricStats.pre.proficient}%`}
                    </div>
                  </div>
                </div>

                {/* Post-test bar */}
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <ArrowRight className="w-3.5 h-3.5" /> 後測躍升成果 (Post-test)
                    </span>
                    <span className="font-bold text-emerald-800">
                      發展+熟練高達 {course.rubricStats.post.developing + course.rubricStats.post.proficient}% (躍升 +{(course.rubricStats.post.developing + course.rubricStats.post.proficient) - (course.rubricStats.pre.developing + course.rubricStats.pre.proficient)}%)
                    </span>
                  </div>
                  <div className="h-7 w-full flex rounded-lg overflow-hidden text-[11px] font-bold text-white text-center leading-7 shadow-sm border border-emerald-200">
                    <div style={{ width: `${course.rubricStats.post.limited}%` }} className="bg-rose-400" title={`起步 ${course.rubricStats.post.limited}%`}>
                      {course.rubricStats.post.limited > 0 && `${course.rubricStats.post.limited}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.post.emerging}%` }} className="bg-amber-400 text-slate-900" title={`萌芽 ${course.rubricStats.post.emerging}%`}>
                      {course.rubricStats.post.emerging > 5 && `${course.rubricStats.post.emerging}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.post.developing}%` }} className="bg-sky-500" title={`發展 ${course.rubricStats.post.developing}%`}>
                      {course.rubricStats.post.developing > 5 && `${course.rubricStats.post.developing}%`}
                    </div>
                    <div style={{ width: `${course.rubricStats.post.proficient}%` }} className="bg-emerald-600" title={`熟練 ${course.rubricStats.post.proficient}%`}>
                      {course.rubricStats.post.proficient > 5 && `${course.rubricStats.post.proficient}%`}
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-400 inline-block"></span> 起步 (Limited)</div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-400 inline-block"></span> 萌芽 (Emerging)</div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-sky-500 inline-block"></span> 發展 (Developing)</div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-600 inline-block"></span> 熟練 (Proficient)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Student Works / Deliverables */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2">關鍵學習產出與佐證 (Key Deliverables)</h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {course.keyOutcomes.map((item, i) => (
                <li key={i} className="leading-relaxed"><strong className="text-slate-800">{item}</strong></li>
              ))}
            </ul>
          </div>

          {/* Qualitative Voices: Student & Teacher */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm mb-2">
                <Quote className="w-4 h-4 text-amber-600" /> 學生學習迴響 (Student Voice)
              </div>
              <p className="text-xs sm:text-sm italic text-amber-950 leading-relaxed">
                {course.studentFeedback}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs sm:text-sm mb-2">
                <Quote className="w-4 h-4 text-indigo-600" /> 教師教學反思 (Teacher Reflection)
              </div>
              <p className="text-xs sm:text-sm italic text-indigo-950 leading-relaxed">
                {course.teacherReflection}
              </p>
            </div>
          </div>

          {/* Challenges & Action Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-xs sm:text-sm mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> 遭遇實施挑戰與瓶頸
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-rose-900 leading-relaxed">
                {course.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-2">
                <Lightbulb className="w-4 h-4 text-emerald-600" /> 下一階段改善策略與微調
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900 leading-relaxed">
                {course.recommendations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 px-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
          <div className="text-xs text-slate-500">
            報告頁碼索引：第 {course.pageStart} 頁起 ｜ NPDL 2026 校際發表會官方收錄
          </div>
          <div className="flex items-center gap-2">
            {onCompareWith && (
              <button
                onClick={() => onCompareWith(course)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-1.5 shadow-sm"
              >
                加入校際對比模式
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors"
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
