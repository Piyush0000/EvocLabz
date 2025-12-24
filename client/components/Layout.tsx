import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'EvocLabz SaaS Platform' }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>EvocLabz</h1>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginRight: '1rem' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li style={{ marginRight: '1rem' }}><a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
              <li><a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer style={{ padding: '2rem', backgroundColor: '#f5f5f5', textAlign: 'center', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} EvocLabz SaaS Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;