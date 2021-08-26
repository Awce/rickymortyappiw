import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Logo from "../components/Logo";

import Home from "../pages/CharsList";
import Details from "../pages/CharDetails";
import Create from "../pages/CharNew";
import Edit from "../pages/CharEdit";
import NotFound from "../pages/NotFound";
import EmptyPage from "../pages/EmptyPage";

const { Header, Content } = Layout;

const AppRouter = () => {
  return (
    <Router>
      <Layout style={{ textAlign: "center" }}>
        <Header style={{ padding: "0 14px", minHeight: 100 }}>
          <Logo />
        </Header>
        <Layout>
          <Content
            style={{
              marginTop: "1px",
              padding: 0,
              background: "#fff",
            }}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/chars/new" component={Create} />
              <Route exact path="/chars/:id" component={Details} />
              <Route exact path="/chars/edit/:id" component={Edit} />
              <Route component={NotFound} />
              <Route component={EmptyPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default AppRouter;
