import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateCategory,
  getCategoryDetails,
} from "../../actions/categoryAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-ui/core";
import MetData from "../layout/MetData";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { UPDATE_CATEGORY_RESET } from "../../constants/categoryConstants";
import { useParams ,useNavigate} from "react-router-dom";

const UpdateCategory = () => {
    const dispatch = useDispatch();
  const params=useParams()

  const navigate=useNavigate()
  const { error, category } = useSelector((state) => state.categoryDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.Category);

  const [name, setName] = useState("");

  const categoryId =params.id;

  useEffect(() => {
    if (category && category._id !== categoryId) {
      dispatch(getCategoryDetails(categoryId));
    } else {
      setName(category.name);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("category Updated Successfully");
      navigate("/admin/categorys");
      dispatch({ type: UPDATE_CATEGORY_RESET });
    }
  }, [
    dispatch,
    error,
    navigate,
    isUpdated,
    categoryId,
    category,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    dispatch(updateCategory(categoryId, myForm));
  };


  return (
    <>
    <MetData title="Update Category" />
    <div className="dashboard">
      <SideBar />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={updateProductSubmitHandler}
        >
          <h1>Update Category</h1>

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
            Update Category
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
  </>
);
};

export default UpdateCategory
