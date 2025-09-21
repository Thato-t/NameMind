'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}
interface ChatModalProps {
  showModal: (bool: boolean) => void;
}

function ChatModal({ showModal }: ChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm your AI domain assistant. I can help you brainstorm domain names, check availability, and provide creative suggestions. What kind of project are you working on?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const responses = [
      "That's a great idea! Let me suggest some domain names for your project:",
      "I understand you're looking for domain suggestions. Here are some creative options:",
      "Based on your description, I can help you find the perfect domain. Consider these:",
      "Excellent! I'll generate some domain ideas that match your vision:",
      "I love that concept! Let me brainstorm some domain names for you:"
    ];
    
    const domainSuggestions = [
      "• innovatetech.com\n• nextgenapp.io\n• smartstartup.co\n• futuretech.net",
      "• creativehub.com\n• designstudio.io\n• artisancraft.co\n• makerspace.net",
      "• healthtech.com\n• wellnessapp.io\n• careconnect.co\n• medinnovate.net",
      "• fintechplus.com\n• payeasy.io\n• moneywise.co\n• investsmart.net",
      "• edutech.com\n• learnhub.io\n• skillup.co\n• knowledgebase.net"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const randomSuggestions = domainSuggestions[Math.floor(Math.random() * domainSuggestions.length)];
    
    return `${randomResponse}\n\n${randomSuggestions}\n\nWould you like me to check the availability of any of these domains or generate more suggestions?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#181e2e] rounded-xl shadow-2xl w-full max-w-4xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <Image src="/images/logo.png" alt="AI" width={20} height={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Assistant</h2>
              <p className="text-sm text-gray-400">Online</p>
            </div>
          </div>
          <button
            onClick={() => showModal(false)}
            className="text-gray-400 hover:text-white transition cursor-pointer"
          >
            <Image src="/icons/maroon/x.png" alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser
                    ? 'bg-[#19B6F9] text-white'
                    : 'bg-[#14213D] text-white'
                }`}
              >
                <div className="whitespace-pre-line">{message.content}</div>
                <div className={`text-xs mt-1 ${
                  message.isUser ? 'text-blue-100' : 'text-gray-400'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#14213D] text-white rounded-lg p-3">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about domain names, availability, or get suggestions..."
              className="flex-1 bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-[#19B6F9] text-white px-4 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image src="/icons/gray/pacman.png" alt="Send" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatModal;
