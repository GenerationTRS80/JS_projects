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
  id = db.Column(db.Integer, primary_key=True)
  ProductName = db.Column(db.String(100), unique=True)
  ProductDesc = db.Column(db.String(200))
  ProdPrice = db.Column(db.Float)
  ProdQty = db.Column(db.Integer)

 #This is the class constructor
 #  Self represent this in JS Script or Me in MS Access VBA
  def __init__(self, ProductName, ProductDesc, ProdPrice, ProdQty):
    self.ProductName = ProductName
    self.ProductDesc = ProductDesc
    self.ProdPrice = ProdPrice
    self.ProdQty = ProdQty

#Product Schema (this is what marshmellow is used for)
class ProductSchema(ma.Schema):
  class Meta:
    fields=('id','ProductName','ProductDesc','ProdPrice','ProdQty')

#Init schema (product update single, products update many)
product_schema=ProductSchema(strict=True)
products_schema = ProductSchema(many=True, strict=True)

# Create a Product (Don't use : at end of route)
# add method directly under the route
@app.route('/product', methods=['POST'])
def add_product():
  ProductName = request.json['ProductName']
  ProductDesc = request.json['ProductDesc']
  ProdPrice = request.json['ProdPrice']
  ProdQty = request.json['ProdQty']
  
  #Instantiate new objects
  new_product = Product(ProductName, ProductDesc, ProdPrice, ProdQty)
  
  #Pass in new product
  db.session.add(new_product)
  #Commit to database
  db.session.commit()

  return product_schema.jsonify(new_product)


# @app.route('/', methods=['GET'])
# def get():
#   # pass in a python dictionary
#   return jsonify({'msg':'Hello World'})

# Run  Server
if __name__ == '__main__':
    app.run(debug=True)

