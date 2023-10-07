import { CloseCircleOutlined, LoadingOutlined } from "@ant-design/icons"
import { Spin, Result, Button } from "antd"
import { MouseEventHandler, ReactNode } from "react";

interface LoaderProps{
  children: ReactNode,
  loading: boolean,
  query: string,
  showFailure: boolean,
  onPageReset: MouseEventHandler<HTMLElement>,
}

export default function PageLayout(props: LoaderProps) {
  const { query, children, loading, showFailure, onPageReset } = props;
  
  return <Spin
    size="large"
    indicator={null}
    spinning={loading}
    delay={50}
    tip={showFailure?<Result
      icon={<CloseCircleOutlined style={{color: "red"}} /> }
      title={"Something went wrong"}
      extra={
        <Button size="large" onClick={onPageReset} type="primary">Retry</Button>
      }
    />:<Result
        icon={<LoadingOutlined />}
        subTitle="We typically take 20 to 30 seconds to generate your image."
        title={<div>
          Generating image for <span style={{color: "#1677ff"}}>{query}</span>
        </div>}
      />}>
    
    {children}
  </Spin>
}