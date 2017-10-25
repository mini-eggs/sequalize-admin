const getTemplate = ({ route }) =>
  `<div id="root"></div>
  <script>window.__SEQUALIZE_ADMIN_API_ROUTE__="${route}";</script>
  <script defer src="${route}/build.js"></script>`
    .split("\n")
    .join("")
    .split("  ")
    .join("");

export default ({
  models,
  admins,
  route,
  server,
  publicPath,
  staticFilesFunction
}) => {
  const template = getTemplate({ route });

  server.get(route, (req, res) => res.send(template));
  server.get(`${route}/api/get/models`, (req, res) =>
    res.json({ models: [{ name: "hi" }] })
  );

  server.use(route, staticFilesFunction(`${publicPath}/dist/public`));
};
