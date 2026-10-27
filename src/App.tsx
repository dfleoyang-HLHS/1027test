import React, { useState } from 'react';
import { CourseCase, NPDL_COURSES } from './data/npdlData';
import { OverviewSection } from './components/OverviewSection';
import { SchoolMatrixSection } from './components/SchoolMatrixSection';
import { CompetencyRubricSection } from './components/CompetencyRubricSection';
import { FourQuadrantsSection } from './components/FourQuadrantsSection';
import { HualienSpotlightSection } from './components/HualienSpotlightSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { AiConsultantSection } from './components/AiConsultantSection';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CourseCompareModal } from './components/CourseCompareModal';
import { 
  BarChart3, School, Award, Layers, Sparkles, Lightbulb, 
  HelpCircle, ExternalLink, Printer, Compass, ArrowRightLeft, BookOpen 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedCourse, setSelectedCourse] = useState<CourseCase | null>(null);
  const [compareCourse, setCompareCourse] = useState<CourseCase | null>(null);

  const tabs = [
    { id: 'overview', label: '總覽與數據洞察', icon: BarChart3 },
    { id: 'schools', label: '16校成果矩陣庫', icon: School, badge: '19門' },
    { id: 'rubrics', label: '6C素養規準與前後測', icon: Award },
    { id: 'quadrants', label: '四大要素剖析', icon: Layers },
    { id: 'spotlight', label: '花蓮高中與東區亮點', icon: Sparkles, highlight: true },
    { id: 'recommendations', label: '5大改善建議處方', icon: Lightbulb },
    { id: 'consultant', label: 'AI課程診療診所', icon: Compass },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-600 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-sky-400">
                  <Compass className="w-6 h-6 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-sky-300 border border-blue-400/20">
                    教育部國教署 2026 深度學習
                  </span>
                  <span className="hidden md:inline-block text-[10px] text-slate-400">
                    Advancing Deep Learning 2026
                  </span>
                </div>
                <h1 className="text-sm sm:text-lg font-black tracking-tight text-white leading-tight">
                  深度學習教學創新躍進 <span className="text-sky-400 font-bold">校際成果發表儀表板</span>
                </h1>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setCompareCourse(NPDL_COURSES[0])}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 transition-colors"
                title="開啟雙校對比"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" /> 雙校對比
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
                title="列印或儲存為 PDF"
              >
                <Printer className="w-4 h-4" />
              </button>

              <div className="hidden lg:flex items-center pl-3 border-l border-slate-800 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-ping" />
                <span>16校數據已同步 (258頁大會全收錄)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-slate-950/80 border-t border-slate-800/80 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 py-1.5 min-w-max">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all relative ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : tab.highlight
                        ? 'text-amber-300 hover:bg-amber-400/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.highlight ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-white/20 text-white">
                      {tab.badge}
                    </span>
                  )}
                  {tab.highlight && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Render Tab Contents */}
        {activeTab === 'overview' && (
          <OverviewSection 
            onSelectCourse={(course) => setSelectedCourse(course)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'schools' && (
          <SchoolMatrixSection 
            onSelectCourse={(course) => setSelectedCourse(course)}
            onCompareCourse={(course) => setCompareCourse(course)}
          />
        )}

        {activeTab === 'rubrics' && (
          <CompetencyRubricSection />
        )}

        {activeTab === 'quadrants' && (
          <FourQuadrantsSection />
        )}

        {activeTab === 'spotlight' && (
          <HualienSpotlightSection 
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {activeTab === 'recommendations' && (
          <RecommendationsSection />
        )}

        {activeTab === 'consultant' && (
          <AiConsultantSection />
        )}

      </main>

      {/* Modals */}
      {selectedCourse && (
        <CourseDetailModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)}
          onCompareWith={(c) => {
            setSelectedCourse(null);
            setCompareCourse(c);
          }}
        />
      )}

      {compareCourse && (
        <CourseCompareModal 
          initialCourseA={compareCourse}
          onClose={() => setCompareCourse(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-white font-bold text-sm mb-1">
                教育部國民及學前教育署 2026 深度學習教學創新躍進 校際成果發表會
              </div>
              <p className="text-slate-500">
                專題演講：國立臺灣師範大學 陳佩英教授 ｜ 大會主持：陳佩英教授、國立花蓮高級中學 麥芃芃秘書
              </p>
            </div>
            <div className="text-slate-500 text-right">
              <div>指導單位：教育部國民及學前教育署</div>
              <div>執行計畫：臺灣EDL學校聯盟 (NPDL Taiwan)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
            <div>
              © 2026 NPDL Inter-School Pedagogical Innovations Analytics Dashboard. 收錄 16 校 19 門教案。
            </div>
            <div className="flex items-center gap-4">
              <span>NPDL 6C 全球素養</span>
              <span>四大核心要素</span>
              <span>前測 vs 後測實證</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
