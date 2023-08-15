import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'favicon.svg',
        'pwa-64x64.png',
        'apple-touch-icon-180x180.png',
        'pwa-192x192.png',
        'maskable-icon-512x512.png',
        'pwa-512x512.png',
      ],
      manifest: {
        id: '7.0.0',
        start_url: '.',
        display: 'standalone',
        name: 'Web app name',
        short_name: 'Web app short name',
        description: 'Web app description',
        theme_color: '#f7f7f7',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
    //   {
    //     ...vitePluginFaviconsInject({
    //       /** Your source logo */
    //       source: 'public/logo.svg',
    //       /** Inject html links/metadata. */
    //       inject: true,
    //       /** `Favicons` configuration options
    //        *  - [See `favicons` documentation](https://github.com/itgalaxy/favicons) */
    //        config: {
    //         path: '/', // Path for overriding default icons path. `string`
    //         appName: 'Web app name', // Your application's name. `string`
    //         appShortName: 'Web app short name', // Your application's short_name. `string`. Optional. If not set, appName will be used
    //         appDescription: 'Web app description', // Your application's description. `string`
    //         developerName: 'George Roubie', // Your (or your developer's) name. `string`
    //         developerURL: 'https://github.com/georgeroubie', // Your (or your developer's) URL. `string`
    //         cacheBustingQueryParam: null, // Query parameter added to all URLs that acts as a cache busting system. `string | null`
    //         dir: 'auto', // Primary text direction for name, short_name, and description
    //         lang: 'en-US', // Primary language for name and short_name
    //         background: '#fff', // Background color for flattened icons. `string`
    //         theme_color: '#fff', // Theme color user for example in Android's task switcher. `string`
    //         appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
    //         display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
    //         orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
    //         scope: '/', // set of URLs that the browser considers within your app
    //         start_url: '/', // Start URL when launching the application from a device. `string`
    //         preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
    //         relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
    //         version: '7.0', // Your application's version string. `string`
    //         pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
    //         loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
    //         manifestMaskable: false, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
    //         icons: {
    //           // Platform Options:
    //           // - offset - offset in percentage
    //           // - background:
    //           //   * false - use default
    //           //   * true - force use default, e.g. set background for Android icons
    //           //   * color - set background for the specified icons
    //           //
    //           android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
    //           appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
    //           appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
    //           favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
    //           windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
    //           yandex: true, // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
    //         },
    //         projectRoot: '/assets',
    //       },
    //     }),
    //     apply: 'build',
    //   },
  ],
});
