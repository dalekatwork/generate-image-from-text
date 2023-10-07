import data from "@/data";
import TextToImage from "@/types";
import { Button, Col, Form, FormInstance, Input } from "antd";

interface TextToImageFormProps{
  form: FormInstance,
  onFinish?: (values: TextToImage) => void,
  onReset?: () => void,
}

function TextToImageForm(props: TextToImageFormProps) {
  const { form, onFinish, onReset } = props;

  return <Col sm={24} md={24} lg={12}>
    <Form
    layout="vertical"
    form={form}
    onFinish={onFinish}
    initialValues={{
      text: data['INITIAL_SEARCH']
    }}
    onReset={onReset}
    size="large"
  >
    <Form.Item name="text" label="Enter prompt">
      <Input.TextArea required placeholder="Describe what you would like to generate" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">Generate</Button>
      <Button style={{marginLeft: 16}} htmlType="reset">Reset</Button>
    </Form.Item>
    </Form>
  </Col>
}

export default TextToImageForm;