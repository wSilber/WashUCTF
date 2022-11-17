# SCANdalmonger

HELP! My Minecraft server was hacked and my special code was stolen! I need this code to access my diamonds! Can you get my special code back before the hacker steals my diamonds please? 

## Solution

Looking at the pcap file given, the first thing to notice is that there is a bunch of attempted connectings coming from ip <INSERT ATTACKER IP HERE>... By looking at the TCP port all of the attempts are increasing in port numbers meaning that the attacker started with a port scanning attack. Multiple ports are open, but the vulnerable port is port 25565 (default Minecraft port). 


### Flag: flag{B10cK_D3s7r0y3r_17283}