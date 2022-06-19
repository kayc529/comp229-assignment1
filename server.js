const app = require('./server/config/app');
const db = require('./server/config/db');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(db.DB_URI);
    console.log('connected to DB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
