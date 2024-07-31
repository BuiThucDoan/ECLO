import { Route, Routes, useNavigate } from 'react-router-dom';
import { Intro } from '../pages/Intro';
import NavBar from '../components/navbar/NavBar';
import IntroductionPage from '../pages/IntroductionPage';
import IntroductionDetail from '../pages/IntroductionDetail';
import Footer from '../components/footer/Footer';
import { HomePage } from '../pages/HomePage';
import { HomePageSclo } from '../pages/HomePageSclo';
import { HomePageSpa } from '../pages/HomePageSpa';
import { HomePageERP } from '../pages/HomePageERP';
import { HomePageSfit } from '../pages/HomePageSfit';
import IntroductionPageSclo from '../pages/IntroductionPageSclo';
import IntroductionDetailSclo from '../pages/IntroductionDetailSclo';
import IntroductionPageSpa from '../pages/IntroductionPageSpa';
import IntroductionPageSfit from '../pages/IntroductionPageSfit';
import IntroductionDetailSpa from '../pages/IntroductionDetailSpa';
import IntroductionDetailSfit from '../pages/IntroductionDetailSfit';
import IntroductionPageERP from '../pages/IntroductionPageERP';
import IntroductionDetailERP from '../pages/IntroductionDetailERP';
export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Intro />} />
          
          <Route path="/GOLD" element={<HomePage />} />
          <Route path="/gioithieu-GOLD/:name" element={<IntroductionPage />} />
          <Route path="/chitiet-GOLD/:name" element={<IntroductionDetail />} />

          <Route path="/SCLO" element={<HomePageSclo />} />
          <Route path="/gioithieu-SCLO/:name" element={<IntroductionPageSclo />} />
          <Route path="/chitiet-SCLO/:name" element={<IntroductionDetailSclo />} />

          <Route path="/SPA" element={<HomePageSpa />} />
          <Route path="/gioithieu-SPA/:name" element={<IntroductionPageSpa />} />
          <Route path="/chitiet-SPA/:name" element={<IntroductionDetailSpa />} />

          <Route path="/HRM" element={<HomePageERP />} />
          <Route path="/gioithieu-HRM/:name" element={<IntroductionPageERP />} />
          <Route path="/chitiet-HRM/:name" element={<IntroductionDetailERP />} />
          
          <Route path="/SFIT" element={<HomePageSfit />} />
          <Route path="/gioithieu-SFIT/:name" element={<IntroductionPageSfit />} />
          <Route path="/chitiet-SFIT/:name" element={<IntroductionDetailSfit />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
