from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI
import os
import atexit

app = Flask(__name__)
CORS(app)
ai = MetaAI()
CONVERSATION_FILE = 'text.txt'

prompt1 = '''You are a chatbot named "MCare AI" specializing in the Health Care Domain. Your goal is to provide informative responses to questions related to health-related queries. Your task is to recognize various health-related inquiries and provide accurate explanations or advice. If a user asks an unrelated question, politely decline to answer. Try to keep the language of the answers as simple as possible and don't provide any medications. Provide remedies. (Answer in upto 100 words only)'''

# Initialize the conversation file with the prompt
with open(CONVERSATION_FILE, 'w') as text:
    text.write(prompt1 + "\n")

@app.route('/api/get-response', methods=['POST'])
def get_response():
    data = request.json
    user_message = data.get('message')

    # Read the current conversation history and keep only the last two exchanges
    conversation_history = []
    if os.path.exists(CONVERSATION_FILE):
        with open(CONVERSATION_FILE, 'r') as text2:
            lines = text2.readlines()
            prompt_and_last_exchanges = lines[:1] + lines[-4:]  # Keep the prompt and last 2 exchanges (4 lines)

    # Add the new user message to the history
    prompt_and_last_exchanges.append(f"Me: {user_message}\n")

    # Get AI response
    response = ai.prompt(
        message="The following text is the conversation to this point:\n" + ''.join(prompt_and_last_exchanges) +
        "\nPlease consider this text the conversation up to this point. This is my new question: " + user_message
    )

    ai_message = response['message']
    prompt_and_last_exchanges.append(f"Meta AI: {ai_message}\n")

    # Write the updated conversation history to the file, ensuring it only contains the prompt and last two exchanges
    with open(CONVERSATION_FILE, 'w') as text:
        text.writelines(prompt_and_last_exchanges[-5:])  # Save the prompt and last two exchanges

    print(f"MetaAI response: {ai_message}")
    return jsonify({'response': ai_message})

def cleanup():
    if os.path.exists(CONVERSATION_FILE):
        os.remove(CONVERSATION_FILE)
        print(f"{CONVERSATION_FILE} deleted.")

atexit.register(cleanup)

if __name__ == '__main__':
    app.run(debug=True)