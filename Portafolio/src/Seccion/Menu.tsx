// MENU
import { IoHomeOutline, IoPersonOutline, IoStatsChartOutline, IoBriefcaseOutline, IoMailOutline, IoTerminalOutline } from "react-icons/io5";

const menu_item = [
  {
    datatip: "START_NODE",
    icon: <IoHomeOutline className="size-5" />,
    path: "#home",
  },
  {
    datatip: "CORE_BIO",
    icon: <IoPersonOutline className="size-5" />,
    path: "#me",
  },
  {
    datatip: "TECH_STACK",
    icon: <IoStatsChartOutline className="size-5" />,
    path: "#skil",
  },
  {
    datatip: "WORK_REPOS",
    icon: <IoBriefcaseOutline className="size-5" />,
    path: "#proyec",
  },
  {
    datatip: "CAREER_LOGS",
    icon: <IoTerminalOutline className="size-5" />,
    path: "#xp",
  },
  {
    datatip: "CONTACT_LINK",
    icon: <IoMailOutline className="size-5" />,
    path: "#info",
  },
];

export default function Menu() {
  return (
    <>
      {/* Desktop HUD Vertical Navigation */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
        <div className="flex flex-col gap-4 p-2 bg-surface border border-outline/30 shadow-2xl relative">
          {/* Decorative HUD Accents */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/30"></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/30"></div>
          
          {menu_item.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="group relative flex items-center justify-center size-10 border border-transparent hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="text-on-surface-variant group-hover:text-primary transition-colors">
                {item.icon}
              </div>
              
              <span className="absolute left-full ml-6 px-3 py-1 bg-surface border border-secondary/20 text-[8px] font-mono font-bold tracking-[0.3em] text-primary opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap uppercase italic shadow-xl">
                [ {item.datatip} ]
              </span>
              
              <div className="absolute left-0 top-0 w-[1px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 vertical-text font-mono text-[8px] text-secondary/30 tracking-[0.5em] uppercase pointer-events-none italic">
          CORE_NAV_SYSTEM_v4.0
        </div>
      </div>

      {/* Mobile HUD Horizontal Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex lg:hidden px-4 pb-4">
        <nav className="w-full bg-surface/90 border border-primary/30 backdrop-blur-md flex justify-between items-center px-4 py-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
          {menu_item.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex flex-col items-center justify-center gap-1 text-on-surface-variant active:text-primary transition-colors"
            >
              <div className="size-6 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[7px] font-mono font-bold tracking-tighter uppercase opacity-60">
                {item.datatip.split('_')[0]}
              </span>
            </a>
          ))}
          
          {/* Decorative Corner for Mobile Menu */}
          <div className="absolute -top-1 left-4 px-2 bg-surface border border-primary/30 font-mono text-[6px] text-primary uppercase">
            NAV_CORE_ACTIVE
          </div>
        </nav>
      </div>
    </>
  );
}
