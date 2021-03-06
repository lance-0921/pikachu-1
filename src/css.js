const string = `
    .skin * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  .skin {
    position: relative;
    background-color: #ffe600;
    height: 100vh;
  }
  
  .nose {
    border-style: solid;
    border-width: 11px;
    border-color: black transparent transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 30vh;
    margin-left: -11px;
    position: absolute;
  }
  
  .yuan-wrapper {
    width: 22px;
    height: 8px;
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: -19px;
    overflow: hidden;
  }
  .yuan {
    width: 22px;
    height: 11px;
    position: absolute;
    left: 50%;
    top: 2px;
    margin-left: -11px;
    border-radius: 50%;
    background-color: black;
  }
  
  .eye-left {
    width: 50px;
    height: 50px;
    border: 3px solid black;
    background: #2e2e2e;
    left: 50%;
    top: 30vh;
    margin-top: -50px;
    margin-left: -25px;
    border-radius: 50%;
    position: absolute;
    transform: translateX(-120px);
  }
  
  .eye-right {
    width: 50px;
    height: 50px;
    border: 3px solid black;
    background: #2e2e2e;
    left: 50%;
    top: 30vh;
    margin-top: -50px;
    margin-left: -25px;
    border-radius: 50%;
    position: absolute;
    transform: translateX(120px);
  }
  
  .eye-right::before {
    content: "";
    display: block;
    border: 2px solid black;
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: white;
    left: 6px;
  }
  .eye-left::before {
    content: "";
    display: block;
    border: 2px solid black;
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    background: white;
    left: 6px;
  }
  
  .lip-left {
    border: 3px solid black;
    border-color: transparent transparent black black;
    width: 80px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -84px;
    top: 30vh;
    border-radius: 0 120px/80px;
    transform: rotate(-25deg);
    z-index: 3;
    background-color: #ffe600;
  }
  
  .lip-right {
    border: 3px solid black;
    border-color: transparent black black transparent;
    width: 80px;
    height: 50px;
    position: absolute;
    right: 50%;
    margin-right: -82px;
    top: 30vh;
    border-radius: 120px/80px 0;
    transform: rotate(25deg);
    z-index: 3;
    background-color: #ffe600;
  }
  
  .lip-left::before {
    content: "";
    display: block;
    width: 6px;
    height: 30px;
    position: absolute;
    top: -4px;
    margin-left: -4px;
    background-color: #ffe600;
  }
  
  .lip-right::after {
    content: "";
    display: block;
    width: 6px;
    height: 30px;
    position: absolute;
    top: -4px;
    margin-left: 72px;
    background-color: #ffe600;
  }
  .mouth-down {
    border: 3px solid black;
    width: 120px;
    height: 500px;
    position: absolute;
    top: -330px;
    border-radius: 60%;
    background-color: #9b000a;
    overflow: hidden;
  }
  
  .mouth-down-wrapper {
    width: 120px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: 30vh;
    margin-top: 30px;
    overflow: hidden;
  }
  
  .mouth-down::before {
    content: "";
    display: block;
    width: 200px;
    height: 300px;
    position: absolute;
    top: 360px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
    background-color: #ff485f;
  }
  
  .cheek-left {
    border: 3px solid black;
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    margin-left: -35px;
    transform: translateX(180px);
    top: 30vh;
    margin-top: 30px;
    background-color: #ff0000;
  }
  .cheek-right {
    border: 3px solid black;
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    margin-left: -35px;
    transform: translateX(-180px);
    top: 30vh;
    margin-top: 30px;
    background-color: #ff0000;
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    30% {
      transform: rotate(15deg);
    }
    66% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  
`
export default string;