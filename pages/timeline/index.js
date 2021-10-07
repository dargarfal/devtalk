import AppLayout from "../../components/AppLayout";
import styles from "../../styles/Timeline.module.css";

function Timeline({ userName }) {
  return (
    <div className={styles.container}>
      <AppLayout title="Timeline">
        <h1>Timeline: {userName}</h1>
      </AppLayout>
    </div>
  );
}

export default Timeline;

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
      const { userName } = response;
      return { userName };
    });
   
};
