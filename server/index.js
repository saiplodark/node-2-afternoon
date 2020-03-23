const express = require ("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


const messagesBaseURL = "/api/messages";
app.post(messagesBaseURL, mc.create);
app.get(messagesBaseURL, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);

const port= 3001;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});
