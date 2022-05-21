import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchHeader from "../theme/SearchBar/";
// import LunarSearch from "docusaurus-lunr-search/src/theme/SearchBar/lib/lunar-search";
// import Search from "docusaurus-lunr-search/src/theme/SearchBar";
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
    // const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title"><Translate>
                    OneUSU Design System
                </Translate></h1>
                    {/*{siteConfig.title}</h1>*/}
                <p className="hero__subtitle"><Translate>
                    Design, build, and ship coherent
                    experiences with the USU design system.
                </Translate></p>
                {/*<div className={styles.buttons}>*/}
                {/*<p>Design, build, and ship coherent </p>*/}
                {/*<p> experiences with the USU design system.</p>*/}
                {/*<Link*/}
                {/*  className="button button--secondary button--lg"*/}
                {/*  to="/docs/intro">*/}
                {/*  Docusaurus Tutorial - 5min ⏱️*/}
                {/*</Link>*/}
                <div className={clsx('hero hero--primary', styles.hero)}>
                    <SearchHeader/>
                    {/*<Search>global search</Search>*/}
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    // const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            // title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in  <head />">
            <HomepageHeader/>
            <h1>
                <Translate>Welcome to my website</Translate>
            </h1>
            <main>
                <div className={clsx('col col--4', styles.feature)}>
                    <div className="text--center">
                        <img className={styles.featureImage} src='img/undraw_docusaurus_mountain.svg' alt="Easy to Use"/>
                        <h3><Translate description="The homepage message to ask the user to visit my blog">Easy to Use</Translate>
                        </h3>
                        <p>
                            <Translate>
                                Docusaurus was designed from the ground up to be easily installed and
                                used to get your website up and running quickly.
                            </Translate>
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
