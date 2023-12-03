import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

// import config from '../../config';
import Footer from '../components/Footer';

// import { Link } from 'gatsby';

const CrawlerPage = () => (
  <Layout>

    <section id="two" className="wrapper">
      <div className="inner alt">
        <section className="special">
        <p>
I am an individual developer who uses a crawler named <b>"ym-crawler-h"</b> to collect data from multiple sites.
The collected data is stored on my own data server and is used for my personal natural language processing learning and development.
Although I will not directly release the data externally, but I may release the deep learning model that learned the data in the future.
	</p>
        <p>
I consider the content of "robots.txt" to be the site's crawl policy, and crawler follow this policy when crawling.
If you want to directly prohibit or control it, you can specify the following user agent.
        </p>
        <p>
User agent of "ym-crawler-h":<br/>
"Mozilla/5.0 (compatible; ym-crawler-h +https://yuukimiyoshi.info/crawler/)"
        </p>
        <p>
If you have any questions or requests, please use the email address in the footer of this page.<br />
Thank you.
	</p>
        </section>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default CrawlerPage;
