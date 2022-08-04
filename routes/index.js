export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/hello-world', (req, res) => {
      res.render('hello-world.hbs');
    });

    app.get('/main', (req, res) => {
      let issueKey = req.query.issueKey
      console.log(issueKey);
      res.render(
        'main.hbs',
        {
          issueKey: issueKey
        }
      );
    });

    app.post('/payload', (req, res) => {
      console.log("req");
      console.log(req);
  });

    // Add additional route handlers here...
}
