import app from './app/server';

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on: http://localhost:${port}`));