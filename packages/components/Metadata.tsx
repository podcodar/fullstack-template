import { images, site } from "@packages/settings";

const { title, description, homepage } = site;

function Metadata() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg+xml" href={images.icon} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={homepage} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={images.og} />
      <meta property="og:logo" content={images.og} />
      <meta property="og:description" content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={images.og} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={homepage} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={images.og} />
    </>
  );
}

export default Metadata;
