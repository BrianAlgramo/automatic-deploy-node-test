import server from "./server";
import { PORT } from "./appsetting";

server.listen(PORT) 

server.get("/",(request, response) => {
    response.send("Buena parse por 3");
});