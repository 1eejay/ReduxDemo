const Event = require("./events");

const event = new Event();

event.on("listen", function (a, b) {
  console.log("监听到listen事件", a, b);
});

console.log("触发listen事件");
event.emit("listen", 1, 2);

console.log("注销listen事件");
event.off("listen");

console.log("再次触发");
event.emit("listen", 2, 4);
