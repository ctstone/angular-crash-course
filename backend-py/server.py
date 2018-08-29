from flask import (Flask, jsonify)
from flask_cors import (CORS)

app = Flask(__name__)
cors = CORS(app, origins = '*')
counter = 0

@app.route('/')
def home():
  return jsonify(message = 'hello world!')

@app.route('/count')
def count():
  global counter
  counter += 1
  return jsonify(value = counter)

if __name__ == '__main__':
  app.run()