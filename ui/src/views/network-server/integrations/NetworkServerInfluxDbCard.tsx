import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Col, Card, Popconfirm, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

// For now, we'll use a local state to manage the integration status
// In a real implementation, this would connect to the backend API

interface IProps {
  configured?: boolean;
}

function NetworkServerInfluxDbCard(props: IProps) {
  const [configured, setConfigured] = useState(false);

  const onDelete = () => {
    // Here you would make an API call to delete the integration
    setConfigured(false);
    message.success("InfluxDB integration removed successfully");
  };

  let actions: any[] = [];

  if (!configured) {
    actions = [
      <Link to="/integrations/influxdb/create">
        <PlusOutlined />
      </Link>,
    ];
  } else {
    actions = [
      <Link to="/integrations/influxdb/edit">
        <EditOutlined />
      </Link>,
      <Popconfirm 
        title="Are you sure you want to delete this integration?" 
        onConfirm={onDelete}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined />
      </Popconfirm>,
    ];
  }

  return (
    <Col span={8}>
      <Card
        title="InfluxDB"
        className="integration-card"
        cover={<img alt="InfluxDB" src="/integrations/influxdb.png" style={{ padding: 1 }} />}
        actions={actions}
      >
        <Card.Meta 
          description={
            <div>
              <p>The InfluxDB integration provides centralized time-series database connectivity for the entire platform.</p>
              <p><strong>Platform-wide data docking:</strong> All tenant data can be routed to this central InfluxDB instance.</p>
              {configured && (
                <p style={{ color: '#52c41a', fontWeight: 'bold' }}>✓ Configured and Active</p>
              )}
            </div>
          } 
        />
      </Card>
    </Col>
  );
}

export default NetworkServerInfluxDbCard;