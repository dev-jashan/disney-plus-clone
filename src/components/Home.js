// react imports
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import db from "../firebase";
import {setMovie} from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/UserSlice";

// component imports

import Recommends from "./Recommends";
import Viewers from "./Viewers";

// styling imports
import ImgSlider from "./ImgSlider";
import styled from "styled-components";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";



const Home = (props) => {

 

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      console.log("hello");
      db.collection("movies").onSnapshot((snapshot) => {
        // eslint-disable-next-line array-callback-return
        snapshot.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
            
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              // eslint-disable-next-line react-hooks/exhaustive-deps
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              // eslint-disable-next-line react-hooks/exhaustive-deps
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              // eslint-disable-next-line react-hooks/exhaustive-deps
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
              default:
                break;
          }
        });
  
        dispatch(
          setMovie({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    }, [userName]);
  
  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
};

// styled component section

//  styling the container

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
