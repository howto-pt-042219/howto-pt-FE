import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      liked: false,
      reviews: []
    };
  }

  render() {
    return (
      <ContainerDiv>
        <h1>How To Example</h1>
        <p>
          Velit qui ipsum deserunt aliqua exercitation. Dolor eu proident
          excepteur culpa. Dolore irure enim magna id ex magna. Dolor excepteur
          ex eu officia consectetur. Ea Lorem quis ipsum pariatur proident
          laboris minim cillum laboris id ea. Elit dolor anim aute ex. Velit
          sint enim ipsum excepteur officia aliquip qui minim esse nisi. Velit
          mollit elit est voluptate aliqua. Occaecat ut eu cupidatat aliquip est
          laborum laboris ut aliquip do velit eu dolor est. Ea sint irure
          cupidatat duis nostrud ea dolor laboris cillum quis eiusmod cupidatat.
          Ut labore in sint in in deserunt labore adipisicing non nisi dolor
          adipisicing magna. Aliquip aliqua Lorem proident voluptate ut pariatur
          reprehenderit. Pariatur velit consequat deserunt nisi incididunt. Duis
          eiusmod anim cupidatat minim veniam dolore minim tempor nisi
          adipisicing dolore velit amet id. Velit sint incididunt esse anim.
          Incididunt eiusmod minim reprehenderit ullamco. Elit pariatur Lorem
          consequat officia ipsum id ex dolor. In non quis ipsum proident cillum
          sit non do qui elit adipisicing qui anim. Et duis in dolore occaecat
          sint id in dolor Lorem esse ut ut magna ullamco.
        </p>
      </ContainerDiv>
    );
  }
}

export default HowTo;
