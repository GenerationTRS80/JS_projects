# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

#Create a class called user
class User:
  #Constructor: Is function that runs when you instantiate an Object from a class
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age

  def greeting(self):
    return f'My name is {self.name} and I am {self.age}'
  
  def has_birthday(self):
   self.age += 1


# Extend Class
class Customer(User):
  def __init__(self, name, email, age):
    self.name = name
    self.email = email
    self.age = age
    self.balance = 0

  def set_balance(self, balance):
    self.balance = balance
  
  def greeting(self):
    return f'My name is {self.name} and I am {self.age} and my balance is {self.balance}'

#Init user object
phil = User('Phil Seiersen', 'brad@gmail.com', 54)
#Init customer object
janet = Customer('Janet Johnson', 'janet@yahoo.com', 25)

janet.set_balance(500)
print(janet.greeting())

#phil.has_birthday()
#print(phil.greeting())
