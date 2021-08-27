import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Loading from "../components/Loading";

import { createNewCharAction } from "../redux/actions/charsActions";

const CharForm = () => {
  const [newChar, setNewChar] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const load = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);

  const errorMessage = () => {
    message.error("Error al registrar en la Base de Datos.");
  };

  const addChar = (character) => {
    dispatch(createNewCharAction(character));
  };

  const onChange = (e) => {
    setNewChar({
      ...newChar,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = ({ name, status, species, gender }) => {
    addChar({ name, status, species, gender });
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

  const { name, status, species, gender } = newChar;

  return (
    <>
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
            placeholder="Nombre del Personaje"
            allowClear
          />
        </Form.Item>
        <Form.Item label="Estatus" name="status">
          <Input
            onChange={onChange}
            value={status}
            size="large"
            placeholder="Estatus"
            allowClear
          />
        </Form.Item>
        <Form.Item label="Especie" name="species">
          <Input
            onChange={onChange}
            value={species}
            size="large"
            placeholder="Tipo de Especie"
            allowClear
          />
        </Form.Item>
        <Form.Item label="Genero" name="gender">
          <Input
            onChange={onChange}
            value={gender}
            size="large"
            placeholder="Genero"
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
            icon={<UserAddOutlined />}
          >
            Agregar Personaje
          </Button>
        </div>
      </Form>
      {load ? <Loading /> : null}
      {error ? errorMessage() : null}
    </>
  );
};

export default CharForm;
