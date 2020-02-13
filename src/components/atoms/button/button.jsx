import React from "react";

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);

    this.defProps = {
      text: "notext"
    };
  }

  propertyValidation() {
    /**
     * Validacion de propiedades
     */
    this.propsKeys = Object.keys(this.defProps);
    this.propsKeys.forEach(key => {
      if (this.props[key] === undefined)
        console.log("No existe la propiedad: " + key);
    });
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.text !== undefined ? this.props.text : this.defProps.text}
      </button>
    );
  }
}
