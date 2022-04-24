import React from "react";
import SignUpModal from "../../components/Auth/SignUpModal";
import SignInModal from "../../components/Auth/SignInModal";
import CongratModule from "../../components/CongratModule.tsx/CongratModule";
import RecoverPassModule from "../../components/RecoverPassModule/RecoverPassModule";

const WelcomePage = () => {
  return (
    <>
      <CongratModule />
      <RecoverPassModule />
      <SignInModal />
      <SignUpModal />
    </>
  );
};

export default WelcomePage;
