# # app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
from meta_ai_api import MetaAI 

# app = Flask(__name__)
# CORS(app)

ai = MetaAI() 

# @app.route('/', methods=['POST'])
# def meta_api():
#     user_prompt = request.json.get("prompt")
#     # print(user_prompt)
#     response = ai.prompt(message=("give me a 5 liner paragraph, creatively marketing. just give me the para, not any intro to it" + user_prompt))
#     m = response.get("message")
#     print(m)
#     # print(jsonify({"message": m}))
#     return jsonify({"message": m})


# if __name__ == '__main__':
#     app.run(debug=True)

# # openrouter, fal.ai, 


# # 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

# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY") 
# print(OPENROUTER_API_KEY) 

def get_openrouter_response(prompt, context):
    # print(prompt)
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "meta-llama/llama-3.2-1b-instruct",
        "messages": [
            {"role": "system", "content": context},
            {"role": "user", "content": prompt}
        ]
    }
    response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=data)
    return response.json()

@app.route('/', methods=['POST'])
def openrouter_api():
    query = request.json.get("query")
    region = request.json.get("region")
    month = request.json.get("month")
    genz = request.json.get("genz")

    with open("./Assets/dataset2.txt", "r", encoding='utf-8') as file:
        context = file.read()

    # full_prompt = "you are a master at analaysis. analyse the context given to you, and design the perfect marketing paragraph for my event/product, that is - " + user_prompt + ". give only the paragraph, without the need of any intro, and return in an object form, with the key as 'message' and value as the paragraph. for example: {message: 'your paragraph'} this paragraph would be of 5 lines, and should be creative and marketing oriented. "
    # print(full_prompt)

    # response_data = get_openrouter_response(full_prompt, context)
    # m = response_data.get("choices")[0].get("message", {}).get("content", "")
    message=("give me a simple creative paragraph in english to be used for marketing on "+query+". sell the product as much as you can. give only the para, nothing else, no intros or shit because im webscraping from you. it should not be more than 10 lines.use " + ("genz language" if genz else "traditional language")+  "the month of occurence is"+month+", so take the only one festival of india which happens during that month and the festival should be decided on basis of genz or not . the state is "+region)
    response = ai.prompt(message)
    m = response.get("message")
    # print(request.json)
    # print(region, query, month, genz)
    # print(message)
    print(m)
    return jsonify({"message": m[1:-1]})

if __name__ == '__main__':
    app.run(debug=True)
