const pagesController = {};

pagesController.homePage = (req, res) => {
    res.send('<h1>Home</h1>');
}

pagesController.about = (req, res) => {
    res.send('<h1>About</h1>');
}

pagesController.pug = (req, res) => {
    res.render('test' , {
        title: "Testing pug page",
        user: 'John',
        age: 40
    });
}

module.exports = pagesController;