// Load polyfills (once, on the top of our web app)
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./index.css";

/**
 * Frontend code running in browser
 */
import * as React from "react";
import { hydrate } from "react-dom";

import ConfigContext from "../components/ConfigContext";
import { Config } from "../server/config";
import App from "../App";
import { Auth0Provider } from "@auth0/auth0-react";

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;

/** Components added here will _only_ be loaded in the web browser, never for server-side rendering */
const render = () => {
  hydrate(
    <>
      {/* The configuration is the outmost component. This allows us to read the configuration even in the theme */}
      <ConfigContext.Provider value={config}>
          <Auth0Provider
              domain={config.app.AUTH0_DOMAIN}
              clientId={config.app.AUTH0_CLIENT_ID}
              redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
      </ConfigContext.Provider>
    </>,
    document.getElementById("root"),
  );
};

render();
