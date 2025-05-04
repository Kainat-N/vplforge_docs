import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'System Architecture',
    Svg: require('@site/static/img/System_Architecture.svg').default,
    description: (
      <>
        Learn about the structure and flow of the VPLForge system. Understand how the components interact and contribute to the project goals.
        <div style={{ marginTop: '1rem' }} className={styles.buttons}>
        <Link className="button button--secondary button--sm" to="/docs/category/project-architecture">
           View Architecture
        </Link>
        </div>
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Interested in helping us build? Read the contribution guide and start making an impact.
        <div style={{ marginTop: '1rem' }}>
          <Link className="button button--secondary button--sm" to="/docs/category/contributing-guidelines">
            View Guide
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
