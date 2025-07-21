import React from "react";
import { Space, Breadcrumb, Card, Row, Typography } from "antd";
import { PageHeader } from "@ant-design/pro-layout";

import NetworkServerInfluxDbCard from "./integrations/NetworkServerInfluxDbCard";

const { Title, Paragraph } = Typography;

function NetworkServerIntegrations() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <PageHeader
        breadcrumbRender={() => (
          <Breadcrumb>
            <Breadcrumb.Item>
              <span>Network Server</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span>Integrations</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        )}
        title="Network Server Integrations"
      />
      <Card>
        <Paragraph>
          Network Server integrations act as a data docking function for the entire platform, providing centralized
          data integration services for all tenants and applications.
        </Paragraph>
        <Paragraph>
          These integrations operate at the network server level and provide platform-wide data connectivity.
        </Paragraph>
      </Card>

      <Title level={3}>Available Integrations</Title>
      <Row gutter={24}>
        <NetworkServerInfluxDbCard />
      </Row>
    </Space>
  );
}

export default NetworkServerIntegrations;