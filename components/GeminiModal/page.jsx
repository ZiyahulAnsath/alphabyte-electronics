'use client'

import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal } from "antd";
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { SiGooglegemini } from "react-icons/si";

const GeminiModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const MODEL_NAME = "gemini-1.0-pro-001";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = await genAI
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((msg) => ({
              text: msg.text,
              role: msg.role,
            })),
          });
        setChat(newChat); // Set the chat state
      } catch (error) {
        setError("Failed to initialize chat.... Please try Again.");
      }
    };

    initChat();
  }, []);

  const handleSendMessage = async () => {
    try {
      const userMessage = {
        text: userInput,
        role: "user",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput("");

      if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      setError("Failed to send message.... Please try Again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const calculateModalPosition = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (!buttonRect) return { top: 0, left: 0 }; 
    const modalTop = buttonRect.top - window.innerHeight * .88; // Adjust this value as needed
    const modalLeft = buttonRect.left - window.innerHeight * .6; // Adjust this value as needed
    return { top: modalTop, left: modalLeft };
  };

  return (
    <>
      <div style={{ position: "fixed", bottom: 20, right: 35, zIndex: 1000 }} className="rounded-full">
        
        <Button type="default" onClick={openModal} ref={buttonRef}>
        <div className="flex flex-nowrap gap-2 ">
        Chat
        <SiGooglegemini className="w-7 h-7"/>
        </div>
         
        </Button>
      </div>
      <Modal
        title="Hello there! How can I assist you today?"
        open={modalOpen} 
        onCancel={closeModal}
        footer={[
          <div className="flex" key="footer">
            <Input
              type="text"
              placeholder="Ask me preferred Laptop...!"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="p-2 rounded-l-lg "
            />

            {loading ? (
              <div className="bg-blue-500 text-teal-50 p-2 rounded-md animate-pulse">
                Loading....
              </div>
            ) : (
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:text-red-300"
              >
                Ask
              </button>
            )}
          </div>,
        ]}
        style={{
          position: "fixed",
          zIndex: 1001,
          ...(modalOpen && calculateModalPosition()),
        }}
      >
        <div
          style={{ minHeight: "70vh", maxHeight: "70vh", overflowY: "auto" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.role === "user" ? "text-left" : "text-right"
              } mb-2`}
            >
              <div
                className={`rounded-2xl p-4 justify-items-center mx-4 inline-block text-base ${
                  msg.role === "user"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-green-100 text-green-900"
                }`}
              >
                {/* {msg.role === "user" ? "Z" : "A"} */}
                {msg.text}
              </div>
              <p className={`mt-1 font-medium text-xs text-gray-500 my-4` }>
                {msg.role === "bot" ? "Alphabyte Bot" : "You"} -{" "}
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
        {error && <div className="text-red-500 text-sm mb-4 ">{error}</div>}
      </Modal>
    </>
  );
};

export default GeminiModal;
