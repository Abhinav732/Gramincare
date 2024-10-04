import React, { useState } from 'react';
import ChatWindow from './chatwindow.js';
import ChatInput from './chatinput.js';


const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    setMessages([...messages, { text: message, user: 'user' }]);

    try {
      const response = await fetch('http://localhost:5000/api/get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setMessages((prevMessages) => [...prevMessages, { text: data.response, user: 'bot' }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Error fetching response', user: 'bot' }]);
    }
  };

  return (
    <div className="chatbot">
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chatbot;
