import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@components/common/ScrollToTop';
import WhatsAppButton from '@components/common/WhatsAppButton';
import CallButton from '@components/common/CallButton';
import BackToTop from '@components/common/BackToTop';

function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <BackToTop />
    </div>
  );
}

export default Layout;
