import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  List,
  Card,
  Descriptions,
  Tooltip,
  Tag,
  PageHeader,
  Button,
  Modal,
  message,
  notification,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
  LeftOutlined,
  ProfileOutlined,
  SmileOutlined,
  FrownOutlined,
  PlusCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Loading from "../components/Loading";

import { getAllCharactersAction } from "../redux/actions/charsActions";

import axios from "axios";

const { confirm } = Modal;

const CharsList = () => {
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const dispatch = useDispatch();
  const history = useHistory();

  const getCharactersInfo = (url) => {
    axios
      .get(url)
      .then((response) => {
        setInfo(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharactersInfo(url);
  }, []);

  useEffect(() => {
    const getCharacters = () => dispatch(getAllCharactersAction());
    getCharacters();
  }, [dispatch]);

  const onRegisterButton = () => {
    history.push("/chars/new");
  };

  const characters = useSelector((state) => state.characters.characters);
  const load = useSelector((state) => state.characters.load);
  const error = useSelector((state) => state.characters.error);

  const errorMessage = () => {
    message.error("Hubo un error, no hay datos para mostrar.");
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Estas seguro de eliminar este personaje?",
      icon: <ExclamationCircleOutlined />,
      content: "Ten en cuenta que no podrás recuperar el personaje",
      okText: "Si, eliminar",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        notification.open({
          message: "Personaje Eliminado",
          description: "Se elimino el personaje exitosamente",
          icon: <SmileOutlined style={{ color: "#52c41a" }} />,
        });
      },
      onCancel() {
        console.log("Cancelar");
        notification.open({
          message: "Uff!!",
          description: "Por poco y lo eliminas.",
          icon: <FrownOutlined style={{ color: "#108ee9" }} />,
        });
      },
    });
  };

  return (
    <div
      style={{ paddingLeft: "10px", marginTop: "10px", marginRight: "10px" }}
    >
      <PageHeader
        title="Lista de Personajes"
        subTitle={info.count}
        extra={[
          <Button
            key={1}
            type="primary"
            size="large"
            shape="round"
            onClick={onRegisterButton}
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
      {load ? <Loading /> : null}
      {error ? errorMessage() : null}
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={characters}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={item.url} src={item.image} />}
              actions={[
                <Tooltip title={`Detalles de ${item.name}`}>
                  <ProfileOutlined
                    key="details"
                    onClick={() => history.push(`/chars/${item.id}`)}
                  />
                </Tooltip>,
                <Tooltip title={`Editar a ${item.name}`}>
                  <EditOutlined
                    key="edit"
                    onClick={() => history.push(`/chars/edit/${item.id}`)}
                  />
                </Tooltip>,
                <Tooltip title={`Eliminar a ${item.name}`}>
                  <DeleteOutlined
                    key="delete"
                    onClick={() => showDeleteConfirm()}
                  />
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
              </Descriptions>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CharsList;
