import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Copy, Video, Radio } from "lucide-react";

const StreamSetup = () => {
  const [streamTitle, setStreamTitle] = useState("");
  const [gameCategory, setGameCategory] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const gameCategories = [
    "Counter-Strike 2",
    "Dota 2",
    "Grand Theft Auto V",
    "Cyberpunk 2077",
    "The Witcher 3",
    "Minecraft",
    "Valorant",
    "World of Warcraft",
    "Другое",
  ];

  const handleStartStream = () => {
    // Здесь будет логика запуска стрима
    console.log({
      title: streamTitle,
      category: gameCategory,
      description: streamDescription,
      private: isPrivate,
    });

    // Provide user feedback
    alert("Стрим настроен! Теперь запустите трансляцию в OBS Studio.");
  };

  return (
    <div className="min-h-screen bg-slate-950 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Настройка стрима
          </h1>
          <p className="text-gray-400">Настройте параметры вашей трансляции</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Основные настройки */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Основная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Название стрима
                  </Label>
                  <Input
                    id="title"
                    placeholder="Введите название вашего стрима"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-white">
                    Категория игры
                  </Label>
                  <Select value={gameCategory} onValueChange={setGameCategory}>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue placeholder="Выберите игру" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      {gameCategories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="text-white"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">
                    Описание стрима
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Расскажите о чем будет ваш стрим..."
                    value={streamDescription}
                    onChange={(e) => setStreamDescription(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="private"
                    checked={isPrivate}
                    onCheckedChange={setIsPrivate}
                  />
                  <Label htmlFor="private" className="text-white">
                    Приватный стрим
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Настройки трансляции
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Stream Key</Label>
                  <div className="flex space-x-2">
                    <Input
                      value="sk_live_12345abcdef67890"
                      readOnly
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                    <Button variant="outline" className="border-slate-700">
                      <Copy size={16} />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Используйте этот ключ в OBS или другом стриминговом ПО
                  </p>
                </div>

                <div>
                  <Label className="text-white">RTMP URL</Label>
                  <Input
                    value="rtmp://streamplay.ru/live/"
                    readOnly
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Превью и действия */}
          <div className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Превью стрима</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                  <Video size={48} className="text-gray-500" />
                </div>
                <p className="text-sm text-gray-400 text-center">
                  Здесь будет превью вашего стрима
                </p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button
                onClick={handleStartStream}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                disabled={!streamTitle || !gameCategory}
              >
                <Radio size={20} className="mr-2" />
                Начать стрим
              </Button>

              <Button
                variant="outline"
                className="w-full border-slate-700 text-white"
              >
                Тестовая трансляция
              </Button>

              <Button variant="ghost" className="w-full text-gray-400">
                Отмена
              </Button>
            </div>
          </div>
        </div>

        {/* Инструкции */}
        <Card className="bg-slate-900 border-slate-800 mt-6">
          <CardHeader>
            <CardTitle className="text-white">Как начать стримить</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-300">
                  Скачайте OBS Studio или другое ПО для стриминга
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-300">
                  Введите RTMP URL и Stream Key в настройках
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-300">
                  Нажмите "Начать стрим" и начинайте трансляцию!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StreamSetup;
