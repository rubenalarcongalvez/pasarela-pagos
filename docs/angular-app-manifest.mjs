
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
    'index.csr.html': {size: 2382, hash: 'fcae62b51eab3ec0eb6979cc708b431610845ebd0d5780c88bb9fde3a5f83ce4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1467, hash: '4555f9ef2cd27ffcabff51434197e3d22fc4116ec1920e7c244aab4c5272a3ca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'paypal/index.html': {size: 24182, hash: 'fd31dbff1cf9e912013dbfe8d661e8354696fd05b1ce62e064eb5a98004bc42f', text: () => import('./assets-chunks/paypal_index_html.mjs').then(m => m.default)},
    'stripe/index.html': {size: 24182, hash: '1a783ea0b14f9af0ad824689d1001486b1b2dae7f9b60c32ccec712e174f7a2f', text: () => import('./assets-chunks/stripe_index_html.mjs').then(m => m.default)},
    'ko-fi/index.html': {size: 25972, hash: '5187760c7aad6fd5ae830c3a232bab4373a04f16b8f603f603fc114f8fc21826', text: () => import('./assets-chunks/ko-fi_index_html.mjs').then(m => m.default)},
    'styles-Z6BCTSAP.css': {size: 17451, hash: 'aUCjiun63N8', text: () => import('./assets-chunks/styles-Z6BCTSAP_css.mjs').then(m => m.default)}
  },
};
