简化的实验条件：

1. client ,server,tunnel-client,tunnel-server 都在一个电脑上

2. 启动 server,一个tcp server

	node httpserver.js 

	TCP server listening on port 8877 at localhost.

3. 启动tunnel server

	node server development
4. 启动 tunnel client

node client localhost development

5. 启用test client

node ssh-connect localhost  localhost 8877 development

经由 localhost ,到localhost 8877 

6. test client 发出command json 

	[{"method":"open","stream_id":0,"port":"8877","host":"localhost"}]

7. tunnel client 收到 command json ,经过multiplex_decapsulate

		var socket = net.connect({port: chunk.port, host: chunk.host}, function() {
		console.log('made a TCP connection to '+chunk.host+':'+chunk.port);
		pair[0].pipe(socket).pipe(pair[1]);
   并双向 pipe ,形成双向传递通道

8. tcp server 因为7 的代码net.connect 而连接，并发发送 echo server ，经过tunnel server ,到client
9. tunnel client 目前解析报错，原因待查。

TODO: 

   ITEM 9 WHY TUNNEL CLIENT REPORT ERROR?

<h2>HTTP tunnel for node.js</h2>
<h3>
Objective
</h3>
Tunnel arbitrary TCP connections through HTTP.
<h3>
Security
</h3>
Use an SSH tunnel over the HTTP tunnel
<h3>
Forward ports over the HTTP tunnel
</h3>
Use an SSH tunnel over the HTTP tunnel
<h3>
How to use
</h3>
<code>
# On server outside the firewall
./server &
disown
exit

# On your machine inside the firewall
./client # This sets up a SOCKS5 server on your local machine

# Use with SSH
ssh <your normal options> -o ProxyCommand "./ssh-connect <address of tunnelling server> %h %p"

# pwnt.
</code>
