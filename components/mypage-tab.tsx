'use client'

import {useRouter} from 'next/navigation'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import CafeForm from '@/components/cafe-form'
import Subscription from '@/components/subscription'

export default function MypageTab(props) {
  const router = useRouter()

  return (
    <TabGroup className="mt-8" defaultIndex={props.index}>
      <TabList className="flex gap-4 pb-2 border-b border-accent2">
        <Tab
          onClick={() => router.push('/mypage/cafes/1')}
          className="relative text-sm font-bold py-1 px-4 border border-transparent rounded-full data-[selected]:border-accent2 outline-none"
        >
          店舗情報
        </Tab>
        <Tab
          onClick={() => router.push('/mypage/cafes/1/subscription')}
          className="text-sm font-bold py-1 px-4 border border-transparent rounded-full data-[selected]:border-accent2 outline-none"
        >
          サブスクリプション
        </Tab>
        <Tab
          onClick={() => router.push('/mypage/cafes/1/review')}
          className="text-sm font-bold py-1 px-4 border border-transparent rounded-full data-[selected]:border-accent2 outline-none"
        >
          クチコミ
        </Tab>
        <Tab
          onClick={() => router.push('/mypage/cafes/1/news')}
          className="text-sm font-bold py-1 px-4 border border-transparent rounded-full data-[selected]:border-accent2 outline-none"
        >
          お知らせ
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CafeForm isPersonal={false} className="max-w-md"></CafeForm>
        </TabPanel>
        <TabPanel>
          <Subscription></Subscription>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
