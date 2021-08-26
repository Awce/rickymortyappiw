import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  List,
  Card,
  Descriptions,
  Tooltip,
  Tag,
  PageHeader,
  Button,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
  LeftOutlined,
  ProfileOutlined,
  EnvironmentOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import axios from "axios";

const CharsList = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacters(url);
  }, []);

  return (
    <div
      style={{ paddingLeft: "10px", marginTop: "10px", marginRight: "10px" }}
    >
      <PageHeader
        title="Lista de Personajes"
        subTitle={info.count}
        extra={[
          <Button
            key="1"
            type="primary"
            size="large"
            shape="round"
            icon={<PlusCircleOutlined />}
          >
            Agregar Personaje
          </Button>,
          <Button
            key="3"
            type="primary"
            shape="round"
            icon={<LeftOutlined />}
            size="large"
          />,
          <Button
            key="3"
            type="primary"
            shape="round"
            icon={<RightOutlined />}
            size="large"
          />,
        ]}
      />
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={characters}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={item.url} src={item.image} />}
              actions={[
                <Tooltip title="Detalles">
                  <Link to={`/chars/${item.id}`}>
                    <ProfileOutlined key="details" />
                  </Link>
                </Tooltip>,
                <Tooltip title={`Editar a ${item.name}`}>
                  <Link to={`/chars/edit/${item.id}`}>
                    <EditOutlined key="edit" />
                  </Link>
                </Tooltip>,
                <Tooltip title="Borrar">
                  <DeleteOutlined key="delete" />
                </Tooltip>,
              ]}
            >
              <Descriptions title={item.name} layout="vertical">
                <Descriptions.Item label="Estatus">
                  {item.status === "Alive" ? (
                    <Tag color="lime">{item.status}</Tag>
                  ) : null}
                  {item.status === "Dead" ? (
                    <Tag color="red">{item.status}</Tag>
                  ) : null}
                </Descriptions.Item>
                <Descriptions.Item label="Genero">
                  {item.gender}
                </Descriptions.Item>
                <Descriptions.Item label="Especie">
                  {item.species}
                </Descriptions.Item>
                <Descriptions.Item label="Última ubicación" span={2}>
                  <EnvironmentOutlined /> {item.location.name}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CharsList;
