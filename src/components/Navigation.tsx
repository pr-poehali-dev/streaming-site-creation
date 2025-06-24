import { Search, Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  onStartStream?: () => void;
}

const Navigation = ({ onStartStream }: NavigationProps) => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <div className="text-2xl font-bold text-purple-400">StreamPlay</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="/browse"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Обзор
            </a>
            <a
              href="/following"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Подписки
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск игр, стримеров..."
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <Button
            onClick={onStartStream}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2"
          >
            🔴 Начать стрим
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white"
          >
            <User className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
