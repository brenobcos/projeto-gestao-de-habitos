const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#757BC8",
              "@info-color": "#757BC8",
              "@normal-color": "#121212",
              "@body-background": "#F1F1EF",
              "@component-background": "#F1F1EF",
              "@text-color": "#121212",
              "@text-color-secondary": "#121212",
              "@heading-color-dark": "#121212",
              "@text-color-dark": "#121212",
              "@border-radius-base": "0",
              "@border-radius-sm": "0",
              "@btn-font-weight": "900",
              "@btn-primary-color": "#121212",
              "@btn-default-bg": "#757BC8",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
