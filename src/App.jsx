import { useState } from 'react';
import './App.css'

const links = [
  {
    title: 'Volleyball Scoreboard',
    url: 'https://scoreboard.volei.pt',
    displayUrl: 'scoreboard.volei.pt',
    description: 'A simple and intuitive yet powerful volleyball scoreboard that allows you to keep track of scores and timeouts, for any type of match.',
  },
  {
    title: 'Volleyball Match Analysis',
    url: 'https://analisevolei.pt',
    displayUrl: 'analisevolei.pt',
    description: 'A tool to analyze volleyball matches, focusses on understanding where your team failed and where it needs to improve, by providing detailed statistics and graphs about the match.',
  },
  {
    title: 'Spike and Vertical Tracking',
    url: 'https://spiketracking.volei.pt',
    displayUrl: 'spiketracking.volei.pt',
    description: 'A tool to track the height of spikes and vertical jumps, to help players improve their performance. Just upload a video of the spike or jump and get detailed statistics about it.',
  },
  {
    title: 'Volleyball Sketch',
    url: 'https://volleysketch.volei.pt/',
    displayUrl: 'volleysketch.volei.pt',
    description: 'A tool to sketch volleyball plays and ideas visually, making it easier to plan, explain, and share tactics.',
  },
]

function App() {
  const [popup, setPopup] = useState(null);

  const handleQuestionMarkClick = (e, description) => {
    e.preventDefault();
    e.stopPropagation();
    setPopup(description);
  }

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
            <div className="button-content">
              <div className="button-header">
                <span className="button-title">{link.title}</span>
                <button className="question-mark" onClick={(e) => handleQuestionMarkClick(e, link.description)}>
                  ?
                </button>
              </div>
              <span className="button-url">{link.displayUrl}</span>
            </div>
            <span className="button-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </main>

      {popup && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <p>{popup}</p>
            <button onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} volei.pt</p>
      </footer>
    </div>
  )
}

export default App
