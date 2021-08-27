import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, PageHeader, Row, Col, Descriptions, Tag, Image } from "antd";

import axios from "axios";

const { Meta } = Card;

const CharDetails = (props) => {
  const [character, setCharacter] = useState([]);

  const history = useHistory();
  const id = props.match.params.id;
  const api = "https://rickandmortyapi.com/api/character";
  const url = `${api}/${id}`;

  const getCharacter = (url) => {
    axios
      .get(url)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacter(url);
  }, [url]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <PageHeader
        onBack={goBack}
        title={character.name}
        subTitle={character.gender}
      />
      <div
        style={{ paddingLeft: "10px", marginTop: "10px", marginRight: "10px" }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card cover={<Image alt={character.url} src={character.image} />}>
              <Meta title={character.name} description={character.url} />
            </Card>
          </Col>
          <Col span={16}>
            <Card>
              <Descriptions layout="vertical">
                <Descriptions.Item label="Estatus">
                  {character.status === "Alive" ? (
                    <Tag color="lime">{character.status}</Tag>
                  ) : null}
                  {character.status === "Dead" ? (
                    <Tag color="red">{character.status}</Tag>
                  ) : null}
                </Descriptions.Item>
                <Descriptions.Item label="Genero">
                  {character.gender}
                </Descriptions.Item>
                <Descriptions.Item label="Especie">
                  {character.species}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CharDetails;
