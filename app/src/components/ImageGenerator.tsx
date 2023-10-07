import generateImage from "@/api";
import TextToImage from "@/types";
import { Button, Col, Form, Input, Row } from "antd"
import Image from 'next/image'
import { useState } from "react";


export default function ImageGenerator() {
  const [form] = Form.useForm();
  const [imageSrc, setImageSrc] = useState('');

  const onFinish = async (values: TextToImage) => {
    const response = await generateImage(values);
    setImageSrc('data:image/jpeg;base64,' + response.data)
  };

  return <Row>
    <Col  sm={24} md={24} lg={12}>
    <Form
      layout="vertical"
        form={form}
        onFinish={onFinish}
    >
      <Form.Item name="text" label="Enter text">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
    </Col>
    <Col sm={24} md={24} lg={12}>
      <Image
        alt="show image"
        fill
        src={imageSrc}
        loading="lazy"
      /></Col>
  </Row>
}