import Head from 'next/head'
import Navbar from '../../components/Navbar'
import { useRouter } from "next/router";
import CoinHistoryChart from '../../components/CoinHistoryChart';

export default function CoinInfo() {

const router = useRouter();
const {slug} = router.query;

  return (
    <div>
      <Head>
        <title>{1 + 1}</title>
        <meta name="crypto rankings" content="Webapp to see the top 50 cryptocurrencies of the day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />

    <main>
      <CoinHistoryChart slug={slug}/>
    </main>
      
    </div>
  )
}
