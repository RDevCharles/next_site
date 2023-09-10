import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Analytics</title>
      </Head>
      <Header />
      <Hero />
      <About/>
      <Services />
      <Team />
      <Contact />
      <Footer/>
    </div>
  );
}
