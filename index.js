const server = require('./src/app');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});