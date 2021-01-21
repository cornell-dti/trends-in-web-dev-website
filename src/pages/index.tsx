import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  /*
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your
        website up and running quickly.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
        docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while
        reusing the same header and footer.
      </>
    )
  }
*/
];

export default () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagLine}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className={`container ${styles.HeroContainer}`}>
          <img
            src={useBaseUrl('../../static/img/trends_mascot.png')}
            alt="Trends in Web Development Mascot"
            className={styles.HeroImage}
          />
          <div className={styles.HeroRight}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--primary button--lg',
                  styles.getStarted
                )}
                to={useBaseUrl('docs/introduction')}
              >
                Start Learning
              </Link>
              <Link
                className={classnames(
                  'button button--primary button--lg',
                  styles.getStarted
                )}
                to="https://bit.ly/web-dev-sp21"
              >
                Spring 2021 Application
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={useBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};
