import React from 'react';

// Define or import the extractMessage function
const extractMessage = (apiResponse) => {
  if (apiResponse && typeof apiResponse.message === 'string') {
    return apiResponse.message.trim();
  } else {
    console.error('Invalid API response format:', apiResponse);
    return 'Error: No valid message found.';
  }
};

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      <div className='mcare'>
        <img src="https://res.cloudinary.com/dyevz7hnp/image/upload/v1722424093/image-removebg-preview_ni4o3e.png" className="chatbot-icon"/>
      <p className='chatbot-name'>AI Assistant</p>
      </div>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.user}`}>
          {/* Use extractMessage function to clean up message text */}
          {typeof message.text === 'object'
            ? JSON.stringify(message.text)
            : extractMessage({ message: message.text })}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
