import { Comment, List, Tooltip } from 'antd'
import moment from 'moment'
import React from 'react'
import img1 from '../../assets/images/comment-1.svg'
import img2 from '../../assets/images/comment-2.svg'
import img3 from '../../assets/images/comment-3.svg'

const data = [
  {
    actions: [],
    author: 'John Doe',
    avatar: img1,
    content: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    ),
  },
  {
    actions: [],
    author: 'Eveline Gosok',
    avatar: img3,
    content: (
      <p className="detailsText">
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
  },
  {
    actions: [],
    author: 'Anne Okombo',
    avatar: img2,
    content: (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    ),
  },
]



const ReviewComments = ({handleClick}) => {
  

  React.useEffect(()=>{
    handleClick(data.length)
  },[]);

  return (
    <List
      className="comment-list"
      header={`${data.length} replies`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
          />
        </li>
      )}
    />
  )
}

export default ReviewComments
