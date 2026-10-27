import React, { useState, useMemo } from 'react';
import { NPDL_COURSES, CourseCase, NPDL_6C_DESCRIPTIONS } from '../data/npdlData';
import { 
  Search, Filter, ArrowUpDown, ArrowRightLeft, BookOpen, Users, 
  Layers, Laptop, Award, CheckCircle2, ChevronRight, Grid, List, Sparkles 
} from 'lucide-react';

interface SchoolMatrixSectionProps {
  onSelectCourse: (course: CourseCase) => void;
  onCompareCourse: (course: CourseCase) => void;
}

export const SchoolMatrixSection: React.FC<SchoolMatrixSectionProps> = ({ onSelectCourse, onCompareCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [selectedSchoolType, setSelectedSchoolType] = useState<string>('ALL');
  const [selectedCourseType, setSelectedCourseType] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'group' | 'rating' | 'students'>('group');

  // Filtered & sorted courses
  const filteredCourses = useMemo(() => {
    return NPDL_COURSES.filter(c => {
      const matchSearch = 
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.teachers.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        c.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchGroup = selectedGroup === 'ALL' || c.group === selectedGroup;
      const matchRegion = selectedRegion === 'ALL' || c.region === selectedRegion;
      const matchSchoolType = selectedSchoolType === 'ALL' || c.schoolType === selectedSchoolType;
      const matchCourseType = selectedCourseType === 'ALL' || c.courseType === selectedCourseType;

      return matchSearch && matchGroup && matchRegion && matchSchoolType && matchCourseType;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        const avgA = Object.values(a.competencies).reduce((p, v) => p + v, 0) / 6;
        const avgB = Object.values(b.competencies).reduce((p, v) => p + v, 0) / 6;
        return avgB - avgA;
      }
      if (sortBy === 'students') {
        return b.studentCount - a.studentCount;
      }
      return a.group.localeCompare(b.group) || a.groupOrder - b.groupOrder;
    });
  }, [searchTerm, selectedGroup, selectedRegion, selectedSchoolType, selectedCourseType, sortBy]);

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" /> 校際成果全景矩陣與案例檢索庫
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            收錄 2026 NPDL 成果展 7 大分組、16 所聯盟高中之 19 門深度學習教案，支援多維交叉篩選與雙校對比
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
              title="卡片網格視圖"
            >
              <Grid className="w-4 h-4" /> 網格
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'table' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'
              }`}
              title="詳細表格視圖"
            >
              <List className="w-4 h-4" /> 表格
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋學校、課程名稱、教師姓名、關鍵概念 (如：花蓮高中、物聯網、海洋、AI)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                清除
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5" /> 排序：
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="group">發表分組 (A ~ G組)</option>
              <option value="rating">6C 素養總合高至低</option>
              <option value="students">實施學生數多至少</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 border-t border-slate-100 text-xs">
          
          {/* Group Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-600">分組：</span>
            {['ALL', 'A', 'B', 'C', 'D', 'E', 'F', 'G'].map(g => (
              <button
                key={g}
                onClick={() => setSelectedGroup(g)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  selectedGroup === g 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {g === 'ALL' ? '全部組別' : `${g}組`}
              </button>
            ))}
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-600">區域：</span>
            {['ALL', '東部', '北部', '桃竹苗', '南部'].map(r => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  selectedRegion === r 
                    ? 'bg-indigo-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {r === 'ALL' ? '全部區域' : r}
              </button>
            ))}
          </div>

          {/* Course Type Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-600">類型：</span>
            {['ALL', '探究與實作', '多元選修', '跨校遠距選修', '校訂必修'].map(ct => (
              <button
                key={ct}
                onClick={() => setSelectedCourseType(ct)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  selectedCourseType === ct 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {ct === 'ALL' ? '全部課程類型' : ct}
              </button>
            ))}
          </div>

          {(selectedGroup !== 'ALL' || selectedRegion !== 'ALL' || selectedCourseType !== 'ALL' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedGroup('ALL');
                setSelectedRegion('ALL');
                setSelectedCourseType('ALL');
                setSearchTerm('');
              }}
              className="text-xs font-bold text-rose-600 hover:text-rose-800 ml-auto"
            >
              重置所有篩選
            </button>
          )}

        </div>
      </div>

      {/* Result Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div>
          共篩選出 <strong className="text-slate-900 font-bold">{filteredCourses.length}</strong> 門教案（佔總體 19 門的 {Math.round((filteredCourses.length / 19) * 100)}%）
        </div>
        <div className="text-slate-400">
          點擊任一卡片可查閱 4 要素與 6C 規準細節 ｜ 點擊「對比」按鈕開啟雙向對照
        </div>
      </div>

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => {
            const avgRating = (Object.values(course.competencies).reduce((a, b) => a + b, 0) / 6).toFixed(1);
            const postHigh = course.rubricStats.post.developing + course.rubricStats.post.proficient;

            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Spotlight ribbon */}
                {course.isSpotlight && (
                  <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> 標竿重點
                  </div>
                )}

                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700">
                      {course.group}組-0{course.groupOrder}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600">
                      {course.region}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700">
                      {course.courseType}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 
                    onClick={() => onSelectCourse(course)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-600 cursor-pointer transition-colors leading-snug line-clamp-1"
                  >
                    {course.title}
                  </h3>
                  {course.subtitle && (
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 mb-1.5 font-medium">
                      {course.subtitle}
                    </div>
                  )}

                  {/* School & Teachers */}
                  <div className="text-xs text-slate-600 mb-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{course.school}</span>
                    <span className="text-slate-400 text-[11px]">{course.grade} ｜ {course.studentCount}人</span>
                  </div>

                  {/* Summary preview */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {course.summary}
                  </p>

                  {/* 6C Mini Competency Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-4">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">6C 全球素養達成均值</span>
                      <strong className="text-indigo-600 font-bold">{avgRating} / 5.0</strong>
                    </div>
                    <div className="grid grid-cols-6 gap-1">
                      {NPDL_6C_DESCRIPTIONS.map(c => {
                        const val = course.competencies[c.key as keyof typeof course.competencies];
                        return (
                          <div 
                            key={c.key} 
                            className="h-1.5 rounded-full overflow-hidden bg-slate-100" 
                            title={`${c.name}: ${val.toFixed(1)}`}
                          >
                            <div 
                              className="h-full rounded-full" 
                              style={{ width: `${(val / 5) * 100}%`, backgroundColor: c.color }} 
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Rubric Shift Badge */}
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-2.5 mb-2 text-xs flex items-center justify-between">
                    <span className="text-emerald-800 font-medium">後測發展+熟練</span>
                    <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {postHigh}%
                    </span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onCompareCourse(course)}
                    className="p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors flex items-center gap-1"
                    title="將此教案加入校際雙向對比"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" /> 對比
                  </button>
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold bg-slate-900 hover:bg-blue-600 text-white transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    檢視完整教案與評規 <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">組別</th>
                  <th className="p-3.5">課程名稱</th>
                  <th className="p-3.5">主辦學校</th>
                  <th className="p-3.5">執教教師</th>
                  <th className="p-3.5">區域</th>
                  <th className="p-3.5">課程屬性</th>
                  <th className="p-3.5">學生數</th>
                  <th className="p-3.5">6C 均值</th>
                  <th className="p-3.5">後測躍升</th>
                  <th className="p-3.5 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredCourses.map(course => {
                  const avgRating = (Object.values(course.competencies).reduce((a, b) => a + b, 0) / 6).toFixed(1);
                  const postHigh = course.rubricStats.post.developing + course.rubricStats.post.proficient;

                  return (
                    <tr key={course.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-blue-700">
                        {course.group}組-0{course.groupOrder}
                      </td>
                      <td className="p-3.5 font-bold text-slate-900 max-w-xs">
                        <div 
                          onClick={() => onSelectCourse(course)}
                          className="cursor-pointer hover:text-blue-600 transition-colors truncate"
                        >
                          {course.title}
                        </div>
                        {course.isSpotlight && (
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                            ★ 標竿亮點
                          </span>
                        )}
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800">
                        {course.school}
                      </td>
                      <td className="p-3.5 text-slate-600">
                        {course.teachers.join('、')}
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">
                          {course.region}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-medium">
                          {course.courseType}
                        </span>
                      </td>
                      <td className="p-3.5 font-medium text-slate-800">
                        {course.studentCount}人
                      </td>
                      <td className="p-3.5">
                        <span className="font-extrabold text-indigo-700">{avgRating}</span> / 5.0
                      </td>
                      <td className="p-3.5">
                        <span className="text-emerald-700 font-bold">
                          {postHigh}%
                        </span>
                      </td>
                      <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => onCompareCourse(course)}
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-semibold text-[11px] border border-slate-200 transition-colors"
                        >
                          對比
                        </button>
                        <button
                          onClick={() => onSelectCourse(course)}
                          className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] transition-colors"
                        >
                          詳細
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
