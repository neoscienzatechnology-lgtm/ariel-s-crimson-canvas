import handler from 'serve-handler';
import http from 'http';

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'dist',
    rewrites: [
      { source: '**', destination: '/index.html' }
    ]
  });
});

const port = process.env.PORT || 80;
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
