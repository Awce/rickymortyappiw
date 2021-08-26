import { useHistory } from "react-router-dom";
import { Card, PageHeader, Row, Col } from "antd";
import EmptyImage from "../components/EmptyImage";
import CharForm from "../forms/CharForm";

const CharEdit = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <PageHeader onBack={goBack} title="Editar Personaje" />
      <div
        style={{ paddingLeft: "10px", marginTop: "10px", marginRight: "10px" }}
      ></div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <EmptyImage />
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <CharForm />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CharEdit;
