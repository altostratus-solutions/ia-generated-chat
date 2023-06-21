import { LoadingOutlined } from '@ant-design/icons';

const Spinner = ({size}:{size?:number}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <LoadingOutlined size={size}  style={{ fontSize: 24 }} spin />
    </div>
  );
};

export default Spinner;
