import { PageContainer } from '@ant-design/pro-layout';
import { useHistory } from 'react-router-dom';
import { StatisticCard } from '@ant-design/pro-card';
import { EllipsisOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { LazyImage } from '#/shared/components/common';

const Detail = () => {
  const history = useHistory();
  const onBack = () => {
    history.push('/staffs');
  };

  return (
    <PageContainer
      fixedHeader
      header={{
        title: 'Staff',
        avatar: {
          src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png',
        },
        onBack: onBack,
        breadcrumb: {
          routes: [
            {
              path: '/staffs',
              breadcrumbName: 'Staff',
            },
          ],
        },
      }}
      tabList={[
        {
          tab: 'Detail',
          key: '1',
        },
        {
          tab: 'Detail 1',
          key: '2',
        },
        {
          tab: 'Detail 2',
          key: '3',
          disabled: true,
        },
      ]}
    >
      <StatisticCard
        title=" Market Trend "
        tip=" Market description "
        className="max-w-md"
        extra={<EllipsisOutlined />}
        chart={
          <LazyImage
            src="https://gw.alipayobjects.com/zos/alicdn/a-LN9RTYq/zhuzhuangtu.svg"
            alt=" Histogram "
            className="w-full h-64"
          />
        }
      />
      <Row gutter={[30, 30]}>
        {[...Array(50).keys()].map(i => (
          <Col key={i} span={12}>
            <LazyImage
              className="w-full h-64"
              src={`https://picsum.photos/1000/1000?random=${i}`}
              alt={`Random image ${i}`}
            />
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};
export default Detail;
