import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCategory } from "../../actions/categoryAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-ui/core";
import MetData from "../layout/MetData";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_CATEGORY_RESET } from "../../constants/categoryConstants";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { loading, error, success } = useSelector((state) => state.newCategory);


  const [name, setName] = useState("");


 
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Category Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_CATEGORY_RESET });
    }
  }, [dispatch,  error, navigate, success]);

  const createCategorySubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
 

  
    dispatch(createCategory(myForm));
  };



  return (
    <Fragment>
      <MetData title="Create Category" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createCategorySubmitHandler}
          >
            <h1>Create Category</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Category Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
           
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create Category
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </Fragment>
  );
};

export default NewCategory;