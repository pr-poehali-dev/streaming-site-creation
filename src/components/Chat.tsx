import { Send, Smile, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  isModerator?: boolean;
  isSubscriber?: boolean;
}

const Chat = () => {
  const [message, setMessage] = useState("");

  // Mock chat messages
  const messages: ChatMessage[] = [
    {
      id: "1",
      username: "GameMaster21",
      message: "Отличная игра! 🎮",
      timestamp: "12:34",
      isSubscriber: true,
    },
    {
      id: "2",
      username: "ProGamer",
      message: "Когда следующий стрим?",
      timestamp: "12:35",
    },
    {
      id: "3",
      username: "ModeratorBot",
      message: "Добро пожаловать в чат!",
      timestamp: "12:35",
      isModerator: true,
    },
    {
      id: "4",
      username: "StreamFan",
      message: "Круто играешь!",
      timestamp: "12:36",
    },
    { id: "5", username: "ChatUser", message: "GG", timestamp: "12:37" },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-800">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium">Чат стрима</h3>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs font-medium ${
                    msg.isModerator
                      ? "text-green-400"
                      : msg.isSubscriber
                        ? "text-purple-400"
                        : "text-gray-300"
                  }`}
                >
                  {msg.username}
                  {msg.isModerator && (
                    <span className="ml-1 text-green-400">🛡️</span>
                  )}
                  {msg.isSubscriber && (
                    <span className="ml-1 text-purple-400">⭐</span>
                  )}
                </span>
                <span className="text-xs text-gray-500">{msg.timestamp}</span>
              </div>
              <p className="text-sm text-white break-words">{msg.message}</p>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишите сообщение..."
              className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 pr-10"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <Smile className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
