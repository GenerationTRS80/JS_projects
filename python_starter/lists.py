# A List is a collection which is ordered and changeable. Allows duplicate members.

#  Create list
numbers = [1, 2, 3, 4, 5]
fruits = ['Appels','Oranges','Grapes','Pears']

#Use a constructore
#numbers2 = list((1,2,3,4,5))

#print(numbers,numbers2)

#Get a single value from a list
print(fruits[1].upper())

#Get length of list
print(len(fruits))

#Append to list
fruits.append('Mangos')

print(fruits)

#Remove from list
fruits.remove('Grapes')

#print(fruits)

#Insert Position
fruits.insert(2, 'Strawberries')

#Change value
fruits[0]='Blueberries'

# Remove with pop
fruits.pop(2)

#Reverse the list
fruits.reverse()

#Sort list
fruits.sort()

print(fruits)

#Revers sort
fruits.sort(reverse=True)

print(fruits)

