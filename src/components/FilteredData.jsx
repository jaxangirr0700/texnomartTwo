import { Button, Checkbox, Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { Children, useEffect, useState } from "react";

function FilteredData({ filter }) {
  //   console.log(filter);
  const [qisqartma, setQisqartma] = useState(false);
  return (
    <div className="">
      <Collapse
        style={{ width: 400 }}
        items={filter.map((item) => {
          return {
            key: item.id,
            label: (
              <span>
                <span className=" font-bold">{item.name} </span>
                <span className=" text-gray-600">{item.count}</span>
              </span>
            ),
            children: (
              <>
                <div>
                  {qisqartma === false && item.values.length > 10
                    ? item.values.slice(0, 10).map((i) => {
                        return (
                          <div>
                            <div key={i.id}>
                              <div className="pt-4 pb-2 hover:gray-blue-700 ">
                                <Checkbox>{i.value}</Checkbox>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : item.values.map((i) => {
                        return (
                          <div>
                            <div key={i.id}>
                              <div className="pt-4 pb-2 hover:text-gray-700 ">
                                <Checkbox>{i.value}</Checkbox>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  {item.values.length > 10 ? (
                    <Button
                      onClick={() => {
                        setQisqartma(!qisqartma);
                      }}
                    >
                      {qisqartma ? <UpOutlined /> : <DownOutlined />}
                      {qisqartma ? " Close" : "Show more"}
                    </Button>
                  ) : null}
                </div>
              </>
            ),
          };
        })}
      />
    </div>
  );
}

export default FilteredData;
