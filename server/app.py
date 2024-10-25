# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI 

app = Flask(__name__)
CORS(app)

ai = MetaAI() 

@app.route('/api/meta', methods=['POST'])
def meta_api():
    user_prompt = request.json.get("prompt")
    response = ai.prompt(message=user_prompt)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)

# openrouter, fal.ai, 