import * as React from "react";
import Home from './home';
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import '../styles/font.scss';
import '../styles/responsive.scss';
import scaleFontListeners, { recalc } from '../utils/font';

const IndexPage = () => {
  scaleFontListeners && scaleFontListeners();
  React.useEffect(() => recalc(), []);
  return (
    <Layout>
      <Seo title="Home" />
      <Home />
    </Layout>
  );
}

export default IndexPage;
