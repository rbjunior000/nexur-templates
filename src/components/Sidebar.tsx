import {
  Home,
  User,
  Dumbbell,
  FileText,
  Wifi,
  DollarSign,
  BarChart2,
  Settings,
  Calendar,
  Bell,
  Clipboard,
  MessageSquare,
  LogOut,
  Heart,
  Timer,
} from 'lucide-react';

type NavItem = {
  icon: typeof Home;
  href?: string;
};

const navItems: NavItem[] = [
  { icon: Home },
  { icon: User },
  { icon: Dumbbell, href: '#/strict' },
  { icon: Heart, href: '#/aerobico' },
  { icon: Timer, href: '#/autoplay' },
  { icon: FileText },
  { icon: Wifi },
  { icon: DollarSign },
  { icon: BarChart2 },
  { icon: Settings },
  { icon: Calendar },
  { icon: Bell },
  { icon: Clipboard },
  { icon: MessageSquare },
];

export function Sidebar() {
  const hash = window.location.hash || '#/strict';

  return (
    <div className="w-16 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-4 fixed left-0 top-0 z-20 overflow-y-auto hide-scrollbar">
      <div className="mb-8">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
          N
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-4 w-full items-center">
        {navItems.map((item, index) => {
          const isActive = item.href ? hash === item.href : false;
          return (
            <button
              key={index}
              onClick={() => item.href && (window.location.hash = item.href)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isActive
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
              }`}
            >
              <item.icon size={20} strokeWidth={2} />
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4">
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}
