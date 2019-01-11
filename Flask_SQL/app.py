from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#Import core os module (filepaths etc)
import os

#Init app
app = Flask(__name__)

# Run  Server

