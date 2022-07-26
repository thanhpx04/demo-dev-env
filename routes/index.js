export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });
      
    app.get('/hello-world', (req, res) => {
      console.log("HELLO-LOG");
      console.log(req);
      console.log(req.context);
      res.render(
        'hello-world.hbs',
        {
          title: `Hello Thanh's world`
        }
      );
    });

    app.get('/uikit', (req, res) => {
      console.log("uikit-LOG");
      res.render(
        'uikit-demo.jsx',
        {
          title: `Hello uikit demo`
        }
      );
    });

    app.get('/main', (req, res) => {
      const {issueKey} = req.query
      res.render(
        'main.hbs',
        {
          issueKey: issueKey
        }
      );
    });

    // Add additional route handlers here...
}
