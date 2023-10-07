import { LoadingOutlined } from "@ant-design/icons"
import { Spin, Result } from "antd"
import { ReactNode } from "react";

interface LoaderProps{
  children: ReactNode,
  loading: boolean,
  query: string
}

export default function PageLayout(props: LoaderProps) {
  const { query, children, loading } = props;
  
  return <Spin
    size="large"
    indicator={null}
    spinning={loading}
    delay={50}
    tip={
      <Result
        icon={<LoadingOutlined />}
        title={`Generating image for ${query}`}
      />}>
    
    {children}
  </Spin>
}