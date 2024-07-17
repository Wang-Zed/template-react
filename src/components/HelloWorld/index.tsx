interface IProps {
  msg: string;
}

export default (props: IProps) => {
  return <h1>{props.msg}</h1>;
};
