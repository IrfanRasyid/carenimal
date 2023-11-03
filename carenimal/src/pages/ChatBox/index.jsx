// ChatBox.js
import React, { useState } from 'react';
import './ChatBox.css'; // File CSS untuk ChatBox
import OpenAI from 'openai'; // Import OpenAI

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

const sendMessageToOpenAI = async (inputText) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: inputText,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].message.content;
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    const newMessages = [...messages, { text: inputText, sender: 'user' }];
    setMessages(newMessages);
    const response = await sendMessageToOpenAI(inputText); // Kirim pesan ke OpenAI
    const newMessagesWithResponse = [...newMessages, { text: response, sender: 'ai' }];
    setMessages(newMessagesWithResponse);
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'ai-message'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
