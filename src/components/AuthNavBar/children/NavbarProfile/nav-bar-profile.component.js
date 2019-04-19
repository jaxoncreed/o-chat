import React, { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "@util-components";
import data from "@solid/query-ldflex";

import auth from "solid-auth-client";
import { UpdateContext, withWebId } from "@inrupt/solid-react-components";

export const ImageContainer = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-size: cover;
  overflow: hidden;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const LoadingImage = styled(ImageContainer)`
  background: #cccccc;
  display: block;
`;

let beforeContext = {};

class NavBarProfile extends Component {

  constructor(props) {
    super(props);
    this.state = { image: null, imageLoaded: false };
  }

  getProfileData = async () => {
    try {
      // fetching user card from pod. This makes a request and returns the data
      const user = data.user;
      /*
       * In the background LDFlex is using JSON-LD. Because of this, we need to
       * make an async call. This will return a JSON-LD expanded object and expose the requested value(name).
       * for more information please go to: https://github.com/digitalbazaar/jsonld.js
       */
      const userName = await user.name;
      let userImage = await user.image;
      userImage = userImage ? userImage : await user.vcard_hasPhoto;
      const name = userName ? userName.value : "";
      const image = userImage ? userImage.value : "/img/icon/empty-profile.svg";
      this.setState({
        name,
        image
      });
    } catch (error) {
      this.props.toastManager.add (['Error', error.message], {
        appearance: 'error',
      });
    }
  };

  componentDidMount() {
    if (this.props.webId) {
      this.getProfileData();
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.webId && this.props.webId !== prevProps.webId) {
      this.getProfileData();
    }

    if (this.context && this.context.timestamp !== beforeContext.timestamp) {
      this.getProfileData();

      beforeContext = this.context;
    }
  }

  profileRedirect = () => this.props.history.push("/profile");

  onImageLoaded = async () => this.setState({ imageLoaded: true });
  logOut = async () => {
    try {
      await auth.logout();
      // Remove localStorage
      localStorage.removeItem("solid-auth-client");
      // Redirect to login page
      this.props.history.push("/login");
    } catch (error) {
      // console.log(`Error: ${error}`);
    }
  };
  render() {
    const { imageLoaded, image } = this.state;

    console.log(image)

    const profileOpts = [
      {
        label: 'Log Out',
        onClick: this.logOut
      }
    ];

    return image ? (
      <Dropdown actions={profileOpts} className="nav-bar--profile" hover={true}>
        <ImageContainer show={imageLoaded}>
          <Img
            show={imageLoaded}
            src={image}
            alt="profile"
            onLoad={this.onImageLoaded}
          />
        </ImageContainer>
        {!imageLoaded && <LoadingImage show={true} />}
      </Dropdown>
    ) : (
      <div />
    );
  }
}
NavBarProfile.contextType = UpdateContext;

export default withWebId(NavBarProfile);
