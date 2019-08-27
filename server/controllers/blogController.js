const blogController = {};

blogController.index = (req, res) => {
    res.send('<h1>Blog</h2><img src="/img/cat.jpeg" alt="cat"/>');
}

module.exports = blogController;