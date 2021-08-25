import CharactersList from "./pages/CharactersList";

import "antd/dist/antd.css";
import { Typography, Layout } from "antd";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout style={{ textAlign: "center" }}>
        <Header style={{ padding: "0 14px", minHeight: 180 }}>
          <Title style={{ padding: "50px", color: "#fff" }}>
            Rick & Morty App
          </Title>
        </Header>
        <Layout>
          <Content>
            <CharactersList />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
