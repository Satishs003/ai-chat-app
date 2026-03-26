import { useState, useEffect, useRef } from "react";

function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  // Add user message
  setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);

  // Clear input immediately
  setInput("");

  // Call backend
  const res = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await res.json();

  // Add bot reply
  setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
};
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#343541" }}>
      
      {/* 🔝 HEADER */}
      <div
        style={{
          padding: "15px",
          background: "#202123",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          borderBottom: "1px solid #444"
        }}
      >
        AI Chat
      </div>

      {/* 💬 CHAT AREA */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px"
            }}
          >
            <div
              style={{
                background: msg.sender === "user" ? "#0b93f6" : "#444654",
                color: "white",
                padding: "10px 15px",
                borderRadius: "15px",
                maxWidth: "60%"
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* ⌨️ INPUT */}
      <div style={{ display: "flex", padding: "15px", background: "#40414f" }}>
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          id="msgInput"
          type="text"
          placeholder="Type a message..."
          onKeyDown={(e) => {
                if (e.key === "Enter") {
                e.preventDefault(); // optional safety
                handleSend();
                }
                }}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "none"
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "8px",
            background: "#19c37d",
            color: "white",
            border: "none"
          }}
        >
          Send
        </button>
      </div>

      {/* 🔻 FOOTER */}
      <div
        style={{
          padding: "10px",
          background: "#202123",
          color: "#aaa",
          fontSize: "12px",
          textAlign: "center",
          borderTop: "1px solid #444"
        }}
      >
        This project is for educational purposes only and not intended for commercial use.
        Please verify important information independently.
      </div>
    </div>
  );
}

export default Chat;