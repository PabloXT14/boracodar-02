import { useState } from 'react'

import bgCouch from './assets/bg-couch.png'
import couchGif from './assets/couch.gif'
import { Icon360 } from './assets/icons/360'
import { IconX } from './assets/icons/x'

export function App() {
  const [show360, setShow360] = useState(false)

  function handleShow360() {
    setShow360((prevState) => !prevState)
  }

  return (
    <main className="flex justify-center">
      <section className="relative">
        <img src={show360 ? couchGif : bgCouch} alt="" className="w-[449px]" />
        <button onClick={handleShow360} className="absolute right-12 top-2">
          {show360 ? <IconX /> : <Icon360 />}
        </button>
      </section>

      <section className="flex flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-light">CÓDIGO: 42404</span>
          <h1 className="font-serif text-[32px] font-semibold">
            Sofá Margot II - Rosé
          </h1>
          <strong className="text-base font-normal">R$ 4.000 </strong>
        </div>

        <button className="border-secondary rounded-full border px-4 py-2 text-xs font-normal">
          ADICIONAR À CESTA
        </button>
      </section>
    </main>
  )
}
