//const express ) rquire ("express"); per qualche volta si usa questo infatti al passato usiamo qusto ma adesso non si usa tanto

// a javaScript tutte le cose sone object 

import express from 'express'; 
import connectDB from './config/database.js';    //OR //import database from './config/database.js';
import HANDLERS from './handlers/index.js';
import errorMiddleware from './middlewares/error.js';
import { authMiddleware } from './middlewares/auth.js'; 
import cors from 'cors';


const app = express(); //anche il express() è object che si chiama instant  //
// che cosa è oggetto a javaScript? {} = questo si chiama oggetto il cose che abbiamo meesso su curlybracket 

const PORT = process.env.PORT;

connectDB();  //OR //database.connectDB() //asyncgoranc ho so first ma app.listen (PORT... )

app.use(cors());
app.use(express.json()); // prima execute poi dopo 
app.use(authMiddleware);
app.use("/", HANDLERS); //handlers load vako  e quindi quando questo butta errore altro perciò errorMiddleware si preoccupa per si chiama endpoints e quindi prima chiamiamo endpoints e poi errorMiddleware si chiama routes
app.use(errorMiddleware); //error handling middlw ware  interpriter language  //non dobbiamo execute quindi non abbiamo usato () 


// function printreference =() => {
//console.log ("server is runniug on port 3000")
//} 

//witnout () non possiamo definire function MA QUESTO TIPO DI FUNZIONE NON USIANO ADESSO QUNDI USIAMO  PER ESEMPIO: app.listen(()=>{ console.log(""); })

// IL CASO DI CALLBACKS NON USIAMO () IL parentesi PERCHè SE USAMO IL PARENTESI () IL RISPOSTA VIENI PRIMA DI CONSOLE. LOG()


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`); //synchoranc form ma xa 
   
});


// a.listen (...................}) is callbacks function of arrow type 

//a.listen(3000, printresponse); listen is a method = function of class che possiamo definire con il parentesi il 3000 e printrespomnse si chiama parentesi ma in tootale si chiama callback function perchè il function ha richiamato un altro function 
//se usiamo il [] è array
// a javaScript c'è due tipi di 
// se vediamo var non usiamo adesso quindi usiamo let o 

//devDependencies 