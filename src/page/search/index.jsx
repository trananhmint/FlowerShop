import React, { useState } from "react";
import "./index.scss";
import { Checkbox, Divider, Select } from "antd";
import ProductCard from "../../component/product-card";

function SearchPage() {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
