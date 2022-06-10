import app from '.';
app.get('/departures', (req, res) => {
  res.json({ message: 'test' });
  console.log(req);
});
