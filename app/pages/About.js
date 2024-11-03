// pages/about.js
import About from '../components/About'; // Pastikan path sudah sesuai
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-[#353535] min-h-screen flex flex-col">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
