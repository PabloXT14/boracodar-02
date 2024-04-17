import bgCouch from './assets/bg-couch.png'
import { Icon360 } from './assets/icons/360'

export function App() {
  return (
    <main>
      <section>
        <img src={bgCouch} alt="" />
        <button>
          <Icon360 />
        </button>
      </section>

      <section>
        <span>CÓDIGO: 42404</span>
        <h1>Sofá Margot II - Rosé</h1>
        <strong>R$ 4.000 </strong>
        <button>ADICIONAR À CESTA</button>
      </section>
    </main>
  )
}
