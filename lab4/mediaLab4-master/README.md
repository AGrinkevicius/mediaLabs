# mediaLab4

This lab aims to build your first WebRTC app.

There are many open source alternatives to build a simple communication application like Skype. One of the web based solution is WebRTC. You can try a huge set of examples: 
https://webrtc.github.io/samples/

# Requirements for repository
  - You have to clone this repository and make two branches (master and develop).
  - The develop branch should contain commits of every new feature of the AR application.
  - When all features will be ready you have to merge the development branch to the master.

# Requirements for WebRTC application
There are three options to choose from. 

Option A:
  - Use WebRTC filter application code (https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/filter) and additional filter like Canny Edge filter or any other non existing in the sample.
  - It is also needed to add a slider to control a threshold/gain for your filter. It should work realtime.  
  
# Important notes
  - SSL server is needed to run this lab material.
  - You will be needed to generate self signed sertificate and set up your web server. 
You can try to use these file servers:  
  - Apache: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md 
  - Tomcat: http://androidsrc.net/installing-tomcat8-raspberry-pi-3/ 
  - HFS: http://www.rejetto.com/hfs/ or any other server.
Proxy http to https:
  - https://technique.arscenic.org/lamp-linux-apache-mysql-php/apache-le-serveur-http/modules-complementaires/article/installer-et-configurer-le-module-ssl-pour-apache2?fbclid=IwAR1_nXNQlrMIdJ5tilVUyr45xeiA91yw21vhnMxWHnuvY01VTd2FVR_T2ao  


# Tested on:
1. Chrome Version 135.0.7049.115 (Official Build) (64-bit)
2. Opera GX Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 OPR/118.0.0.0 (Edition GX-CN)