# 🤖 AI Chat Application

## 📌 Overview
This is a full-stack AI chat application that allows users to interact with an AI model through a clean chat interface. 
The application is built using React for the frontend and Flask for the backend, with integration of the Cohere API for generating real-time AI responses.

---

## 🚀 Features
- 💬 Real-time chat interface
- 🤖 AI-generated responses using Cohere API
- 🔄 Frontend–backend communication using REST APIs
- ⚛️ State management using React Hooks
- ⚠️ Error handling and debugging
- 📸 Output screenshots included for demonstration

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- HTML, CSS, JavaScript

### Backend
- Python (Flask)
- Flask-CORS

### AI Integration
- Cohere API

---

## 📁 Project Structure
ai-chat-app/
│
├── ai_chat/ # Frontend (React - Vite)
├── backend/ # Backend (Flask API)
├── outputs/ # Screenshots of working application
└── README.md


---

## ⚙️ How It Works

1. User enters a message in the chat UI.
2. React frontend sends the message to Flask backend via API.
3. Backend processes the request and sends it to Cohere API.
4. Cohere generates a response.
5. Backend returns the response to frontend.
6. UI displays the AI response.

---

## 🧪 Running Locally

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
