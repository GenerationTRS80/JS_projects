# A Tuple is a collection which is ordered and >> unchangeable  <<. Allows duplicate members.
 
# Create tuple
# You create a tuple using parenthese in stead brackets like lists
fruits = ('Appels', 'Grapes', 'Oranges')
#fruits2 = (('Apples','Grapes','Oranges'))

#Trailing value needs a single comma
fruits2 = ('Apple',)

#print(fruits[1])

#***Can't change value ###
# CAN'T assign value to an objects
# fruits[0] = 'Pears'


#Delete Tuple
del fruits2

print(len(fruits))

# A Set is a collection which is unordered and unindexed. No duplicate members.

#Creat Set {User curly braces for sets}
fruits_set = {'Apples','Oranges','Mango'}


#Check if in set
print('Apples' in fruits_set)

#Add to set
fruits_set.add('Grape')

print(fruits_set)

#Remove from set
fruits_set.remove('Oranges')

print(fruits_set)

#Clear the set
fruits_set.clear()

print(fruits_set)

#delete the set
del fruits_set

print(fruits_set)