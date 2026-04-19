const certs = [
  { nm: 'Google Cloud Certification', is: 'Google · 2022' },
  { nm: 'Deep Learning Specialization', is: 'Deeplearning.ai · 2021' },
  { nm: 'Transformer-Based NLP', is: 'NVIDIA · 2021' },
  { nm: 'Natural Language Processing', is: 'NRU HSE · 2021' },
  { nm: 'Python Data Structures', is: 'U. Michigan · 2019' },
];

const Education = () => (
  <section className="section" id="education">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <div className="section-label reveal">05 · Learn</div>
          <h2 className="section-title reveal d1">Education &amp; credentials.</h2>
        </div>
      </div>

      <div className="edu-grid">
        <div className="edu-card reveal">
          <div className="edu-year">2023 — 2025</div>
          <div className="edu-degree">M.S. Computer Science</div>
          <div className="edu-school">New York University</div>
          <div className="edu-gpa">
            <span>GPA</span>
            <span className="v">3.68 / 4.0</span>
          </div>
          <div className="gpa-bar">
            <div className="fill" style={{ width: '92%' }} />
          </div>
          <div className="chips">
            <span className="chip">Algorithms</span>
            <span className="chip">Big Data</span>
            <span className="chip">NLP TA</span>
            <span className="chip">AI / ML</span>
          </div>
        </div>
        <div className="edu-card reveal d1">
          <div className="edu-year">2019 — 2023</div>
          <div className="edu-degree">B.E. Information Technology</div>
          <div className="edu-school">Savitribai Phule Pune University</div>
          <div className="edu-gpa">
            <span>GPA</span>
            <span className="v">9.38 / 10</span>
          </div>
          <div className="gpa-bar">
            <div className="fill" style={{ width: '94%' }} />
          </div>
          <div className="chips">
            <span className="chip">Honors AI / ML</span>
            <span className="chip">General Secretary</span>
          </div>
        </div>
      </div>

      <div className="cert-row">
        {certs.map((c, i) => (
          <div key={c.nm} className={`cert reveal${i > 0 ? ' d' + i : ''}`}>
            <div className="nm">{c.nm}</div>
            <div className="is">{c.is}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
