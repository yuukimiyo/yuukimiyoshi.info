import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

// import config from '../../config';
import Footer from '../components/Footer';

// portfolio img
import screen from '../assets/images/portfolio_bw_240x320.jpg';

// spotlight logs
import qiitaLogo from '../assets/images/qiita_400x400.png';
import pinterestLogo from '../assets/images/pinterest_400x400.png';
import instagramLogo from '../assets/images/instagram_400x400.png';
import adobePortfolioLogo from '../assets/images/adobe-portfolio_400x400.png';

// import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>Yuuki Miyoshi / 三好悠樹</h1>
        <p>
          Full time In-House System Developper on Financial company.<br />
          Part time Web Engineer /  Amature Photograper.
        </p>
        <p>
          金融系企業の社内開発者です<br />
          Webサイト構築と写真撮影がライフワークです
        </p>
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

        {/* Pinterest */}
        <section className="spotlight">
          <div className="image">
            <img src={pinterestLogo} alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="https://www.pinterest.jp/yuukimiyo/boards/" target="_blank" rel="noreferrer">
                Boards of Great Photographer / 写真家一覧
              </a>
            </h3>
            <div className="serviceinfo">Pinterest [ English ] Since 2013</div>
            <p>
              I'v been using Pintarest to collect photos of famous photographers.<br />
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
            <h3>
              <a href="https://www.instagram.com/yuuki.miyo/" target="_blank" rel="noreferrer">
                Photos of Fashon-shop windows / 銀座マネキン
              </a>
            </h3>
            <div className="serviceinfo">Instagram [ English ] Since 2017</div>
            <p>
              Mainly, Monochrome Photos of Mannequin<br />in Ginza or Nihonbashi in Japan.
            </p>
            <p>
              銀座や日本橋のマネキンや彫刻などの<br />
              モノクロ写真を中心に投稿しています。
            </p>
          </div>
        </section>

        {/* Adobe portfolio */}
        <section className="spotlight">
          <div className="image">
            <img src={adobePortfolioLogo} alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="https://ymiyo.myportfolio.com/" target="_blank" rel="noreferrer">
                My Photos for Wallpaper
              </a>
            </h3>
            <div className="serviceinfo">Adobe Portfolio [ English ] Since 2020</div>
            <p>
              A part of my photos as wallpaper size.<br />
              Adobe Portfolio is good service for photographer who using Lightroom CC.
            </p>
            <p>
              撮りためた写真の一部を壁紙サイズで掲載しています。<br />
              Adobe Portfolioを利用しています。
            </p>
          </div>
        </section>

        {/* Qiita */}
        <section className="spotlight">
          <div className="image">
            <img src={qiitaLogo} alt="" />
          </div>
          <div className="content">
            <h3>
              <a href="https://qiita.com/YuukiMiyoshi" target="_blank" rel="noreferrer">
                Technical Essay / 技術記事
                </a>
            </h3>
            <div className="serviceinfo">qiita.com [ Japanese ] Since 2014</div>
            <p>
              データ分析やWeb技術についての記事を定期的に投稿しています。<br />
              React / Python / Golang / R / Data Analyze
            </p>
          </div>
        </section>

        <section className="special">
          <p>For better internet life, I'm always looking for cool web services and tools.</p>
        </section>
      </div>
    </section>

    {/*
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
    */}

    <Footer />
  </Layout>
);

export default IndexPage;