# A function is a block of code which only runs when it is called. In Python, we do not use parentheses and curly brackets, we use indentation with tabs or spaces


#Create a function
def sayHello(name='Leon Benson'):
  print(f'Hello {name}')

#sayHello('Phil Seiersen')
#sayHello()

#Return Values
'''
def getSum(num1, num2):
  total = num1 + num2
  return total

num = getSum(3, 4)
print(num)  
'''

# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression. Very similar to JS arrow functions
'''
getSum = lambda num1, num2 : num1 + num2

print(getSum(3, 14))
'''

# If/else conditions are used to decide to do something based on something being true
x = 20
y = 20

# Comparison operatore (==, !=, >, <, >=, <=) - Used to compare values
'''
if x > y:
  print(f'{x} is greater than {y}')

#if / else
if x > y:
  print(f'{x} is greater than {y}')
else:
  print(f'{y} is greater than {x}')


# elif
if x > y:
  print(f'{x} is greater than {y}')
elif x==y:
   print(f'{x} is equal to y {y}')
else:
  print(f'{y} is greater than {x}')
'''

'''
#Nested if statements
if x > 2:
  if x <= 10:
    print(f'{x} is greater that 2 and less than or equal to 10')
'''

# Logical operators (and, or, not) - Used to combine conditional statements
'''
# and
if x > 2 and x <= 10:
  print(f'{x} is greater that 2 and less than or equal to 10')

# or
if x > 2 or x <= 10:
  print(f'{x} is greater that 2 or less than or equal to 10')

# not
if not (x == y):
  print(f'{x} is not equal to {y}')
'''

# Memebership Operators (not, not in) - Membership operators are used to test if a sequence is presented in a object

numbers = [1,2,3,4,5]
'''
# in
if x in numbers:
  print(x in numbers)

# not in
if x not in numbers:
  print(x not in numbers)

# Identity operators  (is, is not) - Compare the objects,

# is
if x is y:
  print(x is y)
'''
# WA loop is used to iterate over a sequence

people3 = ['John','Paul', 'Sara','Susan']


# Simple for loop
'''
for person in people3:
  print(f'Current Person: {person}')
'''

# Break out of loop
'''
for person in people3:
  if person == 'Sara':
    break
  print(f'Current Person: {person}')
'''
# Continue (Skip)
'''
for person in people3:
  if person == 'Sara':
    continue
  print(f'Current Person: {person}')
'''
#range
'''
for i in range(len(people3)):
  print(people3[i]) 

for i in range(0, 11):
  print(f'Number: {i}')
'''
#While Loops execute a set of statements

count = 0
while count <= 10:
  print(f'Count: {count}')
  count += 1
