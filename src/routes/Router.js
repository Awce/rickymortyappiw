import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Typography, Layout } from "antd";

import Home from "../pages/CharsList";
import Details from "../pages/CharDetails";
import Create from "../pages/CharEdit";
import Edit from "../pages/CharEdit";
import NotFound from "../pages/NotFound";
import EmptyPage from "../pages/EmptyPage";

const { Header, Content } = Layout;
const { Title } = Typography;

const AppRouter = () => {
  return (
    <Router>
      <Layout style={{ textAlign: "center" }}>
        <Header style={{ padding: "0 14px", minHeight: 180 }}>
          <Title style={{ padding: "50px", color: "#fff" }}>
            Rick & Morty App
          </Title>
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
              <Route exact path="/chars/:id" component={Details} />
              <Route exact path="/chars/new" component={Create} />
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
