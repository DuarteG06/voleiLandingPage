import './App.css'

const links = [
  {
    title: 'Volleyball Scoreboard',
    url: 'https://scoreboard.volei.pt',
    displayUrl: 'scoreboard.volei.pt',
  },
  {
    title: 'Volleyball Match Analysis',
    url: 'https://analisevolei.pt',
    displayUrl: 'analisevolei.pt',
  },
  {
    title: 'Spike and Vertical Tracking',
    url: 'https://spiketracking.volei.pt',
    displayUrl: 'spiketracking.volei.pt',
  },
]

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="logo">volei.pt</h1>
        <p className="tagline">the best volleyball tools</p>
      </header>

      <main className="links-container">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="link-button"
          >
            <span className="button-title">{link.title}</span>
            <span className="button-url">{link.displayUrl}</span>
          </a>
        ))}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} volei.pt</p>
      </footer>
    </div>
  )
}

export default App
