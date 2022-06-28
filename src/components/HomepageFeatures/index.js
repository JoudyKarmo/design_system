import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
        {
            title: <div className={styles.title}>All about one USU</div>,
            // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
            description: (
                <div className={styles.text}>
                    Here you can find all the basics you need to understand the ONE usu design system, products and how to
                    find what you need.
                    <p>
                        <a
                            href={"https://www.usu.com/en-us/"}> Explore more about USU >
                        </a>
                    </p>

                    <h3>
                        <div className={styles.title}> Foundations</div>
                    </h3>
                    <div className={styles.text}>
                        Here you can find all the basics rules in order to build a successful USU Product.
                    </div>
                    <p><a
                        href={"https://www.usu.com/en-us/"}> Explore foundations >
                    </a></p>
                    <div className={styles.container}>
                        <p className={styles.square}>
                            <img src="add.svg"/><h1/>
                            <strong>What is ONE USU Design System?</strong>
                            Lorem ipsum dolor sit
                        </p>
                        <p className={styles.square}>
                            <img src="add.svg"/><h1/>
                            <strong>What is ONE USU Design System?</strong>
                            Lorem ipsum dolor sit
                        </p>
                    </div>

                    <h3>
                        <div className={styles.title}> Content</div>
                    </h3>
                    <div className={styles.text}>
                        Our content guidance covers our voice and tone, and the mechanics of our grammar and style.
                    </div>
                    <p>
                        <a
                            href={"https://www.usu.com/en-us/"}> Explore Content >
                        </a>
                    </p>

                    <h3>
                        <div className={styles.title}> Components & Patterns</div>
                    </h3>
                    <div className={styles.text}>
                        Components are the reusable building blocks of our design system and Patterns are reusable
                        combinations of components that solve common user problems.
                    </div>
                    <p>
                        <a
                            href={"https://www.usu.com/en-us/"}> Explore All Components >
                        </a>
                        <a
                            href={"https://www.usu.com/en-us/"}> Explore All Patterns >
                        </a>
                    </p>

                    <h3>
                        <div className={styles.title}> Ressources</div>
                    </h3>
                    <div className={styles.text}>
                        Here you can find all the resources to download in order to start.
                    </div>
                    <p>
                        <a
                            href={"https://www.usu.com/en-us/"}> See more ressources >
                        </a>
                    </p>
                </div>
            ),
        },

// {
//     description: (
//         <div className={styles.text}>What is ONE USU Design System?
//             Lorem ipsum dolor sit
//             <p>
//                 Here you can find all the basics you need to understand the ONE usu design system, products and how to
//                 find what you need.
//
//             </p>
//         </div>)
// },

// {
//     description: (
//         <> Explore more about USU </>)
// },
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
// {
//   title: 'Powered by React',
//   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//   description: (
//     <>
//       Extend or customize your website layout by reusing React. Docusaurus can
//       be extended while reusing the same header and footer.
//     </>
//   ),
// },
    ]
;

//Feature Structur
function Feature({title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {/*<Svg className={styles.featureSvg} role="img"/>*/}
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
