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
                        background-color: purple;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        font-size: 36px;
                        text-align: center;
                        font-family: 'Arial', sans-serif;
                    }
                </style>
            </head>
            <body>
                <div>
                    You are the light of my life, the one who makes everything feel brighter 
                    and more meaningful. Every moment with you feels special, and I’m grateful 
                    for your love, your kindness, and the joy you bring into my world. No matter 
                    what comes our way, I promise to cherish you and be by your side, always and forever.
                    <b> Iloveyouuu Sadaf Baby!!! </b>
                </div>
            </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
