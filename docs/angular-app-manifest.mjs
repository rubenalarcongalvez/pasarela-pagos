
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/miscellaneous-features/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/miscellaneous-features/ko-fi"
  },
  {
    "renderMode": 2,
    "route": "/miscellaneous-features/stripe"
  },
  {
    "renderMode": 2,
    "route": "/miscellaneous-features/paypal"
  },
  {
    "renderMode": 2,
    "redirectTo": "/miscellaneous-features/ko-fi",
    "route": "/miscellaneous-features/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2390, hash: 'a80057505be0316b6b9f5ece9bafe007d2f2c5f4321136233f612d2025087a82', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1475, hash: '46fbc60ea61df2dc1c2d6f67be4169f342250ec5dec29b69506c37d4538c9662', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'stripe/index.html': {size: 24190, hash: '09f405a1394742e8a121b04482517c4ed76a2439d52a012ae4ad075c7e90ff98', text: () => import('./assets-chunks/stripe_index_html.mjs').then(m => m.default)},
    'ko-fi/index.html': {size: 25878, hash: 'a04bdb42a1dbad9a0f526c3f4e72858b5d8ef7264fbeee9d12b341e4a09cda5e', text: () => import('./assets-chunks/ko-fi_index_html.mjs').then(m => m.default)},
    'paypal/index.html': {size: 24190, hash: '94e4b9381a3976c890f18d6efd38bd281f4d84ea58d3d2a97147766cec53a6bb', text: () => import('./assets-chunks/paypal_index_html.mjs').then(m => m.default)},
    'styles-HDXMDPJA.css': {size: 17367, hash: 'bMo5xU4zFQM', text: () => import('./assets-chunks/styles-HDXMDPJA_css.mjs').then(m => m.default)}
  },
};
