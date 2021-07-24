import Loader from "react-loader-spinner";

const LoaderCli = () => {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={1000}
      />
    );
}

export default LoaderCli