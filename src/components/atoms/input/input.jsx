import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.defProps = {
      name: "noname",
      type: "notype",
      placeholder: "noplaceholder"
    };

    this.propertyValidation();
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
      <input
        type={
          this.props.type !== undefined // Validacion de propiedad
            ? this.props.type
            : this.defProps.type
        }
        name={
          this.props.name !== undefined //Validacion de propiedad
            ? this.props.name
            : this.defProps.name
        }
        placeholder={
          this.props.placeholder !== undefined //Validacion de propiedad
            ? this.props.placeholder
            : this.defProps.placeholder
        }
      />
    );
  }
}
