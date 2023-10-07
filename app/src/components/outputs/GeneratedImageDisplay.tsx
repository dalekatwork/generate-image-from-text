import data from "@/data";
import { Skeleton, Image, Col } from "antd";

interface GeneratedImageDisplayProps{
  loading: boolean,
  imageSrc: string
}

function GeneratedImageDisplay(props: GeneratedImageDisplayProps) {
  const { loading, imageSrc } = props;

  return <Col sm={24} md={24} lg={12}>
    {loading ?
  <Skeleton.Image style={{ height: 720, width: 720 }} active={loading} /> :
  <Image
    src={imageSrc}
        fallback={data['FALLBACK_IMAGE']}
        alt="Generating image from prompt"
  />}
  </Col>
}

export default GeneratedImageDisplay;