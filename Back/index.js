const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => console.log('Server running on port 3001'));