var socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
  console.log("Attempting to connect.. ");
  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = (msg) => {
  console.log("Sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
