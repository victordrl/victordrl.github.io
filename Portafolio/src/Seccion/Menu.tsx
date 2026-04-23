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
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* HUD Vertical Navigation */}
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
            
            {/* Tooltip Label */}
            <span className="absolute left-full ml-6 px-3 py-1 bg-surface border border-primary/20 text-[8px] font-mono font-bold tracking-[0.3em] text-primary opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap uppercase italic shadow-xl">
              [ {item.datatip} ]
            </span>
            
            {/* Active Indicator (Decorative) */}
            <div className="absolute left-0 top-0 w-[1px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
          </a>
        ))}
      </div>
      
      {/* System Status Label */}
      <div className="mt-8 vertical-text font-mono text-[8px] text-on-surface-variant/20 tracking-[0.5em] uppercase pointer-events-none">
        CORE_NAV_SYSTEM_v4.0
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
