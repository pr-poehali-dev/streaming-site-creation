import { useState } from "react";
import Navigation from "@/components/Navigation";
import StreamCard from "@/components/StreamCard";
import CategoryCard from "@/components/CategoryCard";
import StreamSetup from "@/components/StreamSetup";

const Index = () => {
  const [showStreamSetup, setShowStreamSetup] = useState(false);

  if (showStreamSetup) {
    return <StreamSetup />;
  }

  // Mock data for featured streams
  const featuredStreams = [
    {
      title: "Прохождение Cyberpunk 2077 - Финальная миссия!",
      streamerName: "CyberGamer_RU",
      gameName: "Cyberpunk 2077",
      viewerCount: 15420,
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
      streamerAvatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
    },
    {
      title: "Counter-Strike 2 - Ранговые матчи с подписчиками",
      streamerName: "ProShooter",
      gameName: "Counter-Strike 2",
      viewerCount: 8930,
      thumbnail:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225&fit=crop",
      streamerAvatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
    },
    {
      title: "Строим город мечты в Cities: Skylines",
      streamerName: "CityBuilder",
      gameName: "Cities: Skylines",
      viewerCount: 3250,
      thumbnail:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=225&fit=crop",
      streamerAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c8a2?w=40&h=40&fit=crop&crop=face",
    },
    {
      title: "The Witcher 3 - Дополнения и секреты",
      streamerName: "RPG_Master",
      gameName: "The Witcher 3",
      viewerCount: 12100,
      thumbnail:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=225&fit=crop",
      streamerAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const gameCategories = [
    {
      name: "Counter-Strike 2",
      viewerCount: 45230,
      thumbnail:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=400&fit=crop",
    },
    {
      name: "Dota 2",
      viewerCount: 38950,
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop",
    },
    {
      name: "Grand Theft Auto V",
      viewerCount: 29340,
      thumbnail:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
    },
    {
      name: "Cyberpunk 2077",
      viewerCount: 21580,
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop",
    },
    {
      name: "The Witcher 3",
      viewerCount: 18720,
      thumbnail:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=400&fit=crop",
    },
    {
      name: "Minecraft",
      viewerCount: 16450,
      thumbnail:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation onStartStream={() => setShowStreamSetup(true)} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Добро пожаловать в StreamPlay! 🎮
            </h1>
            <p className="text-xl text-gray-300">
              Смотрите любимых стримеров и общайтесь в чате
            </p>
          </div>
        </section>

        {/* Featured Streams */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Популярные стримы</h2>
            <a
              href="/browse"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Показать все
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStreams.map((stream, index) => (
              <StreamCard key={index} {...stream} />
            ))}
          </div>
        </section>

        {/* Game Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Категории игр</h2>
            <a
              href="/categories"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Все категории
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gameCategories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
