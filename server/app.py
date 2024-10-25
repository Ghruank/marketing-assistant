# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI 

app = Flask(__name__)
CORS(app)

ai = MetaAI() 

@app.route('/', methods=['POST'])
def meta_api():
    user_prompt = request.json.get("prompt")
    # print(user_prompt)
    response = ai.prompt(message=("give me a 5 liner paragraph, creatively marketing. just give me the para, not any intro to it" + user_prompt))
    m = response.get("message")
    print(m)
    # print(jsonify({"message": m}))
    return jsonify({"message": m})


if __name__ == '__main__':
    app.run(debug=True)

# openrouter, fal.ai, 


# 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