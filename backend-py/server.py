from flask import (Flask, jsonify, request)
from flask_cors import (CORS)

app = Flask(__name__)
cors = CORS(app, origins = '*')
users = []

@app.route('/users', methods=['GET'])
def get_users():
  global users
  return jsonify(value = users)

@app.route('/users', methods=['POST'])
def add_user():
  global users
  users.append(request.get_json()['name'])
  return '', 201

if __name__ == '__main__':
  app.run()
