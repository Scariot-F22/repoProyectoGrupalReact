import RoutesSections from "./Routes/RoutesSections";
import CustomizeProvider from "./context/Provider";

function App() {
  return (
    <>
    <CustomizeProvider>
      <RoutesSections />
    </CustomizeProvider>
    </>
  );
}

export default App;
