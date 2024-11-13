import React from "react";

const Addbus = () => {
  return (
    <>
      <div className="container">
        <div className="card bg-danger col-md-4 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div className="card-header bg-white text-danger m-0">
            <h1 className="login-head">Add Bus</h1>
          </div>
          <div className="card-body"></div>

          <form action="">
            <div className="form-group">
              <label className="text-white" for="Name">
                Name :
              </label>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Enter Bus Name"
                id="Name"
              />
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" for="Bus Route From">
                  Bus Route From :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Bus Route From"
                  id="BusRouteFrom"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" for="Bus Route To">
                  Bus Route To :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Bus Route To"
                  id="BusRouteTo"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" for="Date">
                  Date :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Date"
                  id="date"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" for="Time">
                  Time :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Time"
                  id="Time"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" for="Image">
                Image :
              </label>
              <input
                type="file"
                className="form-control form-input border-0"
                id="image"
              />
            </div>

            <button type="submit" className="btn">
              Add Bus
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addbus;
