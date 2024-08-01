
# Install MongoDB on Ubuntu 
MongoDB can be installed on Ubuntu with the use of the following commands. These commands are easy to run on the terminal and make the installation process handy. Follow the steps given below to install MongoDB:
***
### Update the package list
```
$ sudo apt-get update -y
```

### Install MongoDB
```
$ sudo apt-get install -y mongodb-org
```
### Check MongoDB status
```
$ sudo systemctl status mongod
```
### Stop MongoDB
```
$ sudo systemctl stop mongodb
```
### Start MongoDB
```
$ sudo systemctl start mongod
```
### Start mongoshell
```
$ mongosh
```
### Enable MongoDB so it starts on boot
```
$ sudo systemctl enable mongod
```
# Install MongoDb compass
***
### Download MongoDB Compass
```
$ wget https://downloads.mongodb.com/compass/mongodb-compass_1.43.4_amd64.deb
```
### Install MongoDB Compass
```
$ sudo apt install ./mongodb-compass_1.43.4_amd64.deb
```
### Start MongoDB Compass
```
$ mongodb-compass
```





