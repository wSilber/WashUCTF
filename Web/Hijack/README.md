# Hijack Solution

## Challenge Description

Help a hacker stole my super secret file. Can you help find it for me?

## Solution

The Hijack challenge gives the user a pcap file that contains all of the information needed to solve the challenge. The first thing to notice is that there are lots of TCP SYS packets all coming and going to the same ip addresses. From the TCP scan it can be seen that only ports 21, 22, and 80 are open. Thus all other TCP SYN packets are needed. Towards the end of the packet capture it can be seen that an FTP connection was made on packet 2037. One of the vulnerabilities of FTP is that all information is sent over plain text. Looking at the entire FTP connection, it can be seen that the attacker logged into the FTP server, transfered a file, and exited. On packet 2072 the data of this file can be found. This data contains the flag.

### flag{Un3ncry9T3D_F7P_283743}

