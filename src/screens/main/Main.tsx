import HobbyCategoryList from "../../components/hobbyList/HobbyCategoryList";
import Logo from "../../components/logo/Logo";
import NavigationBar from "../../components/navigationBar/navigationBar";
import InfoSection from "./InfoSection";
import SearchSection from "./SearchSection";

export default function Main() {
  return (
    <>
      <Logo />
      <SearchSection />
      <InfoSection />
      <HobbyCategoryList />
      <NavigationBar />
    </>
  );
}
