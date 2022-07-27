export default function routes(app, addon) {
  var issueKey;
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/main', (req, res) => {
      issueKey = req.query.issueKey
      console.log(issueKey);
      res.render(
        'main.hbs',
        {
          issueKey: issueKey
        }
      );
    });

    // Add additional route handlers here...
}
