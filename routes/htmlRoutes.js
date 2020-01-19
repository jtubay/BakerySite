const path = require ('path');

module.exports = (app) =>{
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    app.get('/gallery', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/gallery.html"))
    })
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/contact.html"))
    })
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/aboutus.html"))
    })
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/error.html"))
    })
    
}
