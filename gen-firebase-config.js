const fs = require('fs')

if (!fs.existsSync('config')) fs.mkdirSync('config');
if (!fs.existsSync('config/firebaseConfig.json')) fs.writeFileSync('config/firebaseConfig.json', process.env.SURVEY_FIREBASE_CLIENT_PRIVATE_KEY);