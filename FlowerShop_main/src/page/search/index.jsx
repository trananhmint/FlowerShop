import React, { useEffect, useState } from "react";
import "./index.scss";
import { Checkbox, Divider, Select } from "antd";
import ProductCard from "../../component/product-card";
import axios from "axios";

function SearchPage() {
  const [flowers, setFlowers] = useState([]);
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = [];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  const fetchFlower = async () => {
    const response = await axios.get(
      "https://66fffcca4da5bd237552c5b6.mockapi.io/flower"
    );

    setFlowers(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchFlower();
  }, []);

  return (
    <div>
      <div className="search">
        <div className="search_option">
          <Dropdown title="Category">
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              Check all
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </Dropdown>
        </div>
        <div className="search_product">
          <div className="search_header">
            <h3>Search result for flower</h3>
            <div>
              <span>Sort by:</span>
              <Select defaultValue="price-asc">
                <Select.Option value="price-asc">
                  Price (Lowest to hightest)
                </Select.Option>
                <Select.Option value="price-desc">
                  Price (Highest to lowest)
                </Select.Option>
                <Select.Option value="rat-asc">
                  Rating (Lowest to hightest)
                </Select.Option>
                <Select.Option value="rat-desc">
                  Rating (Hightest to Lowest)
                </Select.Option>
              </Select>
            </div>
          </div>
          <div className="search_content">
            <div className="product-list">
              {flowers.map(flower => <ProductCard  flower = {flower}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dropdown = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default SearchPage;
