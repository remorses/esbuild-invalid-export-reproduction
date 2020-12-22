Reproduction for https://github.com/evanw/esbuild/issues/617

The generated chunk `bundle/chunk.ZZGDDAYD.js` has exports that are not defined, for example `HashRouter` and `Link`

This is probably because the package `react-router-hash-link` is importing `react-router-dom` with `require` but the entry for `react-router-dom` is in ESM format
