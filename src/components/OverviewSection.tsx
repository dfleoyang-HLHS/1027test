import React from 'react';
import { 
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, 
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend 
} from 'recharts';
import { NPDL_COURSES, SCHOOL_AGGREGATES, CourseCase } from '../data/npdlData';
import { 
  TrendingUp, Award, School, Users, BookOpen, Compass, 
  ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers, Lightbulb 
} from 'lucide-react';

interface OverviewSectionProps {
  onSelectCourse: (course: CourseCase) => void;
  onNavigateTab: (tab: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onSelectCourse, onNavigateTab }) => {
  // Aggregate 6C data for radar chart
  const radarData = [
    { subject: '公民素養 (Citizenship)', baseline: 2.3, achieved: 4.7, fullMark: 5 },
    { subject: '批判思考 (Critical)', baseline: 2.1, achieved: 4.6, fullMark: 5 },
    { subject: '創造力 (Creativity)', baseline: 2.4, achieved: 4.5, fullMark: 5 },
    { subject: '協作力 (Collaboration)', baseline: 2.6, achieved: 4.7, fullMark: 5 },
    { subject: '溝通力 (Communication)', baseline: 2.5, achieved: 4.7, fullMark: 5 },
    { subject: '品格力 (Character)', baseline: 2.8, achieved: 4.5, fullMark: 5 },
  ];

  // 4 Quadrants index (1-100)
  const quadrantData = [
    { name: '教學實踐 (Pedagogy)', score: 89.8, fill: '#3b82f6', tag: 'PBL、真實世界任務導向' },
    { name: '數位利用 (Digital)', score: 87.4, fill: '#8b5cf6', tag: 'AI、IoT物聯網、GIS地圖' },
    { name: '學習環境 (Environment)', score: 86.2, fill: '#f59e0b', tag: '校外田野、虛實混成教室' },
    { name: '學習夥伴 (Partnership)', score: 76.8, fill: '#10b981', tag: '最需突破！跨出班級找外部夥伴' },
  ];

  // Regional breakdown
  const regionalData = [
    { region: '北部 (大台北/基隆)', count: 9, students: 483 },
    { region: '東部 (花蓮/臺東)', count: 4, students: 212 },
    { region: '南部 (臺南/嘉義/高雄)', count: 4, students: 167 },
    { region: '桃竹苗 (新竹)', count: 2, students: 74 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              教育部國民及學前教育署指導
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
              臺灣EDL學校聯盟 2026 校際年度大典
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-slate-950">
              全台 16 校 19 門典範教案
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            2026 深度學習教學創新躍進<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-200">
              校際成果深度分析與互動式儀表板
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            本系統依據「NPDL 深度學習國際聯盟」四大核心要素（教學實踐、學習夥伴、學習環境、數位利用）及 6C 全球核心素養規準，彙整全台 16 所頂尖高中（含花蓮高中、基隆高中、數位實中、臺南一中等）跨組實踐成果、前後測成效大數據與行動改善指引。
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={() => onNavigateTab('schools')}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-slate-950 transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2"
            >
              <School className="w-4 h-4" /> 瀏覽 16 校成果矩陣
            </button>
            <button
              onClick={() => onNavigateTab('spotlight')}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" /> 花蓮高中與東區亮點專題
            </button>
            <button
              onClick={() => onNavigateTab('consultant')}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-indigo-600/40 hover:bg-indigo-600/60 text-indigo-200 border border-indigo-400/30 transition-all flex items-center gap-2"
            >
              <Lightbulb className="w-4 h-4 text-indigo-300" /> AI 課程診療與建議
            </button>
          </div>
        </div>
      </div>

      {/* High-level KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
            <span>聯盟參與校數</span>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <School className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            16 <span className="text-sm font-semibold text-slate-500">所高中</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1">
            <span className="font-bold text-blue-600">涵蓋全台4大區域</span> 普通/技術/實驗全覆蓋
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
            <span>發表教案總數</span>
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            19 <span className="text-sm font-semibold text-slate-500">門深度課程</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1">
            <span className="font-bold text-emerald-600">7大分組 (A~G組)</span> 探究實作與多元選修
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
            <span>受益學子與師資</span>
            <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            1,480+ <span className="text-sm font-semibold text-slate-500">位高中生</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1">
            <span className="font-bold text-amber-600">58位</span> 跨領域核心共備教師
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
            <span>6C 高階規準躍升率</span>
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-purple-700 tracking-tight">
            +58.2% <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">後測顯著</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1">
            發展+熟練由 <strong className="text-slate-800">32.8%</strong> 飆升至 <strong className="text-emerald-700">84.5%</strong>
          </div>
        </div>
      </div>

      {/* Main Analytical Section: Radar & Quadrant Benchmark */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: 6C Global Competency Radar Chart */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" /> NPDL 6C 全球素養前後測成長雷達
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                滿分 5.0 尺度
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              對照開課前學生素養基準（灰色虛線）與期末真實產出評鑑（藍色實心）。全台各校在「公民素養」與「協作力」展現最為顯著的結構性跨越。
            </p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar 
                  name="前測基準 (Baseline)" 
                  dataKey="baseline" 
                  stroke="#94a3b8" 
                  fill="#94a3b8" 
                  fillOpacity={0.25} 
                />
                <Radar 
                  name="成果達成 (Post-Achievement)" 
                  dataKey="achieved" 
                  stroke="#4f46e5" 
                  fill="#6366f1" 
                  fillOpacity={0.45} 
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-sky-50 text-sky-900">
              <div className="font-bold">公民素養 (Citizenship)</div>
              <div className="text-base font-black text-sky-700 mt-0.5">4.7 <span className="text-[10px] text-emerald-600 font-bold">(+104%)</span></div>
            </div>
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-900">
              <div className="font-bold">批判思考 (Critical)</div>
              <div className="text-base font-black text-indigo-700 mt-0.5">4.6 <span className="text-[10px] text-emerald-600 font-bold">(+119%)</span></div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900">
              <div className="font-bold">協作共好 (Collaboration)</div>
              <div className="text-base font-black text-emerald-700 mt-0.5">4.7 <span className="text-[10px] text-emerald-600 font-bold">(+80%)</span></div>
            </div>
          </div>
        </div>

        {/* Right: 4 Quadrants & Key Diagnostic Warning */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" /> 四大維度落實指數 (1-100)
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                跨校均值
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              評核全台教案在 NPDL 四大核心要素的落實深度。教學與數位利用得分最高，但「學習夥伴」仍為普遍待突破之關鍵瓶頸。
            </p>
          </div>

          <div className="space-y-4">
            {quadrantData.map((q, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{q.name}</span>
                  <span className="font-black" style={{ color: q.fill }}>{q.score} 分</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700" 
                    style={{ width: `${q.score}%`, backgroundColor: q.fill }}
                  />
                </div>
                <div className="text-[11px] text-slate-500">{q.tag}</div>
              </div>
            ))}
          </div>

          {/* Diagnostic Key Takeaway */}
          <div className="mt-5 p-4 rounded-xl bg-amber-50/80 border border-amber-200">
            <div className="flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-900">核心洞察：走出校園，尋找真實夥伴</h4>
                <p className="text-xs text-amber-800 leading-relaxed mt-0.5">
                  「學習夥伴關係」均分僅 76.8，反映許多課程仍停留在班級內小組報告。建議借鏡花蓮高中（結合黑潮基金會）與北大高中（結合芒草心社工）之雙向互惠模式，將外部夥伴納為真實受眾與評審。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Spotlight Showcase: 3 Top Exemplary Courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> 本屆大會年度代表性標竿教案 (Spotlight Cases)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">點擊卡片可即刻查閱完整教學設計、規準前後測數據與師生反思</p>
          </div>
          <button
            onClick={() => onNavigateTab('schools')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            查看全部 19 門教案 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NPDL_COURSES.filter(c => c.isSpotlight || c.id === 'e-1-tsdes').slice(0, 3).map(course => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                    {course.group}組 ｜ {course.region}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {course.grade}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                  {course.title}
                </h4>
                <div className="text-xs text-slate-600 font-medium mt-1 mb-3">
                  {course.school} ｜ {course.teachers.slice(0, 2).join('、')}等
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {course.summary}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 發展+熟練 {course.rubricStats.post.developing + course.rubricStats.post.proficient}%
                  </span>
                  <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    深入檢視 <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professor Chen Pei-Ying Keynote Essence */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-md">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-700 text-white">
                大會專題特邀演講重點
              </span>
              <span className="text-xs font-semibold text-slate-600">
                國立臺灣師範大學 陳佩英教授
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              《重塑素養導向課程設計的關鍵選擇：以NPDL深化專業對話與校準實踐》
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              陳教授指出：108課綱推動至今，各校面臨的最大挑戰不是「做不做活動」，而是「如何證明學生真正發生了深度學習」。NPDL 提供的 6C 規準與四要素，並非機械化評分表格，而是提供全體教師一套「共同的專業語言 (Shared Professional Vocabulary)」。透過規準校準、證據蒐集與質性對話，協助教師由課堂教導者蛻變為學習設計師與研究者。
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('recommendations')}
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 transition-colors shadow-sm"
          >
            檢視五大改善建言
          </button>
        </div>
      </div>

    </div>
  );
};
