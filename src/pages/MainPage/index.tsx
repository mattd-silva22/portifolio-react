import { AboutMe } from "../../components/AboutMe";
import { MainBanner } from "../../components/MainBanner";
import { MainFooter } from "../../components/MainFooter";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import { ProjectsTable } from "../../components/ProjectsTable";


export function MainPage() {


    return (
      <>
      <MainHeader></MainHeader>
      <MainBanner></MainBanner>
      <ProjectsTable/>
      <AboutMe></AboutMe>
      <MainFooter></MainFooter>
      </>
    )
}