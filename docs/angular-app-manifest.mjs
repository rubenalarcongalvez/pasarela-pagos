
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pasarela-pagos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pasarela-pagos/ko-fi"
  },
  {
    "renderMode": 2,
    "route": "/pasarela-pagos/stripe"
  },
  {
    "renderMode": 2,
    "route": "/pasarela-pagos/paypal"
  },
  {
    "renderMode": 2,
    "redirectTo": "/pasarela-pagos/ko-fi",
    "route": "/pasarela-pagos/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2382, hash: '6f9cd6b94a93d69f53b9ffbb13a7a79b9f7836328a23be2c206df340c74ad6ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1467, hash: '08bffdc94f60ca3eb554ec56e09d976137e29f5a89f7113750951e6b62890369', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'ko-fi/index.html': {size: 25870, hash: '3de2a65e65c546c5f9796f17fc1ec590ab1500650800be68ce947cab6d2534cd', text: () => import('./assets-chunks/ko-fi_index_html.mjs').then(m => m.default)},
    'stripe/index.html': {size: 24182, hash: 'a6fee9f8291e58b2ae89329492c2b1d36b585af58ebeeb67d2a1c760a55bb62a', text: () => import('./assets-chunks/stripe_index_html.mjs').then(m => m.default)},
    'paypal/index.html': {size: 24182, hash: 'b1fd3d2e64d96503f76523870b096cb79cbfdbdd8939264aa2ab7da9a6e8d686', text: () => import('./assets-chunks/paypal_index_html.mjs').then(m => m.default)},
    'styles-HDXMDPJA.css': {size: 17367, hash: 'bMo5xU4zFQM', text: () => import('./assets-chunks/styles-HDXMDPJA_css.mjs').then(m => m.default)}
  },
};
