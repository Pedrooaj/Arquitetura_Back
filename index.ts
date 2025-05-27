import app from "./src/app";
import { env } from "./src/config/dotenvConfig";

app.listen(env.PORT, (error?: Error) => {
    if(error){
        console.log(error);
        throw error;
    }

    console.log(`Servidor rodando http://localhost:${env.PORT}`);
    
})