import {React,useEffect,useState} from 'react'
import {Spring} from 'react-spring/renderprops'
import {ProjectContainer,ProjectWrapper,ProjectRow,Column1,Column2,
TextWrapper,TopLine,ProjectH2,ImgWrap,Img,Description,BtnWrap,SlideshowButton} from './ProjectElements'

const Project = ({lightBg,imgStart,topLine,lightText,frontEnd,backEnd,description,img,imgLinks,alt,githubLink})=>{
  
  const [imgIndex,setImgIndex]=useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  const decreaseIndex = ()=>{
    if (imgIndex>0)
      setImgIndex(imgIndex-1)
  }
  const increaseIndex = () =>{
    if (imgIndex<img.length-1)
      setImgIndex(imgIndex+1)
  }
  const openImg = () =>{
    window.open(imgLinks[imgIndex])
  }

  return (
    <ProjectContainer lightBg={lightBg}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText} topLine={topLine} githubLink={githubLink}></TopLine>
                <ProjectH2 lightText={lightText ? 1:0}>{"Front-End: "+frontEnd}</ProjectH2>
                <ProjectH2 lightText={lightText ? 1:0}>{"Back-End: "+backEnd}</ProjectH2>
                <Description darkText={!(lightText)} >{description}</Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <BtnWrap>
              <SlideshowButton onClick={decreaseIndex}>&#60;</SlideshowButton>
              </BtnWrap>
              <ImgWrap>
                <Spring
                  from = {{opacity:0}}
                  to ={{opacity:1}}
                  >{props=>(
                  <Img src={img[imgIndex]} alt={alt} id="img" style={props} onClick={openImg}>
                  </Img>)}
                </Spring>
              </ImgWrap>
              <BtnWrap>
              <SlideshowButton onClick={increaseIndex}>&#62;</SlideshowButton>
              </BtnWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
  )
}

export default Project