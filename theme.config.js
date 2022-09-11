export default {
  github: 'https://github.com/oein/dioh',
  docsRepositoryBase: 'https://github.com/oein/dioh-docs',
  titleSuffix: ' – Dioh',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Dioh</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Infinity develop, infinity solve
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Dioh Docs : A documentation for dioh users"
      />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="og:title" content="Dioh: Infinity develop, infinity solve" />
      <meta
        name="og:image"
        content="https://cdn.discordapp.com/attachments/1018073277635252264/1018353701330636851/DALLE_2022-09-10_11.43.06_-_penguin_pixel_art.png"
      />
      <link
        rel="icon"
        href="https://cdn.discordapp.com/attachments/1018073277635252264/1018353701330636851/DALLE_2022-09-10_11.43.06_-_penguin_pixel_art.png"
      ></link>
      <link
        rel="shortcut icon"
        href="https://cdn.discordapp.com/attachments/1018073277635252264/1018353701330636851/DALLE_2022-09-10_11.43.06_-_penguin_pixel_art.png"
      ></link>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Oein.</>,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'kr', text: '한국어' },
  ],
}
