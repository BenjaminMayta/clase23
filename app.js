// npm init -y es para iniciar, voy a obtener el package.json, despues npm i express y descargo el express

let express = require ('express')
let app = express () // express () es una funcion de alto nivel
let path= require ('path')
let port = 3000

app.use(express.static(path.join(__dirname,'public')))

/* app.get('/', (req,res) => res.send ('Bienvenido a nuestra pagina')) */
app.get('/',(req,res) => res.sendFile (path.join(__dirname,'views/home.html')))// Muestro lo que esta en mi html
//path.resolve en este caso si no encuentra el archivo que mande lo saltea y sigue con el siguiente
app.get('/contacto',(req,res) => res.sendFile (path.join(__dirname,'views/contacto.html')))
app.get('/login',(req,res) => res.sendFile (path.join(__dirname,'views/login.html')))
app.get('/register',(req,res) => res.sendFile (path.join(__dirname,'views/register.html')))

app.listen (port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`)) 

// Descargar en forma global nodemon con npm i -g nodemon
// ya que use gitignore tengo que descargar lo que ignore para volver a usarlo, con npm i