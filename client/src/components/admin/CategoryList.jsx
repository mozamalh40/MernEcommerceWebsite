import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteCategory,
  getCategory,
} from "../../actions/categoryAction";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-ui/core";
import MetData from "../layout/MetData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { DELETE_CATEGORY_RESET } from "../../constants/categoryConstants";


const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()


  const { error, categorys } = useSelector((state) => state.categorys);

  const { error:deleteError, isDeleted } = useSelector((state) => state.Category);


  const deleteCategoryHandler=(id)=>{
    dispatch(deleteCategory(id))
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      toast.success("category is deleted successfully");
      navigate('/admin/categorys')
      dispatch({type:DELETE_CATEGORY_RESET})
    }

    dispatch(getCategory());
  }, [dispatch,  error,isDeleted,deleteError,navigate]);

  const columns = [
    { field: "id", headerName: "Category ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 0.5,
      color:"white"
    },
   

    {
        field: "actions",
        flex: 0.3,
        headerName: "Actions",
        minWidth: 150,
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <Fragment>
              <Link to={`/admin/category/${params.getValue(params.id, "id")}`}>
                <EditIcon />
              </Link>
  
              <Button
                onClick={() =>
                  deleteCategoryHandler(params.getValue(params.id, "id"))
                }
              >
                <DeleteIcon />
              </Button>
            </Fragment>
          );
        },
      },
  ];

  const rows = [];

  categorys &&
    categorys.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetData title={`ALL CATEGORY - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL Category</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
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

export default CategoryList;