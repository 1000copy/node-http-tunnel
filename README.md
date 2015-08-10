# simplized labs:

准备：
1. client ,server,tunnel-client,tunnel-server 都在一个电脑上
2. 启动 server,一个tcp server

	nodemon tcpserver.js 
	

3. 启动tunnel server

	nodemon server development

4. 启用test client

	nodemon ssh-connect localhost  localhost 8877 development



现在，在ssh-connect 控制台上写点什么然后回车，

	1
	server echo :1
	2
	server echo :2

从tcp client发出的tcp 包，经由 localhost ,到localhost 8877 的tcp server，并带回了tcp server的问候：server echo:#client info

YES ! 拍照留念

![拍照留念](debug-succeed-memory.png)