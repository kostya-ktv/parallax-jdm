import firstVid from "./assets/video/mazda.mp4";
import secVid from "./assets/video/vid1.mp4";
import thirdImg from "./assets/images/maxresdefault.jpg";
import fourthImg from "./assets/images/661cb509252f8f5df.jpg";
import useScrollEngine from "./hooks/useScrollEngine";
import Container from "./components/Container/Container";
import Frame from "./components/Frame/Frame";
import { Articles } from "./articles/acticles";
import ContactMe from "./components/ContactMe/ContactMe";
import JDM from "./components/JDM/JDM";
import useIsMobileDevice from "./hooks/useIsMobileDevice";

function App() {
  const { isMobile } = useIsMobileDevice();
  useScrollEngine();

  return isMobile ? (
    <h1>Mobile devices are not supported yet</h1>
  ) : (
    <Container>
      <Frame frameContentType="custom" customContent={<JDM />} fadePreView />

      <Frame
        frameContentType="article"
        title={Articles["The Essence of JDM Style"].title}
        description={Articles["The Essence of JDM Style"].description}
        position="left"
      />

      <Frame frameContentType="video" source={firstVid} fadePreView />

      <Frame
        fadePreView
        frameContentType="article"
        position="right"
        title={Articles["Unleash the Power of JDM Tuning"].title}
        description={Articles["Unleash the Power of JDM Tuning"].description}
      />

      <Frame
        fadePreView
        frameContentType="photo"
        source={fourthImg}
        position="left"
      />

      <Frame
        fadePreView
        frameContentType="article"
        position="left"
        title={Articles["JDM Culture: A Global Phenomenon"].title}
        description={Articles["JDM Culture: A Global Phenomenon"].description}
      />
      <Frame fadePreView frameContentType="photo" source={thirdImg} />

      <Frame
        frameContentType="article"
        position="right"
        title={Articles["Unparalleled Driving Experience"].title}
        description={Articles["Unparalleled Driving Experience"].description}
      />

      <Frame fadePreView frameContentType="video" source={secVid} />
      <Frame frameContentType="custom" customContent={<ContactMe />} />
    </Container>
  );
}

export default App;
