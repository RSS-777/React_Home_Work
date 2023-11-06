import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { BlockCards } from "./sections/BlockCards";
import { Article } from "./sections2/Article";
import { Education} from './sections3/Education';
import {Service} from './sections4/Service';

export const App = (props) => {
  console.log(props)
  return (
    <>
      <Header />
      <Hero />
      <BlockCards />
      <Article />
      <Education />
      < Service />
    </>
  )
}