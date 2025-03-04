import Access from "./Components/Access";
import Hero from "./Components/Hero";
import Snippets from "./Components/Snippets";
import Workflow from "./Components/Workflow";


export default function App() {
  return (
    <main className="px-8 relative">
      <Hero />
      <Snippets />
      <Access />
      <Workflow />
    </main>
  )
}
