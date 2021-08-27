import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form, Input, Row, Col, Image, message } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

import { updateCharacterEditAction } from "../redux/actions/charsActions";

import axios from "axios";

const CharFormEdit = () => {
  const [character, setCharacter] = useState([]);
  const [updateChar, setUpdateChar] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const idcharacter = useSelector((state) => state.characters.characterupdate);

  const api = "https://rickandmortyapi.com/api/character";
  const url = `${api}/${idcharacter}`;
  const load = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);

  const getCharacter = (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCharacter(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacter(url);
  }, [url]);

  const errorMessage = () => {
    message.error("Error al registrar en la Base de Datos.");
  };

  const updateCharacter = (character) => {
    dispatch(updateCharacterEditAction(character));
  };

  const onChange = (e) => {
    setUpdateChar({
      ...updateChar,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = ({ name, status, species, gender }) => {
    updateCharacter({ name, status, species, gender });
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const goBack = () => {
    history.goBack();
  };

  const { name, status, species, gender } = updateChar;

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            cover={<Image alt={character.name} src={character.image} />}
          ></Card>
        </Col>
        <Col span={16}>
          <Card>
            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Nombre"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "El Nombre es obligatorio y no puede ir vacio.",
                  },
                ]}
              >
                <Input
                  onChange={onChange}
                  value={name}
                  size="large"
                  placeholder={character.name}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Estatus" name="status">
                <Input
                  onChange={onChange}
                  value={status}
                  size="large"
                  placeholder={character.status}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Especie" name="species">
                <Input
                  onChange={onChange}
                  value={species}
                  size="large"
                  placeholder={character.species}
                  allowClear
                />
              </Form.Item>
              <Form.Item label="Genero" name="gender">
                <Input
                  onChange={onChange}
                  value={gender}
                  size="large"
                  placeholder={character.gender}
                  allowClear
                />
              </Form.Item>
              <div
                style={{
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  borderTop: "1px solid #e9e9e9",
                  padding: "10px 16px",
                  background: "#fff",
                  textAlign: "right",
                }}
              >
                <Button
                  onClick={goBack}
                  size="large"
                  shape="round"
                  style={{ marginRight: 8 }}
                >
                  Cancelar
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                  shape="round"
                  icon={<CheckCircleOutlined />}
                >
                  Actualizar Personaje
                </Button>
              </div>
            </Form>
            {load ? <Loading /> : null}
            {error ? errorMessage() : null}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CharFormEdit;
