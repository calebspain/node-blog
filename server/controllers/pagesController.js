const pagesController = {};

pagesController.homePage = (req, res) => {
    res.render('pages/home');
}

pagesController.about = (req, res) => {
    res.send('<h1>About</h1>');
}

module.exports = pagesController;