const express = require("express");
const morgan = require('morgan')


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//public static
app.use(express.static("public"));

/*app.use(require("./controllers/staticController"));
app.use(require("./controllers/contactController"));
app.use(require("./controllers/galleryController"));
app.use(require("./controllers/aboutController"));*/


require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`==> Server listening at http://localhost:${PORT}/`);
});