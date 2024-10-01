import Head from "next/head";

interface title {
  title: string;
}

export default function Header({ title }: title) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Multischool AO" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icons/ama.png" />
    </Head>
  );
}
