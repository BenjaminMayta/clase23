// npm init -y es para iniciar, voy a obtener el package.json, despues npm i express y descargo el express

let express = require ('express')
let app = express () // express () es una funcion de alto nivel
let path= require ('path')
let port = 3000

app.get('/', (req,res) => res.send ('Bienvenido a nuestra pagina'))
app.get('/home',(req,res) => res.sendFile (path.join(__dirname,'views/home.html')))// Muestro lo que esta en mi html
//path.resolve en este caso si no encuentra el archivo que mande lo saltea y sigue con el siguiente
app.listen (port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`)) 

// Descargar en forma global nodemon con npm i -g nodemon