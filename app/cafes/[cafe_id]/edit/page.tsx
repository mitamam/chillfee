'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import CafeForm from '@/components/cafe-form'

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-sm md:max-w-lg px-5 lg:px-8 pt-24 pb-8 sm:pb-14 lg:pb-20">
          <h1 className="mt-14 text-xl font-bold">カフェ情報を編集</h1>
          <CafeForm isPersonal={true}></CafeForm>
        </div>
      </main>
      <Footer />
    </>
  )
}