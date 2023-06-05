import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/heroSection'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Contact } from '../components/conatct'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Elephant27</title>
        <meta name="description" content="Official website of elephant 27" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main className="overflow-hidden flex-col">
          <div className='h-fit'>
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Services/>
          <Contact/>
          <Footer/>
      </main>
    </div>
  )
}
