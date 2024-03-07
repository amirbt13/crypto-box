interface Props {
  h: string;
  color: string;
}

const Divider: React.FC<Props> = ({ h, color }) => {
  return <div className={` h-[${h}] bg-[${color}]`}></div>;
};

export default Divider;
