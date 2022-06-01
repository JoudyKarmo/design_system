import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                {/*<p className="hero__subtitle">{siteConfig.tagsline}</p>*/}
                {/*<div className={styles.buttons}>*/}
                <p>Design, build, and ship coherent </p>
                <p> experiences with the USU design system.</p>
                <div className={clsx('hero hero--primary', styles.hero)}>
                </div>
            </div>

        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="Description will go into a meta tag in  <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>

            </main>
        </Layout>
    );
}
