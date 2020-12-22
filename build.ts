import { build } from 'esbuild'
import fs from 'fs'

fs.rmSync('bundle', { recursive: true })

build({
    bundle: true,
    outdir: 'bundle',
    splitting: true,
    format: 'esm',
    target: 'es2020',
    mainFields: ['module', 'browser', 'main'],
    entryPoints: [
        require.resolve('react-router-dom/esm/react-router-dom.js'),
        require.resolve('react-router-hash-link/lib/index.js'),
    ],
    plugins: [
        // NodeResolvePlugin({ extensions: ['.js'], mainFields: ['module'] }),
    ],
}).catch(console.error)
