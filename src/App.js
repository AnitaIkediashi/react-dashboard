import MainBar from "./components/MainBar";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="bg-white h-screen grid xl:grid-cols-[256px_1fr] lg:grid-cols-[150px_1fr] overflow-y-scroll grid-cols-1 xl:overflow-hidden hide-scroll">
      <SideBar />
      <MainBar />
    </div>
  );
}

export default App;
