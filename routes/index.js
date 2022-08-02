export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
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

    app.get('/hello-world', (req, res) => {
      res.render(
        'hello-world.hbs',
        {
          title: 'Atlassian Connect'
        }
      );
  });

    // Add additional route handlers here...
}
