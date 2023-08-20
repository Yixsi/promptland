import '@styles/globals.css'

export const metadata = {
    title: 'Promptland',
    description: 'A place for all your prompts'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradiant"/>
            </div>

            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}
