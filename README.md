# WashUCTF

This repository contains the source code for all of the challenges for the WashUCTF. The CTF consists of 4 categories: 
 - Cryptography
 - OSINT
 - Reversing
 - Web

 Each category contains its own set of challenges. Each challenge in the CTF contains some sort of vulnerability in which the user will attempt to exploit. Proper exploitation of each challenge will result in a flag of the form flag{text} unless specified.

 ## Setup

 The CFT was created using the CTFd framework which can be found here [CTFd Repository](https://github.com/CTFd/CTFd). This framework easily allows for the creation of a custom CTF using containorized docker images. The CTFd framework creates the webserver template allowing for various parameters to be changed including the name, adding challenges, and adding teams. It also comes included with a database to store challenge, user, and team information. We decided to use this framework because it allowed us to easily create the CTF website by installing and running a few docker images. 

 # Authors
 - William Silberstein
 - Ben Gilman



