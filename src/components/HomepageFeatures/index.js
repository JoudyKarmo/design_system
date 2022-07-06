import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Information from '/static/img/icon/information.svg';

const FeatureList = [
        {
            title: <div>
                {/*<h2 className={styles.text}>*/}
                {/*    <a href="./docs/tutorial/all-about-one-usu">The USU Design system</a>*/}
                {/*</h2>*/}
                {/*<a className={styles.explore}*/}
                {/*   href={"https://www.usu.com/en-us/"}> Explore all ➔*/}
                {/*</a>*/}
            </div>,

            description: (
                <div>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.text}>
                            <a href="./docs/tutorial/all-about-one-usu">The USU Design system</a>
                        </h2>
                        <a className={styles.explore}
                           href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>

                    <div className={styles.square}>
                        <Information/>
                        <span className={styles.header}>
                    Learn about the USU Design System, how to use it, the USU Ecosystem and get all information about the releases.
                    </span>
                    </div>

                    <div className={styles.titleContainer}>
                        <h2 className={styles.text}>
                            <a href="./docs/foundations/foundations">Foundations</a>
                        </h2>
                        <a className={styles.explore}
                           href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>

                    <div className={styles.square}>
                        <img className={styles.info} src={require('@site/static/img/colors.png').default}/>
                        <span className={styles.header}>
                    Find all the basics informations and requirement for building successful software products.
                    </span>
                    </div>
                    <div>
                        <a className={styles.explore}
                           href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>

                    <h2 className={styles.title}>
                        <a href="./docs/content/">Content</a></h2>
                    <div className={styles.square}>
                        <img className={styles.info} src={require('@site/static/img/icon-catalog.png').default}/>
                        <span className={styles.header}>
                   Our content guidance covers writing guidelines, translations and imagery. Find the right voice and visuals to provide a better understanding of how your product works.
                    </span>
                    </div>

                    <div>
                        <a className={styles.explore}
                           href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>

                    <h2 className={styles.title}>
                        <a href="./docs/components/Accordion">Components</a></h2>
                    <div className={styles.square}>
                        <img className={styles.info} src={require('@site/static/img/puzzle.png').default}/>
                        <span className={styles.header}>
                  For each component you get building instructions and the code, as well as what they can be used for, which rules to respect and how to consider accessibility.
                    </span>
                    </div>

                    <div>
                        <a className={styles.explore}
                           href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>

                    <h2 className={styles.title}>
                        <a href="./docs/patterns/messaging">Patterns</a></h2>
                    <div className={styles.square}>
                        <img className={styles.info} src={require('@site/static/img/wireframe.png').default}/>
                        <span className={styles.header}>
For each component you get building instructions and the code, as well as what they can be used for, which rules to respect and how to consider accessibility.
                    </span>
                    </div>

                    <div className={styles.explore}>
                        <a
                            href={"https://www.usu.com/en-us/"}> Explore all ➔
                        </a>
                    </div>
                    <h2 className={styles.title}>
                        <a href="./docs/resources/icon-library">Resources</a></h2>
                    <div className={styles.square}>
                        <img className={styles.info} src={require('@site/static/img/random.png').default}/>
                        <span className={styles.header}>
                Find here explanation and links to all other relevant documentation tools, as libraries and so on.
                    </span>
                    </div>
                </div>
                // </div>
            ),
        },
    ]
;

//Feature Structur
function Feature({title, description}) {
    return (
        <div className={clsx('col col--9')}>
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
