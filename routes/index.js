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

    // Add additional route handlers here...
}
