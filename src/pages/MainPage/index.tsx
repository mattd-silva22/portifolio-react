import { AboutMe } from "../../components/AboutMe";
import { MainBanner } from "../../components/MainBanner";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import { ProjectsTable } from "../../components/ProjectsTable";
import { Container, Content } from "./styles";

export function MainPage() {


    return (
      <>
      <MainHeader></MainHeader>
      <MainBanner></MainBanner>
      <ProjectsTable/>
      <AboutMe></AboutMe>
      </>
    )
}