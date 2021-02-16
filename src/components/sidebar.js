import { Link } from 'gatsby'
import React from 'react'

import Logo from './pic.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="cover-author-image">
            <Link to="/">
              <img src={Logo} alt={siteMetadata.author} />
            </Link>
          </div>
          <div className="author-name">
            {siteMetadata.author}
          </div>
          <Link to ="/">
            <i className="fa fa-home" aria-hidden="true" />
          </Link>
          <p>{siteMetadata.description}</p>
        </div>
        <div className="topics">
          <div className="project-structure">
            <h4>
            Topics
            </h4>
            <ul>
              <li>Idea making</li>
              <li>Product market fit</li>
              <li>Dev priorities</li>
              <li>Mix</li>
              <li><a href="/seo-2021">SEO</a></li>
              <li><a href="/keywords">Keywords</a></li>
              <li>Email marketing</li>
              <li><a href="/ux-metrics">User experience</a></li>
              <li>KPIs and OKRs </li>
              <li>Tools for B2B SAAS</li>
            </ul>
          </div>
          <div className="project-structure">
            <h4>
            Tags
            </h4>
            <span className="side-tags"><a className="tags" href="/tags/seo">#seo</a></span>
            <span className="side-tags"><a className="tags" href="/tags/tips">#tips</a></span>
            <span className="side-tags"><a className="tags" href="/tags/ux">#ux</a></span>
          </div>
        </div>
      </header>
      <footer>
        <section className="contact">
          <h3 className="contact-title">Contact me</h3>
          <ul>
            {siteMetadata.social.twitter && (
              <li>
                <a
                  href={`https://twitter.com/${siteMetadata.social.twitter}`}
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.facebook && (
              <li>
                <a
                  href={`https://facebook.com/${siteMetadata.social.facebook}`}
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.github && (
              <li>
                <a
                  href={`https://github.com/${siteMetadata.social.github}`}
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/in/${siteMetadata.social.linkedin}`}
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
            )}
            {siteMetadata.social.email && (
              <li>
                <a href={`mailto:${siteMetadata.social.email}`} target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </section>
        <div className="copyright">
          <p>
            {new Date().getFullYear()} &copy; {siteMetadata.author}
          </p>
        </div>
      </footer>
    </aside>
  </>
)

export default Sidebar
