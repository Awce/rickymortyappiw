import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
  return (
    <div
      style={{
        margin: "20px 0",
        marginBottom: "20px",
        padding: "30px 50px",
        textAlign: "center",
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loading;
