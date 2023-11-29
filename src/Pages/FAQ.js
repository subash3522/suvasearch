import React from "react";
import "../Global.css"; // Import your CSS file

function App() {
  return (
    <div
      className="faq p-3 container-sm"
      style={{ border: "solid 2px black", borderRadius: "20px" }}
    >
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>

        <div className="faq-section">
          <h2 className="faq-section-title">Our Services FAQs</h2>
          <div className="faq-item">
            <h3 className="faq-question">Question: What do we offer?</h3>
            <p className="faq-answer">
              Answer: We offer different search helps
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">
              Question: What is your top service?
            </h3>
            <p className="faq-answer">
              Answer: Local products and services search.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Question: All Nepal Tour?</h3>
            <p className="faq-answer">Answer: Happening Soon.</p>
          </div>

          {/* Add more FAQs */}
        </div>

        {/* Add more FAQ sections */}
      </header>
    </div>
  );
}

export default App;
