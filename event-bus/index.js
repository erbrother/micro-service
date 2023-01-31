const axios = require("axios");
const request = require("request");
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const events = [];

app.post("/events", async (req, res) => {
  const event = req.body;

  events.push(event);
  try {
    axios.post("http://posts-clusterip-serv:4000/events", event);
    axios.post("http://comment-serv:4001/events", event);
    axios.post("http://query-serv:4002/events", event);
    axios.post("http://moderation-serv:4003/events", event);
    res.send({ status: "OK" });
  } catch (e) {
    res.status(400).send("Invalid JSON string");
  }
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('v57 ')
  console.log("Listening on 4005");
});
