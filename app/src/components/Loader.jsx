import React from "react";
import styled from "styled-components";
 
const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader rounded-xl bg-gray-800">
        <div className="wrapper">
          <div className="line-1" />
          <div className="line-2" />
          <div className="line-3" />
          <div className="line-4" />
        </div>
      </div>
    </StyledWrapper>
  );
};
 
const StyledWrapper = styled.div`
  .loader {
  position: relative;
  width: 100%;
  height: 125px;
  margin-bottom: 10px;
  // border: 1px solid #d3d3d3;
  padding: 15px;
  background-color: #1F2937;
  overflow: hidden;
}
 
.loader:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(110deg, rgba(31,41,55,0) 0%, rgba(227, 227, 227, 0) 40%, rgba(227, 227, 227, 0.5) 50%, rgba(227, 227, 227, 0) 60%, rgba(227, 227, 227, 0) 100%);
  animation: gradient-animation_2 1.2s linear infinite;
}
 
.loader .wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
 
.loader .wrapper > div {
  background-color: #cacaca;
}
 
.loader .button {
  display: inline-block;
  height: 32px;
  width: 75px;
}
 
.loader .line-1 {
  position: absolute;
  top: 11px;
  // left: 58px;
  height: 10px;
  width: 100%;
}
 
.loader .line-2 {
  position: absolute;
  top: 34px;
  // left: 58px;
  height: 10px;
  width: 100%;
}
 
.loader .line-3 {
  position: absolute;
  top: 57px;
  // left: 0px;
  height: 10px;
  width: 100%;
}
 
.loader .line-4 {
  position: absolute;
  top: 80px;
  left: 0px;
  height: 10px;
  width: 100%;
}
 
@keyframes gradient-animation_2 {
  0% {
    transform: translateX(-100%);
  }
 
  100% {
    transform: translateX(100%);
  }
}
`;
 
export default Loader;
 