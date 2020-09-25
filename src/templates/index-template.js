export default ({ htmlWebpackPlugin }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${htmlWebpackPlugin.options.title}</title>
    </head>
    <body>
      <nav id="nav"></nav>
      <section id="section"></section>
    </body>
  </html>`;
