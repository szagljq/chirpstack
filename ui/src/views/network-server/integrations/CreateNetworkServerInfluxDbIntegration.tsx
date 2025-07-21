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

function CreateNetworkServerInfluxDbIntegration() {
  const navigate = useNavigate();

  const onFinish = (config: InfluxDbConfig) => {
    // Here you would make an API call to create the integration
    console.log("Creating network server InfluxDB integration:", config);
    message.success("InfluxDB integration created successfully");
    navigate("/integrations");
  };

  const initialValues: InfluxDbConfig = {
    version: "INFLUXDB_2",
    endpoint: "",
    organization: "",
    bucket: "",
    token: "",
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
              <span>Add InfluxDB Integration</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        )}
        title="Add Network Server InfluxDB Integration"
      />
      <Card>
        <p>
          Configure a centralized InfluxDB integration for the entire network server. This will act as a data docking
          function, allowing all tenant data to be routed to this central time-series database.
        </p>
        <NetworkServerInfluxDbIntegrationForm initialValues={initialValues} onFinish={onFinish} />
      </Card>
    </Space>
  );
}

export default CreateNetworkServerInfluxDbIntegration;