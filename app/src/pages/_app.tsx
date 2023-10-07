import React from 'react'
import { Layout } from 'antd'
import '@/styles/globals.css'
import ImageGenerator from '@/components/ImageGenerator'

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{height: '100vh'}}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          <ImageGenerator/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>FYLP Basic © {new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default App;