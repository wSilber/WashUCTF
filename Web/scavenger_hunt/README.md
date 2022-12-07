# Scavenger Hunt Solution

## Challenge Description

Here's a little warm up for your web skills. Try to find the flag hidden in the document.

[http://3.136.112.49:3000/](http://3.136.112.49:3000/)

## Solution

The flag has been split up into 5 segments where each segment gives a clue to the location of the next segment.

1. Given the hint "It's on the next line...", the first part of the flag can be found in the html document. By using the inspector tool or looking at the page source the flag and next hint can be found on the next line of code line 16. (1) `flag{b3`

2. The next hint is that the next clue is a little more stylish. This directs the user to inspect the CSS code where the flag is found at the bottom of the file. (2) `s7_1nsp`

3. The next hint is to Execute plan B. If the user inspects the javascript file `scripting.js`, a function planB is found. When the user runs this function the flag is appended to the document body. (3) `3ct0r_d`

4. The next hint is that only robots can find the next clue. This directs the user to look for the robots.txt file. By directing to `http://3.136.112.49:3000/robots.txt` the next part of the flag is at the bottom of the file. # (4) `ud3_23`

5. The last hint is that you need a map. This is a clue to go to the sitemap.xml file. This can be found at `http://3.136.112.49:3000/sitemap.xml`. The last part of the flag is found at the end of the file. (5) `498723}`

### flag{b3s7_1nsp3ct0r_dud3_23498723}
