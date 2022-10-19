const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
require('dotenv').config();
const middlewares = jsonServer.defaults()
server.use(middlewares)

server.use((req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        if(req.headers.authorization.split(" ")[1] === process.env.BearerToken) {
            next()
        } 
    } else {
        res.sendStatus(401)
    }
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})