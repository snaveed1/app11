const http = require('http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: black;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh; /* Full height of the viewport */
                        margin: 0; /* Remove default margin */
                        font-size: 48px; /* Large font size */
                    }
                </style>
            </head>
            <body>
                Hello World from app1
            </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
