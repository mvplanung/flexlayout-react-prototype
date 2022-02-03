import styles from "./panel.module.css";

const { container } = styles;

const Panel = ({ node }) => {
  return (
    <div className={container}>
      <button>{node.getName()}</button>
    </div>
  );
};

export default Panel;
