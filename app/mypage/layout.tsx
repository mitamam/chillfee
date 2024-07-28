import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="bg-bg">
        {children}
      </main>
      <Footer />
    </>
  )
}