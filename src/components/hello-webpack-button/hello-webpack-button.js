import "./hello-webpack.scss";

class HelloWebpackButton {
  buttonClass = "hello-webpack-button";
  render() {
    const button = document.createElement("button");
    button.innerText = "Hello Webpack";
    button.classList.add(this.buttonClass);
    const body = document.querySelector("body");

    button.onclick = () => {
      const p = document.createElement("p");
      p.innerText = "Hello Webpack";
      p.classList.add("hello-webpack-p");
      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default HelloWebpackButton;
