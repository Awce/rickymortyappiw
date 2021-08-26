import { Image } from "antd";

const EmptyImage = () => {
  return (
    <>
      <Image
        src="error"
        fallback="https://firebasestorage.googleapis.com/v0/b/rickandmortyaddchar.appspot.com/o/pickrick.png?alt=media&token=1bf85f4e-db51-4a85-9751-7d2af5bb9858"
      />
    </>
  );
};

export default EmptyImage;
