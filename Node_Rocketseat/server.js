// import { createServer } from 'node:http'

// const server = createServer((request, response) => {

//     response.write('Hello World')

//     return response.end()
// });

// server.listen(3000);

// POST localhost:3000/video
// DELETE localhost:3000/videos/1

import { fastify } from 'fastify'

const server = fastify();

server.get('/', () => {
    return 'Hello World'
});

server.get('/hello', () => {
    return 'Hello Vinicius'
});

server.get('/node', () => {
    return 'Hello Node'
});

server.listen({
    port: 3000
});