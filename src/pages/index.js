import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
// import screen from '../assets/images/screen.png';
import screen from '../assets/images/portfolio_bw_240x320.jpg';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import qiitaLogo from '../assets/images/qiita_400x400.png';
import pinterestLogo from '../assets/images/pinterest_400x400.png';
import instagramLogo from '../assets/images/instagram_400x400.png';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>金融情報会社の社内SEです<br />Webサイト構築と写真撮影がライフワークです</p>
        <p>Full time In-House System Developper on Information-vender.<br />Part time Web Engineer /  Amature Photograper.</p>
        <ul className="actions">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button icon fa-chevron-down">
                Read More
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <div className="image right">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>

    <section id="one" className="wrapper style2 special">
      <header className="major">
        <h2>
            Index of my Internet life.<br />
            利用しているウェブサービス一覧
        </h2>
      </header>
      <ul className="icons major">
        <li>
          <span className="icon fa-pencil-square-o">
            <span className="label">Pen</span>
          </span>
        </li>
        <li>
          <span className="icon fa-camera-retro">
            <span className="label">Shoot</span>
          </span>
        </li>
        <li>
          <span className="icon fa-book">
            <span className="label">Book</span>
          </span>
        </li>
        <li>
          <span className="icon fa-youtube-square">
            <span className="label">Video</span>
          </span>
        </li>
      </ul>
    </section>

    <section id="two" className="wrapper">
      <div className="inner alt">

        {/* Qiita */}
        <section className="spotlight">
          <div className="image">
            <img src={qiitaLogo} alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="https://qiita.com/YuukiMiyoshi" target="_blank">
                Technical Essay / 技術記事
                </a>
            </h3>
            <span>qiita.com [ Japanese ] Since 2014</span>
            <p>
              データ分析やWeb技術についての記事を定期的に投稿しています。<br />
              React / Python / Golang / R / Data Analyze
            </p>
          </div>
        </section>

        {/* Pinterest */}
        <section className="spotlight">
          <div className="image">
            <img src={pinterestLogo} alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="https://www.pinterest.jp/yuukimiyo/boards/" target="_blank">
                Index of Great Photographers / 写真家一覧
              </a>
            </h3>
            <span>Pinterest [ English ] Since 2013</span>
            <p>
              I'v using Pintarest to collect photos of famous photographers.<br />
              My favorite is <i>Annie Leibovitz</i> and <i>Ansel adams</i>.
            </p>
            <p>
              ピンタレストのボード機能で著名写真家の一覧を作成しています。<br />
              お気に入りはアニー・リーボビッツとアンセル・アダムスです。
            </p>
          </div>
        </section>

        {/* Instagram */}
        <section className="spotlight">
          <div className="image">
            <img src={instagramLogo} alt="" />
          </div>
          <div className="content">
            <h3>Photos of Fashon-shop windows / 銀座マネキン</h3>
            <p>
              Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
              elementum elit fusce accumsan dui libero, quis vehicula lectus
              ultricies eu. In convallis amet leo non sapien iaculis efficitur
              consequat lorem ipsum.
            </p>
          </div>
        </section>
        <section className="special">
          <ul className="icons labeled">
            <li>
              <span className="icon fa-camera-retro">
                <span className="label">Ipsum lorem accumsan</span>
              </span>
            </li>
            <li>
              <span className="icon fa-refresh">
                <span className="label">Sed vehicula elementum</span>
              </span>
            </li>
            <li>
              <span className="icon fa-cloud">
                <span className="label">Elit fusce consequat</span>
              </span>
            </li>
            <li>
              <span className="icon fa-code">
                <span className="label">Lorem nullam tempus</span>
              </span>
            </li>
            <li>
              <span className="icon fa-desktop">
                <span className="label">Adipiscing amet sapien</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section id="three" className="wrapper style2 special">
      <header className="major">
        <h2>Elements Page</h2>
        <p>This starter is included with Elements demo for the starter</p>
      </header>
      <ul className="actions special">
        <li>
          <Link to="/Elements" className="button primary icon fa-plus">
            Check Elements
          </Link>
        </li>
      </ul>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
