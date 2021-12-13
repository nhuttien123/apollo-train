import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListProduct } from "../../../redux/actions/product";
import ListFeatures from "./list-feature";
const Features = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3">
        {(data || []).length > 0 ? (
          (data || [])
            .sort(function (a, b) {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .splice(0, 6)
            .map((e) => <ListFeatures data={e} />)
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div className=" text-sm-end text-white  rounded">
        <div className="p-lg-5 text-end my-5 bannerfeatures bg-info">
          <div className="row">
            <div className="col-sm-6">
              <div className="me-5">
                <img
                  src="http://www.pngmart.com/files/4/Asus-Laptop-PNG-HD.png"
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <h1 className="mt-4 fw-bolder text-white text-start">
                Bringing Smart{" "}
                <p>
                  to Safety{" "}
                  <Link
                    to="/san-pham"
                    className="text-info bg-white fw-bolder btn custom-btn "
                  >
                    <span className="p-3">200.000vnđ</span>
                  </Link>
                </p>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
