import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Default = () => <Spinner />;

export const CustomSize = () => (
  <div style={
    {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    }
  }>
    <Spinner size={40} />
    <Spinner size={60} />
    <Spinner size={80} />
  </div>
);