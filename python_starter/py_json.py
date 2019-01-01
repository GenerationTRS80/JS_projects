# JSON is commonly used with data APIS. Here how we can parse JSON into a Python dictionary

#Import JSON module
import json

#Sample JSON
userJSON = '{"first_name":"John","last_name":"Doe","age":30}'

#Parse to ** DICTIONARY **
user = json.loads(userJSON)

print(user)
print(user['first_name'])

car ={'make': 'Mazda','model':'Mustang','year':1970}

carJSON = json.dumps(car)

print(carJSON)