import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // background-color: #b41010;
`;

const StyledImg = styled.img`
  margin-left: 35px;
  padding-top: 12px;
  background-color: white;
`;

const NavInputBox = styled.input`
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;

    :focus {outline-color: #b41010};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
    
}
`;
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    this.props.filterPost(this.state.search);
    this.setState({ search: ''});
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSearch = e => {
    e.preventDefault();
    this.props.filterPost(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <ContainerDiv>
        <Link to="/howto/">
          <StyledImg
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzMiIGhlaWdo%0D%0AdD0iNjgiIHZpZXdCb3g9IjAgMCAxNzMgNjgiPjx0ZXh0IGZpbGw9IiM2OTY3NjciIGZvbnQtc2l6%0D%0AZT0iNDkiIGZvbnQtZmFtaWx5PSJBbGZhU2xhYk9uZS1SZWd1bGFyLCBBbGZhIFNsYWIgT25lIj48%0D%0AdHNwYW4geD0iMS41MzQiIHk9IjUxIj5IT1c8L3RzcGFuPjx0c3BhbiB5PSI1MSIgZmlsbD0iI2I0%0D%0AMTAxMCI+MjwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="
            alt="Logo Image"
          />
        </Link>
        <StyledDiv>
          <h3>Username</h3>
          <form onSubmit={this.submitSearch}>
            <NavInputBox
              placeholder="search"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              type="text"
            />
          </form>
        </StyledDiv>
      </ContainerDiv>
    );
  }
}

export default NavBar;
