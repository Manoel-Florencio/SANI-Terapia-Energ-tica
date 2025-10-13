import http from 'http';

const options = {
  hostname: 'localhost',
  port: 5174,
  path: '/background_video.mp4',
  method: 'HEAD'
};

const req = http.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
});

req.on('error', (err) => {
  console.error('request error:', err.message);
});

req.end();
