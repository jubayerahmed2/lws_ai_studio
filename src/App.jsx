import Layout from "./Layout";
import NavigationProvider from "./providers/NavigationProvider";

function App() {
  return (
    <NavigationProvider>
      <Layout />
    </NavigationProvider>
  );
}

export default App;
