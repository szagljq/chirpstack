import { useNavigate, Link } from "react-router-dom";
import { Space, Breadcrumb, Card, message } from "antd";
import { PageHeader } from "@ant-design/pro-layout";

import NetworkServerInfluxDbIntegrationForm from "./NetworkServerInfluxDbIntegrationForm";

interface InfluxDbConfig {
  version: string;
  endpoint: string;
  username?: string;
  password?: string;
  db?: string;
  retentionPolicyName?: string;
  precision?: string;
  organization?: string;
  bucket?: string;
  token?: string;
}

function EditNetworkServerInfluxDbIntegration() {
  const navigate = useNavigate();

  const onFinish = (config: InfluxDbConfig) => {
    // Here you would make an API call to update the integration
    console.log("Updating network server InfluxDB integration:", config);
    message.success("InfluxDB integration updated successfully");
    navigate("/integrations");
  };

  // In a real implementation, this would be loaded from the backend
  const currentConfig: InfluxDbConfig = {
    version: "INFLUXDB_2",
    endpoint: "http://localhost:8086/api/v2/write",
    organization: "myorg",
    bucket: "mybucket",
    token: "****",
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <PageHeader
        breadcrumbRender={() => (
          <Breadcrumb>
            <Breadcrumb.Item>
              <span>Network Server</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span>
                <Link to="/integrations">Integrations</Link>
              </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span>Edit InfluxDB Integration</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        )}
        title="Edit Network Server InfluxDB Integration"
      />
      <Card>
        <p>
          Modify the centralized InfluxDB integration configuration. Changes will affect the entire network server's
          data docking functionality.
        </p>
        <NetworkServerInfluxDbIntegrationForm initialValues={currentConfig} onFinish={onFinish} />
      </Card>
    </Space>
  );
}

export default EditNetworkServerInfluxDbIntegration;