# Python has functions for creating, reading, updating, and deleting files.

#Open file
myFile = open('myfile.txt', 'w')

print('Name: ', myFile.name)
print('Is Closed: ', myFile.closed)
print('Opening Mode: ', myFile.mode)

#Write to file
myFile.write('I love Python')
myFile.write(' and JavaScript')
myFile.close()

# Append to file use 'a'
myFile = open('myFile.txt','a')
myFile.write(' I like PHP as well')
myFile.close()

# Read from file
myFile = open('myFile.txt', 'r+')
text = myFile.read(100)
print(text)


