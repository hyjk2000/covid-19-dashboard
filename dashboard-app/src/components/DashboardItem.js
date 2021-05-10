import { Icon } from "@ant-design/compatible";
import { useMutation } from "@apollo/react-hooks";
import { Button, Card, DatePicker, Dropdown, Menu, Modal, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { DELETE_DASHBOARD_ITEM } from "../graphql/mutations";
import { GET_DASHBOARD_ITEMS } from "../graphql/queries";

const DashboardItemDropdown = ({ itemId }) => {
  const [removeDashboardItem] = useMutation(DELETE_DASHBOARD_ITEM, {
    refetchQueries: [
      {
        query: GET_DASHBOARD_ITEMS,
      },
    ],
  });
  const dashboardItemDropdownMenu = (
    <Menu>
      <Menu.Item>
        <Link to={`/explore?itemId=${itemId}`}>Edit</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() =>
          Modal.confirm({
            title: "Are you sure you want to delete this item?",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",

            onOk() {
              removeDashboardItem({
                variables: {
                  id: itemId,
                },
              });
            },
          })
        }
      >
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={dashboardItemDropdownMenu}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <Button shape="circle" icon={<Icon type="menu" />} />
    </Dropdown>
  );
};

const DashboardItem = ({
  itemId,
  children,
  title,
  defaultDateRange,
  onUpdateDateRange,
}) => (
  <Card
    title={title}
    style={{
      height: "100%",
      width: "100%",
    }}
    extra={
      <Space>
        <DatePicker.RangePicker
          defaultValue={defaultDateRange}
          onChange={(dates, dateStrings) => onUpdateDateRange(dateStrings)}
        />
        <DashboardItemDropdown itemId={itemId} />
      </Space>
    }
  >
    {children}
  </Card>
);

export default DashboardItem;
