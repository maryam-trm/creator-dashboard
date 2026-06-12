import { Sparklines, SparklinesLine } from 'react-sparklines';

interface Props {
  data: number[];
}

export default function SparklineChart({ data }: Props) {
  return (
    <Sparklines data={data} limit={20} width={100} height={20}>
      <SparklinesLine color="#FF3D17" />
    </Sparklines>
  );
}
