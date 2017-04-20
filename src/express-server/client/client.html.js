const HTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World Express.js</title>
  </head>
  <body>
    <h1>Hello World Express.js</h1>
    <section>
      <h2>Web Sockets:</h2>
      <input id="msg-box" type="text" value />
      <button onclick="emit()">Send</button>
    </section>
    <ul></ul>

    <script src="vendor/socket.io.min.js"></script>
    <script>
      const socket = io('http://192.168.0.172:3000');
      const emit = () => {
        const msg = document.querySelector('#msg-box').value;
        socket.emit('msg', { msg: msg });
      };
      socket.on('news', function (data) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = JSON.stringify(data);
        ul.appendChild(li);

        socket.emit('my other event', { my: 'data' });
      });
    </script>
  </body>
</html>
`;

export default HTML;
