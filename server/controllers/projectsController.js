const projectsController = {};

projectsController.index = (req, res) => {
    res.send('<h1>Projects</h2><img src="/img/cat.jpeg" alt="cat"/>');
}

module.exports = projectsController;