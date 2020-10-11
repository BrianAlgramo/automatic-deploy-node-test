import server from "./server";
import { PORT } from "./appsetting";

server.listen(PORT) 

server.get("/",(request, response) => {
    response.send("Hello there");
});

server.get("/user",(request, response) => {
    response.send({name: "Kraken" , lastName: "The best"});
});

server.get("/app",(request, response) => {
    response.send({title:"New dashboard APP", body:"Exit dashboard app"});
});