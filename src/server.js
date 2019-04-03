const { init } = require('./presentation');

const port = 3000;

const app = init();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
