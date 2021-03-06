import { Col, Row, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import TotalRevenueChart from './TotalRevenueChart';
import TotalPercentageChart from './TotalPercentageChart';
import RegisteredRenterList from './RegisteredRenterList';
import RegisteredOwnerList from './RegisteredOwnerList';
import BookingList from './BookingList';
import ReviewList from './ReviewList';

const Dashboard = () => {
  return (
    <PageContainer
      fixedHeader
      header={{
        title: 'Dashboard',
      }}
    >
      <Space direction="vertical" className="w-full">
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={14}>
            <TotalRevenueChart />
          </Col>
          <Col xs={24} lg={10}>
            <TotalPercentageChart />
          </Col>
        </Row>
        <RegisteredRenterList />
        <RegisteredOwnerList />
        <BookingList />
        <ReviewList />
      </Space>
    </PageContainer>
  );
};
export default Dashboard;
