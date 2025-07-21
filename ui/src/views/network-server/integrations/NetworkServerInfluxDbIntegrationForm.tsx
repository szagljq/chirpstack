import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

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

interface IProps {
  initialValues: InfluxDbConfig;
  onFinish: (config: InfluxDbConfig) => void;
}

function NetworkServerInfluxDbIntegrationForm(props: IProps) {
  const [selectedVersion, setSelectedVersion] = useState<string>("INFLUXDB_2");

  useEffect(() => {
    setSelectedVersion(props.initialValues.version || "INFLUXDB_2");
  }, [props]);

  const onFinish = (values: any) => {
    props.onFinish(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onVersionChange = (version: string) => {
    setSelectedVersion(version);
  };

  return (
    <Form
      layout="vertical"
      initialValues={props.initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="InfluxDB version"
        name="version"
        rules={[{ required: true, message: "Please select an InfluxDB version!" }]}
      >
        <Select onChange={onVersionChange}>
          <Select.Option value="INFLUXDB_1">InfluxDB v1</Select.Option>
          <Select.Option value="INFLUXDB_2">InfluxDB v2</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        label="API endpoint (write)"
        name="endpoint"
        rules={[{ required: true, message: "Please enter an endpoint!" }]}
      >
        <Input placeholder="http://localhost:8086/api/v2/write" />
      </Form.Item>

      {selectedVersion === "INFLUXDB_1" && (
        <>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item 
            label="Database name" 
            name="db" 
            rules={[{ required: true, message: "Please enter database name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Retention policy name"
            name="retentionPolicyName"
            tooltip="Sets the target retention policy for the write. InfluxDB writes to the DEFAULT retention policy if you do not specify a retention policy."
          >
            <Input />
          </Form.Item>
          <Form.Item label="Select timestamp precision" name="precision">
            <Select>
              <Select.Option value="NS">Nanosecond</Select.Option>
              <Select.Option value="U">Microsecond</Select.Option>
              <Select.Option value="MS">Millisecond</Select.Option>
              <Select.Option value="S">Second</Select.Option>
              <Select.Option value="M">Minute</Select.Option>
              <Select.Option value="H">Hour</Select.Option>
            </Select>
          </Form.Item>
        </>
      )}

      {selectedVersion === "INFLUXDB_2" && (
        <>
          <Form.Item 
            label="Organization" 
            name="organization"
            rules={[{ required: true, message: "Please enter organization!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Bucket" 
            name="bucket"
            rules={[{ required: true, message: "Please enter bucket!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Token" 
            name="token"
            rules={[{ required: true, message: "Please enter token!" }]}
          >
            <Input.Password />
          </Form.Item>
        </>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Configuration
        </Button>
      </Form.Item>
    </Form>
  );
}

export default NetworkServerInfluxDbIntegrationForm;