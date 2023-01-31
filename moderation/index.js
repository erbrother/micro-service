const bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors())

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const { postId, id, content } = data;

    const status = content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-serv:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("v57")
  console.log("Listening on 4003");
});
