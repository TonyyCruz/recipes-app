import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiFilter from '../../services/apiFilter';
import { actionFilteredData } from '../../redux/slices/filterSlice';

import './index.css';

function ListRecipies() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(({ filters: { filteredData } }) => filteredData.meals);

  useEffect(() => {
    if (data?.length !== 0) {
      setLoading(false);
    }

    return setLoading(true);
  }, [data]);

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await apiFilter('meal', 'name', '');
      dispatch(actionFilteredData(apiData));
      const response = await fetch(
        ('https://www.themealdb.com/api/json/v1/1/search.php?s='),
      );
      const responseJson = await response.json();
      return setData(responseJson.meals);
    };
    fetchApi();
  }, []);

  console.log(data);

  return (
    <div className="main-foods-container">
      {(loading) ? null : null}
      <div className="main-foods-content">
        <div className="filters-button">
          <button type="button" className="btn-filter">All</button>
          <button type="button" className="btn-filter">Beef</button>
          <button type="button" className="btn-filter">Lamb</button>
          <button type="button" className="btn-filter">Chicken</button>
          <button type="button" className="btn-filter">Breakfast</button>
          <button type="button" className="btn-filter">Dessert</button>
        </div>
        <ul className="foods-list">
          {data?.map((item, index) => (
            <li key={ index } className="foods-list-item">
              <img
                src={ item.strMealThumb }
                alt="FoodsImage"
              />
              <strong>{ item.strMeal }</strong>
              <div className="foods-info">
                <span>{ item.strCategory }</span>
                <span className="coutry">{ item.strArea }</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListRecipies;
