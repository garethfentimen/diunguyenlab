import * as React from "react";
import Home from './home';
import Layout from "../components/layout/layout";
import '../styles/font.scss';
import '../styles/responsive.scss';
import scaleFontListeners from '../utils/font';

const IndexPage = () => {
  scaleFontListeners && scaleFontListeners();
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default IndexPage;
