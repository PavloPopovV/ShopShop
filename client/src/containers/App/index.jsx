import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "../../app/services/userApi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from './App.module.css'

function App() {
  const {data, isLoading} = useGetUserQuery()
  if(isLoading) return <div>Loading...</div>

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Sidebar/>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
