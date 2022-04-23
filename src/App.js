import "./styles.css";
import { Progressbar } from "./Progressbar";

export default function App() {
  return (
    <div className="App">
      <div className="course-card">
        <div className="course-information">
          <div className="course-description">
            <p>course</p>
            <h2 className="course-title">javascript fundamentals</h2>
          </div>
          <div>
            <p className="link">
              {/* we should use Link component when we add react-router-dom */}
              <a href="/chapters" className="link">
                View all chapters &rsaquo;
              </a>
            </p>
          </div>
        </div>
        <div className="chapter-information">
          <div className="progress-container">
            <h6 className="chapter-level">Chapter 4</h6>
            <Progressbar />
          </div>
          <div className="chapter-heading-container">
            <h2>Callbacks & Closures</h2>
          </div>
          <div className="button-container">
            <button className="button">continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
