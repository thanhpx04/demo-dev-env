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

    app.get('/github-dialog', (req, res) => {
      res.render(
        'github-dialog.hbs'
      );
    });

    // Add additional route handlers here...
}
