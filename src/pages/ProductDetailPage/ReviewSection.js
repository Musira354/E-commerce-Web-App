import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DescriptionCard from './DescriptionCard'
import ReviewComments from './ReviewComments'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star'
import descriptionCardImg1 from '../../assets/images/description-card-img-1.svg'
import descriptionCardImg2 from '../../assets/images/description-card-img-2.svg'
import descriptionCardImg3 from '../../assets/images/description-card-img-3.svg'
import { Rate } from 'antd'
import { Progress } from 'antd'
import LinearProgress from '@mui/material/LinearProgress'

const detailsData = [
  {
    img: descriptionCardImg1,
    tag: '',
    heading: 'Details and product description',
    text: 'White Summer Vibes T-shirt in the uiKit lin with a colorful print.',
  },
  {
    img: descriptionCardImg2,
    tag: '',
    heading: 'Materials(s) and care',
    text: 'Body:98% COTTON-2% ELASTANE',
  },
]

const ratingData = [10, 20, 30, 40, 50]

const ReviewSection = () => {
  const [showDescription, setShowDescription] = React.useState(false)
  const [showReview, setShowReview] = React.useState(false)
  const buttonRef = React.useRef(null)

  React.useEffect(() => {
    if (buttonRef.current) buttonRef.current.click()
  }, [buttonRef])

  return (
    <div class="ReviewSection">
      <Container>
        <div className="wrap">
          <div className="buttonWrap">
            <button
              className="ReviewCardBtn mr-3"
              onClick={() => {
                setShowDescription((prev) => true)
                setShowReview((prev) => false)
              }}
            >
              DESCRIPTION
            </button>

            <button
              className="ReviewCardBtn"
              ref={buttonRef}
              onClick={() => {
                setShowReview((prev) => true)
                setShowDescription((prev) => false)
              }}
            >
              REVIEWS (2){' '}
            </button>
          </div>

          <div className="ReviewMain">
            {showReview && <Review>Review</Review>}

            {showDescription && <Description>Description</Description>}
          </div>
        </div>
      </Container>
    </div>
  )
}

const Description = () => (
  <div id="descriptions" className="description">
    <div className="descriptionSection1">
      <DescriptionCard
        image={detailsData[0].img}
        heading={detailsData[0].heading}
        text={detailsData[0].text}
      />
    </div>
    <div className="descriptionSection2">
      <DescriptionCard
        image={detailsData[1].img}
        heading={detailsData[1].heading}
        text={detailsData[1].text}
      />
      <div className="descriptionSection2ImgWrap">
        <img className="descriptionSection2Img" src={descriptionCardImg3}></img>
      </div>
    </div>
  </div>
)

/*Review Section*/

const Review = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = (num) => {
    // 👇️ take parameter passed from Child component
    setCount((current) => current + num)
  }
  return (
    <div id="descriptions" className="description">
      <Row>
        <Col span={12}>
          <AddOpinion />
        </Col>
        <Col span={12}>
          <ReviewComments handleClick={handleClick} />
        </Col>
      </Row>
    </div>
  )
}

const AddOpinion = () => {
  const [value, setValue] = React.useState(4.5)
  const [progress, setProgress] = React.useState(0)
  const [hover, setHover] = React.useState(-1)

  return (
    <div class="AddOpinionSection">
      <div className="ratingCard">
        <div className="ratingBox">
          <div className="avgRating">
            <div className="heading">4.5</div>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover)
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              size="small"
            />
            81 opinions
          </div>
          <div className="ratingCalculator">
            <div className="reviewStartAlign">
              <div className='flexRowCard'>
                
                <StarIcon
                  style={{ 'background-color': 'FBB03B' }}
                  fontSize="inherit"
                />
                1
              </div>
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            </div>

            <div style={{ width: 172 }}>
              {ratingData.map((product) => (
                <LinearProgress
                  variant="determinate"
                  value={product}
                  sx={{
                    'background-color': '#DBDBDB',
                    height: '.12rem',
                    'margin-bottom': '1.2rem',
                    'margin-top': '.4rem',
                    '& .MuiLinearProgress-bar': {
                      'background-color': '#FBB03B',
                    },
                    '& .MuiLinearProgress-root': {
                      height: '1px',
                    },
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="AddOpinionBtn">
          <a href="#" class="collectionCardBtn yellow">
            add opinion
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
