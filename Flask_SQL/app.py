from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

#Import core os module (filepaths etc)
import os

#Init app
app = Flask(__name__)

#Base directory
basedir = os.path.abspath(os.path.dirname(__file__))

#Setup Db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#Init db
db = SQLAlchemy(app)
#Init Marshmallow
ma=Marshmallow(app)

#Product Class/Model
class Product(db.Model):
  Prdid = db.Column(db.Integer, primarykey=True)
  ProductName = db.Column(db.String(100), unique=True)
  ProductDesc = db.Column(db.String(200))
  ProdPrice = db.Column(db.Float)
  ProdQty = db.Column(db.Integer)

  def __init__(ProductName, ProductDesc, ProdPrice, ProdPrice)
    self.ProductName = ProductName
    self.ProductDesc = ProductDesc
    self.ProdPrice = ProdPrice
    self.ProdQty = ProdQty


# @app.route('/', methods=['GET'])
# def get():
#   # pass in a python dictionary
#   return jsonify({'msg':'Hello World'})



# Run  Server
if __name__ == '__main__':
    app.run(debug=True)

