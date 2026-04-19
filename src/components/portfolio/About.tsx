const About = () => (
  <section className="section" id="about">
    <div className="section-inner">
      <div className="section-head">
        <div>
          <div className="section-label reveal">01 · About</div>
          <h2 className="section-title reveal d1">
            The human behind<br />the models.
          </h2>
        </div>
        <p className="section-sub reveal d2">
          Building the hard parts of AI — pipelines, observability, and cost — so
          the clever parts can ship.
        </p>
      </div>

      <div className="about-grid">
        <div className="reveal">
          <div className="portrait-wrap">
            <div className="portrait-frame"></div>
            <img src="/assets/sid.jpg" alt="Siddhant Kulkarni" />
            <div className="portrait-caption">
              SIDDHANT&nbsp;KULKARNI<br />
              <span className="role">AI&nbsp;PLATFORM&nbsp;ENG.</span>
            </div>
          </div>
        </div>
        <div className="about-body reveal d2">
          <p>
            I am an AI Engineer at Seawolf AI, currently building a 0-to-1 SaaS platform for
            financial institutions that generates governance KPIs and board-effectiveness
            profiles across 1M+ filings using FastAPI, React, Postgres on AWS RDS,
            Gemini-based extraction services on Lambda and ECS Fargate and fully automated
            cloud infrastructure — giving me deep experience owning architecture, data
            pipelines and deployment end to end.
          </p>
          <p>
            I have worked with Capital Group to build production-grade AI systems for
            large-scale investment research and decision-making, delivering automated insights
            to 9,000+ analysts and 300+ portfolio managers with over 92% precision. Previously
            at Jefferies Group LLC, I built and automated scalable document extraction systems
            using AWS LLMs, Terraform-managed EKS and robust CI/CD pipelines.
          </p>
          <p>
            As a Master's graduate in Computer Science at NYU, my expertise spans ML, Big Data
            Analytics and NLP. I'm passionate about leveraging LLMs to tackle complex
            real-world challenges, with a focus on scaling AI solutions to create broader
            societal impact.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="num">1M+</div>
              <div className="lbl">Docs processed</div>
            </div>
            <div className="stat">
              <div className="num">40K</div>
              <div className="lbl">Extractions / day</div>
            </div>
            <div className="stat">
              <div className="num">92.4%</div>
              <div className="lbl">Precision</div>
            </div>
            <div className="stat">
              <div className="num">30%</div>
              <div className="lbl">Cost reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
