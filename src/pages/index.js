import Header from '@/components/Header';
import Head from 'next/head';
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';

export default function Home(props) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Poduct feed */}
        <ProductFeed products={props.products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );

  return {
    props: {
      products,
    },
  };
}

//https://fakestoreapi.com/products
