import React, { useState, useRef } from "react";
import cls from "classnames";
import "./style.scss";
import { DataForExpandable } from "./dataforexpandable";
// import { DataForExpandable } from "./dataforexpandable";

export const Expandable = () => {
  const mainClass = "uavp-boardm";
  //   const [isExpand, setExpand] = useState(false);
  const [isApear, setApear] = useState<number | undefined>(0);
  const supervisor = useRef<HTMLLIElement>(null);
  const handleExpand = (e: any) => {
    if (isApear === 0) {
      setApear(supervisor.current?.scrollHeight);
    } else {
      setApear(0);
    }
  };
  console.log(isApear);

  return (
    <div style={{ width: "800px", margin: "30px" }}>
      <ul className={cls(mainClass)}>
        <li className={cls({ [`${mainClass}-table-thead`]: true })}>
          <ul
            className={cls({
              [`${mainClass}-table__rows`]: true,
            })}
          >
            <li
              className={cls({
                [`${mainClass}-table__cols`]: true,
                [`${mainClass}-table__cols-members`]: true,
              })}
            >
              Члены конкурсной комиссии
            </li>
            <li
              className={cls({
                [`${mainClass}-table__cols`]: true,
                [`${mainClass}-table__cols-members-description`]: true,
              })}
            >
              Описание участника
            </li>
            <li
              className={cls({
                [`${mainClass}-table__cols`]: true,
                [`${mainClass}-table__cols-members-status`]: true,
              })}
            >
              Статус голосования
            </li>
            <li
              className={cls({
                [`${mainClass}-table__cols`]: true,
                [`${mainClass}-table__cols-toggler`]: true,
              })}
            ></li>
          </ul>
        </li>

        <li className={cls({ [`${mainClass}-table-tbody`]: true })}>
          <ul>
            {DataForExpandable.map((data) => (
              <React.Fragment>
                <li
                  ref={supervisor}
                  className={cls({
                    [`${mainClass}-table__rows-supervisor`]: true,
                  })}
                  onClick={!!data.expandData.length ? handleExpand : () => {}}
                >
                  <ul
                    className={cls({
                      [`${mainClass}-table__rows`]: true,
                    })}
                  >
                    {data.row.map((rowitem) => (
                      <li
                        className={cls({
                          [`${mainClass}-table__cols`]: true,
                          [`${mainClass}-table__cols-${rowitem.col.colType}`]:
                            true,
                        })}
                      >
                        <div
                          className={cls({
                            [`${mainClass}-table__cols-${rowitem.col.colType}__icon`]:
                              true,
                          })}
                        >
                          {rowitem.col.icon}
                        </div>
                        <div
                          className={cls({
                            [`${mainClass}-table__cols-${rowitem.col.colType}__text`]:
                              true,
                          })}
                        >
                          <span
                            className={cls({
                              [`${mainClass}-table__cols-${rowitem.col.colType}__text-name`]:
                                true,
                            })}
                          >
                            {rowitem.col.title}
                          </span>
                          <span
                            className={cls({
                              [`${mainClass}-table__cols-${rowitem.col.colType}__text-profession`]:
                                true,
                            })}
                          >
                            {rowitem.col.subTitle}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
                <li
                  className={cls({
                    [`${mainClass}-table__rows-vice`]: true,
                  })}
                  style={{ maxHeight: isApear }}
                >
                  <ul
                    className={cls({
                      [`${mainClass}-table__rows`]: true,
                    })}
                  >
                    {!!data.expandData.length &&
                      data.expandData.map((rowitem) => (
                        <li
                          className={cls({
                            [`${mainClass}-table__cols`]: true,
                            [`${mainClass}-table__cols-${rowitem.col.colType}`]:
                              true,
                          })}
                        >
                          <div
                            className={cls({
                              [`${mainClass}-table__cols-${rowitem.col.colType}__icon`]:
                                true,
                            })}
                          >
                            {rowitem.col.icon}
                          </div>
                          <div
                            className={cls({
                              [`${mainClass}-table__cols-${rowitem.col.colType}__text`]:
                                true,
                            })}
                          >
                            <span
                              className={cls({
                                [`${mainClass}-table__cols-${rowitem.col.colType}__text-name`]:
                                  true,
                              })}
                            >
                              {rowitem.col.title}
                            </span>
                            <span
                              className={cls({
                                [`${mainClass}-table__cols-${rowitem.col.colType}__text-profession`]:
                                  true,
                              })}
                            >
                              {rowitem.col.subTitle}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
