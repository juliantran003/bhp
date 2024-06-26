import Head from "next/head";

export default function Metadata({ title, img, description, tags, imgLink }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/favicon.ico" />
      <meta name="keywords" content={tags} />
    </Head>
  );
}
