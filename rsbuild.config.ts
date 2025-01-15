import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'web_auth_provider',
	  filename: 'remoteEntry.js',
      exposes: {
        './button': './src/button.tsx',
      },
      shared : {
        react : {
          singleton: true,
          eager : true, 
          requiredVersion: false
        }, 
        'react-dom' : {
          singleton: true,
          eager : true, 
          requiredVersion: false
        }
      }
    }),
  ],
  server: {
    port: 3001,
  },
});
