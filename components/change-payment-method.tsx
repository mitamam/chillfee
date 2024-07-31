'use client'

import {useState, Fragment, ChangeEvent} from 'react'

import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'

export default function ChangePaymentMethod() {
  const [selected, setSelected] = useState('credit-card')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSelectDialogOpen, setIsSelectDialogOpen] = useState(true)
  const [isCardDialogOpen, setIsCardDialogOpen] = useState(false)

  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [cardName, setCardName] = useState('')

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setSelected(event.target.value)
  }

  function handleOpenDialog() {
    setIsDialogOpen(true)
    setIsSelectDialogOpen(true)
    setIsCardDialogOpen(false)
  }

  function handleOpenCardDialog() {
    setIsCardDialogOpen(true)
    setIsSelectDialogOpen(false)
  }

  function handleChangeCardNumber(event: ChangeEvent<HTMLInputElement>) {
    setCardNumber(event.target.value)
  }
  function handleChangeCardExpiration(event: ChangeEvent<HTMLInputElement>) {
    setCardExpiration(event.target.value)
  }
  function handleChangeCardCVV(event: ChangeEvent<HTMLInputElement>) {
    setCardCVV(event.target.value)
  }
  function handleChangeCardName(event: ChangeEvent<HTMLInputElement>) {
    setCardName(event.target.value)
  }

  return (
    <>
      <button
        type="button"
        className="text-sm bg-accent2 text-white rounded-full py-1 px-3 mr-3"
        onClick={handleOpenDialog}
      >
        お支払い情報を変更
      </button>
      <Transition show={isDialogOpen} as={Fragment}>
        <Dialog onClose={() => setIsDialogOpen(false)} className="relative z-20">
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
              <DialogPanel className="max-w-lg bg-white text-center px-12 py-16 border border-accent relative">
                {isSelectDialogOpen && (
                  <div>
                    <DialogTitle className="font-bold">お支払い方法を選択</DialogTitle>
                    <button type="button" onClick={() => setIsDialogOpen(false)}>
                      <XMarkIcon className="absolute top-4 right-4 w-6 h-6"></XMarkIcon>
                    </button>
                    <form>
                      <label
                        htmlFor="credit-card"
                        className="flex items-center justify-between gap-12 w-full p-4 rounded-xl mb-4 border hover:bg-accent2/5 has-[:checked]:bg-accent2/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-5">
                          {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                          <path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
                        </svg>
                        <p className="text-base font-bold select-none">クレジットカード</p>
                        <div className="relative flex items-center w-4 h-4">
                          <input
                            type="radio"
                            className="appearance-none w-4 h-4 border border-accent2 rounded-full checked:ring-accent2"
                            id="credit-card"
                            value="credit-card"
                            checked={'credit-card' === selected}
                            onChange={handleChangeValue}
                          />
                          <div className="absolute w-2 h-2 rounded-full bg-accent2 top-1 right-1"></div>
                        </div>
                      </label>
                      <label
                        htmlFor="test"
                        className="flex items-center justify-between gap-12 w-full p-4 rounded-xl mb-4 border hover:bg-accent2/5 has-[:checked]:bg-accent2/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-5">
                          {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                          <path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
                        </svg>
                        <p className="text-base font-bold select-none">テスト</p>
                        <div className="relative flex items-center w-4 h-4">
                          <input
                            type="radio"
                            className="appearance-none w-4 h-4 border border-accent2 rounded-full checked:ring-accent2"
                            id="test"
                            value="test"
                            checked={'test' === selected}
                            onChange={handleChangeValue}
                          />
                          <div className="absolute w-2 h-2 rounded-full bg-accent2 top-1 right-1"></div>
                        </div>
                      </label>
                    </form>
                    <button
                      type="button"
                      className="absolute bottom-4 right-4 text-sm rounded-full py-2 px-4 hover:bg-accent2/5 transition"
                      onClick={handleOpenCardDialog}
                    >
                      次へ
                    </button>
                  </div>
                )}
                {/* Card Information Form */}
                {isCardDialogOpen && (
                  <div>
                    <DialogTitle className="font-bold">お支払い方法の入力</DialogTitle>
                    <form method="post" className="text-left">
                      <label htmlFor="card-number" className="block text-sm font-bold mt-8">
                        カード番号
                      </label>
                      <input
                        id="card-number"
                        className="block w-full border border-accent2 rounded-md outline-none text-sm py-1 px-2 mt-2"
                        pattern="[0-9]{16,19}"
                        type="text"
                        maxLength={19}
                        placeholder="8888-8888-8888-8888"
                        value={cardNumber}
                        onChange={handleChangeCardNumber}
                      />
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <label htmlFor="card-expiration" className="block text-sm font-bold mt-8">
                            有効期限
                          </label>
                          <select
                            id="expiry-date"
                            className="border border-accent2 rounded-md outline-none text-sm p-1 mt-2 mr-2"
                          >
                            <option>MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <select
                            id="expiry-date"
                            className="border border-accent2 rounded-md outline-none text-sm p-1 mt-2"
                          >
                            <option>YYYY</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </select>
                          {/* <label htmlFor="card-expiration" className="block text-sm font-bold mt-8">
                              期限
                            </label>
                            <input
                              id="card-expiration"
                              className="block border border-accent2 rounded-md outline-none text-sm py-1 px-2 mt-2"
                              value={cardExpiration}
                              onChange={handleChangeCardExpiration}
                            /> */}
                        </div>
                        <div>
                          <label htmlFor="card-cvv" className="block text-sm font-bold mt-8">
                            CVV
                          </label>
                          <input
                            id="card-cvv"
                            className="w-16 border border-accent2 rounded-md outline-none text-sm py-1 px-2 mt-2"
                            type="text"
                            value={cardCVV}
                            onChange={handleChangeCardCVV}
                            maxLength={3}
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <label htmlFor="card-name" className="block text-sm font-bold mt-8">
                        名前
                      </label>
                      <input
                        id="card-name"
                        className="block w-full border border-accent2 rounded-md outline-none text-sm py-1 px-2 mt-2"
                        type="text"
                        value={cardName}
                        onChange={handleChangeCardName}
                        placeholder="TARO YAMADA"
                      />
                    </form>
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="mr-6 mt-8 py-2 px-6 text-base text-textbk border border-accent2 rounded-full"
                    >
                      キャンセル
                    </button>
                    <button
                      type="submit"
                      className="mt-8 py-2 px-6 text-base bg-accent border border-accent text-white rounded-full"
                      onClick={() => {alert('送信'); setIsDialogOpen(false)}}
                    >
                      確定
                    </button>
                    <button
                      type="button"
                      className="absolute bottom-4 left-4 text-sm rounded-full py-2 px-4 hover:bg-accent2/5 transition"
                      onClick={handleOpenDialog}
                    >
                      前に戻る
                    </button>
                  </div>
                )}
                {/* / Card Information Form */}
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
