from flask import Flask, request, jsonify
from flask_cors import CORS
import cohere
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

co = cohere.Client(os.getenv("COHERE_API_KEY"))  # 🔑 use new key

@app.route("/")
def home():
    return "Backend running"

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        message = data.get("message")

        response = co.chat(
            model="command-nightly",   # ✅ working model
            message=message,
            temperature=0.8,
            max_tokens=500
        )

        reply = response.text

    except Exception as e:
        print("ERROR:", str(e))
        reply = "Something went wrong"

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)