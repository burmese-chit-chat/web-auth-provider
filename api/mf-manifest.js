module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Serve the mf-manifest.json content
  res.json({
    name: 'web_auth_provider',
    filename: 'remoteEntry.js',
    exposes: {
      './button': './src/button.tsx',
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: false,
      },
      'react-dom': {
        singleton: true,
        eager: true,
        requiredVersion: false,
      },
    },
  });
};
