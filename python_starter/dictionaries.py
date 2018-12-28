# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.


#Create a dictionary
person = {
  'first_name': 'John',
  'last_name': 'Doe',
  'age': 30
}

# Use constructor 
#person2 = dict(first_name='Sare', last_name='Williams')
#print(person2, type(person2))

#Get a value
#print(person['first_name'])

#print(person.get('last_name'))

#Add Key Value
person['phone'] = '555-555-5555'

'''
print(person)
print(person.keys())
print(person.items())
'''

#Copy to dictionary
person2 = person.copy()
person2['city'] = 'Boston'

#Remove Item
del (person['age'])
person.pop('phone')

#Clear
person.clear()


#Note you need to convert value of length which is an integer to str()
print('Length = ' + str(len(person2)))

#list of Dictionaries
people = [
  {'name': 'Martha', 'age': 30},
  {'name':'Kevin', 'age': 25}
]

print('Age = '+ str(people[0]['age']))
print(people[1]['name'])