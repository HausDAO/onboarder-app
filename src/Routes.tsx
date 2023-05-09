import { Routes as Router, Route, useLocation } from "react-router-dom";
import { FormTest } from "./pages/FormTest";
import { Home } from "./pages/Home";
import { LayoutContainer } from "./components/LayoutContainer";
import Dao from "./pages/Dao";
import { TARGET_DAO } from "./targetDao";

import { DHLayout, useDHConnect } from '@daohaus/connect';
import { Delegates } from './pages/Delegates';
import { Application } from './pages/Application';
import { Profile } from './pages/Profile';
import { TXBuilder } from '@daohaus/tx-builder';
import { Join } from './pages/Join';
import { Manifesto } from './pages/Manifesto';
import { Unstake } from './pages/Unstake';
import { Delegate } from './pages/Delegate';
import { Claim } from './pages/Claim';
import { useDaoData } from './hooks/useDaoData';
import { HeaderAvatar } from './components/HeaderAvatar';
import { About } from './pages/About';

const routePath = `molochv3/${
  TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
}/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`;

export const Routes = () => {
  const { pathname } = useLocation();

  const { address, provider } = useDHConnect();
  const { dao } = useDaoData({
    daoid: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
    daochain: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
  });

  return (
    <TXBuilder
      provider={provider}
      chainId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}
      daoId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}
      safeId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].SAFE_ADDRESS}
      appState={{
        memberAddress: address,
      }}
    >
      <DHLayout
        pathname={pathname}
        navLinks={[
          // { label: 'Home', href: '/' },
          { label: 'Stake', href: '/' },
          { label: 'Manifesto', href: '/manifesto' },
          // { label: `${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME}`, href: '/delegates' },
          // { label: `Become a ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].DELEGATAE_NAME}`, href: '/apply' },
          { label: 'Next', href: '/about' },
        ]}
        leftNav={
          dao?.name &&
          dao?.id && (
            <HeaderAvatar
              name={dao.name}
              address={dao.id}
              imgUrl={dao?.avatarImg}
            />
          )
        }
        
      >
        <Router>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/" element={<Join />} />
          <Route path="/profile/:memberAddress" element={<Profile />} />
          <Route path="/unstake" element={<Unstake />} />
          <Route path="/delegate" element={<Delegate />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/about" element={<About />} />
        </Router>
      </DHLayout>
    </TXBuilder>
  );
};

