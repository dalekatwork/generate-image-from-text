import generateImage from "@/api"
import TextToImage from "@/types"
import { Form, Row } from "antd"
import { useState } from "react"
import data from "@/data";
import PageLayout from "./PageLayout";
import TextToImageForm from "./forms/TextToImageForm";
import GeneratedImageDisplay from "./outputs/GeneratedImageDisplay";

export default function GeneratorComponent() {
  const [form] = Form.useForm()
  const [imageSrc, setImageSrc] = useState(data['INITIAL_IMAGE'])
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(data['INITIAL_SEARCH']);
  const [isApiFailed, setIsApiFailed] = useState(false);

  const onFinish = async (values: TextToImage) => {
    setLoading(true)
    setQuery(values.text)
    const response = await generateImage(values)
    if (response?.status != 200) {
      setIsApiFailed(true)
      return
    }
    setImageSrc('data:image/jpeg;base64,' + response?.data)
    setLoading(false)
  };

  const onPageReset = () => {
    form.setFieldValue('text', '')
    setImageSrc('')
    setIsApiFailed(false)
    setLoading(false)
  }

  return <PageLayout onPageReset={onPageReset} query={query} loading={loading} showFailure={isApiFailed}>
    <Row justify="space-around" align="middle" gutter={32}>
      <TextToImageForm form={form} onFinish={onFinish} onReset={onPageReset} />
      <GeneratedImageDisplay loading={loading} imageSrc={imageSrc} />
    </Row>
  </PageLayout>
}