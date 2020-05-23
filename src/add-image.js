import face_1 from "./face_1.png";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = "face_1";
  img.width = 100;
  img.src = face_1;
  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
