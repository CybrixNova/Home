const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public/assets'))
app.set('views', './public/views');
app.set('trust proxy', true);


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5055, () => {
  console.log(`Server is running at http://localhost:5055`);
});