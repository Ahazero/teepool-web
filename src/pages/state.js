import React, { useEffect } from "react";
import { Line } from "@antv/g2plot";
import Layout from "@theme/Layout";
import styles from "./state.module.css";

function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <h6>{title}</h6>
        <h3>{content}</h3>
      </div>
    </div>
  );
}

function Hello() {
  useEffect(() => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const line = new Line("line-chart", {
          data,
          padding: "auto",
          xField: "Date",
          yField: "scales",
          xAxis: {
            // type: 'timeCat',
            tickCount: 5,
          },
          smooth: true,
        });

        line.render();
      });
  }, []);
  return (
    <Layout title="Hello">
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card title="Users" content="5316" />
          <Card title="Pool Size" content="1B" />
          <Card title="Total plots" content="0" />
          <Card title="Plotting currently" content="20 K 32" />
        </div>
        <div id="line-chart" className={styles['line-chart']}></div>
        {/* <div className={styles.table}> */}
          <div className={styles['table-chart']}>
            <h3>Pool Rewards</h3>
            <table>
              <thead>
                <tr>
                  <th>Header hash</th>
                  <th>Height</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className={styles.hash}>
                    e88df547bb21c51f84fa42b3412e57f2
                    <br />
                    14756325b158566af47c4dfbc3cd8431
                  </td>
                  <td className={styles.height}>434287</td>
                  <td className={styles.height}>2XCH</td>
                </tr>
                <tr>
                  <td>
                    e88df547bb21c51f84fa42b3412e57f2
                    <br />
                    14756325b158566af47c4dfbc3cd8431
                  </td>
                  <td>434287</td>
                  <td>2XCH</td>
                </tr>
                <tr>
                  <td>
                    e88df547bb21c51f84fa42b3412e57f2
                    <br />
                    14756325b158566af47c4dfbc3cd8431
                  </td>
                  <td>434287</td>
                  <td>2XCH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      {/* </div> */}
    </Layout>
  );
}

export default Hello;
