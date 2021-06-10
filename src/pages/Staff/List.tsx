import { Link } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';

const List = () => {
  return (
    <PageContainer
      fixedHeader
      header={{
        title: 'Staff',
        avatar: {
          src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png',
        },
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
      <Link to="/staffs/123"> Go to Detail</Link>
      <div> Staffs </div>
    </PageContainer>
  );
};
export default List;
