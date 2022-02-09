import useNetworkCallHandler from "./useNetworkCallHandler";
import Loader from "./Loader";

const NetworkHandler = () => {
    const { networkState } = useNetworkCallHandler();

    return networkState.count > 0 ? <Loader />: <></>;
}

export default NetworkHandler;