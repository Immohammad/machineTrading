import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";
import loadingGif from "../assets/loading.gif";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faAngleRight,
  faAngleLeft,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

function Fundamental() {
  const [reports, setReports] = useState();
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // console.log(reports)
    axios
      .get(`${BASE_URL}/api/cp/getpaginated?pageIndex=${currentPage}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.stocks[0].fundamental.length);
        setTotalCount(response.data.totalCount);
        setReports(response.data.stocks);
        setLoading(false);
      })
      .catch((error) => {
        toast("مشکلی پیش آمد");
        console.log(error);
      });
  }, [currentPage]);

  function goToPreviousPage() {
    setLoading(true);
    setCurrentPage(currentPage - 1);
  }
  function goToNextPage() {
    setLoading(true);
    setCurrentPage(currentPage + 1);
  }
  function goToFirstPage() {
    setLoading(true);
    setCurrentPage(1);
  }
  function goToLastPage() {
    setLoading(true);
    setCurrentPage(totalCount);
  }

  return (
    <div>
      <div className="tablesContainer">
        <table className="boardTable" id="fundamentalTable">
          <thead>
            <tr>
              <th>تاریخ گزارش</th>
              <th>سهم</th>
              <th>نوع گزارش</th>
              <th>اهمیت خبر</th>
              <th>مقدار در گزارش قبلی</th>
              <th>مقدار در گزارش فعلی</th>
            </tr>
          </thead>
          <tbody>
            {reports && !loading ? (
              reports.map((dates, index) => (
                <React.Fragment key={index}>
                  {dates.fundamental.map((item, indexReport) => (
                    <tr key={indexReport}>
                      {indexReport == 0 ? (
                        <td
                          style={{
                            fontWeight: "bold",
                          }}
                          rowspan={dates.fundamental.length}
                        >
                          {dates.date.slice(0, 4)}/{dates.date.slice(4, 6)}/
                          {dates.date.slice(6, 8)}
                        </td>
                      ) : null}
                      <td style={{ fontWeight: "bold" }}>{dates.symbol}</td>

                      <td>{item.title}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faBell}
                          style={{ color: `${item.importance}` }}
                        />
                      </td>
                      <td>{item.value_prev}</td>
                      <td style={{ color: `${item.color}` }}>{item.value}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <img src={loadingGif} className="loadingGif" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div id="fundamentalButtons">
        <button onClick={goToFirstPage} disabled={currentPage == 1}>
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
        <button onClick={goToPreviousPage} disabled={currentPage == 1}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        {Array.from({ length: 7 }).map((_, index) => {
          const page = currentPage - 3 + index;
          if (page < 1 || page > totalCount) return null;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{ color: currentPage === page ? "blue" : "white" }}
            >
              {page}
            </button>
          );
        })}

        <button onClick={goToNextPage} disabled={currentPage == totalCount}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={goToLastPage} disabled={currentPage == totalCount}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
      </div>
    </div>
  );
}

export default Fundamental;
