import React from 'react'
import { Layout } from 'antd'
import '@/styles/globals.css'
import GeneratorComponent from '@/components/GeneratorComponent';

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
          color: 'white'
        }}
      >
        <div>Generate Text to Image</div>
      </Header>
      <Content className="site-layout" style={{ padding: '0 24px' }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          <GeneratorComponent/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>FYLP Basic © {new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default App;