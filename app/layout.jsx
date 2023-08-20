import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptland',
    description: 'A place for all your prompts'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradiant"/>
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}
