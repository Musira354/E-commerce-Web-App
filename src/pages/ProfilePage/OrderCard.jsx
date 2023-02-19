import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, List, Space, Col, Row } from 'antd'
import React from 'react'
const data = Array.from({
  length: 12,
}).map((_, i) => ({
  title: `Order 451534${i}`,
  avatar: 'http://34.253.31.99/site/upload/product_image/1653662471-0.jpg',
  description: 'VIEW ORDER >',
}))

const IconText = ({ icon, text }) => (
  <Space>
    {text}
    {React.createElement(icon)}
  </Space>
)

const OrderCard = () => (
  <Row gutter={[16,16]} className="select-address-section">
    <Col span={24} className=" dashboard-font-size">
      Orders{' '}
      <div className="profile-small-font profile-grey-font"> {data.length}{' '}ITEMS</div>
    </Col>
    <Col span={24}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <Row justify="space-between">
              <Col span={5}>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </Col>
              <Col>
                <img src={item.avatar} className="cart-product-image" />
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Col>
  </Row>
)

export default OrderCard
