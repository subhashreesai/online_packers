import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import './DataDisplay.css';

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://test.api.boxigo.in/sample-data/");
        if (componentMounted) {
          const result = await response.json();
          setData(result.Customer_Estimate_Flow);
          setLoading(false);
          console.log(result.Customer_Estimate_Flow);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Spinner animation="border" />
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <h5 className="text-start mb-4">My Moves</h5>
      {data.map((item, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <div className="row">
              <div className="col-4">
                <h5>From</h5>
                <p>{item.moving_from}</p>
              </div>
              <div className="col-2 text-center">
                <i style={{color: '#ee553b'}} className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
              <div className="col-4">
                <h5>To</h5>
                <p>{item.moving_to}</p>
              </div>
              <div className="col-2">
                <h5>Requests</h5>
                <p style={{color: '#ee553b'}}>{item.estimate_id}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-1">
                <i style={{color: '#ee553b'}} className="fa fa-home" aria-hidden="true"></i>
                <span>{item.property_size}</span>
              </div>
              <div className="col-1">
                <i style={{color: '#ee553b'}} className="fa fa-list-ol" aria-hidden="true"></i>
                <span>{item.total_items}</span>
              </div>
             
              <div className="col-1">
                <i style={{color: '#ee553b'}} className="fa fa-square" aria-hidden="true"></i>
                <span>{item.distance}</span>
              </div>
              <div className="col-3">
              <i style={{color: '#ee553b'}} className="fa fa-calendar-check-o" aria-hidden="true"></i>
              <span>{item.moving_on}</span>
            </div>
            <div className="col-2">
            <i style={{color: '#ee553b'}} class="fa fa-check-square-o" aria-hidden="true"></i>
              <span>as flexible</span>
            </div>
            <div className="col-4">
            <button className='button1'>View more details</button>
              <button className='button'>Arriving</button>
            </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DataDisplay;