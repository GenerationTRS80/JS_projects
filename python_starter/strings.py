# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods


name = 'Phil'
age = 54

# Concatenate
# Note us str() to cast int as a string
print('Hello, my name is ' + name + ' I am so old ' + str(age))

# String Formatting

# Arguments by position Using place holders
print('My name is {name}. And my age is {age}'.format(name=name, age=age))

#F-strings (version 3.6 and after)
print(f'My name is {name} and my age is {age}!')


# String Methods

s = 'hello world in all caps'
l = 'hello world in LOWER ALL'

#Capitalize first letter in string
print(s.capitalize())
print(s.upper())
print(l.lower())

#Get length
print('Get length '+ str(len(l)))
