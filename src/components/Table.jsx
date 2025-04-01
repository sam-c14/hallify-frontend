import React from "react";
import { useNavigate } from "react-router";
import Checkbox from "../assets/icons/checkbox";
import StatusBadge from "./Status";

const Table = ({
  headers,
  data,
  disableClick,
  route = null,
  checkStatus = false,
}) => {
  const formatHeaderKey = (header) => header.toLowerCase().replace(/\s+/g, "_");
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto bg-white">
      <table className="min-w-[990px] w-full shadow-md border border-gray-200 rounded-lg">
        {/* Table Head */}
        <thead>
          <tr className="bg-white border-b border-gray-200">
            <th className="rounded-ss-lg p-2 py-3 max-w-5 bg-white">
              <Checkbox />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-4 py-2 text-left font-semibold font-inter border-0 ${
                  index === headers.length - 1 ? "rounded-tr-lg" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border border-gray-200">
              {/* First column with SVG Icon */}
              <td
                className={`px-2 py-2 max-w-5 ${
                  rowIndex === data.length - 1 ? "rounded-bl-lg" : ""
                }`}
              >
                <Checkbox />
              </td>

              {/* Dynamic columns based on headers */}
              {headers.map((header, cellIndex) => {
                const key = formatHeaderKey(header); // Convert header to match object key

                return (
                  <td
                    key={cellIndex}
                    className={`px-4 py-2 border-b border-gray-200 font-inter ${
                      rowIndex === data.length - 1 &&
                      cellIndex === headers.length - 1
                        ? "rounded-br-lg"
                        : ""
                    }`}
                  >
                    {typeof row[key] === "object" && row[key] !== null ? (
                      <div className="flex items-center gap-x-2">
                        <img
                          src={row[key].img}
                          alt={row[key].text}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <p className="font-inter">{row[key].text}</p>
                      </div>
                    ) : key === "status" ? (
                      <StatusBadge status={row[key]} />
                    ) : key === "paid" ? (
                      <StatusBadge
                        status={row[key] ? "successful" : "failed"}
                      />
                    ) : (
                      row[key]
                    )}
                  </td>
                );
              })}

              {/* Last column with action button */}
              <td
                className={`px-4 py-2 text-center ${
                  rowIndex === data.length - 1 ? "rounded-br-lg" : ""
                }`}
              >
                <button
                  onClick={() =>
                    !disableClick &&
                    navigate(
                      checkStatus
                        ? row["status"]?.toLowerCase?.() === "pending" &&
                            `/admin/bookings/approve-reject/${row.id}`
                        : route
                        ? `${route}/${row.id}`
                        : `/admin/bookings/${row.id}`
                    )
                  }
                  className="p-2 rounded-full"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#EBE9FE" />
                    <path
                      d="M14.7958 13.9996L11.0833 10.2871L12.1438 9.22656L16.9168 13.9996L12.1438 18.7726L11.0833 17.7121L14.7958 13.9996Z"
                      fill="#7A5AF8"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
