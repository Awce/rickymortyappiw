import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PageHeader } from "antd";
import CharForm from "../forms/CharFormEdit";

import { updateCharacterAction } from "../redux/actions/charsActions";

const CharEdit = (props) => {
  const id = props.match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const getCharactersData = () => dispatch(updateCharacterAction(id));
    getCharactersData();
  });

  return (
    <>
      <PageHeader onBack={goBack} title="Editar Personaje" />
      <div
        style={{ paddingLeft: "10px", marginTop: "10px", marginRight: "10px" }}
      ></div>
      <CharForm />
    </>
  );
};

export default CharEdit;
