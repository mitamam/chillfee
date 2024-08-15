import {useState, Fragment} from 'react'

import Image from 'next/image'
import UploadImageButton from '@/components/upload-image'

// Todo: 実装時削除
import testImage from '@/public/45f7044d45f7155c58f5aede2eddc83e.jpg'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'

const envTags = [
  {id: 'quiet-tag', name: '静か'},
  {id: 'busy-tag', name: '賑やか'},
]

const facilityTags = [
  {id: 'wifi-tag', name: 'WiFi'},
  {id: 'power-tag', name: '電源'},
  {id: 'bathroom-tag', name: 'トイレ'},
]

const wards = [
  {id: 0, name: '---'},
  {id: 1, name: '足立区'},
  {id: 2, name: '荒川区'},
  {id: 3, name: '板橋区'},
  {id: 4, name: '江戸川区'},
  {id: 5, name: '大田区'},
  {id: 6, name: '葛飾区'},
  {id: 7, name: '北区'},
  {id: 8, name: '江東区'},
  {id: 9, name: '品川区'},
  {id: 10, name: '渋谷区'},
  {id: 11, name: '新宿区'},
  {id: 12, name: '杉並区'},
  {id: 13, name: '墨田区'},
  {id: 14, name: '世田谷区'},
  {id: 15, name: '台東区'},
  {id: 16, name: '中央区'},
  {id: 17, name: '千代田区'},
  {id: 18, name: '豊島区'},
  {id: 19, name: '中野区'},
  {id: 20, name: '練馬区'},
  {id: 21, name: '文京区'},
  {id: 22, name: '港区'},
  {id: 23, name: '目黒区'},
]

const detailItems = [
  '店名（表示名）',
  '店舗説明',
  '店舗画像',
  'タグ',
  '店名（正式名称）',
  '所在地',
  '連絡先',
  'SNS・ホームページ',
  '営業時間',
  '定休日',
  'アクセス',
  'WiFi',
  '電源',
  'トイレ',
  '席数',
  'コーヒーの値段（一杯）',
  '支払い方法',
]

export default function CafeForm({isPersonal = true, className = ''}) {
  const [selectedWard, setSelectedWard] = useState(wards[0])

  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)

  return (
    <form method="post" className={`${className} py-12`}>
      <label className="block text-base" htmlFor="shop-name">
        店名（表示名）
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="shop-name"
        id="shop-name"
        placeholder="〇〇カフェ"
        required
      />
      {isPersonal && (
        <>
          <label className="mt-6 block text-base" htmlFor="description">
            店舗説明
          </label>
          <textarea
            className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
            name="description"
            id="description"
            rows={5}
            placeholder="店内に緑が多く、落ち着きのあるカフェ。
              席数が多く、勉強などで利用している学生も多い。"
            required
          ></textarea>
          <h3 className="mt-6 block text-base">店舗画像</h3>
          <UploadImageButton multiple id="shop-images" width="160px" height="75%"></UploadImageButton>
          <h2 className="mt-12 text-lg font-bold">タグ</h2>
          <h3 className="mt-4 text-base">環境</h3>
          <ul className="mt-2 flex items-center gap-2">
            {envTags.map((tag, index) => (
              <li key={index}>
                <label
                  htmlFor={tag.id}
                  className="cursor-pointer rounded-full
                           text-sm text-textbk px-3 py-1 select-none border border-accent2
                            has-[:checked]:bg-accent2 has-[:checked]:text-bg
                            hover:text-bg hover:bg-accent2"
                >
                  <span className="text-center text-nowrap">{tag.name}</span>
                  <input
                    className="py-2 px-4 hidden peer text-base border border-accent2"
                    type="checkbox"
                    name={tag.id}
                    id={tag.id}
                  />
                </label>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-base">設備</h3>
          <ul className="mt-2 flex items-center gap-2">
            {facilityTags.map((tag, index) => (
              <li key={index}>
                <label
                  htmlFor={tag.id}
                  className="cursor-pointer rounded-full
                           text-sm text-textbk px-3 py-1 select-none border border-accent2
                            has-[:checked]:bg-accent2 has-[:checked]:text-bg
                            hover:text-bg hover:bg-accent2"
                >
                  <span className="text-center text-nowrap">{tag.name}</span>
                  <input
                    className="py-2 px-4 text-base border border-accent2 hidden peer"
                    type="checkbox"
                    name={tag.id}
                    id={tag.id}
                  />
                </label>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-lg font-bold">詳細情報</h2>
        </>
      )}
      <label className="mt-6 block text-base" htmlFor="shop-name-official">
        店名（正式名称）
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="shop-name-official"
        id="shop-name-official"
        placeholder="〇〇カフェ"
        required
      />
      <h3 className="mt-8 text-base font-bold">所在地</h3>
      <label className="mt-6 block text-base" htmlFor="postal-code">
        郵便番号
      </label>
      <input
        className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="postal-code"
        id="postal-code"
        placeholder="123-4567"
        required
      />
      <label className="mt-6 block text-base" htmlFor="ward">
        区（東京都）
      </label>
      <Listbox defaultValue={selectedWard} onChange={setSelectedWard}>
        {({open}) => (
          <>
            <div className="relative">
              <ListboxButton className="mt-2 bg-transparent border border-accent2 bg-white py-2 px-4 w-full text-sm text-left text-accent2 rounded-md">
                <span className="flex items-center justify-between pointer-events-none">
                  <span className="block truncate">{selectedWard.name}</span>
                  <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
                </span>
              </ListboxButton>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 border border-accent2 text-base focus:outline-none sm:text-sm">
                  {wards.map((ward) => (
                    <ListboxOption
                      key={ward.id}
                      value={ward}
                      className="py-1 pl-3 bg-white hover:bg-accent2 hover:text-white"
                    >
                      {ward.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <label className="mt-6 block text-base" htmlFor="address">
        町域・番地
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="address"
        id="address"
        placeholder="〇〇町 1-2-3"
        required
      />
      <label className="mt-6 block text-base" htmlFor="contact">
        連絡先
      </label>
      <input
        className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="tel"
        name="contact"
        id="contact"
        placeholder="000-000-0000"
      />
      <label className="mt-6 block text-base" htmlFor="official-link">
        SNS・ホームページ
      </label>
      <textarea
        className="mt-2 py-2 px-4 block w-full text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        name="official-link"
        id="official-link"
        placeholder="https://example.com"
        rows={3}
      />
      <label className="mt-6 block text-base" htmlFor="open-time">
        営業時間
      </label>
      <div className="flex items-center gap-2">
        <input
          className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none"
          type="time"
          name="open-time"
          id="open-time"
        />
        <span> ~ </span>
        <input
          className="mt-2 py-2 px-4 block text-base border border-accent2 rounded-md outline-none"
          type="time"
          name="close-time"
          id="close-time"
        />
      </div>
      <label className="mt-6 block text-base" htmlFor="closed">
        定休日
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="closed"
        id="closed"
        placeholder="月曜日"
      />
      <label className="mt-6 block text-base" htmlFor="location">
        アクセス
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="location"
        id="location"
        placeholder="〇〇駅 徒歩5分"
      />
      <label className="mt-6 w-full block text-base" htmlFor="wifi">
        WiFi
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none"
        type="text"
        name="wifi"
        id="wifi"
      />
      <label className="mt-6 block text-base" htmlFor="power">
        電源
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none"
        type="text"
        name="power"
        id="power"
      />
      <label className="mt-6 block text-base" htmlFor="bathroom">
        トイレ
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none"
        type="text"
        name="bathroom"
        id="bathroom"
      />
      <label className="mt-6 block text-base" htmlFor="seats">
        席数
      </label>
      <div className="flex items-center gap-2">
        <input
          className="mt-2 py-2 px-4 w-24 block text-base border border-accent2 rounded-md outline-none"
          type="number"
          name="seats"
          id="seats"
          min="1"
          max="1000"
        />
        <span>席</span>
      </div>
      <label className="mt-6 block text-base" htmlFor="coffee-price">
        コーヒーの値段（一杯）
      </label>
      <div className="flex items-center gap-2">
        <input
          className="mt-2 py-2 px-4 w-24 block text-base border border-accent2 rounded-md outline-none"
          type="number"
          name="coffee-price"
          id="coffee-price"
          min="0"
          max="10000"
        />
        <span>円</span>
      </div>
      <label className="mt-6 block text-base" htmlFor="payment">
        支払い方法
      </label>
      <input
        className="mt-2 py-2 px-4 w-full block text-base border border-accent2 rounded-md outline-none placeholder:text-textbk/20"
        type="text"
        name="payment"
        id="payment"
        placeholder="現金"
      />
      <div className="mt-12 flex items-center justify-center gap-6">
        {/* キャンセルボタン */}
        <button
          onClick={() => setIsCancelDialogOpen(true)}
          className="py-3 px-8 bg-bg text-base text-textbk border border-accent2 rounded-full"
        >
          キャンセル
        </button>
        <Transition show={isCancelDialogOpen} as={Fragment}>
          <Dialog onClose={() => setIsCancelDialogOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="transition-opacity ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DialogPanel className="max-w-lg space-y-8 bg-white p-12 text-center border border-accent">
                  <p>
                    キャンセルすると、編集内容は保存されません。
                    <br />
                    よろしいですか？
                  </p>
                  <button
                    onClick={() => setIsCancelDialogOpen(false)}
                    className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                  >
                    いいえ
                  </button>
                  <button className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full">
                    はい
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
        {/* 確認ボタン */}
        <button
          onClick={() => setIsConfirmDialogOpen(true)}
          className="py-3 px-8 bg-accent text-base text-white rounded-full"
        >
          内容を確認
        </button>
        <Transition show={isConfirmDialogOpen} as={Fragment}>
          <Dialog onClose={() => setIsConfirmDialogOpen(false)} className="relative z-50">
            <div className="fixed inset-0 w-screen overflow-y-auto p-4">
              <div className="flex min-h-full items-center justify-center">
                <TransitionChild
                  as={Fragment}
                  enter="transition-opacity ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <DialogPanel className="max-w-lg space-y-8 bg-white text-center p-12 border border-accent">
                    <DialogTitle className="font-bold">内容の確認</DialogTitle>
                    <p>
                      以下の内容でよろしいですか？
                      <br />
                      よろしければ、投稿ボタンを押してください。
                    </p>
                    <ul className="text-left">
                      {detailItems.map((name, index) => (
                        <li key={index} className="py-2 border-t last:border-b border-accent2/20">
                          <h4 className="text-base font-bold mb-1">{name}</h4>
                          <p className="text-base">テスト</p>
                          {/* 画像の時 */}
                          {/* <ul className='flex flex-wrap gap-2'>
                                  <li className='w-[calc(33.3%-6px)] pt-[calc(33.3%-6px)] relative overflow-hidden'>
                                    <Image src={testImage} alt='' layout="fill" objectFit="cover" />
                                  </li>
                                  <li className='w-[calc(33.3%-6px)] pt-[calc(33.3%-6px)] relative overflow-hidden'>
                                    <Image src={testImage} alt='' layout="fill" objectFit="cover" />
                                  </li>
                                  <li className='w-[calc(33.3%-6px)] pt-[calc(33.3%-6px)] relative overflow-hidden'>
                                    <Image src={testImage} alt='' layout="fill" objectFit="cover" />
                                  </li>
                                </ul> */}
                          {/* タグの時 */}
                          {/* <ul className="mt-2 flex flex-wrap items-center gap-2">
                                  <li className='border border-accent2 px-3 py-1 text-sm text-textbk rounded-full'>
                                      <span className="text-center text-nowrap">タグ</span>
                                  </li>
                                  <li className='border border-accent2 px-3 py-1 text-sm text-textbk rounded-full'>
                                      <span className="text-center text-nowrap">タグ</span>
                                  </li>
                                  <li className='border border-accent2 px-3 py-1 text-sm text-textbk rounded-full'>
                                      <span className="text-center text-nowrap">タグ</span>
                                  </li>
                                </ul> */}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setIsConfirmDialogOpen(false)}
                      className="mr-6 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                    >
                      キャンセル
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                    >
                      {isPersonal ? '投稿' : '保存'}
                    </button>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </form>
  )
}
