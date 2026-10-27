import React from 'react';
import { NPDL_COURSES, CourseCase } from '../data/npdlData';
import { 
  Award, Sparkles, Waves, Zap, Compass, Users, CheckCircle2, 
  ArrowRight, HeartHandshake, Mountain, BookOpen, Quote, Shield 
} from 'lucide-react';

interface HualienSpotlightSectionProps {
  onSelectCourse: (course: CourseCase) => void;
}

export const HualienSpotlightSection: React.FC<HualienSpotlightSectionProps> = ({ onSelectCourse }) => {
  const hlhsMarine = NPDL_COURSES.find(c => c.id === 'c-2-hlhs')!;
  const hlhsIoT = NPDL_COURSES.find(c => c.id === 'g-1-hlhs-klhs')!;
  const tthsSdg = NPDL_COURSES.find(c => c.id === 'c-1-tths')!;
  const tcushsAid = NPDL_COURSES.find(c => c.id === 'd-1-tcushs')!;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Spotlight Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-teal-800/50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> 標竿榮譽聚焦點
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
              花蓮高中．臺灣EDL大會共同主持與核心推動學校
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            深耕太平洋濱，躍向萬物聯網<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-amber-200">
              國立花蓮高級中學 與 東區校際深度學習實踐亮點
            </span>
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm mt-3 max-w-3xl leading-relaxed">
            國立花蓮高級中學（創立於1935年，擁有人文力、思考力、實踐力、合作力、關懷力、創造力之學生圖像）在本屆大會中展現卓越領導力與教學創新：由麥芃芃秘書擔任大會主持人之一，並同時發表「在地海洋倡議」與「跨越山海的基隆-花蓮跨校遠距物聯網微電網」雙料典範成果！
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-xs">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-teal-300 font-bold">全校學生數</div>
              <div className="text-xl font-black text-white mt-0.5">1,070+ 人</div>
              <div className="text-[11px] text-slate-300">36班多元深耕</div>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-teal-300 font-bold">海洋保育前後測</div>
              <div className="text-xl font-black text-amber-300 mt-0.5">+140%</div>
              <div className="text-[11px] text-slate-300">全球素養高階躍升</div>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-teal-300 font-bold">跨校共備合作</div>
              <div className="text-xl font-black text-white mt-0.5">基中 × 花中</div>
              <div className="text-[11px] text-slate-300">打破地理城鄉屏障</div>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-teal-300 font-bold">6C 全球素養均值</div>
              <div className="text-xl font-black text-emerald-300 mt-0.5">4.63 / 5.0</div>
              <div className="text-[11px] text-slate-300">居全國聯盟頂標</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case 1: 搶救海洋大作戰 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-teal-100 text-teal-800">C組 成果亮點</span>
                <span className="text-xs font-semibold text-slate-500">探究與實作 ｜ 2學分36節 ｜ 高二</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                搶救海洋大作戰 — 國立花蓮高級中學 (黃雅蕾 教師)
              </h3>
            </div>
          </div>
          <button
            onClick={() => onSelectCourse(hlhsMarine)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors flex items-center gap-1 self-start md:self-auto shadow-sm"
          >
            查閱教案詳情 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Marine Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              花蓮臨近太平洋黑潮，擁有得天獨厚的海洋自然地景與生態多樣性。本課程由<strong>黃雅蕾老師</strong>精心設計，以「真實世界海洋浩劫」為探究核心，帶領花中學子走訪七星潭海岸，進行海廢監測採樣、微塑膠分析與海洋永續對話。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">🌊 在地真實學習夥伴</strong>
                結合黑潮海洋文教基金會第一線研究員與海巡巡防隊，學生直接與海洋守護者深度訪談，看見鯨豚受困與廢棄漁網之殘酷真相。
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">📣 受眾導向之數位倡議</strong>
                跳脫傳統死板海報，學生將海廢數據結合花蓮觀光地圖，產出「花蓮旅人海洋友善生存守則」，並於校慶向社區公開策展。
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
              <Quote className="w-4 h-4 text-amber-600 inline mr-1" />
              <strong>學生感動迴響：</strong>
              「以前常去七星潭看海吹風，但這堂課讓我第一次拿著夾子在礫灘上蹲了兩個小時，夾出成百上千個塑膠瓶蓋。看到海龜被吸管折磨的影片不再只是新聞，而是我們腳下的責任。」
            </div>
          </div>

          {/* Marine Pre-Post Shift Card */}
          <div className="lg:col-span-5 bg-teal-50/50 border border-teal-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                大會官方數據驗證 (Page 85)
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                全球素養 (具有全球視野) 前後測階層躍遷
              </h4>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>前測基準 (開學初)</span>
                    <span className="font-bold">發展層級僅 5 人 (起步有盲區)</span>
                  </div>
                  <div className="h-5 w-full bg-slate-200 rounded-lg overflow-hidden flex text-[10px] text-white font-bold text-center leading-5">
                    <div style={{ width: '15%' }} className="bg-rose-400">起步</div>
                    <div style={{ width: '45%' }} className="bg-amber-400 text-slate-900">萌芽</div>
                    <div style={{ width: '30%' }} className="bg-teal-500">發展</div>
                    <div style={{ width: '10%' }} className="bg-teal-700">熟練</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span className="font-bold text-teal-800">後測成果 (期末公開發表)</span>
                    <span className="font-bold text-teal-700">發展+熟練高達 12 人以上！</span>
                  </div>
                  <div className="h-6 w-full bg-teal-100 rounded-lg overflow-hidden flex text-[10px] text-white font-bold text-center leading-6 border border-teal-300">
                    <div style={{ width: '0%' }} className="bg-rose-400">0%</div>
                    <div style={{ width: '10%' }} className="bg-amber-400 text-slate-900">萌芽</div>
                    <div style={{ width: '55%' }} className="bg-teal-600">發展 (55%)</div>
                    <div style={{ width: '35%' }} className="bg-teal-800">熟練 (35%)</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-teal-200 text-xs text-teal-900 space-y-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span><strong>批判思考：</strong>評估資訊與論點能力大幅提升</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span><strong>溝通力：</strong>能針對不同受眾設計具感染力之倡議媒介</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-slate-500 italic">
              數據來源：大會成果集 Page 85《搶救海洋大作戰檢核、反思與改變》
            </div>
          </div>
        </div>
      </div>

      {/* Case 2: 跨校共備《多元宇宙萬物聯網》〈智慧微電網〉 */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">G組 跨校共備典範</span>
                <span className="text-xs font-semibold text-slate-500">跨校遠距多元選修 ｜ 2學分28節 ｜ 高三14週</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                《多元宇宙萬物聯網》〈永續綠能_智慧電網之儲能與創能〉
              </h3>
            </div>
          </div>
          <button
            onClick={() => onSelectCourse(hlhsIoT)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-1 self-start md:self-auto shadow-sm"
          >
            查閱教案詳情 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* IoT Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
              <div className="font-bold text-indigo-900 text-sm mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-indigo-600" /> 兩校強強聯手．跨越中央山脈的遠距協同
              </div>
              <p className="text-xs text-indigo-950 leading-relaxed">
                由<strong>國立基隆高級中學</strong>（楊志忠、洪譽、黃相文教師）與<strong>國立花蓮高級中學</strong>（黃楨喻教師、麥芃芃秘書）攜手合作。克服兩校距離 150 公里之地理障礙，基中師資線上同步遠距授課，花中學生於電腦教室同步動手實作，花中現場教師即時排除硬體短路與連線問題。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">⚡ 智慧微電網實作</strong>
                學生親手組裝太陽能板、儲能電池、電壓電流感測器，並使用 ESP32 將即時發電數據上傳至雲端物聯網 (IoT)。
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">🌱 能源公民與批判思考</strong>
                不只學電路，更透過能源計量數據探討花蓮與基隆兩地日照條件差異、智慧電網調峰需求與公民用電正義。
              </div>
            </div>

            <p className="text-slate-600">
              本課程選課原預計 20 人開班，因學生熱烈加退選後增至 30 人滿班，展現高三升學壓力下依然能以高階專案引燃極高內在動機之成功典範。
            </p>
          </div>

          {/* IoT Mechanism Diagram */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-indigo-300 font-bold mb-3">
                <span>跨校遠距雙師協同 SOP 架構</span>
                <span className="px-2 py-0.5 rounded bg-indigo-800 text-white text-[10px]">Page 220</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-sky-400 font-bold block mb-0.5">【線上主講】基隆高中師資端</span>
                  概念講解、程式演算法撰寫、物聯網雲端後台架設與跨校 QA。
                </div>
                <div className="flex justify-center text-indigo-400">
                  ↓ 雙向即時影音串流 + 雲端即時代碼共筆 ↓
                </div>
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="text-emerald-400 font-bold block mb-0.5">【線下引導】花蓮高中實作端</span>
                  電腦教室實體巡堂、電路板硬體接線排錯、小組協作動態調配。
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                ★ <strong>大會建議價值：</strong>為教育部國教署推動「偏鄉與非都會區跨校優質師資共享」建立可規模化複製之實戰標準程序。
              </div>
            </div>

            <div className="mt-4 text-[11px] text-slate-400 italic">
              數據來源：大會成果集 Page 219-228《多元宇宙萬物聯網》
            </div>
          </div>
        </div>
      </div>

      {/* Eastern Alliance Synergy: Taitung & Tzu Chi */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Mountain className="w-5 h-5 text-emerald-700" /> 東部三校聯手：打造台灣「山海永續 × 全球素養」教育走廊
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          花蓮與臺東長期面臨交通縱深漫長、都會資源較難抵達之挑戰。然而，在本次 NPDL 發表中，東部三校（花蓮高中、臺東高中、慈濟大附中）均以高居前矛的「公民素養 (4.9)」與「人道同理 (4.9)」成績驚艷全場，證明了在地原生文化與自然地景才是全球深度學習最具競爭力的沃土：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">臺東高中</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">SDGs全球公民對話 ＆ 澳洲籃球交流</h4>
            <p className="text-slate-600 mt-1 leading-relaxed">
              將南島文化傳統智慧與聯合國永續目標對接，並以青少年籃球運動跨越語言藩籬與澳洲同儕熱情建構跨國友誼。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[11px]">慈濟大學附屬高級中學</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">國際關懷與行動（6位跨領域教師協同）</h4>
            <p className="text-slate-600 mt-1 leading-relaxed">
              引導學生關懷土耳其地震與烏克蘭難民危機，培育深刻國際人道主義同理心與真實募捐勸募行動力。
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
